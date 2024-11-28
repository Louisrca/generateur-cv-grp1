<<<<<<< HEAD
import { CreateCard } from "../../composant/CreateCard/CreateCard";
import styles from "./Createcv.module.css";

export default function Createcv() {
    return (
      <div className={styles.CreatecvContainer}>
        <CreateCard />
      </div>
    );
  }
  
=======
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
>>>>>>> 4e3f85666da05084875a1381c3d55a747761a1b8
