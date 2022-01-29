
import { GlobalStyle } from './GlobalStyle';
import React, { Component } from 'react';
// import FormikForm from './FormikForm/FormikForm';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid'


class App extends Component {
  state = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
      filter: '',
      
  };
  
  //получае доступ при сабмите ContactForm к ее state
  //добавляем новый контакт
  addContact = ({name, number}) => {
    // console.log('как пропс на стр App', data); - деструктуризировали data на {name, number}
    const contact = {
      id: nanoid(),
      name,
      number,
    };
//     if (contact.name === && contact.number) {
//   console.log(`такой контакт ${contact.name}:${contact.number} уже есть`)
// }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))


  };
  
  deleteContact = contactId => {
    // console.log('delete', contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
}

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    //для ФИЛЬТРАЦИИ приведем текст к одному toLowerCase()
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
  
  render() {
    //деструктуризация
    const { filter } = this.state;

    //фильтрация, составляем новую колекцию и ресуем только ее
    const visibleContact = this.getVisibleContacts();

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        {/* <FormikForm /> */}
        <ContactForm onSubmit={this.addContact}/>
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          options={visibleContact}
          onDeleteContact={this.deleteContact}
        /> 
        
      </div>
    )
}


}




export default App;
