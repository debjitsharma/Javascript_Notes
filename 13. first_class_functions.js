// funtions Statement aka Function Declaration
// This is a classic way to define a function.
// During hoisting phase. During memory creation phase,a is crested a memory and the function is assigned to it.

a();            // prints in console
console.log(b); //gives undefined
b();            //gives an error

function a(){
    console.log("a called");
}


// Function Expression
// Here the function is created and assigned to a variable or constant. 
// Only the variable is hoisted, not the function defination. So it is assigned undefined just like any other variable.

var b=function(){
    console.log("b called");
}

// Anonymous functions
// An anonymous function is just a function without a name.
// 

function () {
  console.log("I have no name!");
}
// the above code alone is invalid in JavaScript, because you can’t just define a function without binding it somewhere.
// So, anonymous functions are usually assigned to a variable, passed as arguments, or used inside other functions.

// Named function expression
const greet = function xyz() { 
  console.log("Hello!");
};
xyz();  // ❌ Error

// 1. function xyz() { ... } is a named function expression.
//    The function’s internal name is xyz.
//    But that name xyz is only available inside the function itself, not outside.
// 2. Outside the function, the only identifier you have is greet.
//    That’s because you assigned the function to the variable greet.
// 3. So when you write xyz(); outside → JavaScript doesn’t know about xyz.
//    It only knows greet.


// Difference between parameters and arguments
// Parameters are the variables that are listed in the function definition.
// They act as placeholders for the values a function will receive.

function greet(name, age) {   // 'name' and 'age' are parameters
  console.log(`Hello ${name}, you are ${age} years old.`);
}
// Arguments are the actual values that are passed to the function when it is invoked.
greet("Alice", 25);  // "Alice" and 25 are arguments


// First class functions / First class citizens- First-class functions mean functions in JavaScript can be assigned, passed, returned, and stored just like any other value.
// 1. Assigned to variables
const greet = function() {
  console.log("Hello!");
};
greet(); // Hello!

// 2.Passed as arguments to other functions
function execute(fn) {
  fn(); // call the function passed in
}

execute(function() {
  console.log("I was passed as an argument!");
});

// 3.Returned from functions
function outer() {
  return function inner() {
    console.log("I was returned from another function!");
  };
}

const fn = outer();
fn(); // works

// 4. Stored in data structures
const funcs = [
  () => console.log("First"),
  () => console.log("Second")
];
funcs[1](); // "Second"

