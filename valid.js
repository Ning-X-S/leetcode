function isValid (str) {
  if (!str.trim()) return true
  const stack = []
  const keys = [')', ']', '}']
  const values = ['(', '[', '{']
  let isBreak = -1
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i)
    if (values.includes(char)) {
      // 开始
      stack.push(char)
    } else {
      const index = keys.indexOf(char)
      if (index > -1) {
        // 闭合
        if (!stack.length || values[index] !== stack.pop()) {
          isBreak = i
          break
        }
      }
    }
  }
  if (isBreak > -1) {
    return false
  }
  return stack.length === 0
}

console.log(isValid('({})[]{}'))

function combination (arr) {
  const result = []
  function haha (temp) {
    if (temp.length === arr.length) result.push(temp)
    for (let i = 0; i < arr.length; i++) {
      if (temp.includes(arr[i])) continue
      haha(temp.concat(arr[i]))
    }
  }
  haha([])
  return result
}

console.log(combination(['a', 'b', 'c', 'd']))

function newFun (fun, ...args) {
  const obj = new Object()
  obj.__proto__ = fun.prototype
  const res = fun.call(obj, ...args)
  if (res instanceof Object) {
    return res
  } else {
    return obj
  }
}

function test2 (name, age) {
  this.name = name
  this.age = age
  this.num = 1
  // return {
  //   a: 1,
  //   b: 2
  // }
}

const result = newFun(test2, 'qwj', 12)

console.log(result)

var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target)
  } else {
    const index = nums.findIndex(item => item > target)
    return index === -1 ? nums.length : index
  }
}

console.log(searchInsert([1, 3, 5], 2))

