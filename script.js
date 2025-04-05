 const quizData = [
    { question: "Яка столиця Франції?", options: ["Берлін", "Мадрид", "Париж", "Рим"], answer: "Париж" },
    { question: "Скільки континентів на Землі?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Який елемент має символ 'O'?", options: ["Кисень", "Золото", "Азот", "Вуглець"], answer: "Кисень" },
    { question: "Скільки планет у Сонячній системі?", options: ["7", "8", "9", "10"], answer: "8" },
    { question: "Який газ необхідний для дихання?", options: ["Гелій", "Азот", "Кисень", "Вуглець"], answer: "Кисень" },
    { question: "Який найбільший океан?", options: ["Атлантичний", "Індійський", "Тихий", "Північний Льодовитий"], answer: "Тихий" },
    { question: "Скільки годин у добі?", options: ["12", "24", "36", "48"], answer: "24" },
    { question: "Який метал рідкий за кімнатної температури?", options: ["Залізо", "Ртуть", "Свинець", "Алюміній"], answer: "Ртуть" },
    { question: "Скільки літер в українському алфавіті?", options: ["30", "32", "33", "31"], answer: "33" },
    { question: "Яка планета найближча до Сонця?", options: ["Земля", "Марс", "Меркурій", "Венера"], answer: "Меркурій" },
     { question: "Який рідкий камінь у світі?", options: ["Смарагд", "Рубан", " Кіавтуїт", "Мармур"], answer: " Кіавтуїт" }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 30;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    timer = 30;
    document.getElementById("timer").innerText = timer;
    timerInterval = setInterval(() => {
        timer--;
        document.getElementById("timer").innerText = timer;
        if (timer === 0) {
            nextQuestion();
        }
    }, 1000);
}
 
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("feedback").innerText = "";
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    document.getElementById("next-btn").disabled = true;
    
    currentQuestion.options.forEach(option => {
        const btn = document.createElement("div");
        btn.classList.add("option");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option, btn);
        optionsContainer.appendChild(btn);
    });
    startTimer();
}
 

function checkAnswer(selectedOption, btn) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        btn.style.backgroundColor = "#8BC34A";
        document.getElementById("feedback").innerText = "Правильно!";
        score += 10;
    } else {
        btn.style.backgroundColor = "#F44336";
        document.getElementById("feedback").innerText = "Неправильно!";
    }
    document.getElementById("score").innerText = score;
    clearInterval(timerInterval);
    document.getElementById("next-btn").disabled = false;
}

 window.onload = function () {
    document.getElementById("next-btn").addEventListener("click", nextQuestion);
    loadQuestion();
};


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        alert("Квіз завершено! Ваш результат: " + score + " балів.");
        location.reload();
    }
}

 
