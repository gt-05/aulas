const products = [
    {
        name: "Produto 01"
    },
    {
        name: "Produto 02"
    },
    {
        name: "Produto 03"
    },
    {
        name: "Produto 04"
    }
];

let productList = document.getElementById('product-list');

for(let product of products) {
    productList.innerHTML += `<li>${product.name}</li>`
}