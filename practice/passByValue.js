
function changeStuff(a, b, c)
{
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);    
console.log(obj2.item);


// It's always pass by value, but for objects the value of the variable is a reference. 
// Because of this, when you pass an object and change its members, 
// those changes persist outside of the function. 
// This makes it look like pass by reference.
//  But if you actually change the value of the object variable you will see that
//   the change does not persist, proving it's really pass by value.




// If the function is called as a "raw" function (e.g., just do someFunc()), 
//     this will be the global object (window in a browser) (or undefined if the function runs in strict mode).
// If it is called as a method on an object, this will be the calling object.
// If you call a function with call or apply, this is specified as the first
//     argument to call or apply.
// If it is called as an event listener, this will be the element that is
//      the target of the event.
// If it is called as a constructor with new, this will be a newly-created object whose 
//     prototype is set to the prototype property of the constructor function.
// If the function is the result of a bind operation, the function will 
//     always and forever have this set to the first argument of the bind call that 
//     produced it. (This is the single exception to the 
//     "functions don't have a fixed this" rule -- functions produced by bind actually 
//     do have an immutable this.)