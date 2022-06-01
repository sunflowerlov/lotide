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

const countOnly = function(allItems, itemsToCount) {
  const result = {};

  for (const name of allItems) {

    if (itemsToCount[name]) {
      if (!result[name]) {
        result[name] = 1
      } else {
        result[name] += 1
      }
    } else {
      result[name] = undefined
    }
    
  }
  console.log(result)
  return result
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
