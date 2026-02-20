function outerFunction() {
  console.log("Outer function");

  function innerFunction() {
    console.log("Inner function");
  }

  //innerFunction(); // calling inner function
}

outerFunction();

function outer() {
  let count = 10;

  function inner() {
    console.log(count); // can access outer variable
     let count2 = 10;
  }

  inner();
}

outer();