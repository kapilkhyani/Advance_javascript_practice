const oop2 = () => {
  // using construction function
  function CreateElf(name,weapon) {
    // console.log('this',this)
    this.name = name;
    this.weapon = weapon;
    // no need to return 
  }
  // all functions get prototype option but only constructor functions have musch use to it

  CreateElf.prototype.attack = function() {
    console.log( this.name +' will attack with '+this.weapon);
  }


  // can't use arrow functions here because
  // this is lixically scoped to where it is called
  //here this will point to global/window scope
// CreateElf.prototype.attack = () => {
//     console.log( this.name +' will attack with '+this.weapon);
//   }


  const kapil = new CreateElf('kapil','Sniper');
  // the new keyword will call constructor fuinction
  // and return object 
  const abhi = new CreateElf('Abhi','ump9');

  kapil.attack();
  console.log(kapil.__proto__)
  abhi.attack();
}

module.exports ={
  oop2
}