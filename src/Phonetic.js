import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      /{props.phonetic.text}/{" "}
      <button href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {""} Listen
      </button>
    </div>
  );
}
