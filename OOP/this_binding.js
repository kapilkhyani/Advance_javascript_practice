const this1 = () => {

  // the new binding 
  function Person(name,age) {
    this.name = name;
    this.age = age;
  }
  const P1 = new Person('ABC',18);
  console.log(P1);

  // implicit binding
  const hi = {
    name: 'Kapil',
    hiPrint() {
      console.log('Hi =>'+this.name);
    }
  }
  console.log(hi.hiPrint())

  //explicit binding
  const person4 = {
    name: 'Kapil',
    hiPrint: function() {
      console.log('Hi =>'+this.setTimeout);
    }.bind(global)
  }
  // console.log(person4.hiPrint())

  // by use of arrow functions
  const person5 = {
    name: 'Kapil khyani',
    hiPrint: function() {
      var inner = () => { // without arrow function this will have global scope
        console.log('Hi =>'+this.name);
      }
      return inner;
    }
  }
  console.log(person5.hiPrint()())
}

module.exports = {
  this1
}