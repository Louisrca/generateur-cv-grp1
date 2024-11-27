import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGetCurriculums } from "../../api/curriculum/curriculum";

function PreviewCV() {
  const { data: curriculums } = useGetCurriculums();
  console.log(curriculums); // Vérifiez ce qui est logué ici

  if (!curriculums) {
    return <div>Chargement des données...</div>;
  }

  if (!Array.isArray(curriculums)) {
    return <div>Format des données inattendu.</div>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {curriculums.map((cv) => (
        <Card
          key={cv.id}
          style={{ width: "18rem", margin: "1rem" }}
          className="bg-dark text-white"
        >
          <Card.Body>
            <Card.Title>{`${cv.name} ${cv.lastname}`}</Card.Title>
            <Card.Text>{cv.description}</Card.Text>
            <Button variant="outline-light">En savoir plus</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PreviewCV;
