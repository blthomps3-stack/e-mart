import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct([response.data.title, '$' + response.data.price, response.data.description, response.data.image]);
      } catch (error) {
        console.log(error.message);
        setProduct(['Product not found', '$', 'ERROR', '']);
      }
    }

    fetchProduct();
  })

  return (
    <main className="product-detail-page">
      <div className="product-detail-container">
         <div className="product-image-box">
          <img src={product[3]} alt="Product" />
        </div>
        <div className="product-info">
        <h2>{product[0]}</h2>
        <p>{product[1]}</p>
           <p className="description">
            {product[2]}
          </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </main>
  );
}
