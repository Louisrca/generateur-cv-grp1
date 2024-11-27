import { useGetRecommentation } from "../../api/recommendation/recommendation";

export default function AddRecommendation(cvId) {
 
  const { data: recommendations } = useGetRecommentation(cvId.cvId);
  console.log(recommendations);

  return (
    <div>
      AddRecommendation
      <form>
        <input type="text" name="message" />
      </form>
    </div>
  );
}
