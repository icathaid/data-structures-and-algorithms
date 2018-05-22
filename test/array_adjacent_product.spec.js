'use strict';
const matrix = require('../lib/array_adjacent_product.js');

describe('proof of life', () => {
  it('should return 0 and console log proof of life', () => {
    const expected = 0;
    const actual = matrix();
    expect(actual).toEqual(expected);
  });
});