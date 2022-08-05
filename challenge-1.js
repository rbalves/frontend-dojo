// Desafio 1: FizzBuzz

function fizzBuzz(number) {
  const numbers = Array.from({ length: number }, (_, i) => i + 1);

  return numbers.map((number) => {
    const Fizz = number % 3 === 0;
    const Buzz = number % 5 === 0;

    if (Fizz && Buzz) {
      return "FizzBuzz";
    }

    if (Fizz) {
      return "Fizz";
    }

    if (Buzz) {
      return "Buzz";
    }

    return String(number);
  });
}

console.log(fizzBuzz(15));
// ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
