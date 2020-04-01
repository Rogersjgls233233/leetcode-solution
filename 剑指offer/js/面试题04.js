/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

var findNumberIn2DArray = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j of matrix[i]) {
      if (j === target) {
        return true;
      }
    }
  }
  return false;
};
