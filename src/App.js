import React from "react";
import "./SASS/octoflex-ui.sass";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row row-16">
          <div className="col col-min-16 p-0">
            <div>
              <h1>Octoflex UI</h1>
            </div>
          </div>
          <div className="col col-min-2 px-0">
            <div>2-X PX-0</div>
          </div>
          <div className="col col-max-1 ml-5">
            <div>1 ML-5</div>
          </div>
          <div className="col col-min-2 mr-3">
            <div>2-X MR-3</div>
          </div>
        </div>
        <div className="row">
          <div className="col col-min-12 pl-5">
            <div>12 PL-5</div>
          </div>
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
          <div className="col col-max-1 p-0">
            <div>1 P-0</div>
          </div>
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
        </div>
      </div>
    </div>
  );
}
