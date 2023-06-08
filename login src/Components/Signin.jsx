import React, { useState } from 'react';
import validateSignIn from './Validation'
import bcrypt from 'bcryptjs'




// ----> SignIn

const SignIn = (props) => {
    const [name, setName] = useState('yyy');
    const [email, setEmail] = useState('yyy@gmail.com');
    const [password, setPassword] = useState('yyy!');
    const [confirmPassword, setConfirmPassword] = useState('yyy!')
  
    
    const handleSignup = (e) => {
      e.preventDefault();

      // Faz a validação das informações
      if (validateSignIn(name, email, password, confirmPassword)) {
        alert("Usuário não cadastrado");
        return;
      }

      // Gerar um hash seguro da senha
      const saltRounds = 10;
      const hashedPassword = bcrypt.hashSync(password, saltRounds);
      console.log("Hash Gerado: ", hashedPassword);

      // Salvar os dados do usuário
      const user = {
        name,
        email,
        hashedPassword: hashedPassword, // Salvar o hash no lugar da senha original
      };

      //  Salvar no local storage
      localStorage.setItem(
        email,
        JSON.stringify({ name, email, hashedPassword })
      );
      console.log("Salvo no local storage");

      console.log(user);
      alert("Usuário registrado com sucesso!");
      console.log("indo para tela de login");


      props.handleRegister()
    };
  
  
  
    return (
      <form className='signup' onSubmit={handleSignup}>
        <label>
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Confirmar Senha:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <button type="submit">Registrar</button>
      </form>
    );
  };
  
  


export default SignIn


