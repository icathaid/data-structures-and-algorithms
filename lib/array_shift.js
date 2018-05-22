'use strict';
module.exports = function(arr, val){
  const outputArr = [];
  if (arr.length < 1){
    return 'You entered an empty array';
  }
  if (arr.includes(null) === true){
    return 'You entered an array with a null value';
  }
  if (val === null){
    return 'You entered a null value';
  }
  if (arr.includes(undefined) === true){
    return 'You entered an array with an undefined element';
  }
  if (val === undefined){
    return 'You entered an undefined value';
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