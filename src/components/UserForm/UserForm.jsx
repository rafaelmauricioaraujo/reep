import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(firstName);
        console.log(secondName);
      }}
    >
      <TextField
        id="standard-basic"
        label="First Name"
        margin="normal"
        variant="outlined"
        fullWidth
        value={firstName}
        onChange={(event) => {
          let temp = event.target.value;
          if (temp >= 3) {
            temp = temp.substr(0, 3);
          }
          setFirstName(temp);
        }}
      />

      <TextField
        id="standard-basic"
        label="Last Name"
        margin="normal"
        variant="outlined"
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
        fullWidth
      />

      <FormControlLabel
        control={<Switch size="small" color="primary" defaultChecked />}
        label="Promotions"
      />

      <FormControlLabel
        control={<Switch size="small" color="primary" defaultChecked />}
        label="Newsletter"
      />

      <Button variant="contained" color="primary" type="submit">
        Register
      </Button>
    </form>
  );
}

export default UserForm;
