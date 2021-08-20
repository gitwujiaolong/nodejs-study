const add = (x, y) => x + y
const square = z => z * z
const fn = (x, y) => square(add(x, y))
console.log(fn(1,2))

const compose = function(...[first,...other]){
  return function(...args){
    let ret = first(...args)
    other.forEach(fn=>{
      ret = fn(ret)
    })
    return ret
  }
}
const fn2 = compose(...[add,square])
console.log(fn2(1,2))

