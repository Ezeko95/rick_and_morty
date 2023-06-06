const validation = (userData, errors, setErrors) => {
  if (!userData.username)
    setErrors({ ...errors, username: "<-- Campo incompleto" });
  else if (userData.username.length > 35)
    setErrors({
      ...errors,
      username: "<-- No puede tener mas de 35 caracteres",
    });
  else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.username)
  ) {
    setErrors({ ...errors, username: "<-- email invalido" });
  } else {
    setErrors({ ...errors, username: "" });
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({ ...errors, password: "Longitud de password invalida" });
  } else if (/\d/.test(userData.password)) {
    setErrors({ ...errors, username: "Debe contener al menos un numero" });
  } else {
    setErrors({ ...errors, username: "" });
  }
};

export default validation;
