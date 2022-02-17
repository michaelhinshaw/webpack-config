import "../styles/index.scss";
import Progressions from "./Progressions";

import React from "react";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
      </main>

      <Progressions />
    </>
  );
};

export default App;
