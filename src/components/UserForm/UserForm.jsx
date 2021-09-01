import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import PersonalData from "./PersonalData";
import ShipmentData from "./ShipmentData";
import UserData from "./UserData";

function UserForm({ onSubmit, validEmail }) {
  const [currentState, setCurrentState] = useState(0);

  function next() {
    setCurrentState(currentState + 1);
  }
  
  function currentForm(currentState) {
    switch (currentState) {
      case 0:
        return <PersonalData onSubmit={next} validEmail={validEmail} />;
      case 1:
        return <UserData onSubmit={next} />;
      case 2:
        return <ShipmentData onSubmit={onSubmit} />;
      default:
        return <Typography>Error. Form not recognize</Typography>;
    }
  }

  return <>{currentForm(currentState)}</>;
}


export default UserForm;
