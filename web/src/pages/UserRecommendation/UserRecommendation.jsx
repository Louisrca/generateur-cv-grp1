import UserRecommendations from "../../composant/DeleteRecommendation/DeleteRecommendation";
import NavBar from "../../composant/NavBar/NavBar";
import styles from "./UserRecommendation.module.css";
export default function UserRecommendation() {
 
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <UserRecommendations  />
      </div>
    </div>
  );
}
