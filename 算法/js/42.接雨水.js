// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let sum = 0;
  for (let index = 1; index < height.length - 1; index++) {
    let leftMax = 0;
    for (let i = index - 1; i >= 0; i--) {
      leftMax = leftMax > height[i] ? leftMax : height[i];
    }
    let rightMax = 0;
    for (let j = index + 1; j < height.length; j++) {
      rightMax = rightMax > height[j] ? rightMax : height[j];
    }
    let min = Math.min(leftMax, rightMax);
    if (min > height[index]) {
      sum = sum + min - height[index];
    }
  }
  return sum;
};
