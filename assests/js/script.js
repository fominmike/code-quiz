var startButton = document.querySelector('.startGame')
var timeAmount = document.querySelector('.timeLeft')
var questionContainer = document.querySelector('.questionInfo')
var mainEl = document.querySelector('.mainClass')
var question1 = ['How many states are in the United States of America? ', '1: Twenty', '2: Fourty', '3: Fifty', '4: Thirty Two' ]
var question2 = [ 'When does this bootcamp end? ', '1: March 9th', '2: April 1st', '3: December 24th', '4: July 3rd' ]

var correctChoice = document.createElement('h1')
correctChoice.textContent = 'Correct!'
var incorrectChoice = document.createElement('h1')
incorrectChoice.textContent = 'Incorrect!'


var timeLeft = 60;

function countdown() {
    

var timeInterval = setInterval(function () {
    timeLeft--;
    var message = timeLeft
    if (timeLeft === 0){
        clearInterval(timeInterval)
        displayMessage()
    }
    timeAmount.textContent = message
}, 1000)
}



function displayMessage() {
    var endQuizMessage = "QUIZ IS OVER"
    mainEl.textContent = endQuizMessage
}

function questions() {
    var choice1 = document.createElement('button')
    var choice2 = document.createElement('button')
    var choice3 = document.createElement('button')
    var choice4 = document.createElement('button')
    choice1.textContent = question1[1]
    choice2.textContent = question1[2]
    choice3.textContent = question1[3]
    choice4.textContent = question1[4]
    mainEl.textContent = question1[0]
    mainEl.appendChild(choice1)
    mainEl.appendChild(choice2)
    mainEl.appendChild(choice3)
    mainEl.appendChild(choice4)

    choice1.addEventListener('click', function() {
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice)
    })
    
    choice2.addEventListener('click', function() {
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice)
    })
    
    choice3.addEventListener('click', function() {
        let a = 10;
        timeLeft = timeLeft + a;
        mainEl.appendChild(correctChoice)
    })
    
    choice4.addEventListener('click', function() {
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice)
    })
    
    if ()


}

function nextQuestion() {
    var choice1 = document.createElement('button')
    var choice2 = document.createElement('button')
    var choice3 = document.createElement('button')
    var choice4 = document.createElement('button')
    choice1.textContent = question1[1]
    choice2.textContent = question1[2]
    choice3.textContent = question1[3]
    choice4.textContent = question1[4]
    mainEl.textContent = question1[0]
    mainEl.appendChild(choice1)
    mainEl.appendChild(choice2)
    mainEl.appendChild(choice3)
    mainEl.appendChild(choice4)

    choice1.addEventListener('click', function() {
        timeLeft = timeLeft + 10;
        mainEl.appendChild(correctChoice)
    })
    
    choice2.addEventListener('click', function() {
        let a = 10;
        timeLeft = timeLeft - 10;
        mainEl.appendChild(incorrectChoice)
    })
    
    choice3.addEventListener('click', function() {
        let a = 10;
        timeLeft = timeLeft - 10;
        mainEl.appendChild(incorrectChoice)
    })
    
    choice4.addEventListener('click', function() {
        let a = 10;
        timeLeft = timeLeft - 10;
        mainEl.appendChild(incorrectChoice)
    })
    
}
 

startButton.addEventListener("click", function() {
    countdown()
    questions()
    nextQuestion()
})