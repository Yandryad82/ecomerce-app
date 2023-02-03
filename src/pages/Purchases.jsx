import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPuchasesThunk } from "../store/slices/puchases.slice";
import '../css/styles-prueba.css'

const Purchases = () => {
  const puchases = useSelector((state) => state.puchases);

  const opacity = useSelector((state) => state.opacity)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPuchasesThunk());
    
  }, []);

  console.log(puchases)

  return (
    <div className="content">
      <section className={`main-container purchases ${opacity}`}>
        <div className="history">
          <a href="/">Home</a>
          <div className="separator"></div>
          <b>Purchases</b>
        </div>
        
        <ul className="purchases-products-list">
          {puchases.map(purchase => (
            <li className="product-item">
              <div className="image-purchase">
                <img src={purchase.product.images?.[0].url} alt="" />
              </div>
                <div className="name">{purchase.product.title}
              </div>
                <div className="date">{purchase.product.updatedAt}
              </div>
              <div className="quantity">
                <div className="box">
                  {purchase.quantity}
                </div>
                
              </div>
              <div className="price">
                  {purchase.product.price}
                </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Purchases;
