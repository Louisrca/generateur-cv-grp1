import { useParams } from "react-router-dom";
import AddRecommendation from "../../composant/AddRecommendation/AddRecommendation";
import NavBar from "../../composant/NavBar/NavBar";
import { ShowRecommendation } from "../../composant/ShowRecommendation/ShowRecommendation";
import { CurriculumPreview } from "../../composant/CurriculumPreview/CurriculumPreview";
import { useGetCurriculumById } from "../../api/curriculum/curriculum";
import { CircularProgress } from "@mui/material";
import styles from "./Curriculum.module.css";

export default function Curriculum() {
  const param = useParams();
  const cvId = param.cvId;
  console.log("🚀 ~ Curriculum ~ cvId:", cvId);
  const {
    data: curriculumDetails,
    isLoading,
    isError,
  } = useGetCurriculumById(cvId);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <div>Erreur lors du chargement du CV</div>;
  }

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        {curriculumDetails && (
          <CurriculumPreview userCurriculum={curriculumDetails} />
        )}
        <AddRecommendation />
        <ShowRecommendation />
      </div>
    </div>
  );
}
