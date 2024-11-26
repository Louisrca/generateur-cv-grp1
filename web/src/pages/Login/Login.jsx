import { ConnectCard } from "../../composant/ConnectCard/ConnectCard";
import styles from "./Login.module.css";
export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <ConnectCard />
    </div>
  );
}
