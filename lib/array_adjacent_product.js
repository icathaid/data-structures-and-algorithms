'use strict';
module.exports = (arr) => {  
  var topNum = 0;
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if((arr[i][j + 1]) && arr[i][j] * arr[i][j + 1] > topNum){
        //  check to the right
        topNum = arr[i][j] * arr[i][j + 1];
      }
      if((i + 1 < arr.length) && arr[i][j] * arr[i + 1][j] > topNum){
        //  check to the bottom
        topNum = arr[i][j] * arr[i + 1][j];
      }
      if((i + 1 < arr.length) && arr[i][j] * arr[i + 1][j + 1] > topNum){
        //  check to the bottom right
        topNum = arr[i][j] * arr[i + 1][j + 1];
      }
      if(i > 0 && j < arr[i].length && arr[i][j] * arr[i - 1][j + 1] > topNum){
        //  check to the upper right
        topNum = arr[i][j] * arr[i - 1][j + 1];
      }
    }
  }
  return topNum;
};