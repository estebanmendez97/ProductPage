let btnGet = document.querySelector("#btn-get");
let btnOnGet = document.querySelector("#btn-on-get");
let btnTGet = document.querySelector("#btn-t-get");
let btnBoGet = document.querySelector("#btn-bo-get");
let btnBtGet = document.querySelector("#btn-bt-get");
let btnBtrGet = document.querySelector("#btn-btr-get");

let selGet = document.querySelector("#sel-get");
let selOnGet = document.querySelector("#sel-on-get");
let selTGet = document.querySelector("#sel-t-get");
let selBoGet = document.querySelector("#sel-bo-get");
let selBtGet = document.querySelector("#sel-bt-get");
let selBtrGet = document.querySelectorAll("#sel-btr-get");

let cart = document.querySelector("#cart");

btnGet.addEventListener("click", () => {
  cart.innerText = selGet.value;
});

btnOnGet.addEventListener("click", () => {
cart.innerText = selOnGet.value;
});

btnTGet.addEventListener("click", () => {
  cart.innerText = selTGet.value;
});

btnBoGet.addEventListener("click", () => {
  cart.innerText = selBoGet.value;
});

btnBtGet.addEventListener("click", () => {
  cart.innerText = selBtGet.value;

});

btnBtrGet.addEventListener("click", () => {
  cart.innerText = selBtGet.value; 
});
