import { NavBar } from "../../composant/NavBar/NavBar";
import styles from "./Home.module.css";
export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <NavBar />
    </div>
  );
}
