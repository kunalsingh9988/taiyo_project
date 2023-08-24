import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const WorldMap = () => {
  // Fetch country data using react-query
  const { data } = useQuery("countryData", async () => {
    const response = await axios.get("https://disease.sh/v3/covid-19/countries");
    return response.data;
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {/* Create a MapContainer with Leaflet map */}
      <MapContainer center={[20, 0]} zoom={2} className="w-2/3 h-2/3">
        {/* Add a TileLayer with OpenStreetMap tiles */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {/* Map through the country data and add Marker for each country */}
        {data.map((country) => (
          <Marker
            key={country.countryInfo.iso2}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            {/* Popup showing COVID-19 data for the country */}
            <Popup>
              <div>
                <h2 className="text-lg font-semibold">{country.country}</h2>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMap;
