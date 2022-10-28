var startQuiz = document.querySelector('.startGame')
var mainInfo = document.querySelector('.questionInfo')
var timeCounter = document.querySelector('.timeLeft')
var hiddenMessage = document.querySelector('.hiddenMessage')


var initialTime = 60
var correct = 0
var questionsAnswered = 0
var success = 0

var currentChoice;

var questionTitle = document.querySelector('.questionTitle')
var option1 = document.querySelector('.option1')
var option2 = document.querySelector('.option2')
var option3 = document.querySelector('.option3')
var option4 = document.querySelector('.option4')

var hiddenQuestion = document.querySelector('.hiddenQuestion')
var optionsList = document.querySelector('.options')

var correctReply = document.querySelector('.hidden4')
var incorrectReply = document.querySelector('.hidden5')

var amountCorrect = document.querySelector('.amountCorrect')
var initialsInput = document.getElementById('initials')
var initialsSubmit = document.getElementById('initialsSubmit')

var viewScores = document.querySelector('.highScores')
var hiddenScore = document.querySelector('.hidden1')
var setScore = document.querySelector('.savedScore')


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
        question: 'What state is UC Davis located in: ',
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
        answers: ['Elon Musk', 'Jeff Bezos', 'Mike Fomin', 'Steve Jobs'],
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
            hiddenQuestion.style.display = 'none'
            correctReply.style.display = 'none'
            incorrectReply.style.display = 'none'
        } else if (questionsAnswered > 4) {
            clearInterval(timerInterval)
            timeCounter.textContent = 0
            displayMessage()
            hiddenQuestion.style.display = 'none'
            correctReply.style.display = 'none'
            incorrectReply.style.display = 'none'
        }
    }, 1000)
}


function displayMessage() {
    hiddenMessage.style.display = 'block'
    amountCorrect.textContent = `Answers correct: ${correct}`
    
}

function showQuestion () {
    hiddenQuestion.style.display = 'block'

}

function startGame(e) {
    e.preventDefault()

    hideMain()
    startTimer()
    showQuestion ()

    var question1 = getRandomQuestion()
    newRandomQuestion(question1)

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

    var title = object.question
    var options = object.answers
    var answer = object.correctAnswer
    currentChoice = answer

    questionTitle.textContent = title
    option1.textContent = options[0]
    option2.textContent = options[1]
    option3.textContent = options[2]
    option4.textContent = options[3]
    
    correctReply.style.display = 'none'
    incorrectReply.style.display = 'none'
 }

 function submitPlayerScore(event) {
    event.preventDefault()

    localStorage.setItem("initials", initialsInput.value)
    localStorage.setItem("score", success)
 }

function checkAnswer(event) {
    var userChoice = event.target.textContent

    if (userChoice === currentChoice) {
        questionsAnswered++
        correct++
        success = success + 10
        var question1 = getRandomQuestion()
        newRandomQuestion(question1)
        correctReply.style.display = 'block'
    } else {
        questionsAnswered++
        var question1 = getRandomQuestion()
        newRandomQuestion(question1)
        timeLeft = timeLeft - 10
        incorrectReply.style.display = 'block'
        
    }
}

function returnScores() {
    var initials = localStorage.getItem("initials")
    var score = localStorage.getItem("score")

    hiddenScore.style.display = 'block'
    setScore.textContent = (initials + ' ' + score)

}

 // Event Listeners

startQuiz.addEventListener('click', startGame)

optionsList.addEventListener('click', checkAnswer)

initialsSubmit.addEventListener('click', submitPlayerScore)

viewScores.addEventListener('click', returnScores)