import { fetchData, fetchData1, fetchData2 } from './fetchData.js'

// 回调类型的异步测试方法
test('fetchData 返回结果为 { success：true }', done => {
  fetchData((data) => {
    expect(data).toEqual({ success: true })
    done()
  })
})

// 返回一个 Promise
// test('fetchData1 返回结果为 { success：true }', () => {
//   return fetchData1().then((res) => {
//     expect(res.data).toEqual({ success: true })
//   })
// })

// test('fetchData1 返回结果为 { success：true }', () => {
//   return expect(fetchData1()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

test('fetchData1 返回结果为 { success：true }', async () => {
  await expect(fetchData1()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})

// test('fetchData2 返回结果为 404', () => {
//   // 保证测试时执行过一次断言（expect）
//   expect.assertions(1)
//   return fetchData2().catch((e) => {
//     console.log(e.toString())
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// })

// test('fetchData2 返回结果为 404', () => {
//   return expect(fetchData2()).rejects.toThrow()
// })

test('fetchData2 返回结果为 404', async () => {
  await expect(fetchData2()).rejects.toThrow()
})