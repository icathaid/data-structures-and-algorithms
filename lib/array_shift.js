'use strict';
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
var outputArr = [];
module.exports = function(arr, val){
  if (typeof arr  === null){
    return null;
  }
  if (typeof val === null){
    return null;
  }
  var middle = Math.round(arr.length/2);
  for(var i = 0; i < middle; i++){
    outputArr.push(arr[i]);
  }
  outputArr.push(val);
  for (var j = middle; j < arr.length; j++){
    outputArr.push(arr[j]);
  }
  return outputArr;
};