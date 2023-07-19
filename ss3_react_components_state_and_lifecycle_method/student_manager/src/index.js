import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Student from "./components/Student";
import Footer from "./components/Footer";

const students = [
  {
    id: 1,
    name: "Pham Cong Nam",
    age: 24,
    address: "Da Nang",
  },
  {
    id: 2,
    name: "Le Van Hung",
    age: 23,
    address: "Da Nang",
  },
  {
    id: 3,
    name: "Mai Phuoc Tai",
    age: 21,
    address: "Hue",
  },
  {
    id: 4,
    name: "Do Thanh Nhan",
    age: 22,
    address: "Hue",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Students Manager</h1>
    <Student list={students} />
    <Footer />
  </div>
);
