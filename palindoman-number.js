// https://leetcode-cn.com/problems/palindrome-number/

// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:
// 输入: 121
// 输出: true

// 示例 2:
// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

var isPalindrome = function (x) {
  var a = x.toString()
  var arr = a.split('')
  var c = arr.reverse().join('')
  return a === c
}

console.log(isPalindrome(121))
