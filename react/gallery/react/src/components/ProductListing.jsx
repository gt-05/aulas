import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductListing(props) {

    let [products, setProducts] = useState([]);

    useEffect(function() {
        fetch("https://raw.githubusercontent.com/gt-05/.github/refs/heads/main/db.json")
        .then(response => response.json())
        .then(body => {
            let productsResponse = body.products.sort(function (current, next) {
                return current.price - next.price
            });
            if(props.orderBy === 'maior') {
                productsResponse = productsResponse.reverse();
            }
            setProducts(productsResponse);
        });
    }, [props.orderBy]);

    return (
        <section className="flex gap-[24px] justify-center flex-wrap">
           {products.map(product => {
                return <ProductCard
                    image={product.images[0]}  
                    name={product.name} 
                    price={product.price} 
                    priceDiscount={product.price_with_discount} />
           })}
        </section>
    );
}