import NavBar from "../../composant/NavBar/NavBar";
import UpdateCurriculum from "../../composant/UpdateCurriculum/UpdateCurriculum";
import { Button } from "react-bootstrap";
import { ArrowBack } from "@mui/icons-material";
import styles from "./UpdateUserCurriculum.module.css";
import { useNavigate } from "react-router-dom";
export default function UpdateUserCurriculum() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className={styles.headerTitle}>
        <Button onClick={() => navigate(-1)}>
          <ArrowBack /> Retour
        </Button>
        <h1
          style={{
            fontWeight: "bold",
            marginBottom: "4rem",
            marginLeft: "4rem",
            marginTop: "2rem",
          }}
        >
          Mettre à jour mon CV
        </h1>
      </div>
      <UpdateCurriculum />
    </div>
  );
}
