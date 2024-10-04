import products from './products.js';
import { applyDiscountPrice } from './funcs.js';

let productList = document.getElementById('product-list');

for (let product of products) {
    let discountPrice = applyDiscountPrice(product.price, product.discount);
    productList.innerHTML += `
        <li>Nome: ${product.name}</li>
        <li>Preço: ${product.price}</li>
        <li>Preço com desconto ${discountPrice.toFixed(2)}</li>
        <li>Desconto aplicado: ${product.discount}</li>
        <li>Categoria: ${product.category}</li>
    <hr>
    `;
}

let buttonLivros = document.getElementById('livros');

buttonLivros.addEventListener('click', function (event) {
    productList.innerHTML = '';
    for(let product of products) {
        if(product.category.toLowerCase() === 'livros') {
            productList.innerHTML += `
            <li>Nome: ${product.name}</li>
            <li>Preço: ${product.price}</li>
            <li>Preço com desconto ${product.discountPrice}</li>
            <li>Desconto aplicado: ${product.discount}</li>
            <li>Categoria: ${product.category}</li>
            <hr>
        `;
        }
    }
});

let buttonCalcados = document.getElementById('calcados');

buttonCalcados.addEventListener('click', function (event) {
    productList.innerHTML = '';
    for(let product of products) {
        if(product.category.toLowerCase() === 'calçados') {
            productList.innerHTML += `
            <li>Nome: ${product.name}</li>
            <li>Preço: ${product.price}</li>
            <li>Preço com desconto ${product.discountPrice}</li>
            <li>Desconto aplicado: ${product.discount}</li>
            <li>Categoria: ${product.category}</li>
            <hr>
        `;
        }
    }
});

let buttonTodos = document.getElementById('todos');

buttonTodos.addEventListener('click', function (event) {
    productList.innerHTML = '';
    for(let product of products) {
        productList.innerHTML += `
            <li>Nome: ${product.name}</li>
            <li>Preço: ${product.price}</li>
            <li>Preço com desconto ${product.discountPrice}</li>
            <li>Desconto aplicado: ${product.discount}</li>
            <li>Categoria: ${product.category}</li>
            <hr>
        `;
    }
});