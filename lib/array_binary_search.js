'use strict';
var testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var testArray2 = [1, 3, 35, 42, 56, 79, 83];

function BinarySearch(arr, val){
  var bill = val;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === bill){
      console.log(i);
      return i;
    }
  }
  console.log('No Match Found');
  return -1;
}

BinarySearch(testArray1, 3);
BinarySearch(testArray2, 57);
