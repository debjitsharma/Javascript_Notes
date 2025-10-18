// Call back Functions- A callback function is a function passed as an argument to another function so it can be invoked later, often after an asynchronous operation finishes.
// It gives us access to the whole asynchronous world in a synchronous single threaded language like javascript.
setTimeout(function() {
  console.log("This runs after 2 seconds!");
}, 2000);


// An asynchronous operation is an operation that allows a program to start a task and then move on without waiting for that task to finish.
// When the task is eventually completed, the program is notified (via a callback, promise, or async/await) and the result is handled.

// Synchronous (blocking):
// Tasks are executed one after another.
// The program must wait for one task to finish before moving on.

