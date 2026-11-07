import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const EMAIL = "kaanarslan35@gmail.com";
// Web3Forms access keys are public by design (they can only submit this form).
const WEB3FORMS_KEY = "be27704a-8534-4237-b892-b7d4a15277b1";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: false,
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New portfolio message from ${name}`,
          from_name: "arslankaan.dev",
          ...formData,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <h2 className="footer-head tracking-tighter">Send me a message</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <a href={`mailto:${EMAIL}`} className="p-text_mail">
            {EMAIL}
          </a>
        </div>
      </div>
      {status !== "success" ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            checked={formData.botcheck}
            onChange={handleChangeInput}
          />
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          {status === "error" && (
            <p className="app__footer-error">
              Something went wrong. Please try again or email me directly at{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          )}
          <button
            type="submit"
            className="p-text"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Shoot"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
