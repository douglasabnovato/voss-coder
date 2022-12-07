import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

import Simple from "../components/Simple/index";

import logo from "../assets/logo.svg";
import "../styles/App.css";

import "./routes.css";

function Routes() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Simple name="Douglas Antonio Braga Novato" />
        </p>
        <a
          className="App-link"
          href="https://linktr.ee/douglasabnovato"
          target="_blank"
          rel="noopener noreferrer"
        >
          @douglasabnovato
        </a>
      </header>
      <nav class="navbar">
        <Link to="/">
          Documentação
        </Link>
        <Link to="/tutorial">Tutorial</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/comunidade">Comunidade</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Routes;
