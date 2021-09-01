import { TextField, Button } from "@material-ui/core";
import React from "react";

function UserData() {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        margin="normal"
        variant="outlined"
        required="true"
        fullWidth
      />
      <TextField
        id="password"
        label="password"
        type="password"
        margin="normal"
        variant="outlined"
        required="true"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}

export default UserData;
