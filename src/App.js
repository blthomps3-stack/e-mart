import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail'; 
import Contact from './pages/Contact';
import Footer from './pages/Footer';


function App() {
  return (
    <>
      <Header />
      <Home />
      <ProductCard />
      <Cart />
      <NotFound /> 
      <ProductDetail />  
      <Contact />
      <Footer/>   
    </>
  );
}

export default App;
