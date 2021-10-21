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

const without = function(sourceArr, itemtoRemove) {
  let checkSet = new Set(itemtoRemove);
  let res = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (!checkSet.has(sourceArr[i])) {
      res.push(sourceArr[i]);
    }
  }
  return res;
}

console.log(without([1, 2, 3], [1]));