import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import PersonalData from "./PersonalData";
import ShipmentData from "./ShipmentData";
import UserData from "./UserData";

function UserForm({ onSubmit, validEmail }) {
  const [currentState, setCurrentState] = useState(0);
  
  function currentForm(currentState) {
    switch (currentState) {
      case 0:
        return <PersonalData onSubmit={onSubmit} validEmail={validEmail} />;
      case 1:
        return <UserData />;
      case 2:
        return <ShipmentData />;
      default:
        return <Typography>Error. Form not recognize</Typography>;
    }
  }

  return <>{currentForm(currentState)}</>;
}


export default UserForm;
