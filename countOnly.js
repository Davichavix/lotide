const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertation Passed:, ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertation Failed:, ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const countOnly = function(allItems, itemsToCout) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCout[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);