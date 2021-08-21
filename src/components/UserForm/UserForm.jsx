import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function UserForm({onSubmit}) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [eMail, setEmail] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({firstName, secondName, eMail, promotions, newsletter});
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
          setFirstName(event.target.value);
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
        value={eMail}
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
        Register
      </Button>
    </form>
  );
}

export default UserForm;
