'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class numberList {
  constructor(value){
    this.head = value;
    this.length = 1;
  }
  append(data) {
    const newNode = new Node(data);
    this.head = data;
    this.length++;
    return newNode;
  }
}

let bill = new numberList(5);
console.log('plain bill', bill);
bill.append(7);
console.log('appended bill', bill);


