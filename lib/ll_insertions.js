'use strict';

// module.exports =
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class NewList {
  constructor(value){
    this.head = null;
    this.length = 0;
    if(value){
      this.head = new Node(value);
      this.length++;
    }
    return this;
  }
  append(val) {
    let newNode = new Node(val);
    let nodeToCheck = this.head;
    if(!nodeToCheck){
      this.head = newNode;
      this.length++;
      return newNode;
    }
    while(nodeToCheck.next){
      nodeToCheck = nodeToCheck.next;
    }
    nodeToCheck.next = newNode;
    this.length++;
    return newNode;
  }
}
module.exports = NewList;



//  TO DO:
//  write tests!!!
//  check for undefined/null/invalid inputs

//  figure out how to traverse the list within the function
//  write insertBefore(a, b) method
//   traverse to a, new Node(b)