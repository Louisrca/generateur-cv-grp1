import styles from "./CurriculumView.module.css";
import { useDeleteCurriculum } from "../../api/curriculum/curriculum";
import PropTypes from "prop-types";

export const CurriculumView = ({ userCurriculum }) => {
  const { mutate: deleteCurriculum } = useDeleteCurriculum();

  const handleDelete = (cvId) => {
    if (window.confirm("Veux-tu vraiment supprimer le CV ?")) {
      deleteCurriculum(cvId);
    }
  };

  return (
    <>
      {userCurriculum.map((curriculum) => (
        <div key={curriculum._id}>

          <button onClick={()=>handleDelete(curriculum._id)}>Delete</button>
   
        <div key={curriculum._id} className={styles.container}>
          <div className="sidebar">
            <h2>
              {curriculum.name} {curriculum.lastname}
            </h2>

            <p>Email: {curriculum.email}</p>
            <p>Téléphone: {curriculum.phone}</p>

            <h2>Compétences Techniques</h2>
            <ul>
              {curriculum.technicalSkills.map((technicalSkills) => (
                <>
                  <span key={curriculum._id} style={{ fontWeight: "bold" }}>
                    {technicalSkills.category}
                  </span>
                  {technicalSkills.skills.map((skill) => (
                    <li key={skill.name}>
                      {skill.name} ({skill.level})
                    </li>
                  ))}
                </>
              ))}
            </ul>

            <h2>Soft Skills</h2>
            <ul>
              <li>Résolution de problèmes</li>
              <li>Collaboration en équipe</li>
              <li>Esprit critique</li>
            </ul>

            <h2>{"Centres d'intérêt"}</h2>
            <ul>
              <li>Intelligence Artificielle</li>
              <li>Cybersécurité</li>
              <li>Développement Open Source</li>
            </ul>
          </div>

          <div className="main">
            <h1>Titre CV</h1>
            <p>Résumé de CV</p>

            <h2 className="highlight">Expérience Professionnelle</h2>
            <div className="section">
              <div className="experience-item">
                <h3>Software Engineer</h3>
                <span>Tech Solutions (2020 - 2022)</span>
                <ul>
                  <li>{"Développement d'applications web évolutives."}</li>
                  <li>Optimisation des performances systèmes.</li>
                </ul>
              </div>
              <div className="experience-item">
                <h3>Junior Developer</h3>
                <span>CodeFactory (2018 - 2019)</span>
                <ul>
                  <li>
                    {
                      "Assistance dans le développement d'applications côté client."
                    }
                  </li>
                  <li>Débogage de code hérité.</li>
                </ul>
              </div>
            </div>

            <h2 className="highlight">Formation</h2>
            <div className="section">
              <div className="education-item">
                <h3>Bachelor of Computer Science</h3>
                <span>Tech University (2015 - 2019)</span>
              </div>
              <div className="education-item">
                <h3>Certified React Developer</h3>
                <span>Online Academy (2021)</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      ))}
    </>
  );
};

CurriculumView.propTypes = {
  userCurriculum: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      experiences: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          company: PropTypes.string.isRequired,
          startYear: PropTypes.string.isRequired,
          endYear: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
      educations: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          school: PropTypes.string.isRequired,
          degree: PropTypes.string.isRequired,
          startYear: PropTypes.string.isRequired,
          endYear: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    })
  ).isRequired,
  technicalSkills: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          level: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      startYear: PropTypes.string.isRequired,
      endYear: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  educations: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      fieldOfStudy: PropTypes.string.isRequired,
      startYear: PropTypes.string.isRequired,
      endYear: PropTypes.string.isRequired,
    })
  ).isRequired,
  areaOfInterests: PropTypes.arrayOf(PropTypes.string).isRequired,
};
