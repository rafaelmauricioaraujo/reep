import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({email, password});
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        margin="normal"
        variant="outlined"
        required={true}
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        id="password"
        label="password"
        type="password"
        margin="normal"
        variant="outlined"
        required={true}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}

export default UserData;
