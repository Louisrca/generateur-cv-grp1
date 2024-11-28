import { RegisterCard } from "../../composant/ReigsterCard/RegisterCard";
import styles from "./Register.module.css";
export default function Register() {
  return (
    <div className={styles.registerContainer}>
      <RegisterCard />
    </div>
  );
}
