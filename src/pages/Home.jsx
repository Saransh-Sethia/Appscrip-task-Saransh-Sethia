import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../config.js';
import Header from '../components/Header.jsx';
import Products from '../components/Products.jsx';
import Footer from '../components/Footer.jsx';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  
  const fetchData = async() => {
    const response = await axios.get(API_URL);
    const result = await response.data;
    console.log('result',result);
    setProducts(result);
  }

  useEffect(()=>{
    fetchData();
  },[])
  
  return (
    <div>
      <Header />
      <Products 
      products={products}
      setProducts={setProducts}
      />
      <Footer />
    </div>
  )
}

export default Home
