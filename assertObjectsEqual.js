const eqArrays = function(firstArr, secArr) {
  if (firstArr.length !== secArr.length) return false;
  for (let i = 0; i < secArr.length; i++) {
    if (firstArr[i] !== secArr[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  for (keys in object2) {
    if (!object1.hasOwnProperty(keys)) {
      return false;
    }
  }
  for (keys in object2) {
    if (Array.isArray(object2[keys]) && Array.isArray(object1[keys])) {
      if (!eqArrays(object2[keys], object1[keys])) {
        return false;
      };
    } else {
        if (object1[keys] !== object2[keys]) {
        return false;
        }
      }
  }
  return true;
};

// ACUTAL FUNCITON
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢 Assertation Passed:, ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertation Failed:, ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({1:[2,3],2:4},{1:[2,3],2:3});

module.exports = assertObjectsEqual;