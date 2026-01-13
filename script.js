const questions = [
    { q: "日本で一番高い山は？", a: ["阿蘇山", "富士山", "北岳", "槍ヶ岳"], correct: 1 },
    { q: "太陽系で一番大きい惑星は？", a: ["地球", "火星", "木星", "土星"], correct: 2 },
    // ... ここに10問分データを追加
    { q: "最後の問題：GitHub Pagesは無料？", a: ["はい", "いいえ", "条件付き", "不明"], correct: 0 }
];

let currentIdx = 0;
let score = 0;

function showQuestion() {
    const qData = questions[currentIdx];
    document.getElementById("question-number").innerText = `第 ${currentIdx + 1} 問 / ${questions.length}`;
    document.getElementById("question-text").innerText = qData.q;
    const btnContainer = document.getElementById("answer-buttons");
    btnContainer.innerHTML = "";

    qData.a.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.innerText = ans;
        btn.onclick = () => checkAnswer(i);
        btnContainer.appendChild(btn);
    });
}

function checkAnswer(idx) {
    if (idx === questions[currentIdx].correct) score++;
    currentIdx++;
    if (currentIdx < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("score-text").innerText = `${questions.length}問中 ${score}問正解でした！`;
}

showQuestion();
