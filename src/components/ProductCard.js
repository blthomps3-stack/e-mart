import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductCard(props) {
  const [product, setProduct] = useState([]);
  const id = props.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct([response.data.title, '$' + response.data.price, response.data.category, response.data.image]);
      } catch (error) {
        console.log(error.message);
        setProduct(['Product not found', '$', 'ERROR', '']);
      }
    }

    fetchProduct();
  })

  return (
    <div className="product-card">
      <span className="category-label">
        {product[2]}
      </span>
      <h4>{product[0]}</h4>
      <img
        src={product[3]}
      />
      <p className="product-price">
        {product[1]}
      </p>

      <a href={`/product/${id}`} className="details-link">
        Details
      </a>

      <button type="button">
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;