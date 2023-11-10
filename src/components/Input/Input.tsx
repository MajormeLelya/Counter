import React, { ChangeEvent, Dispatch } from "react";
import { InitValues } from "../../App";

type InputPropsType = {
  initValues: InitValues;
  setInitValues: Dispatch<React.SetStateAction<InitValues>>;
  settingBtn: boolean;
  setSettingBtn: Dispatch<React.SetStateAction<boolean>>;
  counter: string;
  setCounter: Dispatch<React.SetStateAction<string>>;
};

export const Input = (props: InputPropsType) => {
  const { initValues, setInitValues, settingBtn, setSettingBtn } = props;

  const startCount = initValues.start;
  const maxCount = initValues.max;

  const isEqualSetValues =
    +startCount >= +maxCount || +startCount < 0 || +maxCount < 0;

  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInitValues((prev) => ({ ...prev, max: e.target.value }));
    if (settingBtn) {
      setSettingBtn(false);
    }
  };

  const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInitValues((prev) => ({ ...prev, start: e.target.value }));
    if (settingBtn) {
      setSettingBtn(false);
    }
  };

  return (
    <div className="inputsBox">
      <label htmlFor="max" className="lebelStyle">
        max value :
        <input
          onChange={maxValueHandler}
          value={initValues.max}
          className={isEqualSetValues ? "errorInputsStyle" : "inputsStyle"}
          type="number"
          id="max"
        />
      </label>

      <label htmlFor="start" className="lebelStyle">
        start value :
        <input
          onChange={startValueHandler}
          value={initValues.start}
          className={isEqualSetValues ? "errorInputsStyle" : "inputsStyle"}
          type="number"
          id="start"
        />
      </label>
    </div>
  );
};
