// Desafio 3: Duplicate

/*
Contar o número de duplicatas.

Escreva uma função que retornará a contagem de caracteres alfabéticos distintos que não diferenciam maiúsculas de minúsculas e dígitos numéricos 
que ocorrem mais de uma vez na string de entrada. A string de entrada pode conter apenas letras (maiúsculas e minúsculas) e dígitos numéricos.
*/

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
