const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(x => x === 'elephant')

const startsWithS = animals.findIndex(x => x[0] === 's' ? true : '')

console.log(startsWithS);
// console.log(animals.charAt(0) === 's');
console.log(animals[0]);


