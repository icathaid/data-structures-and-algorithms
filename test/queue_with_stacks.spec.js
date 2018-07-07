'use strict';

const linkedList = require('../lib/queue_with_stacks.js');

describe('enqueue function', () => {
    it('should append the head of an empty list', () => {
        let ted = new linkedList;
        ted.enQ(1);
        expect(ted.head.val).toEqual(1);
    });
    it('should append the head of a populated list and keep the rest of the list intact', () => {
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
    it('should increase the length of a list by one', () => {
        let rufus = new linkedList;
        rufus.enQ('a');
        expect(rufus.head.next).toBeNull();
        rufus.enQ('b');
        expect(rufus.head.next).toBeDefined();
    });
  });
  describe('dequeue function', () => {
      it('should remove the first value from the list', () => {
        let marty = new linkedList;
        marty.enQ('a');
        marty.enQ('b');
        marty.enQ('c');
        expect(marty.head.val).toEqual('c');
        marty.dQ();
        expect(marty.head.val).toEqual('b');
      });
      it('should shift the rest of the list left one position', () => {
        let doc = new linkedList;
        doc.enQ(1);
        doc.enQ(2);
        doc.enQ(3);
        expect(doc.head.next.next.val).toEqual(1);
        expect(doc.head.next.val).toEqual(2);
        expect(doc.head.val).toEqual(3);
        doc.dQ();
        expect(doc.head.next.next).toBeNull;
        expect(doc.head.next.val).toEqual(1);
        expect(doc.head.val).toEqual(2);
      });
      it('should reduce the length of the queue by one more than once', () => {
        let einstein = new linkedList;
        einstein.enQ('ant');
        einstein.enQ('bat');
        einstein.enQ('cat');
        expect(einstein.head.next.next.val).toEqual('ant');
        expect(einstein.head.val).toEqual('cat');
        einstein.dQ();
        einstein.dQ();
        expect(einstein.head.next).toBeNull();
        expect(einstein.head.val).toEqual('ant');
      });
      it('should return an error if called on an empty queue', () => {
          let jenny = new linkedList;
          let actual = jenny.dQ();
          expect(actual).toEqual(-1);
      });
  });