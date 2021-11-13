const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  for (keys in object2) {
    if (!object1.hasOwnProperty(keys)) {
      return false;
    }
  }
  for (keys in object2) {
    if (Array.isArray(object2[keys]) && Array.isArray(object1[keys])) {
      if (!eqArrays(object2[keys], object1[keys])) {
        return false;
      };
    } else {
        if (object1[keys] !== object2[keys]) {
        return false;
        }
      }
  }
  return true;
};

module.exports = eqObjects;