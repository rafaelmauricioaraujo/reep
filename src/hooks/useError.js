import React, { useState } from "react";

function useError(validations) {
  const initialState = makeInitialState(validations);
  const [error, setError] = useState(initialState);

  function validFields(event) {
    const { name, value } = event.target;
    const isValid = validations[name](value);
    const newState = { ...error, ...isValid };
    setError(newState);
  }

  function validForm() {
    for (let field in error) {
      if (!error[field].valid) {
        return false;
      }
    }
    return true;
  }

  return [error, validFields, validForm];
}

function makeInitialState(validacoes) {
    const initialState = {};
    for(let field in validacoes){
        initialState[field] = {valid: true, text: ""};
    }
      
    return initialState;
}

export default useError;
