'use strict';
const reverse = require('../lib/array_reverse.js');
const testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


describe('reverse module', () => {
  it('should return a reversed array if given testArray1', () =>{
    const expected = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const actual = reverse(testArray1);
    expect(actual).toEqual(expected);
  });
});