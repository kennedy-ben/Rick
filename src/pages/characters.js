import React, { useEffect, useState } from "react";
import axios from "axios";

function Characters() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => setData((prevData) => [...prevData, ...res.data.results]))
      .catch((err) => console.log(err));
  }, [page]);

  const loadMoreCharacters = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container">
      <div className="mt-3">
        {/* <h3>Welcome these are the all Characters</h3> */}
        <table className="table">
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
        <button onClick={loadMoreCharacters}>Load More</button>
      </div>
    </div>
  );
}

export default Characters;
