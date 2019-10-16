let input = 'Pejuang Nikotin'
const vokalpaus = ['a', 'i', 'u', 'e', 'o'];
let resultArray = []
// let inputarr = input.split('')
// console.log(inputarr)

for (let i = 0; i < input.length; i++) {
    // console.log(i);
    for (let j = 0; j < vokalpaus.length; j++) {
        // console.log(j); 
        if (input[i] === vokalpaus[j]) {
            resultArray.push(input[i]);
            if (input[i] === 'e' || input[i] === 'u') {
                resultArray.push(input[i])
            }
        }
    }
}

console.log(resultArray.join('').toLocaleUpperCase());
