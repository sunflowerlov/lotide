// The array to work with
// The callback (which Lodash calls "predicate")
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

const takeUntil = function(array, callback) {
  const result = [];

  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item)
  }
  return result
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0 );
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



