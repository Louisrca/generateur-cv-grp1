import NavBar from "../NavBar/NavBar";
import UpdateForm from "../UpdateForm/UpdateForm";
import { useGetCurriculumById } from "../../api/curriculum/curriculum";
import { useParams } from "react-router-dom";

export default function UpdateCurriculum() {
  const { cvId } = useParams();
  console.log(cvId);
  const { data: curriculumDetails } = useGetCurriculumById(cvId);
  return (
    <div>
      <NavBar />
      UpdateCurriculum
      <UpdateForm curriculumDetails={curriculumDetails} />
    </div>
  );
}
