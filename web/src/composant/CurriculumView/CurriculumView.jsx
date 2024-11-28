import styles from "./CurriculumView.module.css";
import { Card } from "@mui/material";
import PropTypes from "prop-types";

export const CurriculumView = ({ userCurriculum }) => {
  return (
    <>
      {userCurriculum.map((curriculum) => (
        <Card key={curriculum._id} className={styles.curriculum}>
          <section>
            <h1>{curriculum.title}</h1>
            <p>{curriculum.description}</p>
          </section>
          <section className={styles.content}>
            <section>
              <h3>Experiences</h3>
              {curriculum.experiences.map((experience) => (
                <div key={experience.id}>
                  <h4>{experience.title}</h4>
                  <p>{experience.company}</p>
                  <p>{experience.startYear}</p>
                  <p>{experience.endYear}</p>
                  <p>{experience.description}</p>
                </div>
              ))}
            </section>
            <section>
              <h3>Education</h3>
              {curriculum.educations.map((education) => (
                <div key={education.id}>
                  <h4>{education.school}</h4>
                  <p>{education.degree}</p>
                  <p>{education.startYear}</p>
                  <p>{education.endYear}</p>
                </div>
              ))}
            </section>
          </section>
        </Card>
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
