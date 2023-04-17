import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let validEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (e.target.user_email.value.match(validEmail)) {
      emailjs
        .sendForm(
          "service_4b80nrq",
          "template_zm575ph",
          form.current,
          "kCWwtikSw6O5RMuPc"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.user_name.value = "";
      e.target.user_email.value = "";
      e.target.message.value = "";
    } else {
      alert("Please enter a valid email address in order to submit this form.");
    }
  };

  return (
    <div className="container">
      <h3>Contact me via LinkedIn, or by completing the form below.</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-25">
            <label for="from_name" className="formField">
              Name:{" "}
            </label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="user_name"
              id="from_name"
              className="userInput"
              placeholder="Your Name..."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label for="user_email" className="formField">
              Email:{" "}
            </label>
          </div>
          <div className="col-75">
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="userInput"
              placeholder="Your Email Address..."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label for="message" className="formField">
              Message:{" "}
            </label>
          </div>
          <div className="col-75">
            <textarea
              name="message"
              id="message"
              className="userInput"
              placeholder="Your message goes here..."
            />
          </div>
        </div>

        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
