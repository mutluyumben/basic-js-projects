let btnOn = document.querySelector(".btnOn");
let btnOff = document.querySelector(".btnOff");
let btnReset = document.querySelector(".btnReset");
let container = document.querySelector(".container");

btnOn.addEventListener("click", () => {
    container.style.backgroundColor = "white";
});

btnOff.addEventListener("click", () => {
    container.style.backgroundColor = "black";
});

btnReset.addEventListener("click", () => {
    container.style.backgroundColor = "red";
});