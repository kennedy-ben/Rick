import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.css"; 

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
  
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => setCharacters((prevData) => [...prevData, ...res.data.results]))
      .catch((err) => console.log(err));

    
    axios.get("https://rickandmortyapi.com/api/episode")
      .then((res) => setEpisodes(res.data.results))
      .catch((err) => console.log(err));

  
    axios.get("https://rickandmortyapi.com/api/location")
      .then((res) => setLocations(res.data.results))
      .catch((err) => console.log(err));
  }, [page]);

  const loadMoreCharacters = () => {
    setPage((prevPage) => prevPage + 1);
  };

  
  const charactersWithInfo = characters.map((character) => {
    const characterEpisodes = episodes.filter((episode) => character.episode.includes(episode.id));
    const characterOrigin = locations.find((location) => location.url === character.origin.url);
    const characterLocation = locations.find((location) => location.url === character.location.url);

    return {
      ...character,
      episodes: characterEpisodes,
      origin: characterOrigin,
      location: characterLocation,
    };
  });

  return (
    <div className="container">
      <div className="mt-3 character-column">
        {charactersWithInfo.map((character) => (
          <div key={character.id} className="character-box">
            <p>{character.name}</p>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            
            <strong>Episodes:</strong>
            <ul>
              {character.episodes.map((episode) => (
                <li key={episode.id}>
                  {episode.name} | {episode.episode} | {episode.air_date}
                </li>
              ))}
            </ul>
           
            <strong>Origin:</strong> {character.origin ? character.origin.name : "Unknown"}<br />
            <strong>Location:</strong> {character.location ? character.location.name : "Unknown"}<br />
            <img src={character.image} alt={character.name} />
          </div>
        ))}
        <button onClick={loadMoreCharacters}>Load More</button>
      </div>
    </div>
  );
}

export default Characters;
