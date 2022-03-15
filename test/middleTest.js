const middle = require("../middle");
const assert = require('chai').assert;

describe("middle", () => {
  it("returns [2, 3]", () => {
    const arr = [1, 2, 3, 4];
    assert.deepEqual(middle(arr), [2, 3]);
  });

  it("returns [3]", () => {
    const arr = [1, 2, 3, 4, 5 ];
    assert.deepEqual(middle(arr), [3]);
  });
});