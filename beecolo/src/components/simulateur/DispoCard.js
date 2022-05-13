import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function DispoCard({ dispoId }) {
  const [dispo, setDispo] = useState();
  const [displayDescription, setDisplayDescription] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://koumoul.com/data-fair/api/v1/datasets/simul'aideuros-dispositifs/lines?format=json&q_mode=simple&qs=id%3A${dispoId}&size=1&sampling=neighbors`
      )
      .then((res) => res.data.results[0])
      .then((data) => setDispo(data));
  }, []);

  return (
    <div>
      <h2 onClick={() => setDisplayDescription(!displayDescription)}>
        {dispo.intitule}
      </h2>
      {displayDescription && <p>{dispo.descriptif}</p>}
    </div>
  );
}
