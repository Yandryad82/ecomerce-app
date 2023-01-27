import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const {id} = useParams();

  return (
    <div>
      <h1>Productos</h1>
      <p>Mostrando producto de id: <b>{id}</b></p>
    </div>
  );
};

export default ProductDetails;