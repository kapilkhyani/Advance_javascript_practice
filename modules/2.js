const m2 = () => {
  var harry = "potter";
  var volde = "lord";
  function fight(char1,char2) {
    var attack = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    console.log(attack > attack2 ? `${char1} wins ${char2}` : `${char2} wins ${char1}`)
  }
  fight(harry,volde);
}

// other way iife
const m3 = () => {  
  (function() {
    var harry = "potter";
    var volde = "lord";
    function fight(char1,char2) {
      var attack = Math.floor(Math.random() * char1.length);
      var attack2 = Math.floor(Math.random() * char2.length);
      console.log(attack > attack2 ? `${char1} wins ${char2}` : `${char2} wins ${char1}`)
    }
    fight(harry,volde);
  })();
}

const m4 = () => {  
  var fightModule = (function() {
    var harry = "potter";
    var volde = "lord";
    function fight(char1,char2) {
      var attack = Math.floor(Math.random() * char1.length);
      var attack2 = Math.floor(Math.random() * char2.length);
      console.log(attack > attack2 ? `${char1} wins ${char2}` : `${char2} wins ${char1}`)
    }
    return {
      fight
    }
  })();
  fightModule.fight('kapil','khyani');
}

// global scope
//    module scope
//        function scope
//            block scope using let and const
module.exports = {
  m2,
  m3,
  m4,
}