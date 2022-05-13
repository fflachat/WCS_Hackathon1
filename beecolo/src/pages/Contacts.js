import React from 'react';
import MapEspaceRenov from '../components/MapEspaceRenov/MapEspaceRenov';
import ContactForm from '../components/ContactForm';
import background from '../components/assets/flowersBee.jpg';
import './Contacts.css'

export default function Contacts() {
  return (
    <div className="contactsContainer"
    style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    <h1>Une idée, un conseil à partager?</h1>
    <ContactForm />
    <MapEspaceRenov />
    </div>
  )
}
