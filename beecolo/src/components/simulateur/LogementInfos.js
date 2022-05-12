import React from 'react';

export default function LogementInfos() {
  return (
    <div>
      <h3>Informations sur votre logement</h3>
      <div className="CP">
        <label htmlFor="CP">CP</label>
        <input type="text" id="CP" name="CP" />
      </div>
      <div className="year">
        <label htmlFor="year">Année de construction (AAAA)</label>
        <input type="text" id="year" name="year" />
      </div>
      <div className="surface">
        <label htmlFor="surface">Surface en m2</label>
        <input type="number" id="surface" name="surface" />
      </div>
      <div className="energy">
        <label htmlFor="energy">Type d'énergie utilisé</label>
        <input type="text" id="energy" name="energy" />
      </div>
    </div>
  );
}
