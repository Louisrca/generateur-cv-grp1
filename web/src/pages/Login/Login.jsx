import { LoginCard } from "../../composant/LoginCard/LoginCard";
import styles from "./Login.module.css";
export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <LoginCard />
    </div>
  );
}
