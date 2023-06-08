import React, { useState } from 'react';
import bcrypt from 'bcryptjs'




// ----> Login----------------------------

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault()
      // verificar email
      if (!localStorage.getItem(email)) {
        alert("Email não registrado.");
        
        return
      }
  
      // Buscar o registro do usuário no local storage
      const storedUser = JSON.parse(localStorage.getItem(email));
      const storedHash = storedUser.hashedPassword;
  
      // Verificar se o usuário existe e se a senha está correta
      if (storedUser && bcrypt.compareSync(password, storedHash)) {
        alert("Login bem-sucedido!");
      } else {
        alert("Email ou senha inválidos.");
      }
    };
  
  
  
   
    return (
      <form className="login" onSubmit={handleLogin}>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Entrar</button>
      </form>
    );
  };



export default Login;