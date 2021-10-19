import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import PersonalData from "./PersonalData";
import ShipmentData from "./ShipmentData";
import UserData from "./UserData";

function UserForm({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (currentStep === forms.length - 1) {
      onSubmit(userData);
    }
  });

  const forms = [
    <UserData onSubmit={getUserData} />,
    <PersonalData onSubmit={getUserData} />,
    <ShipmentData onSubmit={getUserData} />,
    <Typography variant="h5">Thank you!</Typography>,
  ];

  function getUserData(data) {
    setUserData({ ...userData, ...data });
    next();
  }

  function next() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados de Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[currentStep]}
    </>
  );
}

export default UserForm;
