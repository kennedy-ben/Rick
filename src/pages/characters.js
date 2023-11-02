import React, { useEffect, useState } from "react";
import axios from "axios";

function Characters() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Fetching data from API in Axios</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Gender</th>
              <th>Species</th>
              <th>Origin</th>
              <th>Location</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((character) => (
              <tr key={character.id}>
                <td>{character.id}</td>
                <td>{character.name}</td>
                <td>{character.status}</td>
                <td>{character.gender}</td>
                <td>{character.species}</td>
                <td>{character.origin.name}</td>
                <td>{character.location.name}</td>
                <td>
                  <img src={character.image} alt={character.name} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Characters;
