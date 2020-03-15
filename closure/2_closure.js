const closure_1 = () => {

  function a() {
  let gp = 'GP';
  return function b() {
    let ft = 'FT';
    return function c() {
      let sn = 'SN';
      console.log( `${gp} > ${ft} > ${sn}`)
    }
  }
  let gp2 = 'GPAA'; // gp2 doesnt work and return undefined
  console.log('Fine')
}



function a2() {
  let gp = 'Hello I am on';
  setTimeout(function () {
    console.log(`${gp} > ${gp2}`)
  },4000)
  let gp2 = 'Bye i am gone ';
}
a()()();
a2();
// a();
// use of set time out is to executed after 4sec from web api 
// so the functions is eecuted with closure having value 
// hoisting does not matter in closure and set time out 
}

module.exports = {
  closure_1
}

