// Desafio 3: Duplicate

function duplicateCount(text) {
  const formatedText = [...text.toLowerCase()];

  const duplicates = formatedText.filter(
    (item, index) => formatedText.indexOf(item) !== index
  );

  return {
    duplicados: duplicates.length,
    caracteres: duplicates,
  };
}

function newSolution(text) {
  const textToLowerCase = text.toLowerCase();

  const distincts = [...new Set([...textToLowerCase])];

  return distincts.reduce(
    (acc, letter) => {
      var quantityLetter = [...textToLowerCase].reduce((acc, character) => {
        return character === letter ? (acc += 1) : acc;
      }, 0);

      const isDuplicated = quantityLetter === 2;

      if (isDuplicated) {
        return {
          ...acc,
          duplicados: acc.duplicados + 1,
          caracteres: [...acc.caracteres, letter],
        };
      }

      return { ...acc };
    },
    { duplicados: 0, caracteres: [] }
  );
}

console.log(newSolution("abcde")); // {duplicados: 0, caracteres: []}
console.log(newSolution("abcdea")); // {duplicados: 1, caracteres: ['a']}
console.log(newSolution("aabBcde")); // {duplicados: 2, caracteres: ['a', 'b']}
console.log(newSolution("aA11")); // {duplicados: 2, caracteres: ['a', 1]}
