import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function ShipmentData({ onSubmit }) {
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({postalCode, address, number, state, city});
      }}
    >
      <TextField
        value={postalCode}
        onChange={(event) => {
          setPostalCode(event.target.value);
        }}
        id="postalCode"
        label="Postal Code"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
        id="address"
        label="Address"
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        id="number"
        label="Number"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        id="state"
        label="State"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
        id="city"
        label="city"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </form>
  );
}

export default ShipmentData;
