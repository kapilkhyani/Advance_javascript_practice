let dragon = {
  name: 'Kapil',
  fire: true,
  sing() {
    if (this.fire){
      console.log(`${this.name} can Fire Roar `)
    }    
  },
  fight() {
    return 5
  }
}
let liz = {
  name: 'Liz',
  fight() {
    return 2
  }
}
/*
this is one way to take functions 
*/
// const singLiz = dragon.sing.bind(liz);

liz.__proto__ = dragon;

const dragonCallable = () => {
  dragon.sing();
  dragon.fight();
  // singLiz();
  liz.fight()

  liz.sing()
  dragon.isPrototypeOf(liz)

  for (prop in liz){
    if (liz.hasOwnProperty(prop)){
      console.log(`Own props => ${prop}`)
    }
    else {
      console.log(prop) 
    }  
  }
  // liz.dance(); // not defined up in prototype chain
  // Objects by this way point to same place in memory ::: profit
}
module.exports = {
  dragon,
  // singLiz,
  liz,
  dragonCallable
}