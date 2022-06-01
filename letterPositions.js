// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  }
  else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }

};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false
  }
  return true
}
}

const letterPositions = function(sentence) {
  const results = {};
  for (const letter in sentence) {
    if (!results[sentence[letter]]) {
      results[sentence[letter]] = []
    }
    results[sentence[letter]].push(Number(letter));
  }
  console.log(results)
  return results;
 
};
console.log(letterPositions("hello").e)
assertArraysEqual(letterPositions("hello").e, [1]);//.e means access the e key