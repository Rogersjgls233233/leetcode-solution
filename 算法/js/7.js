/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var isNegative = x < 0 ? true : false;
  var target = (isNegative ? -x : x)
    .toString()
    .split('')
    .reverse()
    .join('');
  target = isNegative ? -target : +target;
  var outRange = target < Math.pow(-2, 31) || target > Math.pow(2, 31) - 1;
  // 如果溢出则返回0
  return outRange ? 0 : target;
};
