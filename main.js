let btnGet = document.querySelector("#btn-get");
let btnOGet = document.querySelector("btn-o-get");
let btnTGet = document.querySelector("#btn-t-get");
let btnBoGet = document.querySelector("#btn-bo-get");

let selGet = document.querySelector("#sel-get");
let selOGet = document.querySelector("#sel-o-get");
let selTGet = document.querySelector("#sel-t-get");
let selBoGet = document.querySelector("#sel-bo-get");

let cart = document.querySelector("#cart");

btnGet.addEventListener("click", () => {
  cart.innerText = selGet.value;
});

btnOGet.addEventListener("click", () => {
  cart.innerText = selOGet.value;
});

btnTGet.addEventListener("click", () => {
  cart.innerText = selTGet.value;
});

btnBoGet.addEventListener("click", () => {
  cart.innerText = selBoGet.value;
});
