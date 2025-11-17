import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const PaymentForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Credit Card");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [notes, setNotes] = useState("");
 const navigate = useNavigate();
  const handlePayment = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/payment", {
      fullname,
      email,
      amount,
      method,
      card,
      expiry,
      cvv,
      notes,
    })
    .then(result => {
      console.log(result);
      alert("Payment Saved Successfully!");
      navigate("/successfull");
    })
    .catch(err => {
      console.log(err);
      alert("Payment Failed");
    });
  };

  return (
    <div className="payment-form">
      <h2>Payment Form</h2>

      <form onSubmit={handlePayment}>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullname(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <select onChange={(e) => setMethod(e.target.value)}>
          <option>Credit Card</option>
          <option>Debit Card</option>
          <option>JazzCash</option>
          <option>EasyPaisa</option>
          <option>Bank Transfer</option>
        </select>

        <input
          type="text"
          placeholder="Card Number"
          onChange={(e) => setCard(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          onChange={(e) => setExpiry(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="CVV"
          onChange={(e) => setCvv(e.target.value)}
          required
        />

        <textarea
          placeholder="Notes (optional)"
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Submit Payment
        </button>

      </form>
    </div>
  );
};

export default PaymentForm;
