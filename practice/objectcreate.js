function cl(value){
    console.log(value);
}
function _(){
    cl('----------------------------')
}



let a  = {
    mortal: true,
    name: 'kapil'
}

let b = Object.create(a);
cl(a)
cl(b.name)
b.name = 'karan';
cl(a)
cl(b)
_();

let ab  = "";
let az =  new String();
let ac = function () {}
cl(ab.prototype)
cl(typeof ab)
cl(ac.prototype)
cl(typeof ac);
cl(az.prototype);
cl(typeof az)
az = "kkkk"
cl(typeof az)
