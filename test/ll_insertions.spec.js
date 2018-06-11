'use strict';
const bill = require('../lib/ll_insertions.js');

describe('linked list creation module', () => {
  xit('should return 5 if given 5 on an empty list', () => {
    const actual = bill(5).head;
    expect(actual).toEqual(5);
  });
  xit('should return undefined if given no value on an empty list', () => {
    const actual = bill().head;
    expect(actual).toBeUndefined();
  });
});

describe('append module', () => {
  it('console logs', () => {
    const ted = bill(1);
    console.log('ted', ted);
    console.log('ted.head', ted.head);
    console.log('ted.next.data', ted.next.data);
    expect(1).toEqual(1);
  });
  xit('should return a head of 1 even if list is appended with 6', () => {
    const ted = bill(1);
    ted.append(6);
    console.log(ted.head.data);
    expect(ted.head.data).toEqual(1);
  });
  xit('should return 6 when appended with 6', () => {
    const ted = bill(1);
    ted.append(6);
    expect(ted.next.data).toEqual(6);
  });
  xit('should return -1 when appended with a whole bunch of stuff', () => {
    const ted = bill(1);
    ted.append(6);
    ted.append(7);
    console.log(ted);
    expect(ted.next.data).toEqual(6);
  });
});