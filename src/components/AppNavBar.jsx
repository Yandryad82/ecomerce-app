import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  filterProductCategory,
  getProductsThunk,
} from "../store/slices/poducts.slice";
import "../css/styles-prueba.css";
import { setCategoryOff } from "../store/slices/categoryOff";
import { setOpacity } from "../store/slices/isOpacity";

function AppNavBar() {
  const [carOn, setCarOn] = useState(false);

  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  const categoryOff = useSelector((state) => state.categoryOff);
  
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((res) => {
        setCategories(res.data);
      });
  }, []);

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

  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    localStorage.setItem("lastName", "");
    localStorage.setItem("email", "");
    localStorage.setItem("create", "");
    localStorage.setItem("update", "");
    navigate("/login");
  };

  const goLogin = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="fixed">
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
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

                <NavDropdown
                  title="Product Categories"
                  id="collasible-nav-dropdown"
                  className={`${categoryOff ? "" : "categoriesoff"}`}
                >
                  {categories.map((categorie) => (
                    <NavDropdown.Item
                      key={categorie.id}
                      as={Link}
                      to="#"
                      onClick={() =>
                        dispatch(filterProductCategory(categorie.id))
                      }
                    >
                      {categorie.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
              <Nav>
              <Nav.Link
                  as={Link}
                  to="/login"
                  className={`${
                    localStorage.getItem("token") ? "close-login-logout" : ""
                  }`}
                >
                  Register
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className={`${
                    localStorage.getItem("token") ? "close-login-logout" : ""
                  }`}
                >
                  Login
                </Nav.Link>
                <NavDropdown title="Mi Cuenta" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <span onClick={goLogin}>
                      <i className="bx bxs-user bx-sm"></i>{" "}
                      {localStorage.getItem("token") ? "" : "Sing In"}{" "}
                    </span>
                  </NavDropdown.Item>
                  <ul>
                    {localStorage.getItem("token") ? (
                      <li>
                        <NavDropdown.Item>
                          <span><strong>Name:</strong>
                            {" "}
                            {localStorage.getItem("user")}{" "}
                            {localStorage.getItem("lastName")}
                          </span>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <span><strong>Email:</strong> {localStorage.getItem("email")}</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <span><strong>Create:</strong> {localStorage.getItem("create")}</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <span><strong>Last Login:</strong> {localStorage.getItem("update")}</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={logout}>
                        <strong>{localStorage.getItem("token") ? "Logout" : ""}</strong>
                        </NavDropdown.Item>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </NavDropdown>

                <Nav.Link eventKey={2}></Nav.Link>
                <div className="car-icon-container">
                  <i
                    className="bx bx-cart bx-sm car-icon "
                    onClick={openCar}
                  ></i>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
    </div>
  );
}

export default AppNavBar;
