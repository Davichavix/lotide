// TESTING FUNCTION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertation Passed:, ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertation Failed:, ${actual} !== ${expected}`);
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

// ACTUAL FUNCTION
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

// TEST CODE
console.log(letterPositions("hello"));
let letterIndx = letterPositions("hello");
assertArraysEqual(letterIndx["h"],[0]);
assertArraysEqual(letterIndx["e"],[1]);
assertArraysEqual(letterIndx["l"],[2 , 3]);
assertArraysEqual(letterIndx["o"],[4]);