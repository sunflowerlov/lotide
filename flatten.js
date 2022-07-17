// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};


const eqArrays = function (arr1, arr2) { //arr1 and arr2 mean eqArrqys[0][1]
  if (arr1.length !== arr2.length) { //check the lengths are the same
    return false
  }
  for (let index = 0; index < arr1.length; index++) {//loop arr1
    if (arr1[index] !== arr2[index]) { //check each arr1[i] and arr2[i] value are the same
      return false
  }
  return true //if all correct return true
}
}

const flatten = function (input) {
  let flatten = [];
  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    if (!Array.isArray(input[i])) {
      flatten.push(input[i]);
    } else {
      for (let j = 0; j < current.length; j++) {
        console.log("current[j]", current[j]);
        flatten.push(current[j]);
      }
    }
  }
  console.log('flatten',flatten)
  return flatten
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
