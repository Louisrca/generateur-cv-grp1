import { InputText } from "../InputText/InputText";
import CardWrapper from "../CardWrapper/CardWrappers";
import styles from "./LoginCard.module.css";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { useLoginUser } from "../../api/auth/login";

export const LoginCard = () => {
  const loginUser = useLoginUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    loginUser.mutate(data);
  };

  return (
    <section className={styles.connectCardContainer}>
      <CardWrapper>
        <h2>Salut, content de te revoir 😜</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <InputText label="Email" inputName="email" type="email" />
          <InputText
            label="Mot de passe"
            type="password"
            inputName="password"
          />

          <button type="submit">Se connecter</button>
        </form>
        <div className={styles.redirectionContainer}>
          <Divider variant="middle" />
          <Link href="/register">Créer un compte ?</Link>
        </div>
      </CardWrapper>
    </section>
  );
};
