'use strict';

module.exports = (arr) => {
  var reversedArray = [];
  for(var i = (arr.length -1); i >= 0; i--){
    reversedArray.push(arr[i]);
  }
  return(reversedArray);
};