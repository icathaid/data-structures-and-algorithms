'use strict';
module.exports = function(arr, val){
  var bill = val;
  if(val === null){
    return -1;
  }
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === null){
      return -1;
    }
    if(arr[i] === bill){
      console.log(i);
      return i;
    }
  }
  console.log('No Match Found');
  return -1;
};