import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function UserData({ onSubmit, validations }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({ email: { valid: true, text: "" } });

  function validFields(event) {
    const {name, value} = event.target;
    
    /*
    const newState = {...error};
    newState[name] = validations[name](value); 
    **/
    
    const isValid = validations[name](value);
    const newState = {...error, ...isValid}
    setError(newState);
  }

  function validForm(){
    for(let field in error){
      if(!error[field].valid) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(validForm()) {
          onSubmit({email, password});
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="email"
        margin="normal"
        variant="outlined"
        fullWidth
        onBlur={validFields}
        error={!error.email.valid}
        helperText={error.email.text}
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        id="password"
        name="pasword"
        label="password"
        type="password"
        margin="normal"
        variant="outlined"
        required={true}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </form>
  );
}

export default UserData;
