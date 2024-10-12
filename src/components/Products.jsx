import React, { useEffect, useState } from "react";
import vectorLeft from "../assets/Vector-left.png";
import vectorRight from "../assets/Vector-right.png";
import CheckBoxFilter from "./CheckBoxFilter";
import ProductCard from "./ProductCard";
import Sort from "./Sort";

const Products = ({
  products,
  categoryFilter,
  handleCategoryFilter,
  filteredProducts,
  setFilteredProducts,
  sortBy,
  setSortBy,
}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const applyFilters = (categories) => {
    let updatedData = [...filteredProducts];

    if (categories.length) {
      updatedData = updatedData.filter((listing) =>
        categoryFilter.includes(listing.category)
      );
    };

    if(sortBy === "PRICE : Low to High"){
      updatedData.sort((firstListing, secondListing) => 
      firstListing.price - secondListing.price
      )
    } else if(sortBy === "PRICE : High to Low"){
      updatedData.sort((firstListing, secondListing)=> 
      secondListing.price - firstListing.price
      )
    };

    return updatedData;
  };

  let displayData = applyFilters(categoryFilter);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  return (
    <div>
      <div className="product-header">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt interdum nunc,
          <br />
          ac pulvinar risus porttitor id. Praesent at massa libero. In ac dolor
          vitae massa rutrum dapibus.
        </h3>
      </div>
      <div className="product-mediator">
        <div className="filter">
          <h3>{products.length} Items</h3>
          {toggle ? (
            <div className="filters" onClick={handleToggle}>
              <img src={vectorLeft} alt="" />
              <h5>Hide Filters</h5>
            </div>
          ) : (
            <div className="filters" onClick={handleToggle}>
              <img src={vectorRight} alt="" />
              <h5>Show Filters</h5>
            </div>
          )}
        </div>
        <Sort setSortBy={setSortBy} sortBy={sortBy}/>
      </div>
      <div className="product-footer">
        {toggle ? (
          <CheckBoxFilter
            categoryFilter={categoryFilter}
            handleCategoryFilter={handleCategoryFilter}
          />
        ) : (
          ""
        )}

        <div className="grid-container">
          {displayData?.map((product) => (
            <div className="grid-item">
              <ProductCard product={product} key={product.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
