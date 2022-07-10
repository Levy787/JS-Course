//Interacting with the DOM
//Document Object Model
//The DOM is created by the browser and is an object.

//SELECTING ELEMENTS

//This will grab the first p tag
const para = document.querySelector("p");

const err = document.querySelector(".error");
const err2 = document.querySelector("div.error");

const paras = document.querySelectorAll("p");
const errors = document.querySelectorAll(".error");

const title = document.getElementById("page-title");
const errors_2 = document.getElementsByClassName("error");
const ps = document.getElementsByTagName("p");

//ADDING AND CHANGING CONTENT

console.log(para.innerText);
para.innerText = "Ninjas are awersome!";
