import React from 'react';

export default function FoyerInfos() {
  return (
    <div>
      <h3>Informations sur votre foyer</h3>
      <div className="Nombre de personne">
        <label htmlFor="nb">Nb</label>
        <input type="number" id="nb" name="nb" />
      </div>
      <div className="fisc">
        <label htmlFor="fisc">Part Fiscal</label>
        <input type="text" id="fisc" name="fisc" />
      </div>
      <div className="statut">
        <label htmlFor="proprio"> Propriétaire </label>
        <input type="checkbox" id="proprio" name="proprio" />
        <label htmlFor="loc"> Locataire </label>
        <input type="checkbox" id="loc" name="loc" />
      </div>
      <div className="revenue">
        <label htmlFor="revenue"> </label>
        <input type="number" id="revenue" name="revenue" />
      </div>
    </div>
  );
}
