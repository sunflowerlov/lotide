const tail = require('../tail');
const assert = require('chai').assert; 

describe("#tail", () => {
  it("return tail for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);