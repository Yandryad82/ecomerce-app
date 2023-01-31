import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    axios
      .post(`https://e-commerce-api-v2.academlo.tech/api/v1/users/login`, data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user.firstName);
        localStorage.setItem("lastName", res.data.user.lastName);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("create", res.data.user.createdAt);
        localStorage.setItem("update", res.data.user.updatedAt);
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Credenciales Incorrectas");
        }
        console.log(error);
      });
  };

  return (
    <div className="container-login-general">
            
      <Form onSubmit={handleSubmit(submit)} className="login-container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
