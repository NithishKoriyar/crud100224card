import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../src/index.css";
import AddContact from "./components/addContacts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateContact from "./components/updateContacts";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<><App /><AddContact /></>} />
      <Route path="/update/:id" element={<UpdateContact />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
