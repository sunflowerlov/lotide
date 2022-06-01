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

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => should PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4, 6, 7, 2]);

const without = function (input1, input2) {
  let output = [];
  // for (let i = 0; i < input1.length; i++) {
  //   output.push(input1[i])
  // }
  for (let i = 0; i < input1.length; i++) {
    let temp = false;
    for (let j = 0; j < input2.length; j++){
      if (input1[i] === input2[j]) {
        temp = true
      }
    }
    if (!temp) {
      output.push(input1[i])
    }
  }
  return output
}


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

