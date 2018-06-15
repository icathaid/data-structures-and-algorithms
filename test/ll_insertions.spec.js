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
  it('Should return 3 when called as an empty list and appended', () => {
    let bill = new NewList();
    bill.append(1);
    bill.append(2);
    bill.append(3);
    expect(bill.head.next.data).toEqual(2);
    expect(bill.head.next.next.data).toEqual(3);
    expect(bill.head.next.next.next).toBeNull();
  });
});

describe('Linked List Insert Before Method', () => {
  let bill = new NewList(1);
  bill.append(3);
  bill.append(2);
  it('Should return a new node with the inserted value if called on an empty list', () => {
    let ted = new NewList();
    ted.insertBefore(3, -1);
    expect(ted.head.data).toEqual(-1);
    console.log(ted);
  });
  it('Should return an error if no match is found', () => {
    let actual = bill.insertBefore(6, -1);
    expect(actual).toEqual(-5);
    //  figure out how to return exception
  });
  it('Should insert 7 before 3', () => {
    const beforeA = bill.head.next.data;
    const beforeB = bill.head.next.next.data;
    bill.insertBefore(3, 5);
    //  add var for each node position and check against case test
    const afterA = bill.head.next.data;
    const afterB = bill.head.next.next.data;
    expect(beforeA).toEqual(3);
    expect(beforeB).toEqual(2);
    expect(afterA).toEqual(5);
    expect(afterB).toEqual(3);
  });
  it('Should insert 9 before 1', () => {

  });
});

describe('Linked List Insert After Method', () => {
  it('Should return an error if no match is found', () => {

  });
  it('Should insert 7 after 3', () => {

  });
  it('Should insert 9 after 1', () => {

  });
});