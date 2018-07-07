'use strict';

class linkedList {
  constructor() {
    this.head = null;
  }
  enQ(val){
    let node = new Node(val);
    if(!this.head){
        this.head = node;
    }
    else {
        let bill = this.head;
        this.head = node;
        this.head.next = bill;
        return this.head.val;
    }
  }
  dQ(){
    if(!this.head || !this.head.next){
      return -1;
    };
    const val = this.head.val;
    this.head = this.head.next;
    return val
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = linkedList;