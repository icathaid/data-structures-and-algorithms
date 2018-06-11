'use strict';
const NewList = require('../lib/ll_insertions.js');

describe('Linked List Module', () => {
  it('Should return an empty node object when called with no params', () => {
    let bill = new NewList();
    expect(bill).toHaveProperty('data');
    expect(bill.data).toBeUndefined();
  });
  it('Should return head:1, next: null when called with 1', () => {
    let bill = new NewList(1);
    expect(bill.data).toEqual(1);
    expect(bill.next).toBeNull();
  });
  it('Should return return 2 when appended', () => {
    let bill = new NewList(1);
    bill.append(2);
    console.log(bill);
    expect(bill.head.next.data).toEqual(2);
    expect(bill.next.next).toBeNull();
  });
});