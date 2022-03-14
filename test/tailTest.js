const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['test2', 'test3]", () => {
    const words = ['test1', 'test2', 'test3']
    assert.deepEqual(tail(words), ['test2', 'test3']);
  });
});