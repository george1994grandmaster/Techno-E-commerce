import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import ProductList from './pages/home'; 
import ShoppingCart from './pages/shoppingCart';
import SelectProduct from './pages/selectedProduct';
import SearchProducts from './pages/searchProducts';
import Form from './pages/auth';
import Contact from './pages/contact';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="/products/*">
            <Route path="detail/:productId" element={<SelectProduct />} />
            <Route path=":productQuery" element={<SearchProducts/>} />
          </Route>
          <Route path="/shopping-cart" element={<ShoppingCart/>} />
          <Route path="/auth" element={<Form />}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
};

export default App;