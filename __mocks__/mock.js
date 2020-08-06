export const getData = () => {
  return new Promise((resolve, reject) => {
    resolve("(function () {return 'abc'})()")
  })
}