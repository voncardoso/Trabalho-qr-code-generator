import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/useContext";
import { Container } from "./style";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import backgroungLogin from "../../assets/iamgem-register.jpg";
import { Eye, EyeSlash } from "phosphor-react";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);
  const [isTypePassword, setIsTypePassword] = useState(false);
  let textPassword = "password";
  if (isTypePassword === true) {
    textPassword = "text";
  }

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setLogin(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          window.alert("Usuario cadastrado");
          navigate("/");
          setLogin(false);
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
        setLogin(false);
      });
  }

  return (
    <Container>
      <div className="containerImg">
        <img src={backgroungLogin} alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        {error ? <div className="error">Email ou senha está inválido</div> : ""}
        <h1>Cadastra-se</h1>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Senha</label>
          <input
            type={textPassword}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {isTypePassword ? (
            <Eye
              className="iconViewPasswor"
              size={24}
              onClick={() => {
                setIsTypePassword(false);
              }}
            />
          ) : (
            <EyeSlash
              size={24}
              className="iconViewPasswor"
              onClick={() => {
                setIsTypePassword(true);
              }}
            />
          )}
        </div>
        {login ? (
          <button disabled style={{ background: "rgb(245, 198, 28)" }}>
            Cadastrando...
          </button>
        ) : (
          <button>Cadastrar</button>
        )}
        <p>
          Voltar para o <Link to="/">login</Link>
        </p>
      </form>
    </Container>
  );
}
