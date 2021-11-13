const findKeyByValue = function(object, value) {
  for (const genre in object) {
    if (object[genre] === value) {
      return genre;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;