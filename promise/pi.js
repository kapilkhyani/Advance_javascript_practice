const p1 = () => {
const promise1 = new Promise((resolve, reject) => {
  if (true) {
    resolve('TRUEE')
  } else {
    reject('FALSEE')
  }
})
promise1
.then(result => result + ' FINAL')
.then(result => {
  // throw Error
  console.log(result)
})
.catch(e => console.log(e))
}

module.exports = {
  p1
}