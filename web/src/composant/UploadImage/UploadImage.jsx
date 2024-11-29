import { useState } from "react";
import {
  useUploadImage,
  useGetImage,
} from "../../api/upload-image/upload-image"; // Assurez-vous d'importer le hook
import PropTypes from "prop-types";

const UploadImage = ({ cvId }) => {
  const [image, setImage] = useState(null);
  const [curriculumId] = useState(cvId); // Exemple d'ID de curriculum
  const { mutate: uploadImage } = useUploadImage();
  const { data: curriculum } = useGetImage(cvId);
  console.log("🚀 ~ UploadImage ~ curriculum:", curriculum);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Sauvegarder le fichier sélectionné
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    uploadImage({ image, curriculumId }); // Envoi de l'image avec le curriculumId
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {curriculum?.imageUrl !== "/default-image.jpg" ? (
          <img
            style={{ width: "6rem", height: "6rem", borderRadius: "50%" }}
            src={curriculum?.imageUrl}
            alt="profile"
          />
        ) : (
          <img
            style={{ width: "6rem", height: "6rem", borderRadius: "50%" }}
            src="/image.png"
            alt="profile"
          />
        )}
      </div>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

UploadImage.propTypes = {
  cvId: PropTypes.string.isRequired,
};

export default UploadImage;
