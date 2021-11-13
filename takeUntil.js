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

module.exports = takeUntil;