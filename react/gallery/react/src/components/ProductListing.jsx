import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductListing(props) {

    let [products, setProducts] = useState([]);

    useEffect(function() {
        fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(body => {
            let productsResponse = body.sort(function (current, next) {
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
                    image={product.images[0].url}  
                    name={product.name} 
                    price={product.price} 
                    priceDiscount={product.price_with_discount}
                    slug={product.slug} />
           })}
        </section>
    );
}