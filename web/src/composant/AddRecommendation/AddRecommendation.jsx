import { useCreateRecommendation } from "../../api/recommendation/recommendation";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./AddRecommendation.module.css";

export default function AddRecommendation() {
  const { cvId } = useParams();
  const [message, setMessage] = useState("");
  const { mutate } = useCreateRecommendation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      return;
    }
    const data = { message: message, curriculumId: cvId };
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.recommendationForm}>
        <div className={styles.textareaContainer}>
          <textarea
            className={styles.customTextarea}
            placeholder="Ajoute un commentaire..."
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <Button type="submit">publier </Button>
      </form>
    </div>
  );
}
