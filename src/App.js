import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Home />
      <ProductCard />
      <Cart />
      <NotFound />      
    </>
  );
}

export default App;
