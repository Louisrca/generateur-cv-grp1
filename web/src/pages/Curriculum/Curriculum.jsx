import { useParams } from "react-router-dom";
import AddRecommendation from "../../composant/AddRecommendation/AddRecommendation";
import NavBar from "../../composant/NavBar/NavBar";
import { ShowRecommendation } from "../../composant/ShowRecommendation/ShowRecommendation";

export default function Curriculum() {
  const param = useParams();
  const cvId = param.cvId;

  return (
    <div>
      <NavBar />
      Curriculum {cvId}
      <AddRecommendation />
      <ShowRecommendation />
    </div>
  );
}
