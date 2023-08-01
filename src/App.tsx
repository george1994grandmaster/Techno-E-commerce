import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import ProductList from './components/productList'; // Import the ProductList component

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductList />} /> {/* Add this line */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;