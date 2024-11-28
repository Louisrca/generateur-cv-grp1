import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGetCurriculums } from "../../api/curriculum/curriculum";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import styles from "./PreviewCV.module.css";
import { NoCurriculum } from "../NoCurriculum/NoCurriculum";

function PreviewCV() {
  const { data: curriculums, isLoading, isError } = useGetCurriculums();
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className={styles.isLoading}>
        <CircularProgress />
      </div>
    );
  }

  if (isError || !curriculums || curriculums.error) {
    return <NoCurriculum />;
  }

  return (
    <div className={styles.homeContainer}>
      {curriculums &&
        curriculums.map((cv) => (
          <Card
            key={cv._id}
            style={{ width: "18rem", margin: "1rem" }}
            className="bg-dark text-white"
          >
            <Card.Body>
              <Card.Title>{`${cv.name} ${cv.lastname}`}</Card.Title>
              <Card.Text>{cv.description}</Card.Text>
              <Button
                variant="outline-light"
                onClick={() => navigate(`/curriculum/${cv._id}`)}
              >
                En savoir plus
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default PreviewCV;
