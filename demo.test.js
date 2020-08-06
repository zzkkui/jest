
jest.mock('./utils')
// jest.mock 发现 utils 是一个类，会自动把构造函数和方法变成 jest.fn()
// 这里如果我们需要对 mock 做一些定制化处理，可以在 __mocks__ 做这些操作 或者 使用 mock 的第二个参数，如下
// jest.mock('./utils', () => {
//   const Utils = jest.fn(() => {
//     console.log('constructor --')
//   })

//   Utils.prototype.init = jest.fn(() => {
//     console.log('init --')
//   })

//   Utils.prototype.a = jest.fn(() => {
//     console.log('a --')
//   })
//   return Utils
// })
import Util from './utils'
import { demoFunction } from './demo'

// mock 类 不会真正执行 类里面的方法，而是利用 jest.fn 来代替执行，测试只需要知道类里面的方法是否执行，不需要真正的执行
test('测试 demoFunction', () => {
  demoFunction()
  expect(Util).toHaveBeenCalled()
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].init).toHaveBeenCalled()
})