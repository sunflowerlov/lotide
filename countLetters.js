// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function (input) {
  return input[0]
}

assertEqual(head([5,6,7]), 5);//5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//"hello"
assertEqual(head([5,6,7]), 5);

const countLetter = function (input) {
  const result = {};

  for (const letter of input) {
    if (!result[letter]) {
      result[letter] = 1
    }
    else {
      result[letter] += 1
    }
  }
  return result
}
console.log(countLetter('LHL'))