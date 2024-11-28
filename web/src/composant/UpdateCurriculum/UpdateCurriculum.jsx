import UpdateForm from "../UpdateForm/UpdateForm";
import { useGetCurriculumById } from "../../api/curriculum/curriculum";
import { useParams } from "react-router-dom";

export default function UpdateCurriculum() {
  const { cvId } = useParams();
  const { data: curriculumDetails } = useGetCurriculumById(cvId);
  return (
    <div>
      <UpdateForm curriculumDetails={curriculumDetails} />
    </div>
  );
}
