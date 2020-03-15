// inheritance links up the protoype chain
const inheri1 = () => {

  class Character {
    constructor(name,weapon) {
      // console.log('this',this)
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      console.log( this.name +' will attack with '+this.weapon);
    }
  }

  class CreateElf extends Character {
    constructor(name,weapon,type){
      super(name,weapon);// sets the __proto, sets prototype chain
      console.log(this) // this is pointing to kapil
      this.type = type
    }
  }

  class Orge extends Character {
    constructor(name,weapon,color){
      super(name,weapon);// sets the __proto, sets prototype chain
      console.log(this) // this is pointing to kapil
      this.color = color;
    }
    makeFort() {
      console.log('Fort made ----------');
    }
    // this is more like 
    // Orge.prototype.makeFort
  }

  const kapil = new CreateElf('kapil','Mavric','long');
  console.log(kapil)
  const org = new Orge('Abhi','sniper','blue');
  console.log(org)
  console.log(org.makeFort())
  console.log(kapil instanceof CreateElf)
  console.log(kapil instanceof Character)
}

module.exports ={
  inheri1
}