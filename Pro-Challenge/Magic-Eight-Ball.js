var userName = 'Jane'
userName ? console.log(`Hello ${userName}`) : console.log('Hello');
var userQuestion = 'What is my fortune ?'
console.log(`the ${userName} Question is ${userQuestion}`);
var randomNumber = Math.floor(Math.random() * 8)
console.log(randomNumber);
var eightBall = `${randomNumber}`

// With Switch
switch (randomNumber) {
    case 1:
        console.log('It is certain')
        break;
    case 2:
        console.log('It is decidedly so')
        break;
    case 3:
        console.log('Reply hazy try again');
        break;
    case 4:
        console.log('Cannot predict now');
        break;
    case 5:
        console.log('Do not count on it');
        break;
    case 6:
        console.log('My sources say no');
        break;
    case 7:
        console.log('Outlook not so good');
        break;
    case 8:
        console.log('Signs point to yes');
        break;
    default:
        console.log('No sign');
        break;
}

// with if/else
if (randomNumber == 1){
    console.log('It is certain')
} else if (randomNumber == 2){
    console.log('It is decidedly so')
} else if (randomNumber == 3){
    console.log('Reply hazy try again')
} else if (randomNumber == 4){
    console.log('Cannot predict now')
} else if (randomNumber == 5){
    console.log('Do not count on it')
} else if (randomNumber == 6){
    console.log('My sources say no')
} else if (randomNumber == 7){
    console.log('Outlook not so good')
} else if (randomNumber == 8){
    console.log('Signs point to yes')
} else {
    console.log('No sign');
}

