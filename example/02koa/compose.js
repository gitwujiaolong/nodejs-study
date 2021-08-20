const add = (x, y) => x + y;
const square = (z) => z * z;
const square2 = (z) => z * z;
/* const fn = (x, y) => square(add(x, y));
console.log(fn(1, 2)); */

const compose = function ([first, ...other]) {
  return function (...args) {
    let ret = first(...args);
    other.forEach((fn) => {
      ret = fn(ret);
    });
    return ret;
  };
};
const fn2 = compose([add, square, square]);
console.log(fn2(1, 2));

/* function compose2(...funcs) {
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
console.log(compose2(...[square, add])(1, 2)); */
