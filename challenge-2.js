// Desafio 2: Palindrome

class WordBuilder {
  constructor(word) {
    this._word = word;
  }

  noSpace() {
    this._word = this._word.replace(/ /g, "");
    return this;
  }

  onlyLetters() {
    this._word = this._word.replace(/[^\w ]/g, "");
    return this;
  }

  toLowerCase() {
    this._word = this._word.toLowerCase();
    return this;
  }

  revert() {
    this._word = [...this._word].reverse().join("");
    return this;
  }

  build() {
    return this._word;
  }
}

function isPalindrome(word) {
  const reversedWord = new WordBuilder(word)
    .revert()
    .toLowerCase()
    .noSpace()
    .onlyLetters()
    .build();

  const originalWord = new WordBuilder(word)
    .toLowerCase()
    .noSpace()
    .onlyLetters()
    .build();

  return reversedWord === originalWord;
}

console.log(isPalindrome("civic")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
