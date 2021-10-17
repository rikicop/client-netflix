import { useRef } from "react";
import { useState } from "react";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://dl.dropboxusercontent.com/s/bm20rpgyqgzb5pe/finter.png?dl=0"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Cursos Ilimitados, Talleres, y más.</h1>
        <h2>Desde cualquier lugar. Cancela cuando quieras.</h2>
        <p>Estás listo? Introduce to email y crea una cuenta nueva.</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Dirección email" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Empieza
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Inscríbete
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
