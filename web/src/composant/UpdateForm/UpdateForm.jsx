import { useForm, useFieldArray } from "react-hook-form";
import { useEffect } from "react";
import { useUpdateCurriculum } from "../../api/curriculum/curriculum";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styles from "./UpdateForm.module.css";
import { Checkbox } from "@mui/material";

const UpdateForm = ({ curriculumDetails = {} }) => {
  const { cvId } = useParams();

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const { register, handleSubmit, control, reset, watch, setValue } = useForm({
    defaultValues: {
      ...curriculumDetails,
      isPublic: curriculumDetails?.isPublic ?? false,
      experiences: curriculumDetails?.experiences?.map((exp) => ({
        ...exp,
        startYear: formatDate(exp.startYear),
        endYear: formatDate(exp.endYear),
      })),
      educations: curriculumDetails?.educations?.map((edu) => ({
        ...edu,
        startYear: formatDate(edu.startYear),
        endYear: formatDate(edu.endYear),
      })),
    },
  });

  useEffect(() => {
    if (curriculumDetails) {
      reset(curriculumDetails);
    }
  }, [curriculumDetails, reset]);

  const { mutate: updateCurriculum } = useUpdateCurriculum(cvId);

  const { fields: skillFields, append: appendSkill } = useFieldArray({
    control,
    name: "skills",
  });
  const { fields: languageFields, append: appendLanguage } = useFieldArray({
    control,
    name: "languages",
  });
  const { fields: techSkillCategories, append: appendTechSkillCategory } =
    useFieldArray({ control, name: "technicalSkills" });
  const { fields: experienceFields, append: appendExperience } = useFieldArray({
    control,
    name: "experiences",
  });
  const { fields: educationFields, append: appendEducation } = useFieldArray({
    control,
    name: "educations",
  });
  const { fields: interestFields, append: appendInterest } = useFieldArray({
    control,
    name: "areaOfInterests",
  });
  const isPublicValue = watch("isPublic");

  const onSubmit = (data) => {
    updateCurriculum(data);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profile Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* General Information */}
        <div className={styles.section}>
          <div>
            <label>
            <Checkbox
              checked={isPublicValue} // Regardez l'état actuel
              onChange={(e) => setValue("isPublic", e.target.checked)} // Synchronisez le state React Hook Form
            />
              Rendre mon CV public
            </label>
          </div>
          <label className={styles.label}>Prénom :</label>
          <input
            {...register("name")}
            className={styles.input}
            placeholder="First Name"
          />

          <label className={styles.label}>Nom :</label>
          <input
            {...register("lastname")}
            className={styles.input}
            placeholder="Last Name"
          />

          <label className={styles.label}>Titre du Job:</label>
          <input
            {...register("jobTitle")}
            className={styles.input}
            placeholder="Job Title"
          />

          <label className={styles.label}>Email:</label>
          <input
            type="email"
            {...register("email")}
            className={styles.input}
            placeholder="Email"
          />

          <label className={styles.label}>Description:</label>
          <textarea
            {...register("description")}
            className={styles.textarea}
            placeholder="Description"
          />

          <label className={styles.label}>Tél:</label>
          <input
            {...register("phone")}
            className={styles.input}
            placeholder="Phone Number"
          />

          <label className={styles.label}>LinkedIn:</label>
          <input
            {...register("linkedin")}
            className={styles.input}
            placeholder="LinkedIn URL"
          />

          <label className={styles.label}>GitHub:</label>
          <input
            {...register("github")}
            className={styles.input}
            placeholder="GitHub URL"
          />
        </div>

        {/* Skills */}
        <div className={styles.section}>
          <h3>Skills</h3>
          {skillFields.map((field, index) => (
            <input
              key={field.id}
              {...register(`skills.${index}`)}
              className={styles.input}
              placeholder="Skill"
            />
          ))}
          <button
            type="button"
            className={`${styles.button} ${styles.addButton}`}
            onClick={() => appendSkill("")}
          >
            Ajouter Skill
          </button>
        </div>

        {/* Languages */}
        <div className={styles.section}>
          <h3>Languages</h3>
          {languageFields.map((field, index) => (
            <div key={field.id}>
              <input
                {...register(`languages.${index}.name`)}
                className={styles.input}
                placeholder="Language"
              />
              <select
                {...register(`languages.${index}.level`)}
                className={styles.select}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Fluent">Fluent</option>
                <option value="Native">Native</option>
              </select>
            </div>
          ))}
          <button
            type="button"
            className={`${styles.button} ${styles.addButton}`}
            onClick={() => appendLanguage({ name: "", level: "" })}
          >
            Ajouter Language
          </button>
        </div>

        {/* Technical Skills */}
        <div className={styles.section}>
          <h3>Compétences Technique</h3>
          {techSkillCategories.map((field, categoryIndex) => (
            <div key={field.id}>
              <input
                {...register(`technicalSkills.${categoryIndex}.category`)}
                className={styles.input}
                placeholder="Category"
              />
              {field.skills.map((_, skillIndex) => (
                <div key={skillIndex}>
                  <input
                    {...register(
                      `technicalSkills.${categoryIndex}.skills.${skillIndex}.name`
                    )}
                    className={styles.input}
                    placeholder="Skill Name"
                  />
                  <select
                    {...register(
                      `technicalSkills.${categoryIndex}.skills.${skillIndex}.level`
                    )}
                    className={styles.select}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              ))}
            </div>
          ))}
          <button
            type="button"
            className={`${styles.button} ${styles.addButton}`}
            onClick={() =>
              appendTechSkillCategory({
                category: "",
                skills: [{ name: "", level: "" }],
              })
            }
          >
            Ajouter une category de compéténce technique
          </button>
        </div>

        {/* Experiences */}
        <div className={styles.section}>
          <h3>Experiences</h3>
          {experienceFields.map((field, index) => (
            <div key={field.id}>
              <input
                {...register(`experiences.${index}.title`)}
                className={styles.input}
                placeholder="Job Title"
              />
              <input
                {...register(`experiences.${index}.company`)}
                className={styles.input}
                placeholder="Company"
              />
              <input
                type="date"
                {...register(`experiences.${index}.startYear`)}
                className={styles.input}
                placeholder="Start Year"
              />
              <input
                type="date"
                {...register(`experiences.${index}.endYear`)}
                className={styles.input}
                placeholder="End Year"
              />
              <textarea
                {...register(`experiences.${index}.description`)}
                className={styles.textarea}
                placeholder="Description"
              />
            </div>
          ))}
          <button
            type="button"
            className={`${styles.button} ${styles.addButton}`}
            onClick={() =>
              appendExperience({
                title: "",
                company: "",
                startYear: "",
                endYear: "",
                description: "",
              })
            }
          >
            Ajouter Experience
          </button>
        </div>

        {/* Education */}
        <div className={styles.section}>
          <h3>Education</h3>
          {educationFields.map((field, index) => (
            <div key={field.id}>
              <input
                {...register(`educations.${index}.school`)}
                className={styles.input}
                placeholder="School"
              />
              <input
                {...register(`educations.${index}.degree`)}
                className={styles.input}
                placeholder="Degree"
              />
              <input
                {...register(`educations.${index}.fieldOfStudy`)}
                className={styles.input}
                placeholder="Field of Study"
              />
              <input
                type="date"
                {...register(`educations.${index}.startYear`)}
                className={styles.input}
                placeholder="Start Year"
              />
              <input
                type="date"
                {...register(`educations.${index}.endYear`)}
                className={styles.input}
                placeholder="End Year"
              />
            </div>
          ))}
          <button
            type="button"
            className={`${styles.button} ${styles.addButton}`}
            onClick={() =>
              appendEducation({
                school: "",
                degree: "",
                fieldOfStudy: "",
                startYear: "",
                endYear: "",
              })
            }
          >
            Ajouter Education
          </button>
        </div>

        {/* Interests */}
        <div className={styles.section}>
          <h3>{"Centre d'intérêt"}</h3>
          {interestFields.map((field, index) => (
            <input
              key={field.id}
              {...register(`areaOfInterests.${index}`)}
              className={styles.input}
              placeholder="Area of Interest"
            />
          ))}
          <button
            type="button"
            className={`${styles.button} ${styles.addButton}`}
            onClick={() => appendInterest("")}
          >
            {" Ajouter centre d'intérêt"}
          </button>
        </div>

        <button type="submit" className={styles.button}>
          Valider
        </button>
      </form>
    </div>
  );
};

UpdateForm.propTypes = {
  curriculumDetails: PropTypes.object.isRequired,
};

export default UpdateForm;
