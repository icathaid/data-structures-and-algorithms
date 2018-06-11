'use strict';
// module.exports = (val) => {
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(val){
    this.head = null;
    this.length = 0;
  }
  append(val) {
    let newNode = new Node(val);
    let nodeToCheck = this.head;
    if(!nodeToCheck){
      this.head = newNode;
      this.length++;
      return newNode;
    }
    while(nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }
    nodeToCheck.next = newNode;
    this.length++;
    return newNode;
  }
  lookFor(nodeID){
    let currentNode = this.head;
    let nodeCounter = 0;
    while(nodeCounter < nodeID - 1){
      nodeCounter++;
      if(currentNode.next){
        currentNode = currentNode.next;
      } else {
        console.log('Exception');
        return 'Exception';
      }
    }
    console.log(currentNode.data);
    return currentNode.data;
  }
}
let bill = new LinkedList();
bill.append('one');
bill.append('two');
bill.append('three');
bill.append('four');
bill.append('five');
bill.lookFor(1);
bill.lookFor(3);
bill.lookFor(6);
// };