import React from "react";

function Contact({ name, number, onDeleteContact }) {
  return (
    <>
      <li>
        {name}
        {number}
        <button type="button" onClick={onDeleteContact}>
          Delete
        </button>
      </li>
    </>
  );
}

export default Contact;
