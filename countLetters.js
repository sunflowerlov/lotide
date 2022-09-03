

const countLetters = function (input) {
  const noSpaces = input.split(" ").join('')
  let result = {};

  for (const letter of noSpaces) {
    if (result[letter]) {
      result[letter] += 1
    }
    else {
      result[letter] = 1
    }
  }
  console.log(result)
  return result
}
// countLetters("lighthouse in the house") 

module.exports = countLetters;