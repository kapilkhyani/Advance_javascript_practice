const initialO = () => {
  let view = 1;
  function initailse() {
    let view = 'A';
    let called = 0;
    return function () {
      if (called > 0){
        console.log('Wont be Initailized ***');
      }else {
        called++;
        console.log('Initailized -----');
      }
    }
  }
  const startOnce = initailse();
  startOnce();  
  startOnce();
  startOnce();
}

module.exports = {
  initialO
}