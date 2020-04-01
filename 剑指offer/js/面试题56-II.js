/**
 * @param {number[]} nums
 * @return {number}
 */
// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
var singleNumber = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = true;
    } else {
      hash[nums[i]] = false;
    }
  }
  for (let item in hash) {
    if (hash[item]) {
      return item;
    }
  }
};
