const bodyEl = document.querySelector("body");
const mainEl = document.querySelector("main");
const containerElArr = document.querySelectorAll(".container");
const cardElArr = document.querySelectorAll(".card");
const firstContainerEl = document.getElementById("first-container");
const lastCardEl = document.getElementById("last-one");
const hTwoElArr = document.querySelectorAll("h2");

bodyEl.addEventListener("click", (e) => console.log("The body element has detected a click"));
mainEl.addEventListener("click", (e) => console.log("The main element has detected a click"));

lastCardEl.addEventListener("click", (e) => {
    console.log("The last card has been clicked");
    e.stopImmediatePropagation();
});
firstContainerEl.addEventListener("click", (e) => console.log("The first container has been clicked"));

containerElArr.forEach(element => element.addEventListener("click", (e) => console.log("A container has been clicked")));
cardElArr.forEach(element => element.addEventListener("click", (e) => console.log("A card has been clicked")));


hTwoElArr.forEach(element => element.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    e.stopPropagation();
}));
