import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { Setting } from "./components/Setting/Setting";

export interface InitValues {
  max: string;
  start: string;
}

function App() {
  const [initValues, setInitValues] = useState<InitValues>({
    max: "0",
    start: "0",
  });

  const [counter, setCounter] = useState<string>("0");

  return (
    <div className="divContainer">
      <Setting
        counter={counter}
        setCounter={setCounter}
        initValues={initValues}
        setInitValues={setInitValues}
      />
      <Counter
        counter={counter}
        setCounter={setCounter}
        initValues={initValues}
      />
    </div>
  );
}

export default App;
