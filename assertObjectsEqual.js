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

const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);//['a', 'b']
  let arr2 = Object.keys(object2);//['b', 'a']
  let result = arr1.length === arr2.length;
  if (result) {
     for (const key1 of arr1) {//['a']['b']
         for (const key2 of arr2) {//['b']['a']
           if (eqArrays(object1[key1], object2[key2]) && eqArrays(key1, key2)) {
             result = true
             break;
           }
           else {
             result = false;
           }
          }        
    }
  }
 
  return result
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  let input = eqObjects(actual, expected) 

  if (input) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

