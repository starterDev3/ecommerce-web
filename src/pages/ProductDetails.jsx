import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../data/product.js";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
const { id } = useParams();
const [product, setProduct] = useState(null);
const navigate = useNavigate();


useEffect(() => {
const foundProduct = getProductById(id);

if (!foundProduct) {
   navigate("/");
   return;
}

 setProduct(foundProduct);
}, [id]);

if (!product) {
    return <h1>Loading, please wait.</h1>
}

    return (
        <div className="product-page">
           <div className="product-container">
            <div className="product-details">
<div className="product-detail-image-container">
    <img className="product-detail-image" src={product?.image} alt={product?.name} />
   
</div>
<div className="product-detail-info">
    <h2 className="product-name">{product?.name}</h2>
        <p className="product-detail-price">${product?.price.toFixed(2)}</p>
    <p className="product-detail-desc">{product?.description}</p>

  <button className="btn btn-large btn-primary">Add to Cart</button>
</div>
  
            </div>
           </div>
           
        </div>
    )
}