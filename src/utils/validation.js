export default function validation(input) {
  const errors = {};
  const regexEmail = /\S+@\S+\.\S+/;
  const regexPassword = new RegExp("[0-9]");

  //* Email
  if (!input.email.length) errors.email = "Ingrese su email";
  else {
    if (!regexEmail.test(input.email))
      errors.email = "Debe ingresar un email valido";
    if (input.email.length > 35)
      errors.email = "Debe ser menor a 35 caracteres";
  }

  //* Password
  if (!input.password.length) errors.password = "Ingrese su password";
  if (!regexPassword.test(input.password))
    errors.password = "Debe tener al menos un numero";
  if (input.password.length < 6)
    errors.password = "Debe contener al menos 6 caracteres";
  if (input.password.length > 9)
    errors.password = "No debe ser mayor a 10 caracteres";

  return errors;
}

// console.log(validation({ email: "", password: "" }));
