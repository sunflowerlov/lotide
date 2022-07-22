const eqObjects = function (object1, object2) {
  const oneKey = Object.keys(object1);
  const twoKey = Object.keys(object2);

  if (oneKey.length !== twoKey.length) {
    return false;
  }
  for (const eachOneKey of oneKey) {
    if (Array.isArray(object1[eachOneKey])) {
      return eqArrays(object1[eachOneKey], object2[eachOneKey]);
    }
    if (object1[eachOneKey] !== object2[eachOneKey]) {
      return false;
    }
  }
  return true;
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


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Passed:${inspect(actual)} !== ${inspect(expected)}`)
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

