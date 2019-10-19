let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil'
  }
  // Write your code below
  let remotelyDisable = obj => {
    obj.disabled = true 
  }
  
  greenEnergy(spaceship)
  remotelyDisable(spaceship)
  console.log(spaceship)