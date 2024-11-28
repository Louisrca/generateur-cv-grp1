import { useGetCurriculumByUserId } from "../../api/curriculum/curriculum";
import useAuth from "../../hooks/useAuth";
import { CurriculumView } from "../CurriculumView/CurriculumView";
import { NoCurriculum } from "../NoCurriculum/NoCurriculum";
import { CircularProgress } from "@mui/material";
import styles from "./ShowUserCurriculum.module.css";

export const ShowUserCurriculum = () => {
  const user = useAuth();
  const {
    data: userCurriculum,
    isLoading,
    isError,
  } = useGetCurriculumByUserId(user.user.id);

  console.log("🚀 ~ ShowUserCurriculum ~ userCurriculum:", userCurriculum);
  if (isLoading) {
    return (
      <div className={styles.isLoading}>
        <CircularProgress />
      </div>
    );
  }

  // Si une erreur s'est produite ou si le curriculum est introuvable
  if (isError || !userCurriculum || userCurriculum.error) {
    return <NoCurriculum />;
  }
  return (
    <div className={styles.container}>
      {userCurriculum && <CurriculumView userCurriculum={userCurriculum} />}
    </div>
  );
};
