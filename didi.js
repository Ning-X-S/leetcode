function EventBus (arr, num) {
  this.eventList = {}
  this.on  = function (name, func) {
    if (this.eventList[name]) {
        this.eventList[name].push(func)
    } else {
        this.eventList[name] = [func]
    }
  } 
  this.emit = function (name, arguments) {
    if (this.eventList[name]) {
        this.eventList[name].forEach(item => {
            item.call(this, ...arguments)
        });
    }
  }
}


const events = new EventBus()
events.on('a', (...args) => console.log(args))
events.emit('a', 1, 2)