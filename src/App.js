import React from "react";
import "./SASS/octoflex-ui.sass";

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="row row-16">
        <div className="col col-min-16">
          <h1>Octoflex UI</h1>
        </div>
        <div className="col col-min-2">
          <h1>2-X</h1>
        </div>
        <div className="col col-max-1">
          <h1>1</h1>
        </div>
        <div className="col col-min-2">
          <h1>2-X</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-min-12">
          <h1>12</h1>
        </div>
        <div className="col col-min-2">
          <h1>2-X</h1>
        </div>
        <div className="col col-max-1">
          <h1>1</h1>
        </div>
        <div className="col col-min-2">
          <h1>2-X</h1>
        </div>
      </div>
    </div>
  </div>
  );
}
