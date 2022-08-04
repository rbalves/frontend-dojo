// Desafio 2: Palindrome

function isPalindrome(word) {
  const solution = [...word]
    .reverse()
    .join("")
    .toLowerCase()
    .replace(/ /g, "")
    .replace(/[^\w ]/g, "");

  const wordNormalized = word
    .toLowerCase()
    .replace(/ /g, "")
    .replace(/[^\w ]/g, "");

  return solution === wordNormalized
}

console.log(isPalindrome("civic")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
