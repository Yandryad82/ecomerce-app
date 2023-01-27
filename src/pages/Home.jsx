import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/poducts.slice";
//import '../css/styles.css'
import '../css/styles-prueba.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Home = () => {
  
  const products = useSelector((state) => state.products);

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  //console.log(products);
  console.log(categories)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk())
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
    .then((res) => setCategories(res.data))
  }, []);

  
  return (
   <div className="content">
      
   <section className="main-container">
     <div className="search-box">
        <form action="" className="input">
          <input type="text" placeholder="What are you looking for?"/>
          <button>
            <i class='bx bx-search'></i>
          </button>
          
        </form>
        
     </div>
        <ul className="product-list">
          {products.map(product => (
            <li>
              <div className="product-card">
                <button className="cart-button">
                  <i class='bx bx-cart'></i>
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
