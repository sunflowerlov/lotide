const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')


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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true)
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;