function cl(value){
    console.log(value);
}
function _(){
    cl('----------------------------')
}
(function(){
    var a = b = 3;
    // is equal to 
    // b = 3; // now this b gets global scope
    // var a = b;
  })();
  
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
_();



function foo1()
{
return {
    bar: "hello"
};
}

function foo2()
{
return
{
    bar: "hello"
};
}
cl(foo1());
cl(foo2());
_();
cl(0.1+false)
cl(0.1+0.2 === 0.3)
_();


var d = {};
[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});
cl(d);
_();



var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
cl(arr1)
cl(arr2)
cl(arr3)
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// arr1 and arr2 are the same (i.e. ['n','h','o','j', ['j','o','n','e','s'] ]) 
//     after the above code is executed for the following reasons:

// Calling an array object’s reverse() method doesn’t only return the 
//     array in reverse order, it also reverses the order of the array itself 
//     (i.e., in this case, arr1).

// The reverse() method returns a reference to the array itself 
//     (i.e., in this case, arr1). As a result, arr2 is simply a reference to
//     (rather than a copy of) arr1. Therefore, when anything is done to arr2 
//     (i.e., when we invoke arr2.push(arr3);), arr1 will be affected as well since arr1
//      and arr2 are simply references to the same object.
_();


console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
_();


var a={},
b={key:'b'},
c={key:'c'};

a[b]=123; // stringifies {{key:'b'}}
a[c]=456;
cl(a[b]);
_();

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
_();

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
// The first console.log prints undefined because we are
//     extracting the method from the hero object, so stoleSecretIdentity() is
//     being invoked in the global context (i.e., the window object)
//     where the _name property does not exist.
// One way to fix the stoleSecretIdentity() function is as follows:
// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

_();

console.log(1 < 2 < 3); // 1 < 2 true , true < 3 true
console.log(3 > 2 > 1);// 3 > 2 true , true > 1 false
_();

// pushing in array 
var myArray = ['a', 'b', 'c', 'd'];
myArray.push('end');
myArray.unshift('start');
console.log(myArray); // ["start", "a", "b", "c", "d", "end"]
myArray = ['start', ...myArray];
myArray = [...myArray, 'end'];
myArray = ['start', ...myArray, 'end'];
_();

var a = [1, 2, 3];
a[10] = 99;
cl(a);
a.map((i) => {
    cl(a[i-1])
})
_();
cl(typeof "undefined")
cl(typeof undefined)
cl(typeof NULL)
cl(typeof null)
cl(typeof undefined === typeof NULL)
cl(typeof typeof 1)