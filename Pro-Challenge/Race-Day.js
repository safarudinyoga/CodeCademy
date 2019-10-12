let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = false;
let runnerAge = '18'
// if for early adult
if (runnerAge > 18 && registerEarly == true) {
    raceNumber += 1000
    console.log(`${raceNumber} will start race at 9.30`);
} else if (runnerAge > 18 && registerEarly == false) {
    console.log(`${raceNumber} will start race at 11.00`);
} else if (runnerAge < 18) {
    console.log(`${raceNumber} will start race at 12.30`);
} else {
    console.log(`${raceNumber} will start tommorow`);
}



