import React from 'react';

export default function ChoixTravaux() {
  return (
    <div>
      <h3> Quels types de travaux souhaiteriez-vous entreprendre ? </h3>
      <select name="travaux" id="travaux_select">
        <option value="">----</option>
        <option value="isolation">Isolation</option>
        <option value="chauffage">Chauffage</option>
        <option value="ventilation">Ventilation</option>
      </select>
    </div>
  );
}
