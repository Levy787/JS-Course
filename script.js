//Interacting with the DOM
//Document Object Model
//The DOM is created by the browser and is an object.

//SELECTING ELEMENTS

// //This will grab the first p tag
// const para = document.querySelector("p");

// const err = document.querySelector(".error");
// const err2 = document.querySelector("div.error");

// const paras = document.querySelectorAll("p");
// const errors = document.querySelectorAll(".error");

// const title = document.getElementById("page-title");
// const errors_2 = document.getElementsByClassName("error");
// const ps = document.getElementsByTagName("p");

// //ADDING AND CHANGING CONTENT

// console.log(para.innerText);
// para.innerText = "Ninjas are awersome!";

// const content = document.querySelector(".content");
// content.innerHTML = "<h2>This is a new h2 tag</h2>";

// const people = ["Mario", "Luigi", "Yoshi"];

// people.forEach((person) => {
//   content.innerHTML += `<p>${person}`;
// });

// //CHANGING element attributes
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www.youtube.com");
// link.innerText = "Youtube";

// const msg = document.querySelector("p.error");
// msg.setAttribute("error", "success");

// //Adding attributes
// msg.setAttribute("style", "color: green");

// const h2 = document.querySelector("h2.second-h2");
// h2.style.margin = "50px";
// h2.style.fontSize = "60px";
// h2.style.margin = ""; //Remove property

//Adding or removing classes
const content = document.querySelector("p");
console.log(content.classList);
content.classList.add("error");
content.classList.remove("error");
content.classList.add("success");

//Toggle class
content.classList.toggle("error");

//Parent, Children and Siblings
const article = document.querySelector("article");

Array.from(article.children).forEach((child) => {
  child.classList.add("article-element");
});
