'use strict';
const bill = require('../lib/ll_insertions.js');

describe('linked list creation module', () => {
  it('should return 5 if given 5 on an empty list', () => {
    const actual = bill(5).head;
    expect(actual).toEqual(5);
  });
  it('should return undefined if given no value on an empty list', () => {
    const actual = bill().head;
    expect(actual).toBeUndefined();
  });
});

describe('append module', () => {
  it('should return 6 if list is appended with 6', () => {
    const ted = bill(1);
    ted.append(6);
    ted.append(7);
    expect(ted.head).toEqual(1);
  });
});