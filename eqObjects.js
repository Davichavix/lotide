const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertation Passed:, ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertation Failed:, ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  
}