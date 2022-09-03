
const assertArraysEqual = require('./assertArraysEqual')


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}



// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
// console.log(results1);

// const result2 = map(words, word => word.length);
// assertArraysEqual(result2, [ 6, 7, 2, 5, 3 ])
// console.log(result2)

// const result3 = map(words, word => word.length * 2);
// assertArraysEqual(result3, [ 12, 14, 4, 10, 6 ])
// console.log(result3)

module.exports = map;