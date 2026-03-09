import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);
  const navigate = useNavigate
  useEffect(() => {
    const foundProduct = getProductById(id);
    console.log(foundProduct);
    if(!foundProduct) {
      // Handle product not found, e.g., redirect or show error
      navigate("/")
      return;
    }
    setProduct(foundProduct);
  },[id])
  if(!product) {
    return <div className="page"><div className="container"><p>Loading...</p></div></div>
  }
  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product?.image} alt={product?.name} />
          </div>

          <div className="product-detail-content">
            <h1 className="product-detail-name">{product?.name}</h1>
            <p className="product-detail-description">{product?.description}</p>
            <p className="product-detail-price">${product?.price?.toFixed(2)}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}