// document.addEventListener("DOMContentLoaded", function () {
//   loadComponent("header.html", "header");
//   loadComponent("footer.html", "footer");
// });

// function loadComponent(url, elementId) {
//   fetch(url)
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById(elementId).innerHTML = data;
//     })
//     .catch((error) => console.error("Error loading component:", error));
// }

// const navBar = document.querySelector("#navBar");
// const dropDownBtn = document.querySelector("#dropDownBtn");
// const dropDown = document.querySelector(" #dropDown");

// // Menu for small screen
// function onToggleMenu(e) {
//   e.name = e.name === "menu" ? "close" : "menu";
//   navBar.classList.toggle("top-[9%]");
//   console.log(navBar);
// }

// // dropdown
// function toggleDropdown() {
//   dropDown.classList.toggle("hidden");
// }

// dropDownBtn.addEventListener("mouseenter", toggleDropdown);
// dropDown.addEventListener("mouseenter", toggleDropdown);

// dropDownBtn.addEventListener("mouseleave", toggleDropdown);
// dropDown.addEventListener("mouseleave", toggleDropdown);


// Martial Arts Section
// const jiuJitsuBtn = document.querySelector("#jiuJitsuBtn");
// const karateBtn = document.querySelector("#karateBtn");
// const judoBtn = document.querySelector("#judoBtn");
// const muayThaiBtn = document.querySelector("#muayThaiBtn");
// const juniorProBtn = document.querySelector("#juniorProBtn");
// const privateTuiBtn = document.querySelector("#privateTuiBtn");

// const jiuJitsu = document.querySelector("#jiuJitsu");
// const karate = document.querySelector("#karate");
// const judo = document.querySelector("#judo");
// const muayThai = document.querySelector("#muayThai");
// const juniorPro = document.querySelector("#juniorPro");
// const privateTui = document.querySelector("#privateTui");

// jiuJitsuBtn.addEventListener("click", () => {
//     jiuJitsu.innerHTML = `<div>
//       <img src="" alt="" />
//       <p>Jiu-Jitsu</p>
//     </div>
//     <div></div>
//     <div>
//       <p></p>
//       <img src="" alt="" />
//     </div>`;
//     karate.innerHTML = "";
// });

// karateBtn.addEventListener("click", () => {
//     karate.innerHTML = `<div>
//     <img src="" alt="" />
//     <p>Karate</p>
//   </div>
//   <div></div>
//   <div>
//     <p></p>
//     <img src="" alt="" />
//   </div>`
//     jiuJitsu.innerHTML = "";
// });