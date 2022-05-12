import React from 'react';

export default function LogementInfos() {
  return (
    <form>
      <h3>Informations sur votre logement</h3>
    
      <div className="year">
        <label htmlFor="year">Année de construction (AAAA)</label>
        <input type="text" id="year" name="year" />
      </div>
      <div className="surface">
        <label htmlFor="surface">Surface en m2</label>
        <input type="number" id="surface" name="surface" />
      </div>
      <div className="energy">
        <label htmlFor="energy">Energie :</label>
        <select name="energy" id="energy_select">
          <option value="">----</option>
          <option value="wood">Bois</option>
          <option value="electric">Electrique</option>
          <option value="fuel">Fioul</option>
        </select>
      </div>
    </form>
  );
}
