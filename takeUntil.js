// ACTUAL FUNCTION
const takeUntil = function(array, callback) {
  const res = [];
  for (item of array) {
    if (!callback(item)) {
      res.push(item)
    } else {
      return res;
    }
  }
};

// TESTING FUNCTION
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
    console.log(`🔴 Assertation Failed:, ${actual} !== ${expected}`);
  }
};

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2]);