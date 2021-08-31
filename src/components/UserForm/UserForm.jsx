import React from "react";
import PersonalData from "./PersonalData";
import ShipmentData from "./ShipmentData";
import UserData from "./UserData";

function UserForm({ onSubmit, validEmail }) {
  return (
    <>
      <PersonalData onSubmit={onSubmit} validEmail={validEmail} />
      <UserData />
      <ShipmentData />
    </>
  );
}

export default UserForm;
