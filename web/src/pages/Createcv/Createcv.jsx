import CreateCard from "../../composant/CreateCard/CreateCard";
import NavBar from "../../composant/NavBar/NavBar";
import styles from "./Createcv.module.css";

export default function Createcv() {
  return (
    <div className={styles.CreatecvContainer}>
      <NavBar />
      <CreateCard />
    </div>
  );
}
