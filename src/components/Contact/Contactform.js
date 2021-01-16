import React, { useState } from "react";
import './contact.css'

// Code adapted from Michael Burrows - W3 Collective

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
      <section className='contactContainer'>
        <div className="contactBackground">
            <form onSubmit={handleSubmit} className="contactForm">
                <div className="form-group">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" id="message" required />
                </div>
                <button className="btn btn-outline-info btn-sm mt-auto" type="submit">{status}</button>
            </form>
        </div>
        <p class="photoCredit"><a href="https://www.pexels.com/photo/close-up-photo-of-three-cactus-1856437/">Photo Credit</a></p>
    </section>
  );
};

export default ContactForm;