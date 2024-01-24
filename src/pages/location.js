import React, { useEffect, useState } from "react";
import axios from "axios";

function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location")
      .then((res) => setLocations(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Fetching data for all locations from API in Axios</h3>
        <ul>
          {locations.map((location) => (
            <li key={location.id}>
              <strong>Name:</strong> {location.name} | <strong>Type:</strong> {location.type} | <strong>Dimension:</strong> {location.dimension}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Locations;
