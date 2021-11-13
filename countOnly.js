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

module.exports = countOnly;