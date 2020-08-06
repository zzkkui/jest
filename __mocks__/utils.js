const Utils = jest.fn(() => {
  console.log('constructor')
})

Utils.prototype.init = jest.fn(() => {
  console.log('init')
})

Utils.prototype.a = jest.fn(() => {
  console.log('a')
})

export default Utils