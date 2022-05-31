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

const words = ["Yo Yo", "Lighthouse", "Labs"];
 assertEqual(words.length, 3); // original array should still have 3 elements!
const tail = function (words) {
  return words.slice(1);
}
tail(words);// no need to capture the return value since we are not checking it
const output1 = tail([])
tail([])