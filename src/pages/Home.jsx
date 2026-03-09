import { Link } from "react-router-dom";
import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero"> 
        <h1>Welcome to ShopHub</h1>
        <p className="home-subtitle">Discover the best deals on electronics, fashion, and more!</p>
      </div>
      <div className="container">
        <h2 className="page-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
          }
        </div>
      </div>
    </div>
  );
}