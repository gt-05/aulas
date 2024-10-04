import products from './products.js';
import { applyDiscont, applyDiscountSingleProduct, applyDiscountPrice } from './funcs.js';

let productList = document.getElementById('product-list');

// let productsDiscount = applyDiscont(products);

for (let product of products) {
    // product = applyDiscountSingleProduct(product);

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