import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import PersonalData from "./PersonalData";
import ShipmentData from "./ShipmentData";
import UserData from "./UserData";

function UserForm({ onSubmit, validations }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (currentStep === forms.length - 1) {
      onSubmit(userData);
    }
  });

  const forms = [
    <UserData onSubmit={getUserData} validations={validations} />,
    <PersonalData onSubmit={getUserData} validations={validations} />,
    <ShipmentData onSubmit={getUserData} validations={validations} />,
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
