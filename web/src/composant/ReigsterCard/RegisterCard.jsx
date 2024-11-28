import { InputText } from "../InputText/InputText";
import CardWrapper from "../CardWrapper/CardWrappers";
import styles from "./RegisterCard.module.css";
import { useRegisterUser } from "../../api/auth/register";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

export const RegisterCard = () => {
  const registerUser = useRegisterUser();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    registerUser.mutate(data);
    if (registerUser.isSuccess) {
      navigate("/login");
    }
  };

  return (
    <section className={styles.connectCardContainer}>
      <CardWrapper>
        <h2>Welcome</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <InputText label="Prénom" inputName="name" />
          <InputText label="Nom" inputName="lastname" />
          <InputText label="Email" inputName="email" type="email" />
          <InputText
            label="Mot de passee"
            type="password"
            inputName="password"
          />

          <button type="submit">Se connecter</button>
        </form>
        <div className={styles.redirectionContainer}>
          <Divider variant="middle" />
          <Link href="/login">Pas encore de compte ?</Link>
        </div>
      </CardWrapper>
    </section>
  );
};
