import { Button, TextField } from "@material-ui/core";
import React from "react";

function ShipmentData() {
  return (
    <form>
      <TextField
        id="postalCode"
        label="Postal Code"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="address"
        label="Address"
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="number"
        label="Number"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="state"
        label="State"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <TextField
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
