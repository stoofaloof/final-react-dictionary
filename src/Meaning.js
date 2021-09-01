import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5 className="Partofspeech">{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              {" "}
              <strong>
                <u>Definition:</u>
              </strong>{" "}
              {definition.definition}
            </div>
            <em className="Example">{definition.example}</em>
            <br /> <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
