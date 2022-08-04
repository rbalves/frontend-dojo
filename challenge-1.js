// Desafio 1: FizzBuzz

function fizzBuzz(number) {
  const list = Array.from({length: number}, (_, i) => i + 1)

  return list.map(number => {
    if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz"
    }
    
    if (number % 3 === 0) {
      return "Fizz"
    }

    if (number % 5 === 0) {
      return "Buzz"
    }

    return String(number)
  })
}

console.log(fizzBuzz(15));
// ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
