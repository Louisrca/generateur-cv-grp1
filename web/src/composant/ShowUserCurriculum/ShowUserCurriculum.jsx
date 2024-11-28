import { useGetCurriculumByUserId } from "../../api/curriculum/curriculum";
import useAuth from "../../hooks/useAuth";
import { CurriculumView } from "../CurriculumView/CurriculumView";
import { NoCurriculum } from "../NoCurriculum/NoCurriculum";

export const ShowUserCurriculum = () => {
  const user = useAuth();
  const { data: userCurriculum } = useGetCurriculumByUserId(user.user.id);

  console.log("🚀 ~ ShowUserCurriculum ~ userCurriculum:", userCurriculum);

  if (!userCurriculum || userCurriculum.error) {
    return <NoCurriculum />;
  }
  return (
    <div>
      {userCurriculum && <CurriculumView userCurriculum={userCurriculum} />}
    </div>
  );
};
