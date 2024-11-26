import { InputText } from "../InputText/InputText";
import CardWrapper from "../CardWrapper/CardWrappers";
import styles from "./ConnectCard.module.css";
import { useRegisterUser } from "../../api/auth/register";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

export const ConnectCard = () => {
  const registerUser = useRegisterUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    registerUser.mutate(data);
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
            label="Mot de passe"
            type="password"
            inputName="password"
          />
          <button type="submit">Se connecter</button>
        </form>
        <div className={styles.redirectionContainer}>
          <Divider variant="middle" />
          <Link href="/login">Already have an account ?</Link>
        </div>
      </CardWrapper>
    </section>
  );
};
