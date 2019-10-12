const getUserChoice = userInput => {
    userInput.toLowerCase()
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
        return userInput;
    } else if (userInput == 'bomb') {
        return userInput
    } else {
        console.log(`Your input ${userInput} is a wrong input`);
    }
}

getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
};

determineWinner = (getUserChoice, getComputerChoice) => {
    if (getUserChoice == getComputerChoice) {
        return 'Game is Tied'
    }
    if (getUserChoice == 'rock') {
        if (getComputerChoice == 'paper') {
            return 'Computer Won'
        } else {
            return 'User Won'
        }
    }
    if (getUserChoice == 'paper') {
        if (getComputerChoice == 'scissor') {
            return 'Computer Won'
        } else {
            return 'User Won'
        }
    }
    if (getUserChoice == 'scissor') {
        if (getComputerChoice == 'rock') {
            return 'Computer Won'
        } else {
            return 'User Won'
        }
    }
    if (getUserChoice == 'bomb') {
        return 'USER FUCKING WON!!!'
    }
};
// console.log(determineWinner('rock','scissor'));

playGame = () => {
    let userChoice = getUserChoice('bomb')
    let computerChoice = getComputerChoice()
    console.log(`You ${userChoice} and Computer ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame()