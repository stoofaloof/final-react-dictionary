import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Input Search Word...</header>
        <Dictionary default="philosophy" />
        <br />
        <footer>
          Coded by Stephanie Chow // Open-sourced on{" "}
          <a
            href="https://github.com/stoofaloof/final-react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
