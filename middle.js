const middle = function(array) {
  let midArray = [];
  let arrLen = array.length;
  if (arrLen === 1 || arrLen === 2 || !arrLen) return [];
  if (arrLen % 2 === 0) {
    midArray = [array[(arrLen / 2) - 1], array[arrLen / 2]];
  } else {
    return [array[Math.floor(Math.floor(arrLen / 2))]];
  }
  return midArray;
};

module.exports = middle;