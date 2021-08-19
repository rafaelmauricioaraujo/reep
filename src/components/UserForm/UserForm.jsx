import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function UserForm() {
  return (
    <form>
      <TextField id="standard-basic" label="First Name"  variant="outlined" fullWidth/>

      <TextField id="standard-basic" label="Last Name"  variant="outlined" fullWidth/>

      <TextField id="standard-basic" label="ID Code"  variant="outlined" fullWidth/>

      <label>Promotions</label>
      <input type="checkbox" />

      <label>Newsletter</label>
      <input type="checkbox" />

      <Button variant="contained" color="primary" type="submit">
        Register
      </Button>
    </form>
  );
}

export default UserForm;
