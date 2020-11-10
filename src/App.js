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
        <div className="row pt-3">
          <div className="col col-min-2">
            <div className="p-3">Hello :) I'm a .col-min-2, I will never take less than 2 columns but I will grow as long as there is space left for me.</div>
          </div>
          <div className="col col-max-2">
            <div className="p-3">I'm a .col-max-2, I will never grow more than 2 columns.</div>
          </div>
          <div className="col col-min-3">
            <div className="p-3">I'm a .col-min-3, I will never be slimmer than 3 columns and I will grow as long as I find space. And with flex boxes magic I'm still bigger than my little sister .col-min-2, bigger col-min-* have a bigger flex-grow so that it will maintain width priority even when growing to fill empty space.  
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col col-max-1">
            <div></div>
          </div>
          <div className="col col-max-1">
            <div>I</div>
          </div>
          <div className="col col-max-1">
            <div></div>
          </div>
          <div className="col col-max-1">
            <div>A</div>
          </div>
          <div className="col col-max-1">
            <div>M</div>
          </div>
          <div className="col col-max-1">
            <div></div>
          </div>
          <div className="col col-max-1">
            <div>A</div>
          </div>
          <div className="col col-max-1">
            <div></div>
          </div>
          <div className="col col-max-1">
            <div>R</div>
          </div>
          <div className="col col-max-1">
            <div>O</div>
          </div>
          <div className="col col-max-1">
            <div>W</div>
          </div>
          <div className="col col-max-1">
            <div></div>
          </div>
        </div>
        <div className="row row-16">
        <div className="col col-max-1">
            <div></div>
          </div>
          <div className="col col-max-1">
            <div>I</div>
          </div>
          <div className="col col-max-1">
            <div></div>
          </div>
          
          <div className="col col-max-1">
            <div>A</div>
          </div>
          <div className="col col-max-1">
            <div>M</div>
          </div>
          <div className="col col-max-1">
            <div></div>
          </div>
          <div className="col col-max-1">
            <div>A</div>
          </div>
          <div className="col col-max-1">
            <div></div>
          </div>
          <div className="col col-max-1">
            <div>R</div>
          </div>
          <div className="col col-max-1">
            <div>O</div>
          </div>
          <div className="col col-max-1">
            <div>W</div>
          </div>
          <div className="col col-max-1">
            <div>-</div>
          </div>
          <div className="col col-max-1">
            <div>1</div>
          </div>
          <div className="col col-max-1">
            <div>6</div>
          </div>
          <div className="col col-max-1">
            <div>:-)</div>
          </div>
          <div className="col col-max-1">
            <div></div>
          </div>
        </div>
        <div className="row row">
          <div className="col col-min-10 offset-2">
            <div className="p-3">You can offset me.</div>
          </div>
          <div className="col col-min-3">
            <div className="p-5">Use p-*, px-*, py-*, pl-*, pr-*, pt-*, pb-* classes for padding.</div>
          </div>
          <div className="col col-min-3">
            <div className="mt-5 p-3">Use m-*, mx-*, my-*, ml-*, mr-*, mt-*, mb-* classes for margins.</div>
          </div>
          <div className="col col-min-3">
            <div className="p-3 mb-n2">What about negative margins? Use m-n*, mx-n*, etc.</div>
          </div>
          <div className="col col-min-3">
            <div className="p-3 my-auto">And of course all the margin auto classes m-auto, mx-auto, etc.</div>
          </div>        
        </div>
        <footer className="footer-row row-16">
          <div className="col col-max-16 p-0">
            <div>
              <h3>
                By&nbsp;
                <a href="https://www.octoplus.solutions">Octoplus Solutions</a>
              </h3>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
