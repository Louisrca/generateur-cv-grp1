import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useGetCurriculums } from "../../api/curriculum/curriculum";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import styles from "./PreviewCV.module.css";
import { NoCurriculum } from "../NoCurriculum/NoCurriculum";
import useAuth from "../../hooks/useAuth";

function PreviewCV() {
  const { data: curriculums, isLoading, isError } = useGetCurriculums(); // Récupère tous les CV
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAuth();

  if (isLoading) {
    return (
      <div className={styles.isLoading}>
        <CircularProgress />
      </div>
    );
  }

  if (isError || !Array.isArray(curriculums) || curriculums.error) {
    return <NoCurriculum />;
  }

  // Fonction pour filtrer les CV selon le nom ou prénom
  const filteredCurriculums =
    curriculums?.filter((cv) => {
      const fullName = `${cv.name} ${cv.lastname}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase().trim()) && cv.isPublic;
    }) || [];

  return (
    <div>
      {/* Formulaire de recherche */}
      <Form className="mb-4" onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="me-2"
        />
      </Form>

      <div className={styles.homeContainer}>
        {filteredCurriculums?.length > 0 ? (
          filteredCurriculums?.map((cv) => (
            <Card
              key={cv._id}
              style={{ width: "18rem", margin: "1rem" }}
              className="bg-dark text-white"
            >
              <Card.Body>
                <Card.Title>{`${cv.name} ${cv.lastname}`}</Card.Title>
                <Card.Text>{cv.description}</Card.Text>
                {user ? (
                  <Button
                    variant="outline-light"
                    onClick={() => navigate(`/curriculum/${cv._id}`)}
                  >
                    En savoir plus
                  </Button>
                ) : (
                  <Button
                    variant="outline-light"
                    onClick={() => alert("Connectez-vous pour voir le CV")}
                  >
                    En savoir plus
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="text-white">Aucun CV trouvé pour cette recherche</p>
        )}
      </div>
    </div>
  );
}

export default PreviewCV;
