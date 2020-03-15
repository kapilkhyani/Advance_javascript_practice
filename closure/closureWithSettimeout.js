const cEx = () => {
  for ( var i = 1;i<5;i++){
    setTimeout(function() {
      console.log(i)
    }, 5000);
  }
}

const cEx2 = () => {
  for ( let i = 1;i<5;i++){
    setTimeout(function() {
      console.log(i)
    }, 5000);
  }
}
const withClosure = () => {
  for ( var i = 1;i<5;i++){
    (function(i){
      setTimeout(function() {
      console.log('Wtih closure and IEFI ->'+i)
    }, 5000);
    })(i)
  }
}
module.exports = {
  cEx,
  cEx2,
  withClosure
}