//OBJECTS
// OBJECT LITERAL

const blogs = [
  { title: "Why Mac & Cheese Rules", likes: 30 },
  { title: "10 Things to make with Marmite", likes: 50 },
];

let user = {
  name: "James",
  age: 30,
  email: "james@hotmail.com",
  loaction: "Berlin",
  blogs: blogs,
  //Arrow Function
  login: () => {
    console.log("The user logged in");
  },
  //Normal Function shortened
  logout() {
    console.log("The user logged out");
  },
  logBlogs: function () {
    //As we are using this, we must use a function, we cannot use an arrow function as `this` is set when we call the function (sets this to the global scope rather than object scope). The function type sets this as the object, so we can access object properties
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

console.log(typeof user);

//Access Method 1
console.log(user.name);
user.age = 30;

//Access Method 2
user["location"] = "Australia";

user.login();
user.logBlogs();

/////////////////////////////////////
Math; //Built in object

console.log(Math.PI);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random = Math.random();

//Primitive Types
//Numbers
//Strings
//Booleans
//null
//undefined
//Symbols

//Reference Types
//All types of objects
//Object literals
//Arrays
//Functions
//Dates
//All other objects

//Primitive types are stored in a stack at runtime when created, The stack has limited space but is very fast.

//Reference types are stored in a heap which has a lot more space but is also a bit slower.
//When we add a reference type variable, it actually sores the variable in the head put then stores a pointer in the stack which points to the heap object
//This is important as it determines what happens when we create a variable based on another. If we have say

/*
const varOne = 50;
const varTwo = varOne;

Here a copy of varOne has been made and added to the stack, when we update varOne, it will not effect varTwo.

If we had say

const objOne = {name: "Levi"};
const objTwo = objOne;

Now a pointer in the stack will point to the obejct for objOne, a pointer for objTwo will point to objOne (The actual object in this case), so if we change the object for with objOne or Two, it will also update the other.
*/

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//

let userOne = { name: "Ryu", age: 30 };
let userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = "James";

console.log(userOne, userTwo);
