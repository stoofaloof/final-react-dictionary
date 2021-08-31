import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p>Dictionary</p>
        </header>
        <Dictionary />
        <footer>
          Coded by Stephanie Chow // Open-sourced on{" "}
          <a
            href="https://github.com/stoofaloof/final-react-dictionary"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
