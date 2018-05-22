'use strict';
const search = require('../lib/array_binary_search.js');
var testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var testArray2 = [1, 3, 35, 42, 56, 79, 83];
var testArrayIncludesNull = [3, 5, 7, null, 23, 35, 42];
var testArrayIncludesUndefined = [1, 2, 3, 4, undefined, 5, 6, 7];

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
  it('should return 6 if given testArray2 and 83', () => {
    const expected = 6;
    const actual = search(testArray2, 83);
    expect(actual).toEqual(expected);
  });
  it('should return -1 if given testArray2 and null', () => {
    const expected = -1;
    const actual = search(testArray2, null);
    expect(actual).toEqual(expected);
  });
  it('should return -1 if given testArrayIncludesNull and 35', () => {
    const expected = -1;
    const actual = search(testArrayIncludesNull, 35);
    expect(actual).toEqual(expected);
  });
  it('should return -1 if given testArray1 and undefined', () => {
    const expected = -1;
    const actual = search(testArray1, undefined);
    expect(actual).toEqual(expected);
  });
  it('should return undefined if given testarrayIncludesUndefined and undefined', () => {
    const expected = 4;
    const actual = search(testArrayIncludesUndefined, undefined);
    expect(actual).toEqual(expected);
  });
});
