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