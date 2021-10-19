import React, { useState } from "react";
import PersonalData from "./PersonalData";
import ShipmentData from "./ShipmentData";
import UserData from "./UserData";

function UserForm({ onSubmit, validEmail }) {
  const [currentStep, setCurrentStep] = useState(0);

  const forms = [
    <UserData onSubmit={next} />,
    <PersonalData onSubmit={next} validEmail={validEmail} />,
    <ShipmentData onSubmit={onSubmit} />,
  ];

  function next() {
    setCurrentStep(currentStep + 1);
  }

  return <>{forms[currentStep]}</>;
}

export default UserForm;
