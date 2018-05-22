'use strict'
function reverse(arr){
    var reversedArray = [];
    for(var i = (arr.length - 1); i >= 0; i--){
        reversedArray.push(arr[i]);
    };
    console.log(reversedArray);
};
