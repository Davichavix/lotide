// ACTUAL FUNCTION
const countLetters = function(string) {
  let strObj = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (strObj[letter]) {
        strObj[letter]++;
      } else {
        strObj[letter] = 1;
      }
    }
  }
  return strObj;
};

// TEST CODE
console.log(countLetters("lighthouse in the house"));