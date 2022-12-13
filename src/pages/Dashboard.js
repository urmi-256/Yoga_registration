import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [batch, setBatch] = useState("");
  const [payment, setPayment] = useState(false);

  const fetchData = async () => {
    const email = localStorage.getItem("email");
    await fetch("http://localhost:8000/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setName(data.user);
        setAge(data.age);
        if (data.batch === 1) {
          setBatch("6 - 7 A.M.");
        } else if (data.batch === 2) {
          setBatch("7 - 8 A.M.");
        } else if (data.batch === 3) {
          setBatch("8 - 9 A.M.");
        } else {
          setBatch("5 - 6 P.M.");
        }
        const d = new Date().getMonth() + 1;
        if (d === parseInt(data.date.substring(3, 5))) {
          setPayment(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="dash_cont">
        <h1>User Details</h1>

        {name ? (
          <div className="dash_cont_content">
            <h6>Name : {name}</h6>
            <h6>Age : {age}</h6>
            <h6>Batch : {batch}</h6>
            {payment ? (
              <>
                <h6>Payment done for this month</h6>
              </>
            ) : (
              <>
                <h6>Haven't joined any batch this month</h6>
                <Button href="/userForm">Fill the form to join</Button>
              </>
            )}
          </div>
        ) : (
          <>
            <h6>New user? Join a batch now </h6>
            <Button href="/userForm">Fill the form to join</Button>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
