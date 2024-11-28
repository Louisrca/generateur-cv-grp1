import NavBar from "../../composant/NavBar/NavBar";
import UserForm from "../../composant/UserForm/UserForm";
import styles from "./UserGestion.module.css";

export default function UserGestion() {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <UserForm />
      </div>
    </div>
  );
}
