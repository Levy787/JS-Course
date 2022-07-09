// FUNCTIONS

greet(); //Will work
speak(); //Will not work

// Version 1  of a function (Function decleration)
function greet() {
  console.log("Hello there");
}

// Version 2  of a function (Function expression)
const speak = function () {
  console.log("Good day");
  return true;
};

// Version 1 and 2 work in almsot the exact same way but there are some subttle differences. Specifically in relation to function hoisting (Sending functions to the top of the JS file at runtime). All function declerations are sent to the top of the JS file but this does not occur with function expressions. e.g., we could declare a function after we call it and it would still work, we could not do this with a function expression however.

//Ideally we always want to define a function before we use them, hence we often use function expressions.

greet(); //Will work
speak(); //Will work

// Version 3 of a function (Arrow function)
const calcArea = (radius) => {
  return 3.14 * radius ** 2;
};

//This is basically a shorter way of writing a function expression as we no longer use the function keyword.

const calcArea_2 = (radius) => 3.14 * radius ** 2;

//Even shorter again as we only have a one line return statement.

//There is a difference between function expressions and arrow functions. We will cover this later on.
