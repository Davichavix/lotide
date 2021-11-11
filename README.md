# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @davichavix/lotide`

**Require it:**

`const _ = require('@davichavix/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Function asserts if two arrays are equal and logs result
* `assertEqual`: Function asserts if two values are equal and logs result
* `assertObjectEqual`: Function asserts if two objects are equal and logs result
* `countLetters`: Function returns a count of each letters in a string
* `countOnly`: Function return an object containing counts of everything that the input object listed
* `eqArrays`: Function compares if two values are equal
* `eqObjects`: Function compares if two objects are equal
* `findKey`: Function returns the first key for which the callback returns a truthy value
* `findKeybyValue`: Function returns key based on matching value
* `flatten`: Function returns an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `head`: Function returns the first element from the array
* `letterPositions`: Function return all the indices (zero-based positions) in the string where each character is found
* `map`: Function returns a new array based on the results of the callback function
* `middle`: Function returns an array with only the middle element
* `tail`: Function returns the tail elements from the array
* `takeUntil`: function will return a slice of the array with elements taken from the beginning until callback criteria met
* `without`: Function takes in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.