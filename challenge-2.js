// Desafio 2: Palindrome

function normalizeString(word) {
  return word
    .toLowerCase()
    .replace(/ /g, "")
    .replace(/[^\w ]/g, "");
}

function isPalindrome(word) {
  const solution = normalizeString([...word].reverse().join(""));

  const originalWord = normalizeString(word);

  return solution === originalWord;
}

console.log(isPalindrome("civic")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
