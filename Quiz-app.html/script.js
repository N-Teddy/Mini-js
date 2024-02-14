const questions = [
    {
        question: "which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "How old is Blossom?",
        answers: [
            {text: "10", correct: false},
            {text: "20", correct: false},
            {text: "12", correct: true},
            {text: "18", correct: false},
        ]
    },
    {
        question: "how many continents are three?",
        answers: [
            {text: "7", correct: true},
            {text: "10", correct: false},
            {text: "8", correct: false},
            {text: "3", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions(); 
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionsIndex];
    let QuestionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ", " + currentQuestion.question;
}