const main = (initialNumber = 1, finalNumber = 1000) => {
  
  let numberArray = [];
  // by default, the initialNumber is 1, and the finalNumber is 1000.
  for (initialNumber; initialNumber<=finalNumber; initialNumber++){
      numberArray.push(initialNumber);
  };
  
  // filter all the prime numbers from the numberArray.
  let primeNumbers = numberArray.filter((number) => {
      
      // variable that counts the divisors for the current number.
      let divisors = 0;
      
      // check the division between all the numbers from 1 to the current number
      for(let index = 1; index <= number; index++) {
          // if the remainder of the current division is 0,
          // (meaning that the current number is divisble by the current index)
          // increment the divisors variable.
          if (number > 1 && number % index === 0) divisors++;
      }
        
      //if the number of divisors equals 2,
      //(meaning that the current number is only divisible by 1 and itself)
      //add that number to the prime numbers array.
      if (divisors === 2) return number
  })
  
  // sum all the prime numbers.
  const primeNumbersSum = primeNumbers.reduce(
      (accumulator, currentNumber) => (
          accumulator = accumulator+currentNumber
      ), 0,
  )
    
  return primeNumbersSum;
}