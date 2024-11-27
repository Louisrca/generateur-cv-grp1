import {
  useCreateRecommendation,
  useGetRecommentation,
} from "../../api/recommendation/recommendation";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function AddRecommendation() {
  const { cvId } = useParams();

  const [message, setMessage] = useState("");
  const { mutate } = useCreateRecommendation();
  const { data: recommendation } = useGetRecommentation(cvId);

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
      Commentaires :
      <ul>
        {recommendation &&
          recommendation?.map((rec) => (
            <>
              <li key={rec.id}>{rec.message}</li>{" "}
              <span
                style={{
                  textDecoration: "italic",
                  color: "grey",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                from : {rec.author.name}
              </span>
            </>
          ))}
      </ul>
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
