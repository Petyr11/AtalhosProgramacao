import React, { useState } from "react";
import SignIn from "./Components/Signin";
import Login from "./Components/Login";

// ----> Exports                             ------------------------------------------------------------
export default function App() {
  const [form] = useState([<Login  />, <SignIn handleRegister={handleRegister} />]);
  const [text] = useState(["Não tem uma conta?","Já tem uma conta?"]);
  const [formIndex, setFormIndex] = useState(0);

  function handleClick() {
    

    if (formIndex === 0) {
      setFormIndex(1);
    }

    if (formIndex === 1) {
      setFormIndex(0);
    }
  }


function handleRegister(){
  setFormIndex(0);
}



  return (
    <div>
      <div> {form[formIndex]} </div>

      <div>
        {text[formIndex]}
        <span
          onClick={handleClick}
          style={{ textDecoration: "underline", color: "blue" }}
        >
          {" "}
          Clique aqui.{" "}
        </span>
      </div>
    </div>
  );
}
