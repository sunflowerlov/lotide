// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays')
const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  }
  else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }

};




assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => should PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4, 6, 7, 2]);

module.exports = assertArraysEqual;