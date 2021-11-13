const flatten = function(nestArr) {
  let res = [];
  for (let i = 0; i < nestArr.length; i++) {
    if (Array.isArray(nestArr[i])) {
      for (let j = 0; j < nestArr[i].length; j++) {
        res.push(nestArr[i][j]);
      }
    } else {
      res.push(nestArr[i]);
    }
  }
  return res;
};

module.exports = flatten;