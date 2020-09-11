// https://leetcode-cn.com/problems/permutations/
/* eslint-disable no-extend-native */
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array
// eslint-disable-next-line no-extend-native
Array.prototype.swap = function (index, otherIndex) {
  var valueAtIndex = this[index]

  this[index] = this[otherIndex]
  this[otherIndex] = valueAtIndex
}

Array.prototype.permutation = function permutation (array, n) {
  array = array || this
  n = n || this.length

  var result = []

  if (n === 1) {
    result = [array.slice()]
  } else {
    const nextN = n - 1

    for (var i = 0; i < nextN; i++) {
      //   console.log(...permutation(array, nextN))
      result.push(...permutation(array, nextN))
      array.swap(Number(!(n % 2)) && i, nextN)
    }

    result.push(...permutation(array, nextN))
  }

  return result
}

// console.log([1, 2, 3, 4].permutation())

// https://leetcode-cn.com/problems/permutation-i-lcci/solution/javascript-jian-dan-yi-dong-hui-su-suan-fa-by-mich/
var permutation = function (S) {
  const res = []
  backtrack('')
  return res
  function backtrack (str) {
    // 符合字符串长度则收集
    if (str.length === S.length) {
      res.push(str)
    }
    for (let i = 0; i < S.length; i++) {
      // 去除重复字符，比如：字符串为'ab'， 去掉'aa'或'bb'这类情况
      if (str.indexOf(S[i]) !== -1) {
        continue
      }
      // 递归：回溯的通用公式
      backtrack(str + S[i])
    }
  }
}

// console.log(permutation([1, 2, 3, 4]))

// https://github.com/azl397985856/leetcode/blob/master/problems/46.permutations.md

function backtrack (list, tempList, nums) {
  if (tempList.length === nums.length) return list.push([...tempList])
  for (let i = 0; i < nums.length; i++) {
    if (tempList.includes(nums[i])) continue
    tempList.push(nums[i])
    backtrack(list, tempList, nums)
    tempList.pop()
  }
}
/**
     * @param {number[]} nums
     * @return {number[][]}
     */
function permute (nums) {
  const list = []
  backtrack(list, [], nums)
  return list
}
// console.log(permute([1, 2, 3, 4]))

function test (arr) {
  const result = []
  function a (temp) {
    if (temp.length === arr.length) result.push(temp)
    for (let i = 0; i < arr.length; i++) {
      if (temp.includes(arr[i])) continue
      a(temp.concat(arr[i]))
    }
  }
  a([])
  return result
}

console.log(test(['a', 'b', 'c', 'd']))

// 有权访问函数体内局部变量的函数，称为闭包，闭包利用了作用域的机制，来达到外部作用域可访问内部作用域的目的
// 有权访问函数体内局部变量的函数，称为闭包。闭包利用了作用域的机制，来达到外部作用域可访问内部作用域的目的。
// 闭包就是有权访问函数体内局部变量的函数，它利用了作用域的机制，来达到外部作用域可访问局部作用域的目的。
