
export const times = (cb) => {
  setTimeout(() => {
    cb()
    setTimeout(() => {
      cb()
    }, 3000)
  }, 3000)
}