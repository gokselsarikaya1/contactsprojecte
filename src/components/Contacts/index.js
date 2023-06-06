import { useState, useEffect } from 'react'

import "./styles.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
    const [contacts, setContacts] = useState([
      {
        fullname: 'Göksel',
        phone_number:'123456789'
      },
      {
        fullname: 'Elif',
        phone_number:'987654321'
      },
      {
        fullname: 'Oğuzhan',
        phone_number:'159753852'
      },
      {
        fullname: 'Ceyda',
        phone_number:'654921387'
      }
    ]);

    useEffect(() => {
    console.log(contacts);
    }, [contacts])

  return (
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts