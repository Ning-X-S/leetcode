/* eslint-disable no-extend-native */
// 无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。

// 示例1:
//  输入：S = "qwe"
//  输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]

// 示例2:
//  输入：S = "ab"
//  输出：["ab", "ba"]

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
