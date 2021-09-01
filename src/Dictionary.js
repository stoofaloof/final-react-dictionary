import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [searchWord, setsearchWord] = useState(props.default);
  const [results, setResults] = useState(null);
  const [load, setLoad] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;

    axios.get(apiUrl).then(handleResponse);

    let pexelsAPIKey =
      "563492ad6f91700001000001a116130192f44fd5a44d3938576ee4fc";
    let pexelsAPIUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=6`;
    let headers = { AUthorization: `Bearer ${pexelsAPIKey}` };

    axios.get(pexelsAPIUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchword(event) {
    setsearchWord(event.target.value);
  }

  function loaded() {
    setLoad(true);
    search();
  }

  if (load) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleSearchword} autofocus />
        </form>
        <Results results={results} />
        <br />
        <Photos photos={photos} />
      </div>
    );
  } else {
    loaded();
    return "Loading...";
  }
}
