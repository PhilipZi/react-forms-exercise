import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  function valueInputChangeHandler(event) {
    setEnteredValue(event.target.value);
  }

  function inputBlurHandler(event) {
    setIsTouched(true);
  }

  function reset() {
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueInputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
