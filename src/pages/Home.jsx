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
  const [sortBy, setSortBy] = useState("")
  
  const fetchData = async() => {
    const response = await axios.get(API_URL);
    const result = await response.data;
    setProducts(result);
    setFilteredProducts(result)
  };

  const handleCategoryFilter = (event) => {
const isChecked = event.target.checked;

if(isChecked){
  setCategoryFilter((prevVal) => [...prevVal, event.target.value])
} else {
  setCategoryFilter((prevVal) => prevVal.filter((item)=> item !== event.target.value))
}
  };



  useEffect(()=>{
    fetchData();
  },[])
  
  return (
    <div>
      <Header />
      <Products 
      products={products}
      setProducts={setProducts}
      categoryFilter={categoryFilter}
      handleCategoryFilter={handleCategoryFilter}
      filteredProducts={filteredProducts}
      setFilteredProducts={setFilteredProducts}
      sortBy={sortBy}
      setSortBy={setSortBy}
      
      />
      <Footer />
    </div>
  )
}

export default Home
