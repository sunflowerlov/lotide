
const flatten = function (input) {
  let flatten = [];
  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    if (!Array.isArray(input[i])) {
      flatten.push(input[i]);
    } else {
      for (let j = 0; j < current.length; j++) {
        console.log("current[j]", current[j]);
        flatten.push(current[j]);
      }
    }
  }
  console.log('flatten',flatten)
  return flatten
}

// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;