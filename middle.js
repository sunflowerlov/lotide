// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

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

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true); 

const middle = function(array) {

  if (array.length <= 2) {
    middleArr = [];
  }
  else if (array.length % 2 !== 0) {
    middleArr = [array[Math.floor(array.length / 2 )]];
  }
  else if (array.length % 2 === 0) {
    middleArr = [array[Math.floor((array.length - 1) / 2)], array[Math.floor((array.length - 1) / 2) + 1]];
    
  }
  console.log (middleArr)
}
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
