let btnGet = document.querySelector("#btn-get");

for(let i=0;i > btnGet.length; 1++) {
btnGet[i].addEventistener("click", () => {
  cartNumbers()
})
}

function cartNumbers() {
   let productNumbers = localStorage.getItem('cartNumbers');
   productNumbers = parseInt(productNumbers)
   localStorage.setItem('cartNumber', 1)

}