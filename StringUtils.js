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

    /* solution - 2 */
    // words.reverse()
    // return words.join(" ")
  }

  isRotationExist(string1, string2) {
    if (!string1 || !string2 || string1.length !== string2.length) return false

    const firstChar = string1[0]
    let firstMatchingCharIndex = null

    for (let i = 0; i < string2.length; i++) {
      if (string2[i] === firstChar) {
        firstMatchingCharIndex = i
        break
      }
    }

    if (!firstMatchingCharIndex) return false

    const string2Len = string2.length
    let currentString2CharIndex = firstMatchingCharIndex

    for (let i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[currentString2CharIndex++]) return false
      if (currentString2CharIndex === string2Len) currentString2CharIndex = 0
    }

    return true
  }

  removeDuplicatedChars(string) {
    if (!string) return string

    const seen = {}
    const newStringCharArr = []

    for (const char of string) {
      if (!seen[char]) {
        seen[char] = 1
        newStringCharArr.push(char)
      }
    }
    return newStringCharArr.join("")

    /* Solution - 2 */
    // const charSet = new Set()
    // for (const char of string) charSet.add(char)
    // return [...charSet].join("")

    /* Solution - 3 */
    // return [...new Set(string)].join("")
  }
}

const stringManupilations = new StringUtils()

const numOfVowels = stringManupilations.getNumOfVowels("hello")
console.log("numOfVowels:", numOfVowels)

const reversedString = stringManupilations.reverse("hello")
console.log("reversedString:", reversedString)

const reversedWordsString = stringManupilations.reverseOrderOfWords("test hello world")
console.log("reversedWordsString:", reversedWordsString)

const isRotationExist = stringManupilations.isRotationExist("ABCD", "CDAB")
console.log("isRotationExist:", isRotationExist)

const isRotationExist_2 = stringManupilations.isRotationExist("ABCD", "ADBC")
console.log("isRotationExist_2:", isRotationExist_2)

const nonDuplicatedCharString = stringManupilations.removeDuplicatedChars("Hellooo!!...")
console.log("nonDuplicatedCharString:", nonDuplicatedCharString)
