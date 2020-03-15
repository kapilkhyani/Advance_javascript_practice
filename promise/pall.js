const pall = () => {
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve,100,"HII")
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve,1000,"kapil")
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve,5000,"khyani")
})

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values)
})
}

module.exports = {
  pall
}