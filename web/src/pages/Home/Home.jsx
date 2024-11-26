import { ConnectCard } from "../../composant/ConnectCard/ConnectCard";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <ConnectCard />
    </div>
  );
}
