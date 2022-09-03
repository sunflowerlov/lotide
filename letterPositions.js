// FUNCTION IMPLEMENTATION
const assertArraysEqual = require('./assertArraysEqual')


const letterPositions = function(sentence) {
  const noSpaces = sentence.split(" ").join('')
  const results = {};
  
  for (let i = 0; i < noSpaces.length; i++) {
    if (!results[noSpaces[i]]) {
      results[noSpaces[i]] = []
    }
    results[noSpaces[i]].push(Number(i))
  }
  console.log(results)
  return results;
};

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);

module.exports = letterPositions;