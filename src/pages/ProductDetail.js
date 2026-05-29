import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CartButton from '../components/CartButton';

export default function ProductDetail() {
  
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
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
  }, [id]);

  return (
    <main className="product-detail-page">
      <div className="product-detail-container">
         <div className="product-image-box">
          <img src={product[3]} alt="Product" />
        </div>
        <div className="product-info">
        <h2>{product[0]}</h2>
        <p className='price'>{product[1]}</p>
           <p className="description">
            {product[2]}
          </p>
            <div className="quantity-box">
            <label>Quantity:</label>
            <input type="number" min="1" defaultValue="1" />
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
      <section className="similar-products">
        <h2>Similar Products</h2>
        <div className="similar-grid">
          {similarProducts.map(item => (
            <div className="similar-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button>View Details</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
