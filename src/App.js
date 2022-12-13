import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./pages/UserForm";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {localStorage.getItem("token") ? (
          <>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/userForm" element={<UserForm />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Register />} />
            <Route exact path="/dash" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/userForm" element={<UserForm />} />
          </>
        )}
      </Routes>
    </Router>
  );
};
export default App;
