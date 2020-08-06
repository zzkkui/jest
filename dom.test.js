import $ from 'jquery'
import { addDivToBody } from './dom'

test('测试 addDivToBody', () => {
  addDivToBody()
  expect($('body').find('div').length).toBe(1)
})

// jest 在 node 环境下自己模拟了一套 dom 的 api（jsDom）