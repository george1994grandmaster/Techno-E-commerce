import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import ProductList from './pages/home'; 
import ShoppingCart from './pages/shopping';
import SelectProduct from './pages/selectedProduct';
import SearchProducts from './pages/searchProducts';
import Form from './components/forms/auth';

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
          <Route path="/shopping" element={<ShoppingCart/>} />
          <Route path="/auth/" element={<Form />}>
            <Route path=":signup" element={<Form />} />
          </Route>
        </Route>
      </Routes>
    </Router>
    </div>
  );
};

export default App;