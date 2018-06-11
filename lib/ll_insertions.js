'use strict';

module.exports = (value) => {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class NumberList {
    constructor(value){
      var firstNode = new Node(value);
      this.head = value;
      this.length++;
    }
    append(val) {
      const newNode = { value };
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }
};



//  TO DO:
//  write tests!!!
//  check for undefined/null/invalid inputs

//  figure out how to traverse the list within the function
//  write insertBefore(a, b) method
//   traverse to a, new Node(b)