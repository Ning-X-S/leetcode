const { type } = require("os")

function add() {
  let args = [...arguments] 
  let fn = function () { 
    console.log(1,2,3)
    args.push(...arguments) 
    return fn 
  } 
  fn.toString = function () { 
    return args.reduce((x,y) => x+y) 
  } 
  return fn 
}

add(1)(2)(3)

function combination (arr) {
  let result = []
  function a (temp) {
    if (temp.length === arr.length) {
      result.push(temp)
    }
    for (let i = 0; i < arr.length; i++) {
      if (temp.includes(arr[i])) continue
      a(temp.concat(arr[i]))
    }
  }
  a([])
  return result
}

console.log(combination(['a','b','c','d']))




function test1(arr) {
  let result = []

  function xixi(temp) {
    if (temp.length === arr.length) {
      result.push(temp)
    }
    for (let i = 0; i < arr.length; i++) {
      if(temp.includes(arr[i])) continue
      xixi(temp.concat(arr[i]))
    }
  }
  xixi([])
  return result
}


console.log(test1(['a','b','c','d']))



function sum () {
  let args = [...arguments]
  let fn = function () {
    args.push(...arguments)
    return fn
  }
  fn.toString = function () {
    return args.reduce((x, y) => x + y)
  }
  return fn
}

console.log(sum(1)(2)(3).toString())



function newFun (fn, ...arguments) {
  if (typeof fn !== 'function') {
    throw new Error('fn is not a function')
  }
  let result = Object.create({})
  result.__proto__ = fn.prototype
  
  let res = fn.apply(result, arguments)
  return res instanceof Object ? res : result
}

function test (name) {
  this.name = name
  this.num = 1
  // return {
  //   a: 1
  // }
}

const result = newFun(test, 'qwj')

console.log(result)


class EventEmitter {
  constructor() {
    this.eventObj = {}
  }
  on (name, callback) {
    if (this.eventObj[name]) {
      this.eventObj[name].push(callback)
    } else {
      this.eventObj[name] = [callback]
    }
  }

  emit (name, ...args) {
    if (this.eventObj[name]) {
      this.eventObj[name].forEach(item => {
        item.call(this, ...args)
      })
    } 
  }
}

const event = new EventEmitter()
console.log(event)

const handle = (...pyload) => console.log(pyload)

event.on('click', handle)
event.emit('click', 1, 2, 3)




function isValid (str) {
  if (!str.trim()) return true
  let startStr = ['{','[','(']
  let endStr = ['}',']',')']
  let stack = []
  let isBreak = -1
  for (let i = 0; i < str.length; i++) {
    if (startStr.indexOf(str[i]) > -1) {
      stack.push(str[i])
    } else {
      let index =  endStr.indexOf(str[i])
      if (index > -1) {
        if (!stack.length || startStr[index] !== stack.pop()) {
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


















function valid (str) {
  if (!str.trim()) return true
  let startStr = ['(', '[', '{']
  let endStr = [')', ']', '}']
  let stack = []
  let isBreak = -1
  for (let i = 0; i < str.length; i++) {
    if (startStr.indexOf(str[i]) > -1) {
      stack.push(str[i])
    } else {
      let index = endStr.indexOf(str[i])
      if ( index > -1) {
        if (!stack.length || startStr[index] !== stack.pop()) {
          isBreak = index
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

console.log(valid('({})[]{}'))


const twoSum = (nums, target) => {
  const prevNums = {};                    // 存储出现过的数字，和对应的索引               

  for (let i = 0; i < nums.length; i++) { // 遍历元素   
    const curNum = nums[i];               // 当前元素   
    const targetNum = target - curNum;    // 满足要求的目标元素   
    const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
    if (targetNumIndex !== undefined) {   // 如果存在，直接返回 [目标元素的索引,当前索引]
      return [targetNumIndex, i];
    } else {                              // 如果不存在，说明之前没出现过目标元素
      prevNums[curNum] = i;               // 存入当前的元素和对应的索引
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9))

function twoSumMe(nums, target) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i]
    if (nums.indexOf(temp) > -1 && nums.indexOf(temp) !== i) {
      result.push(...[i, nums.indexOf(temp)])
      break
    }
  }
  return result
}

console.log(twoSumMe([2, 7, 11, 15], 9))

let condition = false
if (condition) {
  console.log('true');
} else {
  console.error('false');
}
