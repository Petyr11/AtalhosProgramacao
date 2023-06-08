function validateSignIn(name, email, password, confirmPassword) {
  
  const nameRegex = /^.{3,}$/; // nome precisa conter no mínimo 3 caracteres
  const emailRegex = /^\S+@\S+\.\S+$/; // e-mail precisa ser válido
  const passwordRegex = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,}$/; // senha precisa conter no mínimo 3 caracteres e um caractere especial

  // Validar as entradas do formulário usando regex
  if (!nameRegex.test(name)) {
    alert("O nome precisa conter no mínimo 3 caracteres.");
    return true;
  }
  if (!emailRegex.test(email)) {
    alert("Insira um e-mail válido.");
    return true;
  }
  if (!passwordRegex.test(password)) {
    alert(
      "A senha precisa conter no mínimo 3 caracteres e um caractere especial."
    );
    return true;
  }

  if (password !== confirmPassword) {
    alert("A confirmação de senha não coincide com a senha digitada.");
    return true;
  }



}

export default validateSignIn;
