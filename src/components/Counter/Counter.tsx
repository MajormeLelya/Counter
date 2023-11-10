import React, { Dispatch } from "react";
import { Button } from "../Button/Button";
import { InitValues } from "../../App";
import { convertState } from "../../utils/convertState";

type CounterPropsType = {
  counter: string;
  setCounter: Dispatch<React.SetStateAction<string>>;
  initValues: InitValues;
  settingBtn: boolean;
  startMsg: boolean;
  setStartMsg: Dispatch<React.SetStateAction<boolean>>;
};

export const Counter = (props: CounterPropsType) => {
  const { counter, setCounter, initValues, settingBtn, startMsg } = props;

  const startCount = initValues.start;
  const maxCount = initValues.max;
  const isMaxValue = Number(counter) === Number(maxCount);
  const isEqualSetValues =
    +startCount >= +maxCount || +startCount < 0 || +maxCount < 0;

  const isIncBtnDisabled = Number(counter) === Number(maxCount);
  const isResetBtnDisabled = Number(counter) === Number(startCount);

  const onClickHandler = () => {
    if (Number(counter) < Number(maxCount)) {
      setCounter(convertState(counter, 1));
    }
  };

  const removeCounter = () => {
    setCounter(startCount);
  };

  return (
    <div className="box">
      {isMaxValue && settingBtn ? (
        <span className="counterError">{counter}</span>
      ) : (
        !startMsg &&
        !isEqualSetValues && <span className="counter">{counter}</span>
      )}
      {isEqualSetValues && (
        <span className="counterErrorMessage">Incorrect value!</span>
      )}
      {startMsg && !isEqualSetValues && (
        <span className="startMessage">Enter values and press 'set'</span>
      )}
      <div className="divBtn">
        <Button
          name={"inc"}
          clickHandler={onClickHandler}
          disabled={isEqualSetValues || isIncBtnDisabled}
        />
        <Button
          name={"reset"}
          clickHandler={removeCounter}
          disabled={isEqualSetValues || isResetBtnDisabled}
        />
      </div>
    </div>
  );
};
