const oop3 = () => {

  class CreateElf {
    constructor(name,weapon) {
      // console.log('this',this)
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      console.log( this.name +' will attack with '+this.weapon);
    }
  }
  const kapil = new CreateElf('kapil','Mavric');
  const abhi = new CreateElf('Abhi','Pistol');

  kapil.attack();
  console.log(kapil.__proto__)
  abhi.attack();
}

module.exports ={
  oop3
}