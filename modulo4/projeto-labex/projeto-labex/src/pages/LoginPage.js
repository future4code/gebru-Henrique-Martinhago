import axios from "axios";
import { useState } from "react";
import { goToTripDetails } from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
   
    const URL =
   " https://us-central1-labenu-apis.cloudfunctions.net/labeX/:henrique-gebru/login ";
    const body = {
      email: email,
      password: password
    };

    axios
    .post(URL, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goToTripDetails(navigate);
    })
    .catch((err) => {
      console.log("ERRO:", err.response);
    });
};

return (
  <div>
    <input
      placeholder="email"
      type="email"
      value={email}
      onChange={onChangeEmail}
    />
    <input
      placeholder="password"
      type="password"
      value={password}
      onChange={onChangePassword}
    />
    <button onClick={onSubmitLogin}>Enviar</button>
  </div>
);
};

