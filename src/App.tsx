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
  const [settingBtn, setSettingBtn] = useState<boolean>(false);
  const [startMsg, setStartMsg] = useState<boolean>(true);

  return (
    <div className="divContainer">
      <Setting
        settingBtn={settingBtn}
        setSettingBtn={setSettingBtn}
        counter={counter}
        setCounter={setCounter}
        initValues={initValues}
        setInitValues={setInitValues}
        startMsg={startMsg}
        setStartMsg={setStartMsg}
      />
      <Counter
        settingBtn={settingBtn}
        counter={counter}
        setCounter={setCounter}
        initValues={initValues}
        startMsg={startMsg}
        setStartMsg={setStartMsg}
      />
    </div>
  );
}

export default App;
