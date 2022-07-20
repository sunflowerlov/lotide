// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
countLetters("lighthouse in the house") 