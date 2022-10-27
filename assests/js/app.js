var startQuiz = document.querySelector('.startGame')
var mainInfo = document.querySelector('.questionInfo')
var timeCounter = document.querySelector('.timeLeft')
var hiddenMessage = document.querySelector('.hiddenMessage')


var initialTime = 5
var correct = 0
var questionsAnswered = 0

var questionTitle = document.querySelector('.questionTitle')
var option1 = document.querySelector('.option1')
var option2 = document.querySelector('.option2')
var option3 = document.querySelector('.option3')
var option4 = document.querySelector('.option4')


var questionsArray = [
    {
        question: 'How many states are in the United States of America: ',
        answers: ['50', '30', '45', '67'],
        correctAnswer: '50'
    },
    {
        question: 'When does the bootcamp end: ',
        answers: ['June 3rd', 'March 9th', 'December 24th', 'April 1st'],
        correctAnswer: 'March 9th'
    },
    {
        question: 'What state is UcDavis located in: ',
        answers: ['Alaska', 'Oregon', 'Utah', 'California'],
        correctAnswer: 'California'
    },
    {
        question: 'Arrays in JavaScript can be useed to store:',
        answers: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        correctAnswer: 'all of the above'
    },
    {
        question: 'Who is the CEO of Tesla: ',
        answers: ['Elon Musk ', 'Jeff Bezos', 'Mike Fomin', 'Steve Jobs'],
        correctAnswer: 'Elon Musk'
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

 function newRandomQuestion(object) {
    getRandomQuestion()

    var title = object
      
 }

startQuiz.addEventListener('click', startGame)

