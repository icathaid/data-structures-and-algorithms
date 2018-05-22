'use strict';

const shift = require('../lib/array_shift.js');
var testArray1 = [1, 2, 3, 4, 5];
var testArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var testArrayIncludesNull = [1, 2, 3, null, 4, 5];
var testArrayIsNull = [null];
var testArrayEmpty = [];
var testArrayIncludesUndefined = [1, 2, 3, undefined, 4, 5];

describe('shift module', () => {
  //  test with even number input array
  it('should return [1, 2, 3, 16, 4, 5] if given testArray1 and 16', () => {
    const expected = [1, 2, 3, 16, 4, 5];
    const actual = shift(testArray1, 16);
    expect(actual).toEqual(expected);
  });
  //  test with odd number input array
  it('should return [1, 2, 3, 4, 5, 42, 6, 7, 8, 9, 10] if given testArray2 and 42', () => {
    const expected = [1, 2, 3, 4, 5, 42, 6, 7, 8, 9, 10];
    const actual = shift(testArray2, 42);
    expect(actual).toEqual(expected);
  });
  //  test for null single input value
  it('should return an error message if given testArray1 and null', () => {
    const expected = 'You entered a null value';
    const actual = shift(testArray1, null);
    expect(actual).toBe(expected);
  });
  //  test for null element within input array
  it('should return an error message if given testArrayIncludesNull and 35', () => {
    const expected = 'You entered an array with a null value';
    const actual = shift(testArrayIncludesNull, 35);
    expect(actual).toBe(expected);
  });
  //  test for array with only null
  it('should return an error message if given testArrayIsNull and 89', () => {
    const expected = 'You entered an array with a null value';
    const actual = shift(testArrayIsNull, 89);
    expect(actual).toBe(expected);
  });
  //  test for empty array
  it('should return an error message if given testArrayEmpty and 12', () => {
    const expected = 'You entered an empty array';
    const actual = shift(testArrayEmpty, 12);
    expect(actual).toBe(expected);
  });
  // test for undefined val
  it('should return an error message if given testArray1 and undefined', () => {
    const expected = 'You entered an undefined value';
    const actual = shift(testArray1, undefined);
    expect(actual).toBe(expected);
  });
  // test for array with undefined element
  it('should return an error message if given testArrayIncludes Undefined and 45', () => {
    const expected = 'You entered an array with an undefined element';
    const actual = shift(testArrayIncludesUndefined, 45);
    expect(actual).toBe(expected);
  });
});