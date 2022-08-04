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

console.log(duplicateCount("abcde")); // {duplicados: 0, caracteres: []}
console.log(duplicateCount("abcdea")); // {duplicados: 1, caracteres: ['a']}
console.log(duplicateCount("aabBcde")); // {duplicados: 2, caracteres: ['a', 'b']}
console.log(duplicateCount("aA11")); // {duplicados: 2, caracteres: ['a', 1]}
