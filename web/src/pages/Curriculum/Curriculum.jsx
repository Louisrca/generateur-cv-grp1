import { useParams } from "react-router-dom";
import AddRecommendation from "../../composant/AddRecommendation/AddRecommendation";

export default function Curriculum() {
  const param = useParams();
  const cvId = param.cvId;

  return (
    <div>
      Curriculum {cvId}
      <AddRecommendation cvId={cvId} />
    </div>
  );
}
