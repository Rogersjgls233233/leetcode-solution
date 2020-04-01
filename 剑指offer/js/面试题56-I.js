/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
var singleNumbers = function(nums) {
  //hash
  let hash = {};
  let res = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = 1;
    } else {
      delete hash[nums[i]];
    }
  }
  for (let j in hash) {
    res.push(j);
  }
  return res;
};
