// Write your code below

let bobsFollowers = ['oden','ropik','ipoelz','Harzdzi']
let tinasFollowers = ['oden','ropik','ipul']
let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}

console.log(mutualFollowers);
