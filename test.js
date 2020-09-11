/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-prototype-builtins */
// function test (obj, arr = []) {
//   const result = arr
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (key === 'd' && obj[key]) {
//         result.push(obj[key])
//       } else if (typeof obj[key] === 'object') {
//         test(obj[key], result)
//       }
//     }
//   }
//   return result
// }

// const X = {
//   y: {
//     c: {
//       d: 1
//     }
//   },
//   z: {
//     e: {
//       d: 2
//     }
//   },
//   q: {
//     f: {
//       d: 3
//     }
//   },
//   o: {
//     m: {
//       g: {
//         h: {
//           d: 4
//         }
//       }
//     }
//   }
// }

// console.log(test(X, []))

// 用 Promise 实现一个函数，每 5s 判断一个随机数是否大于 3，大于则打印一句日志 continue，小于则结束流程，若随机数一直大于 3，程序在 60s 后也结束，并打印 done

// function test () {
//   return new Promise((resolve, reject) => {
//     let time = 0
//     const timer = setInterval(() => {
//       if (parseInt(Math.random() * 10) > 3) {
//         console.log('continue')
//         time += 5
//         if (timer === 60) {
//           clearInterval(timer)
//           resolve(time)
//         }
//       } else {
//         clearInterval(timer)
//         resolve('end')
//       }
//     }, 5000)
//   })
// }
// test()
// console.log()

class Test {
  construtor () {
    this.eventsName = {}
  }

  on () {
    this.eventsName.forEach(item => {
      this[item] = function () {
        console.log(arguments)
      }
    })
  }

  emit () {
    console.log(this.eventsName)
    this.eventsName[arguments[0]] = function () {
      this.on(...arguments)
    }
  }
}

const a = new Test()
// const EventEmitter = require('event')
// const event = new EventEmitter()
a.emit('someEvent', 'arg1', 'arg2')

a.on('some_event', (...args) => {
  console.log('some_event triggered', ...args)
})
