import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import './App.css';

class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({
  //       contacts: parsedContacts,
  //     });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // isContainName = name => {
  //   return Boolean(
  // this.state.contacts.find(
  //   e => e.name.toLowerCase() === name.toLowerCase(),
  // ),
  //   );
  // };

  // handleCreateContact = contact => {
  //   const { name, number } = contact;
  //   this.isContainName(name)
  //     ? alert(`Contact ${name} already exists.`)
  //     : this.setState(preState => {
  //         return {
  //           contacts: [...preState.contacts, { name, id: uuidv4(), number }],
  //         };
  //       });
  // };

  // handleChangeFilter = e => {
  //   this.setState({ filter: e.target.value });
  // };

  // handleFilterContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   const filtredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  //   return filtredContacts;
  // };

  render() {
    return (
      <div className="App">
        <h1>Phone book</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
