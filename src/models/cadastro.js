function validEmail(email) {
  if (email.length <= 3) {
    return { email: { valid: false, text: "Invalid email" } };
  } else {
    return { email: { valid: true, text: "" } };
  }
}

function validPassword(password) {
  if (password.length <= 4 || password.length >= 72) {
    return { password: { valid: false, text: "Invalid password" } };
  } else {
    return { password: { valid: true, text: "" } };
  }
}

export {validEmail, validPassword};
