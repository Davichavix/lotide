const assert = require('chai').assert;
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});