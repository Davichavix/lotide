// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(array) {
  let midArray = [];
  let arrLen = array.length;
  if (arrLen === 1 || arrLen === 2 || !arrLen) return [];
  if (arrLen % 2 === 0) {
    midArray = [array[(arrLen / 2) - 1], array[arrLen / 2]];
  } else {
    return [array[Math.floor(Math.floor(arrLen / 2))]];
  }
  return midArray;
};

// TEST CODE
console.log(middle([1 ,2, 3, 4, 5]));