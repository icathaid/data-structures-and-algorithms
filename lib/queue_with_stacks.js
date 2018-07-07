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
    const val = this.head.val;
    // need error checking for (!this.head) && (!this.head.next) 
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