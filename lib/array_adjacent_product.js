'use strict';
module.exports = () => {
  // construct this with a for loop
  var arr1 = [1, 2, 3];
  var arr2 = [4, 5, 6];
  var mat1 = [[1, 2], [3, 4]];

  for (var i = 0; i < mat1[0].length; i++){
    for(var j = 0; j < mat1[1].length){
      console.log(mat1[1] + ', ' + mat1[j]);
    };
  }
  return 0;
};
