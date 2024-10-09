let productListing = document.getElementById("product-listing");
let url = 'https://fakestoreapi.com/products';
fetch(url).then(function(response) {
    return response.json()
}).then(function(body) {
    for(let product of body) {
        productListing.innerHTML += `
            <div class="product-card">
                <img src="${product.image}">
                <div class="product-info">
                    <span>${product.title}</span>
                    <span>${product.price}</span>
                    <span>${product.category}</span>
                    <button>COMPRAR<button>
                </div>
            </div>
        `
    }
})