let btnGet = document.querySelector('#btn-get');
let selGet = document.querySelector('#sel-get');
let cart = document.querySelector('#cart');

btnGet.addEventListener('click', () =>{
    cart.innerText = selGet.value;
})
