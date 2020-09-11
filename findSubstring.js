// https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/

/* eslint-disable no-extend-native */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  var result = []
  function permutationMe (arr) {
    const result1 = []
    function backtrack (temp) {
      if (temp.length === arr.length) {
        result1.push(temp)
      }
      for (let i = 0; i < arr.length; i++) {
        // 去除重复字符，比如：字符串为'123'， 去掉已经出现的，1，2，3
        if (temp.includes(arr[i])) continue
        backtrack(temp.concat([arr[i]]))
      }
    }
    backtrack([])
    return result1
  }
  const arr = permutationMe(words)
  console.log(arr)
  arr.forEach((item) => {
    console.log(s.indexOf(item.join('')))
    if (s.indexOf(item.join('')) > -1) result.push(s.indexOf(item.join('')))
  })
  return result
}

console.log(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good']))

// https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array
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

// 然后自己写的
function permutationMe (arr) {
  const result = []
  function backtrack (temp) {
    if (temp.length === arr.length) {
      result.push(temp)
    }
    for (let i = 0; i < arr.length; i++) {
      // 去除重复字符，比如：字符串为'123'， 去掉已经出现的，1，2，3
      if (temp.includes(arr[i])) continue
      backtrack(temp.concat([arr[i]]))
    }
  }
  backtrack([])
  return result
}

console.log(permutationMe(['a', 'b', 'c', 'd']))
