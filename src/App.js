import React from "react";
import "./SASS/octoflex-ui.sass";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header-row row-16">
          <div className="col col-min-16 p-0 mb">
            <div>
              <h1>Octoflex UI</h1>
            </div>
          </div>
        </header>
        <div className="row row-16 pt-3">
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
          <div className="col col-max- offset-1">
            <div>2 OFFSET-1</div>
          </div>
          <div className="col col-min-2 offset-1">
            <div>2-X OFFSET-1</div>
          </div>
        </div>
        <div className="row row-16">
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
          <div className="col col-max-1">
            <div>1</div>
          </div>
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
        </div>
        <div className="row row-16">
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
          <div className="col col-max-1">
            <div>1</div>
          </div>
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
        </div>
        <div className="row row-16">
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
          <div className="col col-max-1">
            <div>1</div>
          </div>
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
        </div>
        <div className="row row-16">
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
          <div className="col col-max-1">
            <div>1</div>
          </div>
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
        </div>
        <div className="row row-16">
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
          <div className="col col-max-1">
            <div>1</div>
          </div>
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
        </div>
        <div className="row">
          <div className="col col-min-16 px-5">
            <div>12 PX-5</div>
          </div>
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
          <div className="col col-min-12 px-0">
            <div>1 PX-0</div>
          </div>
          <div className="col col-max-2 mx-auto">
            <div>2-X MX-AUTO</div>
          </div>
        </div>
        <div className="row">
          <div className="col col-min-16 px-5">
            <div>12 PX-5</div>
          </div>
          <div className="col col-min-2">
            <div>2-X</div>
          </div>
          <div className="col col-min-12 px-0">
            <div>1 PX-0</div>
          </div>
          <div className="col col-max-2 offset-5">
            <div>2-X OFFSET-5</div>
          </div>
        </div>
        <footer className="footer-row row-16">
          <div className="col col-max-16 p-0">
            <div><h2>Footer</h2></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
