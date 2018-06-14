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
  insertBefore(index, val){
    //  NEEDS TO SEARCH FOR .data, not index position
    //  while(this.data !== val)
    //  {this = this.next}
    //  var = this.data
    //  this.head = val
    //  this.next.data = var
    //  while (this.next)
    //    this.data = this.next.data
    //  this.next = null
    //  return this
  }
  insertAfter(index, val){
    //  while(this.data !== val)
    //  {this = this.next}
    //  var = this.next.data
    //  this.next.data = val
    //  while (this.next)
    //    this.data = this.next.data
    //  this.next = null
    //  return this
  }
}
module.exports = NewList;



//  TO DO:
//  write tests!!!
//  check for undefined/null/invalid inputs

//  figure out how to traverse the list within the function
//  write insertBefore(a, b) method
//   traverse to a, new Node(b)