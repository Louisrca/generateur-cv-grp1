import styles from "./CurriculumPreview.module.css";
import { v4 as uuidv4 } from "uuid";

import PropTypes from "prop-types";

export const CurriculumPreview = ({ userCurriculum }) => {
  const curriculumData = Array.isArray(userCurriculum)
    ? userCurriculum
    : [userCurriculum];

  console.log("🚀 ~ CurriculumPreview ~ curriculumData", curriculumData);

  return (
    <>
      {curriculumData.map((curriculum) => (
        <div key={uuidv4()} className={styles.mainContainer}>
          <div key={uuidv4()} className={styles.container}>
            <div className={styles.sidebar}>
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
                    style={{
                      width: "6rem",
                      height: "6rem",
                      borderRadius: "50%",
                    }}
                    src={curriculum?.imageUrl}
                    alt="profile"
                  />
                ) : (
                  <img
                    style={{
                      width: "6rem",
                      height: "6rem",
                      borderRadius: "50%",
                    }}
                    src="/image.png"
                    alt="profile"
                  />
                )}
              </div>
              <h2>
                {curriculum?.name} {curriculum?.lastname}
              </h2>

              <p>Email: {curriculum?.email}</p>
              <p>Téléphone: {curriculum?.phone}</p>

              <h2>Compétences Techniques</h2>
              <ul key={uuidv4()}>
                {curriculum?.technicalSkills?.map((technicalSkills, index) => (
                  <>
                    <span
                      key={`technicalSkills-${index}`}
                      style={{ fontWeight: "bold" }}
                    >
                      {technicalSkills?.category}
                    </span>
                    {technicalSkills?.skills?.map((skill) => (
                      <li key={uuidv4()}>
                        {skill?.name} ({skill?.level})
                      </li>
                    ))}
                  </>
                ))}
              </ul>

              <h2>Soft Skills</h2>
              <ul>
                {curriculum?.skills?.map((skills) => (
                  <>
                    <span
                      key={uuidv4()}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      {skills}
                    </span>
                  </>
                ))}
              </ul>

              <h2>{"Centres d'intérêt"}</h2>
              <ul>
                {curriculum?.areaOfInterests?.map((areaOfInterests) => (
                  <>
                    <span
                      key={uuidv4()}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      {areaOfInterests}
                    </span>
                  </>
                ))}
              </ul>
            </div>

            <div className={styles.main}>
              <h1>{curriculum?.jobTitle}</h1>
              <p>{curriculum?.description}</p>

              <h2 className={styles.highlight}>Expérience Professionnelle</h2>
              <div className={styles.section}>
                <div className="experience-item">
                  {curriculum?.experiences?.map((experience) => {
                    const startDate = new Date(experience.startYear);
                    const endDate = new Date(experience.endYear);
                    const formattedStartDate = startDate.toLocaleDateString(
                      "fr-FR",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    );

                    const formattedEndDate = endDate.toLocaleDateString(
                      "fr-FR",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    );
                    return (
                      <div key={uuidv4()}>
                        <h3>{experience?.title}</h3>
                        <span>{experience?.company}</span>
                        <span>
                          {formattedStartDate} - {formattedEndDate}
                        </span>
                        <p>{experience?.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <h2 className={styles.highlight}>Formation</h2>
              <div className={styles.section}>
                {curriculum?.educations?.map((education) => {
                  const startDate = new Date(education.startYear);
                  const endDate = new Date(education.endYear);
                  const formattedStartDate = startDate.toLocaleDateString(
                    "fr-FR",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  );

                  const formattedEndDate = endDate.toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                  return (
                    <div key={uuidv4()}>
                      <h3>{education?.degree}</h3>
                      <span>{education?.school}</span>
                      <span>
                        {formattedStartDate} - {formattedEndDate}
                      </span>
                      <p>{education?.fieldOfStudy}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

CurriculumPreview.propTypes = {
  userCurriculum: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
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
      })
    ),
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
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
    }),
    PropTypes.array, // Cas d'un tableau vide
    PropTypes.oneOf([null, undefined]),
  ]).isRequired,
};
