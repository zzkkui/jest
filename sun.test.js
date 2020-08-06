import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// toBe 使用 Object.is 来测试精确相等。 如果您想要检查对象的值，请使用 toEqual 代替

// test('two plus two is four', () => {
//   expect(2 + 2).toBe(4);
// });

// test('object assignment', () => {
//   const data = { one: 1 };
//   data['two'] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// test('adding positive numbers is not zero', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// toBeNull 只匹配 null
// toBeUndefined 只匹配 undefined
// toBeDefined 与 toBeUndefined 相反
// toBeTruthy 匹配任何 if 语句为真
// toBeFalsy 匹配任何 if 语句为假
// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });


// yarn jest
// jest (babel-jest)
// 需要 babel-core
// 取 .babelrc 配置
// 在运行测试之前，结合 babel，先对代码做一次转化
// 运行转化过后的测试用例代码