'use strict';

const matrix = require('../lib/array_adjacent_product.js');

describe('test function', () => {
  it('should return 12 if given var1', () => {
    expect(matrix(var1)).toEqual(12);
  });
  it('should return 30 if given var2', () => {
    expect(matrix(var2)).toEqual(30);
  });
  it('should return 56 if given var3', () => {
    expect(matrix(var3)).toEqual(56);
  });
  it('should return 56 if given var4', () => {
    expect(matrix(var4)).toEqual(56);
  });
  it('should return 9 if given var5', () => {
    expect(matrix(var5)).toEqual(9);
  });
  it('should return 72 if given var6', () => {
    expect(matrix(var6)).toEqual(72);
  });
  it('should return 81 if given var7', () => {
    expect(matrix(var7)).toEqual(81);
  });
  var var1 = [[1, 2], [3, 4]];
  var var2 = [[1, 2, 3], [4, 5, 6]];
  var var3 = [[2, 4, 6, 8], [1, 3, 5, 7]];
  var var4 = [[7, 5, 3, 1], [8, 6, 4, 2]];
  var var5 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
  var var6 = [[10, 2, 3], [4, 5, 6], [7, 8, 9]];
  var var7 = [[6, 3, 7, 5], [4, 6, 7, 9], [1, 5, 9, 3], [1, 4, 8, 3]];
});