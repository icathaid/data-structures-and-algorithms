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
  insertBefore(searchFor, insert){
    let nodeToCheck = this.head;
    if(!nodeToCheck){
      return console.log('no node to insert before');
    }
    console.log(nodeToCheck.data);
    while(nodeToCheck.data !== searchFor){
      if(nodeToCheck.next){
        console.log(nodeToCheck.data);
        nodeToCheck = nodeToCheck.next;
      } 
      else {
        return console.log('end of the line, no matches for ' + searchFor);
      }
    }
    console.log('insert ' + searchFor + ' before ' + nodeToCheck.data);
    }
}
  insertAfter(valToChange, newVal){
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
let bill = new NewList(1);
bill.append(2);
bill.append(3);
bill.append(4);
bill.insertBefore();

//  TO DO:
//  write tests!!!
//  check for undefined/null/invalid inputs

//  figure out how to traverse the list within the function
//  write insertBefore(a, b) method
//   traverse to a, new Node(b)