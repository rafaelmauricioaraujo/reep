import React from "react";
import Button from "@material-ui/core/Button";

function UserForm() {
  return (
    <form>
      <label>First Name</label>
      <input type="text" />

      <label>Last Name</label>
      <input type="text" />

      <label>ID Code</label>
      <input type="text" />

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
