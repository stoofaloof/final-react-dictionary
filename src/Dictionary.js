import React, { useState } from "react";

export default function Dictionary() {
  const [searchWord, setsearchWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchWord}`);
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
