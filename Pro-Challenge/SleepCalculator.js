getSleepHours = day => {
    //let sleeprandom = Math.floor(Math.random()*7)
    if (day.toLowerCase() == 'monday'){
        return 100;
    } else if (day.toLowerCase() == 'tuesday'){
        return 7;
    } else if (day.toLowerCase() == 'wednesday'){
        return 6;
    } else if (day.toLowerCase() == 'thursday'){
        return 5;
    } else if (day.toLowerCase() == 'friday'){
        return 4;
    } else if (day.toLowerCase() == 'saturday'){
        return 3;
    } else if (day.toLowerCase() == 'sunday'){
        return 2;
    } else {
        return 'Check your Input!!!'
    }
}

// console.log(getSleepHours('tuesday'));

getActualSleepHours = () => {
    return getSleepHours('tuesday') + 
    getSleepHours('monday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
}

getIdealSleepHours = () => {
    let idealHours = 7
    return idealHours * 7;
}

// console.log(getActualSleepHours())
// console.log(getIdealSleepHours());

calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours == idealSleepHours) {
        console.log('Perfect Amount of Sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You Sleep More Than ${actualSleepHours - idealSleepHours}Hours, To much Sleep is not healty!`);
    } else {
        console.log(`YOU NEED ${idealSleepHours - actualSleepHours}HOURS FUCKING SLEEP!!!`);
    } 
}

calculateSleepDebt()