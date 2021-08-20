import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function UserForm() {
  return (
    <form>
      <TextField
        id="standard-basic"
        label="First Name"
        margin="normal"
        variant="outlined"
        fullWidth
      />

      <TextField
        id="standard-basic"
        label="Last Name"
        margin="normal"
        variant="outlined"
        fullWidth
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
