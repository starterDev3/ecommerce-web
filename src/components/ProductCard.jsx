import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function ProductCard({ product }) {
    const {addToCart, cartItems } = useCart();
    const productInCart = cartItems.find((item) => item.id === product.id);

    const productQuantityLabel = productInCart 

    ? `(${productInCart.quantity})`

     : "";
    return (
        <div className="home-products-grid">
         <div className="home-product-card">
            <img className="home-product-image" src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <p className="card-price">${product.price.toFixed(2)}</p>
            <Link to={`/products/${product.id}`} className="btn-normal">View Details</Link>
        <button className="btn-cart"
         onClick={() => addToCart(product.id)}>

            Add to Cart {productQuantityLabel}
            </button>
      </div>
    </div>
    );
}
