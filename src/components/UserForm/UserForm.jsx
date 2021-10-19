import React, { useState, useEffect } from "react";
import PersonalData from "./PersonalData";
import ShipmentData from "./ShipmentData";
import UserData from "./UserData";

function UserForm({ onSubmit, validEmail }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log(userData);
  });

  const forms = [
    <UserData onSubmit={getUserData} />,
    <PersonalData onSubmit={getUserData} validEmail={validEmail} />,
    <ShipmentData onSubmit={onSubmit} />,
  ];

  function getUserData(data) {
    setUserData({ ...userData, ...data });
    next();
  }

  function next() {
    setCurrentStep(currentStep + 1);
  }

  return <>{forms[currentStep]}</>;
}

export default UserForm;
