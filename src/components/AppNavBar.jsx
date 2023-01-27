import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function AppNavBar() {
  
  const [carOn, setCarOn] = useState(false);

  const openCar = () => {
    setCarOn(!carOn);
  };

  return (
    <div className="navbar">
      <div className="fixed">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <h2>Ecomerce</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/purchases">
                  Purchases
                </Nav.Link>

                <NavDropdown title="Category" id="collasible-nav-dropdown">
                  
                  <NavDropdown.Item as={Link} to="#">
                    Car
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                                    
                </NavDropdown>
                
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link eventKey={2} onClick={openCar}>
                  Car
                </Nav.Link>
                <i class="bx bx-cart bx-md car-icon" onClick={openCar}></i>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className={`cart-modal ${carOn ? "open" : ""}`}>
          <div className="cart">
            <div className="minimalist-scrollbar">
              <h5>Carrito de Compra</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppNavBar;
