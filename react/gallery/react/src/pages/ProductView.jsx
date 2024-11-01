import { useState } from "react";
import { useParams } from "react-router-dom"

export default function ProductView(props) {
    
    let [productList, setProductList] = useState([]);

    let params = useParams();
    fetch(`http://localhost:3000/products/${params.slug}`)
        .then(response => response.json())
        .then(body => {
            console.log(body)
            setProductList(body);
        });

    return (
        <>
            {productList.map(product => {
                return (
                    <div className="flex">
                        <div>
                        {product.images2.map(image => {
                            return <img src={image.url} />
                        })}
                        </div>
                        <div>

                        Nome do produto: <h1>{product.name}</h1><br />
                        Preço do produto: <h1>{product.price}</h1><br />
                        Stock do produto: <h1>{product.stock}</h1><br />
                        descript do produto: <h1>{product.description}</h1><br />
                        </div>
                    
                    </div>
                );
            })}

        </>
    )
}