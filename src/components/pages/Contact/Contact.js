import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <div>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}

export default Contact;
