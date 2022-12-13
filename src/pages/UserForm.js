import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UserForm.css";
import { Spinner } from "react-bootstrap";

const UserForm = () => {
  const [loder, setLoder] = useState(false);
  const [details, setDetails] = useState({
    date: "",
    email: "",
    age: "",
    batch: "",
    user: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const CompletePayment = async (e) => {
    e.preventDefault();
    if (details && (details.age < 18 || details.age > 65)) {
      alert(
        "You cannot register for any batch as only users between 18-65 allowed"
      );
    }
    else
     await postCreated();
  };

  const postCreated = async () => {
    const { age, user, batch } = details;
    const date = new Date()
      .toJSON()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("/");
    const email = localStorage.getItem("email");
    setLoder(true);
    const res = await fetch("http://localhost:8000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        age,
        user,
        batch,
        date,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (!data || data.status === 422) {
      toast.error(" Filled The details", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoder(false);
      console.log("Please fill all the fields");
    } else {
      if (date && age && user && batch) {
        alert("Payment done....");
        setLoder(false);
        setDetails({
          email: "",
          age: "",
          batch: "",
          date: "",
          user: "",
        });
      }
    }
  };

  return (
    <div className="user_cont">
      <h1>Monthly Payment Form</h1>
      <Form
        onSubmit={CompletePayment}
        method="POST"
        encType="multipart/form-data"
      >
        <Form.Group className="mb-3 form_group" controlId="formBasicPassword">
          <Form.Label>
            <h6>Name</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={details.user}
            name="user"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 form_group" controlId="formBasicPassword">
          <Form.Label>
            <h6>Age</h6>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="age"
            value={details.age}
            name="age"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 form_group" controlId="formBasicPassword">
          <Form.Label>
            <h5>Choose Batch</h5>
          </Form.Label>
          <Form.Select
            value={details.batch}
            aria-label="Default select example"
            name="batch"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          >
            <option>Choose</option>
            <option value="1">6 - 7 A.M.</option>
            <option value="2">7 - 8 A.M.</option>
            <option value="3">8 - 9 A.M.</option>
            <option value="4">5 - 6 P.M.</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 form_group" controlId="formBasicPassword">
          <Form.Label>Monthly fees 500/- INR</Form.Label>
          {loder ? (
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ display: "flex", margin: "2rem auto auto auto" }}
            >
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Button>
          ) : (
            <Button
              variant="primary"
              type="submit"
              style={{ display: "flex", margin: "2rem auto auto auto" }}
            >
              Pay Now
            </Button>
          )}
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserForm;
