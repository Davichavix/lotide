const eqArrays = function(firstArr, secArr) {
  if (firstArr.length !== secArr.length) return false;
  for (let i = 0; i < secArr.length; i++) {
    if (firstArr[i] !== secArr[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertation Passed:, ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertation Passed:, ${actual} !== ${expected}`);
  }
};

const flatten = function(nestArr) {
  let res = [];
  for (let i = 0; i < nestArr.length; i++) {
    if (Array.isArray(nestArr[i])) {
      for (let j = 0; j < nestArr[i].length; j++) {
        res.push(nestArr[i][j]);
      }
    } else {
      res.push(nestArr[i]);
    }
  }
  return res;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));