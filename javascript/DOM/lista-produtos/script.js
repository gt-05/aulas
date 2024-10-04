import products from './products.js';
import { applyDiscountPrice, construirTagsLi, renderProductData } from './funcs.js';

let productList = document.getElementById('product-list');

renderProductData(productList, products);

let buttonLivros = document.getElementById('livros');

buttonLivros.addEventListener('click', function (event) {
    productList.innerHTML = '';
    renderProductData(productList, products, 'livros');
});

let buttonCalcados = document.getElementById('calcados');

buttonCalcados.addEventListener('click', function (event) {
    productList.innerHTML = '';
    renderProductData(productList, products, 'calçados');
});

let buttonTodos = document.getElementById('todos');

buttonTodos.addEventListener('click', function (event) {
    productList.innerHTML = '';
    renderProductData(productList, products);
});