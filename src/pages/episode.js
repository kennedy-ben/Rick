import React, { useEffect, useState } from "react";
import axios from "axios";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode")
      .then((res) => setEpisodes(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Fetching data for all episodes from API in Axios</h3>
        <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>
              <strong>Name:</strong> {episode.name} | <strong>Episode:</strong> {episode.episode} | <strong>Air Date:</strong> {episode.air_date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Episodes;
