function cl(value){
    console.log(value);
}
var dz = 20;
function a () {
    // console.log(a);
    // var a  = 10; //gives undefined 
    // const a  = 10; // gives not defined 
    // let a  = 10; // gives not defined 
    // console.log(a);

    var dz = 10;
    console.log(c)
}
// a();

const b = () => {
    // console.log({} === {})
    let x = {a:10,b:20};
    let y = {a:10,b:20};
    console.log(x === y)
}
// b();

//Object Creation 
function c() {
    let a = new Object();
    let b = {};
    let c = Object.create(null);
    let Obj = function(name) {
        this.name = name
      }
    var d = new Obj("hello"); 
    cl(a);
    cl(b);
    cl(a === b)
    cl(c)
    cl(d)
    cl('-------------------------')
    cl(typeof a)
    cl(typeof b)
    cl(typeof c)
    cl(typeof d)
}
// c();

(function IIFE(){
    console.log( "Hello!" );
})();