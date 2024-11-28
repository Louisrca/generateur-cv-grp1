import NavBar from "../../composant/NavBar/NavBar";
import PreviewCV from "../../composant/PreviewCV/PreviewCV";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.homeContainer}>
        <PreviewCV />
      </div>
    </div>
  );
}
