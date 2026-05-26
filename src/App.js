import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';  

function App() {
  return (
    <>
      <Header />
      <Home />
      <ProductCard />
      <Cart />
      <NotFound /> 
      <ProductDetail />     
    </>
  );
}

export default App;
