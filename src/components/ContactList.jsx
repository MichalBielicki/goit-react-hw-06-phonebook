import React from "react";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <p>
            {name}: {phone}{" "}
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
