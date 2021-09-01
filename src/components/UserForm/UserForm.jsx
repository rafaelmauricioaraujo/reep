import React, { useState } from "react";
import PersonalData from "./PersonalData";
import ShipmentData from "./ShipmentData";
import UserData from "./UserData";

function UserForm({ onSubmit, validEmail }) {
  const [currentState, setCurrentState] = useState(0);

  const forms = [
    <PersonalData onSubmit={next} validEmail={validEmail} />,
    <UserData onSubmit={next} />,
    <ShipmentData onSubmit={onSubmit} />,
  ];

  function next() {
    setCurrentState(currentState + 1);
  }

  return <>{forms[currentState]}</>;
}

export default UserForm;
