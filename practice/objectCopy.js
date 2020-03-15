function cl(value){
    console.log(value);
}
function _(){
    cl('----------------------------')
}
let obj32 = {
  one:'kapil',
  b:'deepu',
  c: {
    d:'lolu'
  }
}
let cc = {...obj32};
cl(cc)
cc.one = 'khyani';
cc.c.d = 'kkkkkoooluuu';
cl(cc)
cl(obj32)


_();
let obj = {
  a: 1,
  b: {
    c: 2,
  },
}
let newObj = Object.assign({}, obj);
let newOb10 = Object.create(obj);
cl('new obj 10');cl(newOb10)

let newOb11 = {...obj};
cl('new obj 11', newOb11)
console.log(newObj); // { a: 1, b: { c: 2} }
cl(newObj === obj)
obj.a = 10;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 1, b: { c: 2} }

newObj.a = 20;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 20, b: { c: 2} }

newObj.b.c = 30;
console.log(obj); // { a: 10, b: { c: 30} }
console.log(newObj); // { a: 20, b: { c: 30} }

