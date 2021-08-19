test('测试jest',()=>{
  const hello = require('../index')
  expect(hello()).toBe('hello')
})