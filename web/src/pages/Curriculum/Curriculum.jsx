import { useParams } from "react-router-dom";
import AddRecommendation from "../../composant/AddRecommendation/AddRecommendation";
import NavBar from "../../composant/NavBar/NavBar";
import { ShowRecommendation } from "../../composant/ShowRecommendation/ShowRecommendation";
import { CurriculumPreview } from "../../composant/CurriculumPreview/CurriculumPreview";
import { useGetCurriculumById } from "../../api/curriculum/curriculum";
import styles from "./Curriculum.module.css";

export default function Curriculum() {
  const param = useParams();
  const cvId = param.cvId;
  console.log("🚀 ~ Curriculum ~ cvId:", cvId);
  const { data: curriculumDetails } = useGetCurriculumById(cvId);
  console.log("🚀 ~ Curriculum ~ curriculumDetails:", curriculumDetails);

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
