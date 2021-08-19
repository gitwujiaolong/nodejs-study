function* func(){
  console.log('1')
  yield "1"
  console.log('2')
  yield "2"
  console.log('3')
  yield "3"
}
const f = func()
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())