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


const without = function (sourceArr, removeArr){
  let result = [];
  let temp = false;

  for (let i = 0; i < sourceArr.length; i++) {
    for (let j = 0; j < removeArr.length; j++) {
      if (sourceArr[i] === removeArr[j]) {
        temp = true;
      }
      else {
        temp = false
      }
    }
    if (!temp) {
      result.push(sourceArr[i]);
    }
  }

  console.log(result)
  return result
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); //call without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);//check words arr is the same with assert[1]

