var oInput1 = document.getElementById('input1')
var oInput2 = document.getElementById('input2')
var oSpan = document.getElementById('span')
var obj = {}
Object.defineProperties(obj, {
  val1: {
    // configurable: true,
    get: function () {
      oInput1.value = 0
      oInput2.value = 0
      oSpan.innerHTML = 0
      return 0
    },
    set: function (newValue) {
      oInput2.value = newValue
      oSpan.innerHTML = Number(newValue) ? Number(newValue) : 0
    }
  },
  val2: {
    // configurable: true,
    get: function () {
      oInput1.value = 0
      oInput2.value = 0
      oSpan.innerHTML = 0
      return 0
    },
    set: function (newValue) {
      oInput1.value = newValue
      oSpan.innerHTML = Number(newValue) + 1
    }
  }
})
// oInput1.value = obj.val1
oInput1.addEventListener('keyup', function () {
  obj.val1 = oInput1.value
}, false)
oInput2.addEventListener('keyup', function () {
  obj.val2 = oInput2.value
}, false)
setTimeout(() => {
  console.log(obj.val1)
}, 5000)
