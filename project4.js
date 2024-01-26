let randomNum = parseInt(Math.random() * 100 + 1)
let guessBox = document.querySelector("#guessBox")
let submitBtn = document.querySelector("#submitButton")
let result = document.querySelector(".result")
let previousGuess = document.querySelector(".prvGuess")
let remainingChances = document.querySelector(".remaining")
let showProbability = document.querySelector(".loworhi")

let arr = []
let num = 1

let playGame = true

if (playGame) {
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault()
        var guess = parseInt(guessBox.value)
        validateGuess(guess)
    })
    guessBox.addEventListener("keyup", function (e) {
        e.preventDefault()
        if (e.key === "Enter") {
            var guess = parseInt(guessBox.value)
            validateGuess(guess)
        }
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a Valid Number !!")
    }
    else if (guess <= 0) {
        alert("Please Enter Number Larger Than 0 !!")
    }
    else if (guess >= 101) {
        alert("Please Enter Number Smaller Than 101 !!")
    }
    else {
        guessBox.value = ''
        if (num === 10) {
            displayMessage(guess)
            endGame()
        }
        else {
            displayMessage(guess)
            checkGuess(guess)
        }
    }

}
function checkGuess(guess) {
    if (guess == randomNum) {
        result.innerHTML = `You Guessed it Correct, The Random Number is : ${randomNum}`
        startGame()
    }
    else if (guess > randomNum) {
        showProbability.innerHTML = "Your Guess is Higher Than Random Number !!"
    }
    else if (guess < randomNum) {
        showProbability.innerHTML = "Your Guess is Smaller Than Random Number !!"
    }
}
function displayMessage(guess) {
    previousGuess.innerHTML += `${guess}, `
    num++
    remainingChances.innerHTML = `${11 - num}`
}
function startGame() {
    guessBox.setAttribute('disabled', '')
    submitBtn.setAttribute('disabled', '')
    guessBox.classList.add("guessSlotDisabled")
    submitBtn.classList.add("submitBtnDisable")
    let newP = document.createElement('p')
    newP.setAttribute("class", "newp")
    newP.innerHTML = "Start New Game"
    result.appendChild(newP)
    newP.addEventListener('click', function (e) {
        window.location.reload()
    })
}
function endGame() {
    guessBox.setAttribute('disabled', '')
    submitBtn.setAttribute('disabled', '')
    guessBox.classList.add("guessSlotDisabled")
    submitBtn.classList.add("submitBtnDisable")
    showProbability.innerHTML = `Game Over and The Random Number is : ${randomNum}`
    let newP = document.createElement('p')
    newP.setAttribute("class", "newp")
    newP.innerHTML = "Start New Game"
    result.appendChild(newP)
    newP.addEventListener('click', function (e) {
        window.location.reload()
    })
}