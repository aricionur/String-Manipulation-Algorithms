class StringUtils {
  constructor() {
    this.vowels = { a: 1, e: 1, o: 1, u: 1, i: 1, A: 1, E: 1, O: 1, U: 1, I: 1 }
  }

  getNumOfVowels(string) {
    if (!string) return 0

    let numOfVowels = 0
    for (const char of string) if (this.vowels[char]) numOfVowels++

    return numOfVowels
  }

  reverse(string) {
    if (!string) return string

    let reversedStrCharArr = []
    for (let i = string.length - 1; i >= 0; i--) reversedStrCharArr.push(string[i])

    return reversedStrCharArr.join("")
  }

  reverseOrderOfWords(string) {
    if (!string) return string

    const reversedWords = []
    const words = string.split(" ")

    for (let i = words.length - 1; i >= 0; i--) reversedWords.push(words[i])
    return reversedWords.join(" ")

    // solution -2
    // words.reverse()
    // return words.join(" ")
  }
}

const stringManupilations = new StringUtils()

const numOfVowels = stringManupilations.getNumOfVowels("hello")
console.log("numOfVowels:", numOfVowels)

const reversedString = stringManupilations.reverse("hello")
console.log("reversedString:", reversedString)

const reversedWordsString = stringManupilations.reverseOrderOfWords("test hello world")
console.log("reversedWordsString:", reversedWordsString)
