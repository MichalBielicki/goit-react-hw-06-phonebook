import React, { Component } from "react";
import { nanoid } from "nanoid";

class ContactForm extends Component {
  state = {
    name: "",
    phone: "",
    id: "",
  };

  nameInputId = nanoid();
  phoneInputId = nanoid();

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: "", phone: "" });
  };
  render() {
    const { name, phone } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            onChange={this.handleChange}
            id={this.nameInputId}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+((['
        -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only
        letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
        Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label> Number: </label>
          <input
            onChange={this.handleChange}
            id={this.phoneInputId}
            value={phone}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />{" "}
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
export default ContactForm;
