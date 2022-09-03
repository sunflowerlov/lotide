const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  }
  else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }

};

const eqArrays = function (arr1, arr2) { //arr1 and arr2 mean eqArrqys[0][1]

  if (arr1.length !== arr2.length) { //check the lengths are the same
    return false
  }
  for (let index = 0; index < arr1.length; index++) {//loop arr1
    if (arr1[index] !== arr2[index]) { //check each arr1[i] and arr2[i] value are the same
      return false
    } //if all correct return true
  }
  return true
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}



const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
console.log(results1);

const result2 = map(words, word => word.length);
assertArraysEqual(result2, [ 6, 7, 2, 5, 3 ])
console.log(result2)

const result3 = map(words, word => word.length * 2);
assertArraysEqual(result3, [ 12, 14, 4, 10, 6 ])
console.log(result3)