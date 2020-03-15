const { cEx, cEx2, withClosure } = require('./closure/closureWithSettimeout')
const { initialO } = require('./closure/initializeOnce')
const { closure_1 } = require('./closure/2_closure')
const { dragon,dragonCallable } = require('./protoInheritance/dragon')
const { callable_3proto } = require('./protoInheritance/3_proto')
const { custom, newMap } = require('./protoInheritance/3_customproto')
const { oop1 } = require('./OOP/1_oop')
const { oop2 } = require('./OOP/2_oop')
const { oop3 } = require('./OOP/3_oop')
const { this1 } = require('./OOP/this_binding')
const { inheri1 } = require('./OOP/class_inheritance')
const { compose } = require('./functional/compose')
const { p1 } = require('./promise/pi')
const { pall } = require('./promise/pall')
const { purl } = require('./promise/pUrl')
const { m1 } = require('./modules/1')
const { m2,m3,m4 } = require('./modules/2')
console.log('--------- Main Module Executed ---------');
console.log();

// ---------- Modules examples ------------------
// m1();
// m2();
// m3();
m4();
// ---------- Modules examples ------------------

// ---------- Promise examples ------------------
// p1();
// pall();
// purl()
// ---------- Promise examples ------------------


// ---------- Functional examples ------------------
// compose();
// ---------- Functional examples ------------------

// ---------- OOP examples ------------------
// oop1();
// oop2();
// oop3();
// this1();
// inheri1();
// ---------- OOP examples ------------------

// ---------- Closure examples ------------------
// cEx(); // this gives 10 var as global scope
// cEx2(); // this gives 1-5 let has block scope 
// withClosure();
// closure_1();
// initialO();
// ---------- Closure examples ------------------


// ---------- ProtoTypal examples ------------------
// custom();
// newMap(); //closureWithSettimeout
// dragonCallable();
// callable_3proto();
// ---------- ProtoTypal examples ------------------