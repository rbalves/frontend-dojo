// Desafio 3: Duplicate

function duplicateCount(text) {
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

console.log(duplicateCount("abcde")); // {duplicados: 0, caracteres: []}
console.log(duplicateCount("abcdea")); // {duplicados: 1, caracteres: ['a']}
console.log(duplicateCount("aabBcde")); // {duplicados: 2, caracteres: ['a', 'b']}
console.log(duplicateCount("aA11")); // {duplicados: 2, caracteres: ['a', 1]}
