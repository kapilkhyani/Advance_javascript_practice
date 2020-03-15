const compose = ()  => {
  const compose = (f,g) => (data) => f(g(data))
  const pipe = (f,g) => (data) => g(f(data)) // left to right 
  const multiplyby3 = (num) => num*3;
  const positive = (num) => Math.abs(num);
  const multiplyAnsAbs = compose(multiplyby3,positive)
  const multiplyAnsAbspipe = pipe(multiplyby3,positive)
  console.log(multiplyAnsAbs(-50))
  console.log(multiplyAnsAbspipe(-30))
}
module.exports  = {
  compose
}