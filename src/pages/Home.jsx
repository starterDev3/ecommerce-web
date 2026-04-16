import { Getproducts } from "../data/product";
import ProductCard from "../components/ProductCard";



export default function Home() {
    const products = Getproducts();
    return (
        <div className="home-page">
            <div className="home-hero">
                <h1 className="home-title">HardyShop</h1>
            <p>products products products, also if on mobile, rotate it to landscape mode so the website wouldn't look wonky.</p>
            </div>
            <div className="home-container">
                <p>Welcome to HardyShop!</p>
                <p className="note">note: this isn't an actual ecommerce website that sells stuff don't take it seriously.</p>
           <div className="home-products-grid">
            
            {products.map((product) => (
                <ProductCard product={product}  key={product.id}/>
            ))}
              </div>
            </div>
        </div>
    );
}