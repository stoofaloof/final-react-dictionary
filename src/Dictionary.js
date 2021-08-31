import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  const [searchWord, setsearchWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchWord}`);

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
    </div>
  );
}
