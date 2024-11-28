import NavBar from "../../composant/NavBar/NavBar";
import { ShowUserCurriculum } from "../../composant/ShowUserCurriculum/ShowUserCurriculum";
import { Button } from "react-bootstrap";
export default function UserCurriculum() {
  return (
    <div>
      <NavBar />
      <div>
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
        <Button href="/createcv">Créer un CV</Button>
      </div>

      <ShowUserCurriculum />
    </div>
  );
}
