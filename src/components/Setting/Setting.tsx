import React, { Dispatch, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { InitValues } from "../../App";
import { Input } from "../Input/Input";

type SettingPropsType = {
  counter: string;
  setCounter: Dispatch<React.SetStateAction<string>>;
  initValues: InitValues;
  setInitValues: Dispatch<React.SetStateAction<InitValues>>;
  settingBtn: boolean;
  setSettingBtn: Dispatch<React.SetStateAction<boolean>>;
  startMsg: boolean;
  setStartMsg: Dispatch<React.SetStateAction<boolean>>;
};

const MAX = "max";
const START = "start";

export const Setting = (props: SettingPropsType) => {
  const {
    setCounter,
    initValues,
    setInitValues,
    settingBtn,
    setSettingBtn,
    counter,
    setStartMsg,
  } = props;

  const [dis, setDis] = useState<boolean>(false);

  useEffect(() => {
    const startStore = localStorage.getItem(START);
    const maxStore = localStorage.getItem(MAX);
    if (startStore && maxStore) {
      setInitValues((prev) => ({ ...prev, start: startStore }));
      setInitValues((prev) => ({ ...prev, max: maxStore }));
      setCounter(startStore);
    }
  }, [setCounter, setInitValues]);

  useEffect(() => {
    setDis(
      +initValues.start >= +initValues.max ||
        +initValues.start < 0 ||
        +initValues.max < 0
    );
  }, [initValues]);

  const setBtn = () => {
    const newCounter = initValues.start;
    setCounter(newCounter);
    setSettingBtn(true);
    setStartMsg(false);

    localStorage.setItem(START, initValues.start);
    localStorage.setItem(MAX, initValues.max);
  };

  return (
    <div className="box">
      <Input
        initValues={initValues}
        setInitValues={setInitValues}
        settingBtn={settingBtn}
        setSettingBtn={setSettingBtn}
        counter={counter}
        setCounter={setCounter}
      />
      <div className="divBtn">
        <Button
          name={"set"}
          clickHandler={setBtn}
          disabled={dis || settingBtn}
        />
      </div>
    </div>
  );
};
