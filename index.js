const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertArraysEqual = require("./assertArraysEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const flatten = require("./flatten");
const assertEqual = require("./assertEqual");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");
const countLetters = require("./countLetters");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const eqObjects = require("./eqObjects");
const eqArrays = require("./eqArrays");
const countOnly = require("./countOnly");
const letterPositions = require("./letterPositions")

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without,
};

