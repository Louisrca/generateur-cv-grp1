import styles from "./NoCurriculum.module.css";
import { Button } from "react-bootstrap";

export const NoCurriculum = () => {
  return (
    <div className={styles.noData}>
      <span>{"Vous n'avez pas encore de cv... 😢"}</span>
      <Button href="/createcv">Créer un CV</Button>
      {/* <a href="/createcv">Créer un CV</a> */}
    </div>
  );
};
