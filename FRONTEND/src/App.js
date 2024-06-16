import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import AddProducts from './components/AddProducts';
import TableOfProducts from './components/TableOfProducts';
//import Orders from './Orders';
//import Inventory from './Inventory';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () =>{
      try {
        const response = await axios.get('http://localhost:8000/products/');
        setProducts(response.data);
      }catch(err) {
        console.error('Error getting products:',err);
      }
    }
    fetchProducts();
    
  }, []);
  return (
    <div>
    <SearchBar/>
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
        { <Route path="/AddProducts" element={<AddProducts />} />}
        {/*<Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} /> */}
      </Routes>
    </Router>
    <TableOfProducts />
    </div>
  );
};

export default App;
