const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertation Passed:, ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertation Passed:, ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArr, secArr) {
  if (firstArr.length !== secArr.length) return false;
  for (let i = 0; i < secArr.length; i++) {
    if (firstArr[i] !== secArr[i]) {
      return false;
    }
  }
  return true;
};