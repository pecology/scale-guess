const FFT_SIZE = 16384 / 2; // 2の累乗

(document.querySelector(".start-button") as HTMLButtonElement).onclick = () => {
    (document.querySelector(".start-scene") as HTMLDivElement).style.display = "none";
    (document.querySelector(".game-scene") as HTMLDivElement).style.display = "";

    const audioCtx = new window.AudioContext();
    const analyser = audioCtx.createAnalyser();
    analyser.minDecibels = -100;
    analyser.maxDecibels = -10;
    analyser.smoothingTimeConstant = 0.5;

    // ユーザーに音声入力の許可を求める
    const constraints = { audio: true }
    navigator.mediaDevices.getUserMedia(constraints)
        .then(
            function (stream) {
                const source = audioCtx.createMediaStreamSource(stream);
                source.connect(analyser);

                start();
            })
        .catch(function (err) { console.log('The following gUM error occured: ' + err); })

    function start() {
        analyser.fftSize = FFT_SIZE;
        const bufferLengthAlt = analyser.frequencyBinCount;
        const dataArrayAlt = new Uint8Array(bufferLengthAlt);

        let correctAnswerCount = 0;

        // フレーム単位の処理
        const processFrame = async () => {
            // fftの結果をdataArrayAltに書き込んでもらう
            analyser.getByteFrequencyData(dataArrayAlt);

            const answer = estimateScale(dataArrayAlt);

            if (answer.avg <= 30) {
                (document.querySelector(".answer > span") as HTMLSpanElement).textContent = "";
                requestAnimationFrame(processFrame);
                return;
            }

            (document.querySelector(".answer > span") as HTMLSpanElement).textContent = answer.scale;

            const question = (document.querySelector(".question > span") as HTMLSpanElement).textContent as string;
            if (answer.scale === question) {
                correctAnswerCount++;
            }

            if (correctAnswerCount >= 30) {
                // 正解の〇を出す
                (document.querySelector(".circle") as HTMLDivElement).style.display = "";

                await new Promise((res) => setTimeout(res, 300));

                // 次の問題
                const currentQuestion = (document.querySelector(".question > span") as HTMLSpanElement).textContent;
                let nextQuestion = "";
                // 前回とは異なる問題にする
                do {
                    const zeroTo7 = Math.floor(Math.random() * 8);
                    nextQuestion = scaleAndHz[zeroTo7].scale;
                } while (nextQuestion == currentQuestion)
                (document.querySelector(".question > span") as HTMLSpanElement).textContent = nextQuestion;

                // 正解の〇を消す
                correctAnswerCount = 0;
                (document.querySelector(".circle") as HTMLDivElement).style.display = "none";
            }

            requestAnimationFrame(processFrame);
        };
        processFrame();


    }

}


const indexToHz: number[] = [];
for (let i = 0; i < FFT_SIZE; i++) {
    indexToHz.push(i * 44100 / FFT_SIZE);
}

const scaleAndHz = [
    { scale: 'C', hz: 261.626 },
    { scale: 'D', hz: 293.665 },
    { scale: 'E', hz: 329.628 },
    { scale: 'F', hz: 349.228 },
    { scale: 'G', hz: 391.995 },
    { scale: 'A', hz: 440.000 },
    { scale: 'B', hz: 493.883 },
    { scale: 'C', hz: 523.251 },
];

// fftの結果から音程を推定する
const estimateScale = (dataArrayAlt: Uint8Array) => {
    // ピークを抽出する
    const peaks = [];
    for (let i = 3; i < dataArrayAlt.length - 3; i++) {
        if (dataArrayAlt[i - 3] < dataArrayAlt[i - 2] &&
            dataArrayAlt[i - 2] < dataArrayAlt[i - 1] &&
            dataArrayAlt[i - 1] < dataArrayAlt[i] &&
            dataArrayAlt[i] > dataArrayAlt[i + 1] &&
            dataArrayAlt[i + 1] > dataArrayAlt[i + 2] &&
            dataArrayAlt[i + 2] > dataArrayAlt[i + 3]) {
            peaks.push({ hz: indexToHz[i], value: dataArrayAlt[i] });
        }
    }

    // 各ピークの周波数を2で割ったり掛けたりして260~525にする。
    const normalizedPeaks = peaks.map(peak => {
        while (peak.hz <= 260) {
            peak.hz *= 2;
        }

        while (peak.hz >= 525) {
            peak.hz /= 2;
        }

        return { hz: Math.floor(peak.hz * 100) / 100, value: peak.value };
    });

    // ピークからスケール(A~Gのどれか)と大きさを抽出する
    const peakScales = normalizedPeaks.map(peak => {
        const abs = scaleAndHz.map((v) => Math.abs(v.hz - peak.hz));
        const minIndex = abs.reduce((minIndex, curr, currI, array) => {
            if (array[minIndex] >= array[currI]) {
                return currI;
            }
            else {
                return minIndex;
            }
        }, 0);
        return { scale: scaleAndHz[minIndex].scale, value: peak.value };
    });

    // 各ピークから音程を推定する
    // 各音程の大きさの和が一番高いやつを返す
    const candidate: { [key: string]: { scale: string, count: number, avg: number } } = {};
    scaleAndHz.forEach((a) => {
        candidate[a.scale] = { scale: a.scale, count: 0, avg: 0 };
    });
    for (const { scale, value } of peakScales) {
        candidate[scale].count++;
        candidate[scale].avg = (candidate[scale].avg * (candidate[scale].count - 1) + value) / candidate[scale].count;
    }
    const answer = Object.values(candidate).reduce((prev, curr) => {
        if (prev.avg * prev.count < curr.avg * curr.count) {
            return curr;
        }
        else {
            return prev;
        }
    });
    return answer;
}