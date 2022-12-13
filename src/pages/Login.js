import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      localStorage.setItem("email", email);
      alert("Login successful");
      window.location.href = "/userForm";
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <div className="login_cont">
      <img
        src="https://theupay.com/bank/Assets/login.jpg"
        alt=""
        style={{ width: "60%" }}
      />
      <div className="login_cont_content">
        <h1>Login</h1>
        <Form onSubmit={loginUser}>
          <Form.Group
            className="mb-3 form_group"
            controlId="formBasicPassword"
            style={{ margin: "1rem" }}
          >
            <Form.Label className="form_cont_name">Name</Form.Label>

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
          <Button id="login_btn" type="submit" variant="primary">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
