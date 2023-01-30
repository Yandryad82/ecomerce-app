import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setCategoryOff } from '../store/slices/categoryOff';
import { filterProductCategory } from '../store/slices/poducts.slice';

const ProductDetails = () => {

  const {id} = useParams();
  
  const [productSelect, setProductSelect] = useState({});

  const productssuggested = useSelector((state) => state.products);

  const productsFilter = productssuggested.filter(products => products.id !== Number(id))

  const dispatch = useDispatch();

  const navigate = useNavigate();

  dispatch(setCategoryOff(false))

  useEffect(() => {
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
    .then(res => {
      setProductSelect(res.data)
      dispatch(filterProductCategory(res.data.categoryId))
      
    }) 
  },[id])

  
  return (
    <div>
      <h1>Product Details</h1>
      
      <h2>{productSelect.title}</h2>
      
      <img src={productSelect.images?.[0].url} alt="" />
      {productsFilter.map(product => (
        <li key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
          {product.title}
          <img src={product.images?.[0].url} alt="" style={{width: 100}}/>
        </li>
      ))}
    </div>
  );
};

export default ProductDetails;