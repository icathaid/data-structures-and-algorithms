'use strict';

const shift = require('../lib/array_shift.js');
var testArray1 = [1, 2, 3, 4, 5];

describe('shift module', () => {
  it('should return [1, 2, 3, 16, 4, 5] if given testArray1 and 16', () => {
    const expected = [1, 2, 3, 16, 4, 5];
    const actual = shift(testArray1, 16);
    expect(actual).toEqual(expected);
  });
});