// https://leetcode-cn.com/problems/two-sum/

// 给定一个整数数组nums和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

function twoSum (nums, target) {
  const result = []
  try {
    nums.forEach((item, index) => {
      for (let i = index + 1; i < nums.length; i++) {
        if (item + nums[i] === target) {
          result.push(index)
          result.push(i)
          throw new Error()
        }
      }
    })
  } catch (error) {
    return result
  }
  return result
}

console.log(twoSum([2, 7, 11, 15], 12))
