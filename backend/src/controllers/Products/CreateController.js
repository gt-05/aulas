const fs = require('fs');
const path = require("path");
const ProductModel = require('../../models/ProductModel');
const {saveByUrl} = require('../../services/product-images');

module.exports = async (request, response) => {
    let {
        name,
        slug,
        price
    } = request.body;

    let product = await ProductModel.create({
        name, slug, price
    });

    let {images} = request.body;

    for (let url of images) {
        let {relativePath} = await saveByUrl({url, slug});
        console.log(relativePath);
    }

    response.status(201);
    return response.json(product);
}