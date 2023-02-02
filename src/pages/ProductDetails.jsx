import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setCategoryOff } from "../store/slices/categoryOff";
import { setQuantity } from "../store/slices/IsCounterQuantity.slice";
import { addCarthunk, filterProductCategory, updateCarQuantityThunk } from "../store/slices/poducts.slice";
import { setTotalCar } from "../store/slices/totalValueCar.slice";

const ProductDetails = () => {
  
  const { id } = useParams();

  const [productSelect, setProductSelect] = useState({});
    
  const [imgInit, setImgInit] = useState(0);

  const opacity = useSelector((state) => state.opacity);
  
  const productssuggested = useSelector((state) => state.products);

  const quantity = useSelector((state) => state.quantity);

  const totalCar = useSelector((state => state.totalCar))
  
  const productsFilter = productssuggested.filter(
    (products) => products.id !== Number(id)
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  dispatch(setCategoryOff(false));

  
  const addProductCar = (id) => {
    const toCar = {
        productId:productSelect.id,
        quantity: quantity
    }
    console.log(toCar)
    dispatch(addCarthunk(toCar))
    
  }

  
  useEffect(() => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then((res) => {
        setProductSelect(res.data);
        dispatch(filterProductCategory(res.data.categoryId));
      });
  }, [id]);
  
  return (
    <div>
      <div className="content">
        <section className={`product-detail main-container ${opacity}`}>
          <div className="history">
            
          </div>
          <div className="product-info-flex">
            <div className="col">
              <div className="images-gallery">
                <div className="gallery">
                  <div className="button-gallery left">
                    
                  </div>
                  <div className="button-gallery right">
                   
                  </div>
                </div>
                 <div className="image-selected">
                   <img  src={productSelect.images?.[imgInit].url} alt="" />
                 </div>
                <ul className="images-preview">
                  
                  <li className={`${imgInit===0 ? 'selected' : ''}`}>
                    <img src={productSelect.images?.[0].url} alt="" onClick={() => setImgInit(0)} />            
                  </li>
                  <li className={`${imgInit===1 ? 'selected' : ''}`}>
                    <img src={productSelect.images?.[1].url} alt="" onClick={() => setImgInit(1)}/>            
                  </li>
                  <li className={`${imgInit===2 ? 'selected' : ''}`}>
                    <img src={productSelect.images?.[2].url} alt="" onClick={() => setImgInit(2)}/>            
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="product-info">
                <div className="brand">{productSelect.brand}</div>
                <h2>{productSelect.title}</h2>
                <div className="product-data">
                  <div className="product-options">
                    <div className="flex">
                      <div className="price">
                        <span className="lable">Price: </span>
                        <span className="amount">
                           $
                          {productSelect.price}
                        </span>
                      </div>
                      <div className="quantity-box">
                        <div className="lable">Quantity</div>
                        <div className="flex">
                          <button  onClick={() => dispatch(setQuantity(quantity-1))} ><i className="icon-minus"> </i>-</button>
                          <div className="value">{quantity}</div>
                          <button  onClick={() => dispatch(setQuantity(quantity+1))} ><i className="icon-plus"></i>+</button>
                        </div>
                      </div>
                    </div>
                    <button onClick={addProductCar} className="add-cart-button" >
                      Add to cart
                      <i className="bx bx-cart bx-sm car-icon icon-shopping-cart" ></i>
                      </button>
                    
                  </div>
                  <div className="product-description">
                    <p className="product-description">
                      {productSelect.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="suggestions">
            <strong>Discover similar items</strong>
            <ul>
              {productsFilter.map((product) => (
            <li
              key={product.id}
              
            >
              <div className="product-card" >
                <a onClick={() => {
                   window.scrollTo(0, 0);
                   navigate(`/products/${product.id}`)
                }}>
                  <div className="image">
                   <img src={product.images?.[0].url} alt="" /> 
                  </div>
                  <div className="info">
                    <span className="brand">{product.brand}</span>
                    <strong>{product.title}</strong>
                    <span className="price">Price</span>
                    <span className="amount">
                      $
                      {product.price}
                    </span>
                  </div>
                </a>
              <button className="cart-button">
              <i className="bx bx-cart bx-sm car-icon " ></i>
              </button>
              </div>
            </li>
          ))}
            </ul>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
