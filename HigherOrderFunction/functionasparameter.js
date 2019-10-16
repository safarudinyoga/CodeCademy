const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
 }
 
 const addOneToOne = () => 1 + 1;
 
 timeFuncRuntime(addOneToOne);


 timeFuncRuntime(() => {
    for (let i = 10; i>0; i--){
      console.log(i);
    }
  });

  const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  
  // Write your code below
  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)
  
  const checkConsistentOutput = (func, val) => {
    let first = func(val);
    let second = func(val);
    if (first === second){
      return first;
    } else {
      return 'This function returned inconsistent results'
    }
  }
  
  checkConsistentOutput(addTwo, 1)