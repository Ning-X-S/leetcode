function EventEmitter () {
  this.emitList = {}
  this.on = function (eventName, callback) {
    if (this.emitList[eventName]) {
      this.emitList[eventName].push(callback)
    } else {
      this.emitList[eventName] = [callback]
    }
  }
  this.emit = function (eventName, ...rest) {
    if (this.emitList[eventName]) {
      this.emitList[eventName].forEach(item => {
        item.apply(this, rest)
      })
    }
  }
  this.remove = function (eventName, callback) {
    if (this.emitList[eventName]) {
      this.emitList[eventName].filter(item => {
        return item !== callback
      })
    }
  }
  this.once = function (eventName, callback) {
    const fn = () => {
      callback()
      this.remove(eventName, fn)
    }
    this.on(eventName, fn)
  }
  this.off = function (name, callback) {
    const fns = this.emitList[name]
    if (Array.isArray(fns)) {
      if (callback) {
        const index = fns.indexOf(callback)
        if (index !== -1) {
          fns.splice(index, 1)
        }
      } else {
        // 全部清空
        fns.length = 0
      }
    }
    return this
  }
}

const events = new EventEmitter()

const handle = (...pyload) => console.log(pyload)

events.on('click', handle)
events.on('click', () => { console.log(111) })
events.emit('click', 1, 2, 3)
events.off('click', handle)
events.emit('click', 1, 2, 3)
// console.log(events)
