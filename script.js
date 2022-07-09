const ulEl = document.querySelector(".people");

const people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-Li"];

let html = ``;

people.forEach((person) => {
  html += `<li style="color: purple">${person}</li>`;
});

ulEl.innerHTML = html;
