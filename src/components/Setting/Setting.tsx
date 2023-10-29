import React, { ChangeEvent, Dispatch, useEffect } from "react";
import { Button } from "../Button/Button";
import { InitValues } from "../../App";

const COUNTER = "counter";
const MAX = "max";

type SettingPropsType = {
  counter: string;
  setCounter: Dispatch<React.SetStateAction<string>>;
  initValues: InitValues;
  setInitValues: Dispatch<React.SetStateAction<InitValues>>;
};

export const Setting = (props: SettingPropsType) => {
  const { counter, setCounter, initValues, setInitValues } = props;

  useEffect(() => {
    const counterStore = localStorage.getItem(COUNTER);
    const maxStore = localStorage.getItem(MAX);
    if (counterStore && maxStore) {
      setInitValues((prev) => ({ ...prev, max: maxStore }));
      setInitValues((prev) => ({ ...prev, start: counterStore }));
      setCounter(counterStore);
    }
  }, [setCounter, setInitValues]);

  const setBtn = () => {
    const newCounter = initValues.start;
    setCounter(newCounter);
    localStorage.setItem(COUNTER, counter);
    localStorage.setItem(MAX, initValues.max);
  };

  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInitValues((prev) => ({ ...prev, max: e.target.value }));
  };

  const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInitValues((prev) => ({ ...prev, start: e.target.value }));
  };

  return (
    <div className="box">
      <div className="inputsBox">
        <label htmlFor="max" className="lebelStyle">
          max value :
          <input
            onChange={maxValueHandler}
            value={initValues.max}
            className="inputsStyle"
            type="number"
            id="max"
          />
        </label>

        <label htmlFor="start" className="lebelStyle">
          start value :
          <input
            onChange={startValueHandler}
            value={initValues.start}
            className="inputsStyle"
            type="number"
            id="start"
            max={Number(initValues.max) - 1}
          />
        </label>
      </div>

      <div className="divBtn">
        <Button name={"set"} clickHandler={setBtn} />
      </div>
    </div>
  );
};
