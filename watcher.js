function Watchers () {
  this.observers = []
  this.add = function (name) {
    this.observers.push(name)
  }
  this.notify = function (...args) {
    this.observers.forEach(item => {
      item.update(...args)
    })
  }
}

function Observer (name) {
  this.name = name
  this.update = function () {
    console.log(JSON.stringify(...arguments) + this.name)
  }
}

const a = new Observer('testa')

const b = new Observer('testb')

const c = new Watchers()

c.add(a)
c.add(b)

c.notify('123', 2222)
