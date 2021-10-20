const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertation Passed:, ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertation Passed:, ${actual} !== ${expected}`);
  }
};

const head = function(testarray){
  return testarray[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([]));