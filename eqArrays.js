// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

/**
 * Check if arrays have the same entries
 * 
 * steps
 * 1. Check the lengths are the same
 * 2. Check if each index values are the same for both arrays
 *    a. if not the same. return false
 * 3. Return true if they are the same
 */
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

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true); // => should PASS
