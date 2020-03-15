const oop1 = () => {
  const elfFunction = {
    attack() {
      console.log(`${this.name} attacks with ${this.weapon}`);  
    },
    fire() {
      console.log(`${this.name} FIRES with ${this.weapon}`);  
    }
  }
  const createElf = (name,weapon) => {
    let newElf = Object.create(elfFunction)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
  }

  const kapil = createElf('kapil','Sniper');
  const abhi = createElf('Abhi','ump9');

  kapil.attack();
  kapil.fire();
  abhi.attack();
}

module.exports ={
  oop1
}