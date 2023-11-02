import axios from "axios";
import React, { useEffect, useState } from "react";

function Location() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((res) => setData(res.data.results))
      .catch((err) => console.Console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="mt-3">
        <h3>Getting Location</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Dimension</th>
              <th>Residents</th>
              <th>Url</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((location) => (
                    <tr key={location.id}>
                        <td>location.id</td>
                        <td>location.name</td>
                        <td>location.dimension</td>
                        <td>location.residents</td>
                        <td>location.url</td>
                        <td>location.created</td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Location;
