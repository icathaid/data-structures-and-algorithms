'use strict';
const matrix = require('../lib/array_adjacent_product.js');

describe('test function', () => {
  it('should return undefined if given testarrayIncludesUndefined and undefined', () => {
    const actual = matrix();
    expect(actual).toEqual(0);
  });
});
