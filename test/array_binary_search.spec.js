'use strict';
const search = require('../lib/array_binary_search.js');
var testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var testArray2 = [1, 3, 35, 42, 56, 79, 83];

describe('binary search module', () => {
  it('should return the index position (3) when given testArray1 and 4', () => {
    const expected = 3;
    const actual = search(testArray1, 4);
    expect(actual).toEqual(expected);
  });
  it('should return -1 if given testArray1 and 16', () => {
    const expected = -1;
    const actual = search(testArray1, 16);
    expect(actual).toEqual(expected);
  });
});
