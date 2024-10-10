export default function ProductItem({image, title, price, category, stock}) {
    return `
        <div class="product-card">
            <img src="${image}">
            <div class="product-info">
                <span>${title}</span>
                <span>${price}</span>
                <span>${category}</span>
                <button>COMPRAR<button>
            </div>
        </div>
    `;
}