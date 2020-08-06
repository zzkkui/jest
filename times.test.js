import { times } from './times'

// test('time 测试', (done) => {
//   times(() => {
//     expect(1).toBe(1)
//     done()
//   })
// })

// useFakeTimers 和 runAllTimers、runOnlyPendingTimers、advanceTimersByTime 等 配对使用
// 可以让定时器立即执行
jest.useFakeTimers()

test('time 测试', () => {
  const fn = jest.fn()
  times(fn)
  // jest.runAllTimers()
  // jest.runOnlyPendingTimers()
  // 快进3秒
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(1)
  // expect(fn).toHaveBeenCalledTimes(2)
})