'use strict';
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class NumberList {
  constructor(value){
    this.head = value;
    this.length = 1;
  }
  append(data) {
    const newNode = new Node(data);
    this.head = data;
    this.length++;
    return newNode;
    //  This needs to check for existing nodes or it just rewrites the first head value instead of adding to the list.
  }
}
module.exports = (value) => {
  return new NumberList(value);
};
//  TO DO:
//  write tests!!!
//  check for undefined/null/invalid inputs

//  figure out how to traverse the list within the function
//  write insertBefore(a, b) method
//   traverse to a, new Node(b)