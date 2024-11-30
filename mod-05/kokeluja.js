const n1 = 3; // global variable

function hello() {
  var n2 = 5; // an internal variable of a function
  
  if (n2 > 0) {
    const n3 = 8; // an internal variable of a block
    var n4 = 9; // an internal variable of a function
  }
  console.log(`Inside the function ${n1}`); // global variable is visible everywhere
  console.log(`Inside the function ${n2}`); // the internal variable is available inside the function
  // console.log(n3); // -- an internal variable of a block is not available outside the function
  console.log(`Inside the function ${n4}`); // the internal variable of the function is available inside the function
  
}

hello();

console.log(`Global ${n1}`); // the global variable is visible everywhere
//console.log(n2); -- the function's internal variable does not appear outside the function
//console.log(n3); -- the internal variable of a block does not appear outside the block
//console.log(n4); -- the function's internal variable does not appear outside the function
