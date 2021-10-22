const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertation Passed:, ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertation Failed:, ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
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

// TEST CODE
const cd = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));