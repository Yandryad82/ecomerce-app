import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { filterProductCategory, getProductsThunk } from "../store/slices/poducts.slice";
import '../css/styles-prueba.css'
import { setCategoryOff } from "../store/slices/categoryOff";
import { setOpacity } from "../store/slices/isOpacity";

function AppNavBar() {
  
  const [carOn, setCarOn] = useState(false);

  const dispatch = useDispatch();
  
  const [categories, setCategories] = useState([]);

  const categoryOff = useSelector((state) => state.categoryOff)

    
  useEffect(() => {
    
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((res) => {
        setCategories(res.data)
        
      })
  }, []);
  
  const openCar = () => {
    setCarOn(!carOn);
    if(carOn == false ) {
      dispatch(setOpacity('carON'))
    }else {
      dispatch(setOpacity(''))
    }
  };

  return (
    <div className="navbar">
      <div className="fixed">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <h2>e-comerce</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/purchases">
                  Purchases
                </Nav.Link>

                <NavDropdown title="Category Products" id="collasible-nav-dropdown" className={`${categoryOff ? '' : 'categoriesoff'}`} >
                  {categories.map(categorie => (
                    <NavDropdown.Item key={categorie.id} as={Link} to="#" onClick={() => dispatch(filterProductCategory(categorie.id))}>
                    {categorie.name}
                  </NavDropdown.Item>
                  ))}
                                                      
                </NavDropdown>
                
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link eventKey={2} onClick={openCar}>
                  
                </Nav.Link>
                <i className="bx bx-cart bx-md car-icon " onClick={openCar}></i>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className={`cart-modal ${carOn ? "open" : ""}`}>
          <div className="cart">
            <div className="minimalist-scrollbar">
              <i className='bx bx-x bx-sm' onClick={openCar}></i>
              <h5>Carrito de Compra</h5>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppNavBar;
