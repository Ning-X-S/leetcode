function newTest (func, ...args) {
  if (typeof func !== 'function') {
    throw new Error('func is not a function')
  }
  console.log(func.prototype)
  const newObj = Object.create(func.prototype)
  console.log(...arguments)
  const res = func.apply(newObj, args)
  return res instanceof Object ? res : newObj
}

function test (name) {
  this.name = name
  this.num = 1
  return {
    a: 1
  }
}

const result = newTest(test, 'qwj')

console.log(result)
