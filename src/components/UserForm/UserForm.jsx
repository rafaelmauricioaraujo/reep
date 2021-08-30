import React from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";

function UserForm({ onSubmit, validEmail }) {
  return (
    <>
      <PersonalData onSubmit={onSubmit} validEmail={validEmail} />
      <UserData />
    </>
  );
}

export default UserForm;
