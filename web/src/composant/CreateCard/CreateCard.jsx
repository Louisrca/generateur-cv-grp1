import React, { useState } from "react";
import { InputText } from "../InputText/InputText";
import styles from "./CreateCard.module.css";
import CardWrapper from "../CardWrapper/CardWrappers";
import { useRegisterUser } from "../../api/auth/register";

const languageOptions = [
  "Anglais",
  "Français",
  "Espagnol",
  "Allemand",
  "Chinois",
  "Italien",
  "Japonais",
  "Arabe",
  "Russe",
  "Portugais",
];

export const CreateCard = () => {
  const registerUser = useRegisterUser();

  const [skills, setSkills] = useState([""]);
  const [languages, setLanguages] = useState([{ name: "", level: "" }]);
  const [areaOfInterests, setAreaOfInterests] = useState([""]);
  const [educations, setEducations] = useState([
    {
      school: "",
      degree: "",
      fieldOfStudy: "",
      startYear: "",
      endYear: ""
    }
  ]);
  const [exppro, setExppro] = useState([
    {
      job: "",
      company: "",
      startYear: "",
      endYear: "",
      description: ""
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.skills = skills.filter((skill) => skill.trim() !== "");
    data.languages = languages.filter(
      (lang) => lang.name.trim() !== "" && lang.level.trim() !== ""
    );
    data.areaOfInterests = data.areaOfInterests 
      ? data.areaOfInterests.split(",")
      : [];
    data.educations = educations.filter(
      (edu) =>
        edu.school.trim() !== "" &&
        edu.degree.trim() !== "" &&
        edu.startYear.trim() !== "" &&
        edu.endYear.trim() !== ""
    );
    data.exppro = exppro.filter(
      (exp) =>
        exp.job.trim() !== "" &&
        exp.company.trim() !== "" &&
        exp.startYear.trim() !== "" &&
        exp.endYear.trim() !== "" &&
        exp.description.trim() !== ""
    );
    registerUser.mutate(data);
};

  const addSkill = () => setSkills([...skills, ""]);

  const updateSkill = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const removeSkill = (index) =>
    setSkills(skills.filter((_, i) => i !== index));

  const addLanguage = () =>
    setLanguages([...languages, { name: "", level: "" }]);

  const updateLanguage = (index, field, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index][field] = value;
    setLanguages(updatedLanguages);
  };

  const removeLanguage = (index) =>
    setLanguages(languages.filter((_, i) => i !== index));

  const addAreaOfInterests = () => setAreaOfInterests([...areaOfInterests, ""]);

  const updateAreaOfInterests = (index, value) => {
    const updatedAreaOfInterests = [...areaOfInterests];
    updatedAreaOfInterests[index] = value;
    setAreaOfInterests(updatedAreaOfInterests);
  };

  const removeAreaOfInterests = (index) =>
    setAreaOfInterests(areaOfInterests.filter((_, i) => i !== index));

  const addEducation = () => {
    setEducations([
      ...educations,
      { school: "", degree: "", fieldOfStudy: "", startYear: "", endYear: "" }
    ]);
  };

  const updateEducation = (index, field, value) => {
    const updatedEducations = [...educations];
    updatedEducations[index][field] = value;
    setEducations(updatedEducations);
  };

  const removeEducation = (index) =>
    setEducations(educations.filter((_, i) => i !== index));

  const addExppro = () => {
    setExppro([
      ...exppro,
      { job: "", company: "", startYear: "", endYear: "", description: "" }
    ]);
  };

  const updateExppro = (index, field, value) => {
    const updatedExppro = [...exppro];
    updatedExppro[index][field] = value;
    setExppro(updatedExppro);
  };

  const removeExppro = (index) =>
    setExppro(exppro.filter((_, i) => i !== index));

  const updateInfoperso = (index, field, value) => {
    const updatedInfoperso = [...infoperso];
    updatedInfoperso[index][field] = value;
    setExppro(updatedInfoperso);
  };

  return (
    <section className={styles.createCardContainer}>
      <CardWrapper>
        <h2>Créé ton CV</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          {/* Informations personnelles */}
          <h3>Informations personnelles</h3>
          {exppro.map((infoperso, index) => (
          <div key={index} className={styles.infopersoRow}>
            <InputText
                label="Nom"
                inputName={`lastame-${index}`}
                value={infoperso.name}
                onChange={(e) => updateInfoperso(index, "lastname", e.target.value)}
              />
            <InputText
                label="Prénom"
                inputName={`name-${index}`}
                value={infoperso.name}
                onChange={(e) => updateInfoperso(index, "name", e.target.value)}
            />
            <InputText
                label="Titre du poste"
                inputName={`jobTitle-${index}`}
                value={infoperso.jobTitle}
                onChange={(e) => updateInfoperso(index, "jobTitle", e.target.value)}
            />
            <InputText
                label="Email"
                inputName={`email-${index}`}
                value={infoperso.email}
                onChange={(e) => updateInfoperso(index, "email", e.target.value)}
            />
            <InputText
                label="Téléphone"
                inputName={`phone-${index}`}
                value={infoperso.phone}
                onChange={(e) => updateInfoperso(index, "phone", e.target.value)}
            />
            <InputText
                label="LinkedIn"
                inputName={`linkedin-${index}`}
                value={infoperso.linkedin}
                onChange={(e) => updateInfoperso(index, "linkedin", e.target.value)}
            />
            <InputText
                label="GitHub"
                inputName={`github-${index}`}
                value={infoperso.github}
                onChange={(e) => updateInfoperso(index, "github", e.target.value)}
            />
            <InputText
                label="Description"
                inputName={`description-${index}`}
                value={infoperso.description}
                onChange={(e) => updateInfoperso(index, "description", e.target.value)}
                multiline
            />
          </div>
          ))}

          {/* Compétences */}
          <h3>Compétences</h3>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillRow}>
              <InputText
                label={`Compétence`}
                inputName={`skill-${index}`}
                value={skill}
                onChange={(e) => updateSkill(index, e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className={styles.removeButton}
              >
                -
              </button>
            </div>
          ))}
          <button type="button" onClick={addSkill} className={styles.addButton}>
            + Ajouter une compétence
          </button>

          {/* Langues */}
          <h3>Langues</h3>
          {languages.map((lang, index) => (
            <div key={index} className={styles.languageRow}>
              <select
                value={lang.name}
                onChange={(e) => updateLanguage(index, "name", e.target.value)}
                required
              >
                <option value="">Sélectionnez une langue</option>
                {languageOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <select
                value={lang.level}
                onChange={(e) => updateLanguage(index, "level", e.target.value)}
                required
              >
                <option value="Scolaire">Scolaire</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Courant">Courant</option>
                <option value="Expert">Expert</option>
              </select>
              <button
                type="button"
                onClick={() => removeLanguage(index)}
                className={styles.removeButton}
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addLanguage}
            className={styles.addButton}
          >
            + Ajouter une langue
          </button>

          {/* Expériences professionnelles */}
          <h3>Expériences professionnelles</h3>
          {exppro.map((exp, index) => (
            <div key={index} className={styles.expproRow}>
              <InputText
                label="Métier"
                inputName={`job-${index}`}
                value={exp.job}
                onChange={(e) => updateExppro(index, "job", e.target.value)}
              />
              <InputText
                label="Entreprise"
                inputName={`company-${index}`}
                value={exp.company}
                onChange={(e) => updateExppro(index, "company", e.target.value)}
              />
              <InputText
                label="Date de début"
                inputName={`startYear-${index}`}
                type="date"
                value={exp.startYear}
                onChange={(e) => updateExppro(index, "startYear", e.target.value)}
              />
              <InputText
                label="Date de fin"
                inputName={`endYear-${index}`}
                type="date"
                value={exp.endYear}
                onChange={(e) => updateExppro(index, "endYear", e.target.value)}
              />
              <InputText
                label="Description"
                inputName={`description-${index}`}
                value={exp.description}
                onChange={(e) => updateExppro(index, "description", e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeExppro(index)}
                className={styles.removeButton}
              >
                -
              </button>
            </div>
          ))}
          <button type="button" onClick={addExppro} className={styles.addButton}>
            + Ajouter une expérience
          </button>

          {/* Éducation */}
          <h3>Éducation</h3>
          {educations.map((edu, index) => (
            <div key={index} className={styles.educationRow}>
              <InputText
                label="École"
                inputName={`school-${index}`}
                value={edu.school}
                onChange={(e) => updateEducation(index, "school", e.target.value)}
              />
              <InputText
                label="Diplôme"
                inputName={`degree-${index}`}
                value={edu.degree}
                onChange={(e) => updateEducation(index, "degree", e.target.value)}
              />
              <InputText
                label="Domaine d'étude"
                inputName={`fieldOfStudy-${index}`}
                value={edu.fieldOfStudy}
                onChange={(e) => updateEducation(index, "fieldOfStudy", e.target.value)}
              />
              <InputText
                label="Date de début"
                inputName={`startYear-${index}`}
                type="date"
                value={edu.startYear}
                onChange={(e) => updateEducation(index, "startYear", e.target.value)}
              />
              <InputText
                label="Date de fin"
                inputName={`endYear-${index}`}
                type="date"
                value={edu.endYear}
                onChange={(e) => updateEducation(index, "endYear", e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className={styles.removeButton}
              >
                -
              </button>
            </div>
          ))}
          <button type="button" onClick={addEducation} className={styles.addButton}>
            + Ajouter une éducation
          </button>

          {/* Centres d'intérêt */}
          <h3>Centres d'intérêt</h3>
          {areaOfInterests.map((areaOfInterests, index) => (
            <div key={index} className={styles.areaOfInterestsRow}>
              <InputText
                label="Centre d'intérêt"
                inputName="areaOfInterests"
                value={areaOfInterests}
                onChange={(e) => updateAreaOfInterests(index, e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeAreaOfInterests(index)}
                className={styles.removeButton}
              >
                -
              </button>
            </div>
          ))}
          <button type="button" onClick={addAreaOfInterests} className={styles.addButton}>
            + Ajouter un centre d'intérêt
          </button>

          {/* Option visibilité */}
          <h3>Paramètres</h3>
          <div>
            <label>
              <input type="checkbox" name="isPublic" /> Rendre ce CV public
            </label>
          </div>

          {/* Bouton de soumission */}
          <button type="submit" className={styles.submitButton}>
            Soumettre le CV
          </button>
          </form>
      </CardWrapper>
    </section>
  );
};
