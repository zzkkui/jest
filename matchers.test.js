// test('测试 toBe', () => {
//   // toBe 匹配器 基于 object.is === 用于原始值
//   const a = 1
//   expect(a).toBe(1)
// })

// test('测试 toEqual', () => {
//   // 用于引用类型
//   const a = { one: 1 }
//   expect(a).toEqual({ one: 1 })
// })


// // ## 真假有关的 匹配器
// test('测试 toBeNull', () => {
//   const a = null
//   expect(a).toBeNull()
// })

// test('测试 toBeUndefined', () => {
//   const a = undefined
//   // expect(a).toBeNull()
//   expect(a).toBeUndefined()
// })

// test('测试 toBeDefined', () => {
//   const a = null
//   expect(a).toBeDefined()
// })

// test('测试 toBeTruthy', () => {
//   const a = 1
//   expect(a).toBeTruthy()
// })

// test('测试 toBeFalsy', () => {
//   const a = false
//   expect(a).toBeFalsy()
// })

// // ## not
// test('测试 not', () => {
//   const a = false
//   expect(a).not.toBeTruthy()
// })

// // ## 数字相关的 匹配器
// test('toBeGreaterThan', () => {
//   const a = 10
//   // expect(a).toBeGreaterThan(11)
//   // expect(a).toBeGreaterThan(10)
//   expect(a).toBeGreaterThan(9)
// })

// test('toBeLessThan', () => {
//   const a = 10
//   // expect(a).toBeLessThan(9)
//   expect(a).toBeLessThan(11)
// })

// test('toBeGreaterThanOrEqual', () => {
//   const a = 10
//   // expect(a).toBeLessThan(9)
//   expect(a).toBeGreaterThanOrEqual(10)
// })

// 浮点型
test('toBeCloseTo', () => {
  const a = 0.1
  const b = 0.2
  // expect(a + b).toBe(0.3)
  expect(a + b).toBeCloseTo(0.3)
})

// ## String 相关 匹配器
test('toMatch', () => {
  const a = 'bax.pk.qqqoox'
  // expect(a).toMatch('pk')
  expect(a).toMatch(/pk/)
})

// ## Array Set 相关 匹配器
test('toContain', () => {
  // const a = ['aa', 'bb', 'pk']
  const a = new Set(['aa', 'bb', 'pk'])
  expect(a).toContain('pk')
})

// ## 异常 相关 匹配器
const throwNewErrorFunc = () => {
  throw new Error('error')
}
test('toThrow', () => {
  // const a = ['aa', 'bb', 'pk']
  // 也可以正则
  expect(throwNewErrorFunc).toThrow('error')
})