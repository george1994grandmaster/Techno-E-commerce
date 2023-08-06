import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import ProductList from './pages/home'; 
import ProductPage from './pages/selectedProduct';


const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductList />} /> {/* Add this line */}
            <Route path="/product/:productId" element={<ProductPage/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;