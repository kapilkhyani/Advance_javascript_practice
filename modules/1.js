const m1 = () => {
  var a  = 10;
  function aa() {
    console.log(a);
    b = 30;
    a = 20;
  }
  function bb() {
    b = 80;
  }
  aa();
  console.log(a)
  console.log(b)
  bb();
  console.log(b)
}

module.exports = {
  m1
}