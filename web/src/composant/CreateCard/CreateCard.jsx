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
  const [interestcenter, setInterestCenter] = useState([""]);
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

  const addInterestCenter = () => setInterestCenter([...interestcenter, ""]);

  const updateInterestCenter = (index, value) => {
    const updatedInterestCenter = [...interestcenter];
    updatedInterestCenter[index] = value;
    setSkills(updateInterestCenter);
  };

  const removeInterestCenter = (index) =>
    setInterestCenter(interestcenter.filter((_, i) => i !== index));
  
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
      { job: "", company: "", startYear: "", endYear: "", desciprtion: "" }
    ]);
  };
  
  const updateExppro = (index, field, value) => {
    const updatedExppro = [...exppro];
    updatedExppro[index][field] = value;
    setExppro(updateExppro);
  };

  const removeExppro = (index) =>
    setExppro(exppro.filter((_, i) => i !== index));


  return (
    <section className={styles.createCardContainer}>
      <CardWrapper>
        <h2>Créé ton CV</h2>
        <h2>Ajout d'image</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          {/* Informations personnelles */}
          <h3>Informations personnelles</h3>
          <InputText label="Nom" inputName="lastname" required/>
          <InputText label="Prénom" inputName="name" required/>
          <InputText label="Titre du poste" inputName="jobTitle" required/>
          <InputText label="Email" inputName="email" required/>
          <InputText label="Téléphone" inputName="phone" required/>
          <InputText label="LinkedIn" inputName="linkedin" />
          <InputText label="GitHub" inputName="github" />
          <InputText label="Description" inputName="description" multiline required/>

                    {/* Compétences */}
                    <h3>Skills</h3>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillRow}>
              <InputText
                label={`Skill`}
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
                onChange={(e) =>
                  updateLanguage(index, "name", e.target.value)
                }
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
                onChange={(e) =>
                  updateLanguage(index, "level", e.target.value)
                }
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

          {/* Expériences */}
        <h3>Expériences professionelles</h3>
          {exppro.map((exppro, index) => (
            <div key={index} className={styles.expproRow}>
              <InputText
                label="Métier"
                inputName={`job`}
                value={exppro.job}
                onChange={(e) => updateExppro(index, "job", e.target.value)}
              />
              <InputText
                label="Entreprise"
                inputName={`company`}
                value={exppro.company}
                onChange={(e) => updateExppro(index, "company", e.target.value)}
              />
              <InputText
                label="Date de début"
                inputName={`startYear-${index}`}
                type="date"
                value={exppro.startYear}
                onChange={(e) => updateExppro(index, "startYear", e.target.value)}
              />
              <InputText
                label="Date de fin"
                inputName={`endYear-${index}`}
                type="date"
                value={exppro.endYear}
                onChange={(e) => updateExppro(index, "endYear", e.target.value)}
              />
              <InputText
                label="Description"
                inputName={`description`}
                value={exppro.description}
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
            <h3>Éducations</h3>
          {educations.map((education, index) => (
            <div key={index} className={styles.educationRow}>
              <InputText
                label="Nom de l'école"
                inputName={`school-${index}`}
                value={education.school}
                onChange={(e) => updateEducation(index, "school", e.target.value)}
              />
              <InputText
                label="Diplôme"
                inputName={`degree-${index}`}
                value={education.degree}
                onChange={(e) => updateEducation(index, "degree", e.target.value)}
              />
              <InputText
                label="Domaine d'étude"
                inputName={`fieldOfStudy-${index}`}
                value={education.fieldOfStudy}
                onChange={(e) => updateEducation(index, "fieldOfStudy", e.target.value)}
              />
              <InputText
                label="Date de début"
                inputName={`startYear-${index}`}
                type="date"
                value={education.startYear}
                onChange={(e) => updateEducation(index, "startYear", e.target.value)}
              />
              <InputText
                label="Date de fin"
                inputName={`endYear-${index}`}
                type="date"
                value={education.endYear}
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
            + Ajouter une école
          </button>


          {/* Centres d'intérêt */}
          <h3>Centres d'intérêt</h3>
          {interestcenter.map((interestcenter, index) => (
            <div key={index} className={styles.interestcenterRow}>
              <InputText
                label={`Centre d'intérêt`}
                inputName={`InterestCenter-${index}`}
                value={interestcenter}
                onChange={(e) => updateInterestCenter(index, e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeInterestCenter(index)}
                className={styles.removeButton}
              >
                -
              </button>
            </div>
          ))}
          <button type="button" onClick={addInterestCenter} className={styles.addButton}>
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
