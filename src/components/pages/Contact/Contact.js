import { Form, BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Questions or comments? Contact me here...</h1>
      <Form method="post" action="/contact">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="message" />
        <button type="submit">Contact Holly</button>
      </Form>
    </div>
  );
}

export default Contact;
