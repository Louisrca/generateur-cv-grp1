import { useGetCurriculumByUserId } from "../../api/curriculum/curriculum";
import useAuth from "../../hooks/useAuth";
import { CurriculumView } from "../CurriculumView/CurriculumView";

export const ShowUserCurriculum = () => {
  const user = useAuth();
  const { data: userCurriculum } = useGetCurriculumByUserId(user.user.id);

  if (!userCurriculum) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <CurriculumView userCurriculum={userCurriculum} />
    </div>
  );
};
