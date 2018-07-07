'use strict';

const linkedList = require('../lib/queue_with_stacks.js');

describe('enqueue function', () => {
    it('should append the head of an empty list', () => {
        let ted = new linkedList;
        ted.enQ(1);
        expect(ted.head.val).toEqual(1);
    });
    it('should append the head of a list and keep the rest of the list intact', () => {
        let bill = new linkedList;
        bill.enQ(1);
        console.log(bill.head.val);
        bill.enQ(2);
        console.log(bill.head.next.val);
        bill.enQ(3);
        console.log(bill.head.next.next.val);
        expect(bill.head.val).toEqual(3);
        expect(bill.head.next.val).toEqual(2);
        expect(bill.head.next.next.val).toEqual(1);
    });
    it('should append the head of a populated list', () => {
        
    });
  });