// // ## 模拟模块

// import axios from 'axios'
// import { runCallback, createObj, getData } from './mock'

// jest.mock('axios')

// // 1. 捕获函数的调用和返回结果， 以及 this 和调用顺序
// // 2. 可以自由的设置返回结果
// // 3. 改变函数的内部实现（这里模拟了ajax）

// test('测试 runCallback', () => {
//   const func = jest.fn()
//   func.mockReturnValueOnce('pk')
//   runCallback(func)
//   runCallback(func)
//   console.log(func.mock)
//   // expect(func).toBeCalled()
//   expect(func.mock.calls[0]).toEqual(['abc'])

//   // expect(func.mock.calls.length).toBe(2)
// })

// test('测试 createObj', () => {
//   const func = jest.fn()
//   createObj(func)
//   console.log(func.mock);
// })

// test.only('测试 getData', async () => {
//   axios.get.mockResolvedValue({ data: 'pk' })
//   await getData().then(data => {
//     expect(data).toBe('pk')
//   })
// })

// ## 模拟方法
jest.mock('./mock')
// jest.unmock('./mock')
// 这里 引入的是 __mocks__ 里面的 mock.js 文件
import { getData } from './mock'
// 这里引入的事真实路径下的 mock.js 文件
const { createObj } = jest.requireActual('./mock')

test('测试 __mocks__ 模拟', () => {
  return getData().then(data => {
    expect(eval(data)).toEqual('abc')
  })
})

test('测试 createObj', () => {
  const func = jest.fn()
  createObj(func)
})