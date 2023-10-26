import React from "react";
import { Panel } from "components/Panel";
import { Result } from "components/Result";
import "./App.scss";

const App: React.FC = () => {
 
  return (
    <>
      <div className="generator">
        <h1>Password Generator</h1>
        <Result />
        <Panel />
      </div>
    </>
  );
};

export default App;
