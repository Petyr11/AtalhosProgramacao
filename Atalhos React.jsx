// componente básico

import React from "react";

const component = () => {
  return <div>component</div>;
};

export default component;

// ----------------------------------------------------------------
// ---> useEffect


import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Executa o efeito após a montagem do componente
    fetchData();
  }, []);

  useEffect(() => {
    // Executa o efeito sempre que o estado 'data' muda
    processData();
  }, [data]);


  useEffect(() => {
    // Executa o efeito em toda renderização
    processData();
  }, );

}


// ---> createContext Provider
// provider do Context. Onde as variáveis ficam. Nesse caso, se o tema será light ou dark.
//  o objeto passado com as variáveis é value={{theme,toggleTheme}}

import React, { createContext, useContext, useState } from "react";
export const ThemeContext = createContext();


export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("lightTheme");


  const toggleTheme = () => {
    setTheme(theme === "lightTheme" ? "darkTheme" : "lightTheme");
  };


  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
// ----------------------------------------------------------------

// ---> useContext Consumer

// adicionar
// import { useContext } from "react";
// import { ThemeContext } from '../Context/ThemeContext' e
// const { theme, toggleTheme } = useContext(ThemeContext);
// Para consumir as variáveis e funções declaradas no provider do context.


import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div>Home</div>
      <h2>O tema atual é {theme}</h2>
      <button onClick={toggleTheme}> Mudar Tema </button>
    </div>
  );
};

export default Home;


// ----------------------------------------------------------------

// ---> createContext Provider in indexjs

// contexto precisa inserido em index.js
// adicionar
// import {ThemeProvider} from "./Context/ThemeContext"

//  <ThemeProvider>
      // <App />
    // </ThemeProvider>


    // context
    import {ThemeProvider} from "./Context/ThemeContext"

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>

        <ThemeProvider>
          <App/>
        </ThemeProvider>

      </React.StrictMode>
    );


// ----------------------------------------------------------------

// --->Use Reducer exemplo com App contador



import React from "react";
import { useReducer } from "react";

const initialState = { count: 0, zero: true };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
        zero: state.count + 1 === 0 ? true : false,
      };
    case "decrease":
      return {
        ...state,
        count: state.count - 1,
        zero: state.count - 1 === 0 ? true : false,
      };
    case "reset":
      return { ...state, count: 0, zero: true };
    default:
      throw new Error("Unknown action:");
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2> {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Add </button>
      <button onClick={() => dispatch({ type: "decrease" })}>Subtract </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <h2> {state.zero? "É zero": "Não é zero"}</h2>
    </div>
  );
};

export default App;




// ----------------------------------------------------------------

// ----------->Router router outlet link

// ----------->Router


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


import Home from "./Routes/Home";
import Contact from "./Routes/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




// ----------->Outlet


import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar";


const App = () => {
  return (
    <div className="App">
      <h1>Navbar</h1>
      <h1> React Router</h1>
      <Navbar></Navbar>
      <Outlet></Outlet>

      <h3>Footer</h3>
    </div>
  );
};

export default App;




// ----------->Link

import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home </Link>{" "}
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/contact">Contatos </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;




