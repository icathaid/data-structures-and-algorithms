'use strict';

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
  insertBefore(searchFor, insert){
    let nodeToCheck = this.head;
    if(!nodeToCheck){
      return this.append(insert);
    }
    console.log(nodeToCheck.data);
    while(nodeToCheck.data !== searchFor){
      if(nodeToCheck.next){
        nodeToCheck = nodeToCheck.next;
      } 
      else {
        return -5;
      }
    }
    console.log('insert ' + searchFor + ' before ' + nodeToCheck.data);
    let holderA, holderB;
    while(nodeToCheck.next){
      holderA = nodeToCheck.data;
      nodeToCheck.data = insert;
      nodeToCheck = nodeToCheck.next;
      holderB = nodeToCheck.data;
      nodeToCheck.data = holderA;
    }
    nodeToCheck.next = new Node(holderB);
    return this;
  }
}

module.exports = NewList;
let bill = new NewList(1);
bill.append(2);
bill.append(3);
bill.append(4);
