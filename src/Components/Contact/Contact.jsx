import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "./Map/Map";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6dh9z0e",
        "template_wnafizk",
        ref.current,
        "GLmOscFI7O2XlRJPE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="contactSection">
      <div className="contactContainer">
        <div className="contactLeft">
          <form className="contactForm" onSubmit={handleSubmit} ref={ref}>
            <h1 className="contactTitle">Contact Us</h1>
            <input
              className="contactInput contactInputName"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="contactInput contactInputEmail"
              type="text"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="contactTextArea"
              placeholder="Message"
              rows={10}
              name="message"
            ></textarea>
            <button className="contactButton" type="submit">
              Send
            </button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </form>
        </div>
        <div className="contactRight">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
