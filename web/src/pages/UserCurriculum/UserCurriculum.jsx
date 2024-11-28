import NavBar from "../../composant/NavBar/NavBar";
import { ShowUserCurriculum } from "../../composant/ShowUserCurriculum/ShowUserCurriculum";
export default function UserCurriculum() {
  return (
    <div>
      <NavBar />
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
      <ShowUserCurriculum />
    </div>
  );
}
