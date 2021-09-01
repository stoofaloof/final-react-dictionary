import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

export default function Dictionary(props) {
  const [searchWord, setsearchWord] = useState(props.default);
  const [results, setResults] = useState(null);
  const [load, setLoad] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;

    axios.get(apiUrl).then(handleResponse);
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
          <input type="search" onChange={handleSearchword} />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    loaded();
    return "Loading...";
  }
}
