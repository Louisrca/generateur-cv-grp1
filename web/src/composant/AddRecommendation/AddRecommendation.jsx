import { useCreateRecommendation } from "../../api/recommendation/recommendation";
import { useParams } from "react-router-dom";
import { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">publier </button>
      </form>
    </div>
  );
}
