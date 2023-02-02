import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCarthunk, filterProductCategory, filterProductSearch, getProductsThunk } from "../store/slices/poducts.slice";
//import '../css/styles.css'
import "../css/styles-prueba.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { setCategoryOff } from "../store/slices/categoryOff";
import { getProductsCarthunk } from "../store/slices/productsCar.slice";
import isLoading from "../store/slices/isLoading";

const Home = () => {
  
  const products = useSelector((state) => state.products);

  const opacity = useSelector((state) => state.opacity);
  
  const navigate = useNavigate();

  const [productsSearch, setProductsSearch] = useState('');

    
  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(setCategoryOff(true))  
    
  }, []);

    
  //console.log(products);
  //console.log(categories);

  const dispatch = useDispatch();

  return (
    <div className="content">
      <section className={`main-container ${opacity}`}>
        <div className="search-box">
          <form action="" className="input">
            <input value={productsSearch} onChange={(e) => setProductsSearch(e.target.value)} type="text" placeholder="What are you looking for?" />
            <button  onClick={() => dispatch(filterProductSearch(productsSearch))}>
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
              <div className="product-card">
                <button className="cart-button">
                  <i className="bx bx-cart"></i>
                </button>
                <div className="image">
                  <img className="over" src={product.images[0].url} alt="" />
                </div>
                <div className="info">
                  <span className="brand">{product.brand}</span>
                  <strong>{product.title}</strong>
                  <span className="price">{product.price}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
