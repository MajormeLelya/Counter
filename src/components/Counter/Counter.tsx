import React, { Dispatch } from "react";
import { Button } from "../Button/Button";
import { InitValues } from "../../App";
import { convertState } from "../../utils/convertState";

type CounterPropsType = {
  counter: string;
  setCounter: Dispatch<React.SetStateAction<string>>;
  initValues: InitValues;
};

export const Counter = (props: CounterPropsType) => {
  const { counter, setCounter, initValues } = props;

  const startCount = initValues.start;
  const maxCount = initValues.max;

  // const isIncBtnDisabled = maxCount;
  // const isResetBtnDisabled = startCount;

  const onClickHandler = () => {
    if (counter < maxCount) {
      setCounter(convertState(counter, 1));
    }
  };

  const removeCounter = () => {
    setCounter(startCount);
  };

  return (
    <div className="box">
      <h1 className="counter">{counter}</h1>
      <div className="divBtn">
        <Button
          name={"inc"}
          clickHandler={onClickHandler}
          // disabled={isIncBtnDisabled}
        />
        <Button
          name={"reset"}
          clickHandler={removeCounter}
          // disabled={isResetBtnDisabled}
        />
      </div>
    </div>
  );
};
