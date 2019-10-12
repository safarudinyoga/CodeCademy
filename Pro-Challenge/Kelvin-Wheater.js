// suhu kelvin
const kelvin = 0
// suhu celcius
const celcius = kelvin - 273
// suhu fahrenheit
let fahrenheit = Math.floor(celcius * (9/5) + 32)
// print
console.log(`The Temperature is ${fahrenheit} degrees Fahrenheit`)
// convert to newton scale
let newton = Math.floor(celcius * (33/100));
console.log(`The newton value is ${newton}`)