import { testSnapshot, testSnapshot1 } from "./snapshot";

test("测试 snapshot", () => {
  expect(testSnapshot()).toMatchSnapshot({
    // 匹配任意时间
    time: expect.any(Date),
  });
});

test("测试 testSnapshot1", () => {
  // Inline Snapshot 需要安装 prettier
  expect(testSnapshot1()).toMatchInlineSnapshot(`
    Object {
      "a": "aaa",
      "b": "bbb",
      "c": "cc",
    }
  `);
});
