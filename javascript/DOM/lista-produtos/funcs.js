export const applyDiscont = (array) => {
    let discountedProducts = array;
    for (let item of discountedProducts) {
      item.discountPrice = item.price - item.price * (item.discount/100);
    }
    return discountedProducts;
};

export const applyDiscountSingleProduct = (product) => {
  product.discountPrice = product.price - product.price * (product.discount/100);
  return product;
};

export const applyDiscountPrice = (price, discount) => {
  return price - price * (discount/100);
}

export const construirTagsLi = function (product) {
  return `
      <li>Nome: ${product.name}</li>
      <li>Preço: ${product.price}</li>
      <li>Preço com desconto ${product.discountPrice}</li>
      <li>Desconto aplicado: ${product.discount}</li>
      <li>Categoria: ${product.category}</li>
      <li>Stock: ${product.stock}</li>
      <hr>
    `;
}

export const renderProductData = function (elementoHtml, products, categoria) {
  for (let product of products) {

    if(product.stock <= 0) {
      continue;
    }

    if(typeof categoria === 'undefined') {
      elementoHtml.innerHTML += construirTagsLi(product);
    }

    if(product.category.toLowerCase() === categoria) {
      elementoHtml.innerHTML += construirTagsLi(product);
    }
  }
} 