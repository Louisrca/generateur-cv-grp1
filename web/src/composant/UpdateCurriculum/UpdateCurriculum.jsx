import UpdateForm from "../UpdateForm/UpdateForm";
import { useGetCurriculumById } from "../../api/curriculum/curriculum";
import { useParams } from "react-router-dom";

export default function UpdateCurriculum() {
  const { cvId } = useParams();
  const { data: curriculumDetails, isLoading } = useGetCurriculumById(cvId);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <UpdateForm curriculumDetails={curriculumDetails} />
    </div>
  );
}
