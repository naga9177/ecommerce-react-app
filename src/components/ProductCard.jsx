import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
          <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-card-image" />
              <div className="product-card-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
              <div className="product-card-animations">
                <Link className="btn btn-secondary" to={`/products/${product.id}`}>View Details</Link>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>)
}