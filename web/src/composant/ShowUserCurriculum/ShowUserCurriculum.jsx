import { useGetCurriculumByUserId } from "../../api/curriculum/curriculum";
import useAuth from "../../hooks/useAuth";

export const ShowUserCurriculum = () => {
  const user = useAuth();

  const { data: userCurriculum } = useGetCurriculumByUserId(user.user.id);
  console.log(userCurriculum);
  return <div>ShowUserCurriculum</div>;
};
