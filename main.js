let btnGet = document.querySelectorAll(".btn-get");

for (let i = 0; i < btnGet.length; i++) {
  btnGet[i].addEventListener("click", () => {
    cartNumbers();
  });
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers +1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector('.cart span').textContent = 1;
  }
}
console.log("running");
