import { TextField, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";

import styled from "styled-components";
import { primaryColor } from "../UI/variables";

import RegisterValidations from "../../contexts/RegisterValidations";
import useError from "../../hooks/useError";

const StyledForm = styled.form`
 background-color: ${primaryColor}
`;

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validations = useContext(RegisterValidations);

  const [error, validFields, validForm] = useError(validations);

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        if (validForm()) {
          onSubmit({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="email"
        margin="normal"
        variant="outlined"
        fullWidth
        onBlur={validFields}
        error={!error.email.valid}
        helperText={error.email.text}
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        id="password"
        name="password"
        label="password"
        type="password"
        margin="normal"
        variant="outlined"
        required={true}
        fullWidth
        onBlur={validFields}
        error={!error.password.valid}
        helperText={error.password.text}
      />
      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </StyledForm>
  );
}

export default UserData;
