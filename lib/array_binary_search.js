'use strict';
module.exports = function(arr, val){
  var bill = val;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === bill){
      console.log(i);
      return i;
    }
  }
  console.log('No Match Found');
  return -1;
};


// function BinarySearch(arr, val){
//   var bill = val;
//   for(var i = 0; i < arr.length; i++){
//     if(arr[i] === bill){
//       console.log(i);
//       return i;
//     }
//   }
//   console.log('No Match Found');
//   return -1;
// }
// // BinarySearch(testArray1, 3);
