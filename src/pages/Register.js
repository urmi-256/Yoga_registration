import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./Register.css";

function Register() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.status === "ok") {
      history("/login");
    }
  }

  return (
    <div className="register_cont">
      <img
        src="https://theupay.com/bank/Assets/login.jpg"
        alt=""
        style={{ width: "60%" }}
      />
      <div className="register_cont_content">
        <h1>Register</h1>
        <Form onSubmit={registerUser}>
          <Form.Group
            className="mb-3 form_group"
            controlId="formBasicPassword"
            style={{ margin: "1rem" }}
          >
            <Form.Label className="form_cont_name">Name</Form.Label>

            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 form_group"
            controlId="formBasicPassword"
            style={{ margin: "1rem" }}
          >
            <Form.Label className="form_cont_name">Email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 form_group"
            controlId="formBasicPassword"
            style={{ margin: "1rem" }}
          >
            <Form.Label className="form_cont_name">Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            id="register_btn"
            type="submit"
            variant="primary"
            value="Register"
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
