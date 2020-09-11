const url = 'https%25253A%25252F%25252Fkknews.cc%25252Fcode%25252Fv3pbyel.html%25253Fid%25253D1'
function test (str) {
  if (decodeURIComponent(str) === str) {
    return str
  } else {
    // return arguments.callee(decodeURIComponent(str))
    return test(decodeURIComponent(str))
  }
}

console.log(test(url))
// let arr = [
//     {
//       key: 0.123123,
//       child: {
//         key: 0.789789,
//         child: {
//           key: 0.231231
//           ...
//         }
//       }
//     },
//     {
//       key: 0.789789,
//       child: {
//         key: 0.123123,
//         child: {
//           key: 0.567567
//           ...
//         }
//       }
//     }
//   ]

var foo = { n: 1 };
(function (foo) {
  console.log(foo.n)
  foo.n = 3
  var foo = { n: 2 }
  console.log(foo.n)
})(foo)
console.log(foo.n)
