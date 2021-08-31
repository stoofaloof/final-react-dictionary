import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

export default function Dictionary() {
  const [searchWord, setsearchWord] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    setsearchWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleSubmit} />
      </form>
      <Results results={results} />
    </div>
  );
}
