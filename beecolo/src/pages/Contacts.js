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
    <h1 className="contactsTitle">Une idée, un conseil à partager?</h1>
    <ContactForm />
    <div className="contactsSousTitre">
    <p>Pour vous aider à vous prémunir des fraudes</p>
    <a className="contactsLink" href="https://france-renov.gouv.fr/fraudes" target="_blank" rel="noreferrer">https://france-renov.gouv.fr/fraudes</a>
    <p>Informations concernant MaPrimeRénov'</p>
    <a className="contactsLink" href="https://france-renov.gouv.fr/aides/mpr" target="_blank" rel="noreferrer">https://france-renov.gouv.fr/aides/mpr</a>
    <p>Informations concernant la rénovation globale</p>
    <a className="contactsLink" href="https://www.izi-by-edf-renov.fr/blog/travaux-renovation-energetique" target="_blank" rel="noreferrer">https://www.izi-by-edf-renov.fr/blog/travaux-renovation-energetique</a>
    <p>Informations concernant l'auti énergétique</p>
    <a className="contactsLink" href="https://www.izi-by-edf-renov.fr/blog/audit-energetique#prix" target="_blank" rel="noreferrer">https://www.izi-by-edf-renov.fr/blog/audit-energetique#prix</a>
    </div>
    <h2 className="contactsTitle">Vos espaces conseils les plus proches</h2>
    <MapEspaceRenov />
    </div>
  )
}