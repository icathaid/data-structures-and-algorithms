'use strict';
const NewList = require('../lib/ll_insertions.js');

describe('Linked List Module', () => {
  it('Should return an empty node object when called with no params', () => {
    let bill = new NewList();
    expect(bill.next).toBeUndefined();
    expect(bill.length).toEqual(0);
  });
});
describe('Linked List Append Method', () => {
  it('Should return head:1, next: null when called with 1', () => {
    let bill = new NewList(1);
    expect(bill.head.data).toEqual(1);
    expect(bill.head.next).toBeNull();
  });
  it('Should return return 2 when appended', () => {
    let bill = new NewList(1);
    bill.append(2);
    expect(bill.head.next.data).toEqual(2);
    expect(bill.head.next.next).toBeNull();
  });
  it('Should return 3 when appended again', () => {
    let bill = new NewList(1);
    bill.append(2);
    bill.append(3);
    expect(bill.head.next.data).toEqual(2);
    expect(bill.head.next.next.data).toEqual(3);
    expect(bill.head.next.next.next).toBeNull();
  });
});
describe('Linked List InsertBefore Method', () => {
  
});