import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

export default function MapEspaceRenov() {
  const [position, setPosition] = useState([45.764043, 4.835659]);
  const [spaceList, setSpaceList] = useState([]);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((p) => {
      setPosition([p.coords.latitude, p.coords.longitude]);
    });
  }

  useEffect(() => {
    axios
      .get(
        'https://koumoul.com/data-fair/api/v1/datasets/liste-espaces-conseil-france-renov/lines?format=json&q_mode=simple&geo_distance=4.835659%2C45.764043%2C200000&sampling=neighbors'
      )
      .then((res) => res.data)
      .then((data) => setSpaceList(data.results));
  }, []);

  return (
    <div>
      <LeafletMap center={position} zoom="12" scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />;
        {spaceList.map((space) => {
          const lat = space['_coords.lat'];
          const lon = space['_coords.lon'];
          return (
            <Marker key={space.Id_Structure} position={[lat, lon]}>
              <Popup>
                <span className="font-bold text-l">{space.Nom_Structure}</span>
                <br />
                ⏲️ : {space.Horaires_Structure}
                <br />
                🖥️ :{' '}
                <a href={space.Site_Internet_Structure}>
                  {space.Site_Internet_Structure}
                </a>
                <br />
                🏠 : {space.Adresse_Structure}
                <br />
                📞 : {space.Telephone_Structure}
                <br />
                ✉️ : {space.Email_Structure}
                <br />
              </Popup>
            </Marker>
          );
        })}
      </LeafletMap>
    </div>
  );
}
