//VARIABLES
const variable = "This cannot be changed";
let variable_2 = "This variable can be changed";
var variable_3 = "This is the old way of initilising a vairable";

//COMMON STRING METHODS

let email = "levi@gmail.com";
console.log(email.lastIndexOf("m"));
console.log(email.slice(0, 10)); //string[:10] <- in python
console.log(email.substring(2, 5)); //Starts at index 2 and get 5 characters
console.log(email.replace("@", "&")); //Replaces the first instance

//NUMBERS
let radius = 10; //Type: Number
const pi = 3.14; //Type: Number

//Operators +, -, *, /, **, %
//All numbers are of the same type whether whole or fraction.

//Not a number is NaN

//To concatinate numbers we should use template strings

const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

let result =
  "The blog called " + title + " by " + author + " has " + likes + " likes.";
let result_2 = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result + "\n" + result_2);

let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog as ${likes}</span>
`;

//ARRAYS
let ninjas = ["Shaun", "Ryu", "Chun-li"];
console.log(ninjas[0]);
ninjas[0] = "James";
console.log(ninjas[0]);

let ages = [20, 25, 30, 35];

//ARRAY METHODS
console.log(ages.join(", ")); // Joins all elements with a delimiter
console.log(ninjas.indexOf("Ryu"));
console.log(ninjas.concat(ages)); //Join two arrays
ninjas.push("Henery"); //Adds a value to the end of the array - Alters the original object hence called a destructive method.

ninjas.pop();
