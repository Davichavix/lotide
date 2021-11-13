const without = function(sourceArr, itemtoRemove) {
  let checkSet = new Set(itemtoRemove);
  let res = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (!checkSet.has(sourceArr[i])) {
      res.push(sourceArr[i]);
    }
  }
  return res;
};

module.exports = without;