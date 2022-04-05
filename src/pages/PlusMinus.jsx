import React, { useState } from "react";
import "./PlusMinus.css";

const PlusMinus = () => {
  const [countValue, setCountValue] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const onClickPlus = () => {
    setCountValue(countValue + 1);
  };

  const onClickMinus = () => {
    setCountValue(countValue - 1);
  };

  const onClickOnOff = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div>
      <h1 data-testid="counter">{countValue}</h1>
      <button title="plus" onClick={onClickPlus} disabled={isDisabled}>
        +
      </button>
      <button title="minus" onClick={onClickMinus} disabled={isDisabled}>
        -
      </button>
      <br />
      <button
        onClick={onClickOnOff}
        style={{ backgroundColor: "blue", borderColor: "blue" }}
      >
        on/off
      </button>
    </div>
  );
};

export default PlusMinus;
