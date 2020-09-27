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