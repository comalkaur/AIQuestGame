const questions = [
    {
        question: "In which year did the Third Battle of Panipat take place?",
        answer: [
            { text: "1739", correct: false },
            { text: "1761", correct: true },
            { text: "1764", correct: false },
            { text: "1746", correct: false },
        ]
    },
        {
            question: "Where did the Battle of Karnal occur?",
            answer:[
                {text: "Panipat", correct: false},
                {text: "Karnal, Punjab ", correct: true },
                {text: " Madras", correct: false },
                {text: "Cuddalore", correct: false },
            ]
        },
        {
            question: "The Battle of Buxar was part of which war?",
            answer:[
                {text: "First Carnatic War", correct: false},
                {text: "Anglo-Maratha War", correct: false },
                {text: "Bengal War", correct: true },
                {text: "War of the Austrian Succession", correct: false },
            ]
        },
        {
            question: "Who was the victor in the Battle of Panipat?",
            answer:[
                {text: "Marathas", correct: false},
                {text: "Mughals", correct: false },
                {text: "Ahmad Shah Abdali", correct: true },
                {text: "East India Company", correct: false },
            ]
        },
        {
            question: "Which battle led to Nader Shah's invasion of India?",
            answer:[
                {text: "Battle of Kohima", correct: false},
                {text: "Battle of Buxar", correct: true },
                {text: "Battle of Adyar", correct: false },
                {text: "Battle of Karnal ", correct: false },
            ]
        },
        {
            question: "Which battle took place in Kohima during World War II?",
            answer: [
                { text: "Battle of Buxar", correct: false },
                { text: "Battle of Kohima", correct: true },
                { text: "Battle of Karnal", correct: false },
                { text: "Battle of Adyar", correct: false }
            ]
        },
        {
            question: "What was the outcome of the Siege of Pondicherry in 1748?",
            answer: [
                { text: "The British were defeated", correct: false },
                { text: "The French retained control", correct: false },
                { text: "The city was completely destroyed", correct: false },
                { text: "It led to the Treaty of Aix-la-Chapelle", correct: true }
            ]
        },
        {
            question: "Who captured Fort St. George in the Battle of Madras?",
            answer: [
                { text: "British", correct: false },
                { text: "French", correct: true },
                { text: "Marathas", correct: false },
                { text: "Nawabs of Carnatic", correct: false }
            ]
        },
        {
            question: "Where was the Battle of Buxar fought?",
            answer: [
                { text: "Bengal", correct: false },
                { text: "Bihar", correct: true },
                { text: "Karnataka", correct: false },
                { text: "Punjab", correct: false }
            ]
        },
        {
            question: "The Battle of Adyar took place in which present-day city?",
            answer: [
                { text: "Chennai (Madras)", correct: true },
                { text: "Mumbai", correct: false },
                { text: "Kolkata", correct: false },
                { text: "Hyderabad", correct: false }
            ]
        },
        {
            question: "Which battle took place in 1748 in Cuddalore?",
            answer: [
                { text: "Siege of Cuddalore",correct: true },
                { text: "Battle of Buxar", correct: false },
                { text: "Battle of Panipat", correct: false },
                { text: "Battle of Karnal", correct: false }
            ]
        },
        {
            question: "The Battle of Kohima was fought in which present-day Indian state?",
            answer: [
                { text: "Assam", correct: false },
                { text: "Nagaland", correct: true },
                { text: "Mizoram", correct: false },
                { text: "Manipur", correct: false }
            ]
        },
        {
            question: "Which war was the Battle of Madras a part of?",
            answer: [
                { text: "War of the Austrian Succession / First Carnatic War", correct: true },
                { text: "Anglo-Mysore War", correct: false },
                { text: "Sepoy Rebellion", correct: false },
                { text: "Anglo-Maratha War", correct: false }
            ]
        },
        {
            question: "The Siege of Cuddalore was part of which larger conflict?",
            answer: [
                { text: "Bengal War", correct: false },
                { text: "First Carnatic War", correct: true },
                { text: "Anglo-French War", correct: false },
                { text: "Third Anglo-Mysore War", correct: false }
            ]
        },
        {
            question: "What was the main reason behind the Third Battle of Panipat?",
            answer: [
                { text: "Mughal Expansion", correct: false },
                { text: "Maratha Expansion", correct: true },
                { text: "British Trade Interests", correct: false },
                { text: "Mysore Kingdom", correct: false }
            ]
        },
        {
            question: "Who fought against the British in the Battle of Buxar====?",
            answer: [
                { text: "Mir Jafar", correct: false },
                { text: "Siraj ud-Daulah", correct: false },
                { text: "Mughal Emperor Shah Alam II, Nawab of Awadh & Mir Qasim", correct: true },
                { text: "Nader Shah", correct: false }
            ]
        },
        {
            question: "Who led the Afghan forces in the Third Battle of Panipat?",
            answer: [
                { text: "Ahmad Shah Abdali", correct: true },
                { text: "Nader Shah", correct: false },
                { text: "Tipu Sultan", correct: false },
                { text: "Siraj ud-Daulah", correct: false }
            ]
        },
        {
            question: "Who was the Mughal Emperor during the Battle of Karnal?",
            answer: [
                { text: "Akbar", correct: false },
                { text: "Aurangzeb", correct: false },
                { text: "Muhammad Shah", correct: true },
                { text: "Shah Jahan", correct: false }
            ]
        },
        {
            question: "Which French commander led the Battle of Madras?",
            answer: [
                { text: "Joseph François Dupleix", correct: true },
                { text: "Marquis de Bussy", correct: false },
                { text: "Robert Clive", correct: false },
                { text: "Haider Ali", correct: false }
            ]
        },
        {
            question: "Who was the British commander in the Battle of Buxar?",
            answer: [
                { text: "Warren Hastings", correct: false },
                { text: "Robert Clive", correct: false },
                { text: "Hector Munro", correct: true },
                { text: "Arthur Wellesley", correct: false }
            ]
        }
  
];

const questionElement = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons"); // Corrected ID
const nextButton = document.getElementById("next-button"); // Corrected ID
const progressBarFill = document.querySelector(".progress-fill"); //added progress bar selection.

let currentQuestionIndex = 0;
let score = 0;
let progress = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    progress = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Corrected property

    currentQuestion.answer.forEach(answer => { // Corrected method
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("option-btn"); // use the same class as in css
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        score++;
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        progress = (currentQuestionIndex/questions.length)*100;
        progressBarFill.style.width = progress + "%";
    } else {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        answerButtons.style.display = "none";
        nextButton.style.display = "none";
        progressBarFill.style.width = "100%";
    }
}

nextButton.addEventListener("click", handleNextButton);

startQuiz();
