assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
const assertArraysEqual = require('./assertArraysEqual');
const assert = require('chai').assert;

describe("#eqArraysTest", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    const arr = [1, 2, 3]
    assert.isTrue(assertArraysEqual(arr, [1, 2, 3]));
  });

  it("returns false for [1, 2, 3], [1, 2]", () => {
    const arr = [1, 2, 3]
    assert.isFalse(assertArraysEqual(arr, [1, 2]));
  });
});