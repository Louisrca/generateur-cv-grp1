import NavBar from "../../composant/NavBar/NavBar";
import { ShowUserCurriculum } from "../../composant/ShowUserCurriculum/ShowUserCurriculum";
import styles from "./UserCurriculum.module.css";
import { Button } from "react-bootstrap";
import { Add } from "@mui/icons-material";
export default function UserCurriculum() {
  return (
    <div>
      <NavBar />
      <div className={styles.headerTitle}>
        <h1
          style={{
            fontWeight: "bold",
            marginBottom: "4rem",
            marginLeft: "4rem",
            marginTop: "2rem",
          }}
        >
          Mes Curriculum
        </h1>
        <Button href="/createcv">
          <Add /> Créer un CV
        </Button>
      </div>

      <ShowUserCurriculum />
    </div>
  );
}
