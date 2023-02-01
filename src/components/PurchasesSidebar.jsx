import React, { useState } from 'react';
import { setOpacity } from '../store/slices/isOpacity';

const PurchasesSidebar = () => {

  const [carOn, setCarOn] = useState(false);

  const useDispatch = useDispatch();

  const openCar = () => {
    setCarOn(!carOn);
    if (carOn == false) {
      dispatch(setOpacity("carON"));
    } else {
      dispatch(setOpacity(""));
    }
  };

  const closeCar = () => {
    setCarOn(false);
    dispatch(setOpacity(""));
  };

  return (
    <div>
      <div className={`cart-modal ${carOn ? "open" : ""}`}>
          <div className="cart">
            <div className="minimalist-scrollbar">
              <i className="bx bx-x bx-sm" onClick={closeCar}></i>
              <h5>Shopping Cart</h5>
              <div className="close-button-cart">
                <button onClick={closeCar}>Close</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PurchasesSidebar;