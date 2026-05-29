import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<ProductDetail /> }/>
            <Route path='*' element={<NotFound /> } />
          </Routes>
        </div>
      </main>      
      <Contact />
      <Footer/>   
    </>
  );
}

export default App;
