import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import initialContacts from './data/initialContacts.json';
import shortid from 'shortid';
import style from './App.module.css';

class App extends Component {
  handleChange = event => {
    this.setState({
      name: event.currentTarget.value,
      number: event.currentTarget.value,
    });
  };

  // addContact = (name, number) => {
  //   const { contacts } = this.state;

  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase(),
  //     )
  //   ) {
  //     const message = `${name} is already in contacts`;

  //     alert(message);
  //   } else {
  //     const contact = {
  //       id: shortid.generate(),
  //       name,
  //       number,
  //     };

  //     this.setState(({ contacts }) => ({
  //       contacts: [contact, ...contacts],
  //     }));
  //   }
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <section className={style.container}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList
        // contacts={visibleContacts}
        />
      </section>
    );
  }
}

export default App;
