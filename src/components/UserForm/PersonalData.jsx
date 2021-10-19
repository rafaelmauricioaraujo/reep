import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

import RegisterValidations from "../../contexts/RegisterValidations";

function PersonalData({ onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const [error, setError] = useState({ email: { valid: true, text: "" } });

  const validations = useContext(RegisterValidations);

  function validFields(event) {
    const { name, value } = event.target;

    /*
    const newState = {...error};
    newState[name] = validations[name](value); 
    **/

    const isValid = validations[name](value);
    const newState = { ...error, ...isValid };
    setError(newState);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ firstName, secondName, email, promotions, newsletter });
      }}
    >
      <TextField
        id="standard-basic"
        label="First Name"
        margin="normal"
        variant="outlined"
        required={true}
        fullWidth
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />

      <TextField
        id="standard-basic"
        label="Last Name"
        margin="normal"
        variant="outlined"
        required={true}
        fullWidth
        value={secondName}
        onChange={(event) => {
          setSecondName(event.target.value);
        }}
      />

      <TextField
        id="standard-basic"
        label="E-mail"
        margin="normal"
        variant="outlined"
        required={true}
        fullWidth
        name="email"
        onBlur={validFields}
        error={!error.email.valid}
        helperText={error.email.text}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <FormControlLabel
        control={
          <Switch
            size="small"
            color="primary"
            checked={promotions}
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
          />
        }
        label="Promotions"
      />

      <FormControlLabel
        control={
          <Switch
            size="small"
            color="primary"
            checked={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.checked);
            }}
          />
        }
        label="Newsletter"
      />

      <Button variant="contained" color="primary" type="submit">
        Next
      </Button>
    </form>
  );
}

export default PersonalData;
