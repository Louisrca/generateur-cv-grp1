import { useGetRecommentation } from "../../api/recommendation/recommendation";
import { useParams } from "react-router-dom";
export const ShowRecommendation = () => {
  const { cvId } = useParams();
  const { data: recommendation } = useGetRecommentation(cvId);
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
    </div>
  );
};
