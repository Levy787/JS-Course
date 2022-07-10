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
  blogs: ["Why Mac & Cheese Rules", "10 Things to make with Marmite"],
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
      console.log(blog);
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
