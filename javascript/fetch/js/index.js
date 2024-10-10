import ProductItem from "./components/ProductItem.js";

let productListing = document.getElementById("product-listing");
let url = 'https://fakestoreapi.com/products';
fetch(url).then(function(response) {
    return response.json()
}).then(function(body) {
    let products = body.map(function (product) {
        return ProductItem(product);
    });
    productListing.innerHTML = products.join('');
})