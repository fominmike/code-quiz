var startQuiz = document.querySelector('.startGame')
var mainInfo = document.querySelector('.questionInfo')
var timeCounter = document.querySelector('.timeLeft')
var hiddenMessage = document.querySelector('.hiddenMessage')


var initialTime = 5
var correct = 0
var questionsAnswered = 0



var questionsArray = [
    {
        question: 'How many states are in the United States of America? ',
        answers: ['50', '30', '45', '67'],
        correctAnswer: '50'
    },
    {
        question: 'When does the bootcamp end? ',
        answers: ['June 3rd', 'answer2', 'answer3', 'answer4'],
        correctAnswer: 'answer2'
    },
    {
        question: 'question3',
        answers: ['answer1', 'answer2', 'answer3', 'answer4'],
        correctAnswer: 'answer3'
    },
    {
        question: 'question4',
        answers: ['answer1', 'answer2', 'answer3', 'answer4'],
        correctAnswer: 'answer3'
    },
    {
        question: 'question5',
        answers: ['answer1', 'answer2', 'answer3', 'answer4'],
        correctAnswer: 'answer1'
    }
]


timeCounter.textContent = 0

function startTimer() {
    timeLeft = initialTime
    var timerInterval = setInterval(function() {
        timeLeft--
        timeCounter.textContent = timeLeft
        if (timeLeft <= 0) {
            clearInterval(timerInterval)
            timeCounter.textContent = 0
            displayMessage()
        } else if (questionsAnswered > 4) {
            clearInterval(timerInterval)
            timeCounter.textContent = 0
            displayMessage()
        }
    }, 1000)
}


function displayMessage() {
    hiddenMessage.style.display = 'block'
}

function startGame(e) {
    e.preventDefault()

    hideMain()
    startTimer()

}

function hideMain() {
    mainInfo.style.display = 'none'

}

function getRandomQuestion() {
    var randomNumber = Math.floor(Math.random() * questionsArray.length)
    return questionsArray[randomNumber]
}

function 



startQuiz.addEventListener('click', startGame)

