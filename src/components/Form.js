import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form
        action="https://formsubmit.co/el/confirm/839e1add9eda3ba708c4daf12f6450c9"
        method="POST"
      >
        <label>Your Name</label>
        <input type="text" name="Name"></input>
        <label>Email</label>
        <input type="email" name="Email"></input>
        <label>Subject</label>
        <input type="text" name="project"></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="Message"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
