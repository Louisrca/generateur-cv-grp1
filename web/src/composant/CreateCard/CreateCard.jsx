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

  return (
    <section className={styles.createCardContainer}>
      <CardWrapper>
        <h2>Créé ton CV</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          {/* Informations personnelles */}
          <h3>Informations personnelles</h3>
          <InputText label="Nom" inputName="lastname" />
          <InputText label="Prénom" inputName="name" />
          <InputText label="Titre du poste" inputName="jobTitle" />
          <InputText label="Email" inputName="email" />
          <InputText label="Téléphone" inputName="phone" />
          <InputText label="LinkedIn" inputName="linkedin" />
          <InputText label="GitHub" inputName="github" />
          <InputText label="Description" inputName="description" multiline />

                    {/* Compétences */}
                    <h3>Skills</h3>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillRow}>
              <InputText
                label={`Skill ${index + 1}`}
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
          <h3>Expériences professionnelles</h3>
          <InputText
            label="Expériences"
            inputName="experiences"
            placeholder='[{"title": "Software Engineer", "company": "Tech Solutions", "startYear": "2020-01-01", "endYear": "2022-12-31", "description": "Developed scalable web applications"}]'
            multiline
          />

          {/* Éducation */}
          <h3>Éducation</h3>
          <InputText
            label="Éducation"
            inputName="educations"
            placeholder='[{"school": "Tech University", "degree": "Bachelor of Computer Science", "startYear": "2015-09-01", "endYear": "2019-06-30"}]'
            multiline
          />

          {/* Centres d'intérêt */}
          <h3>Centres d'intérêt</h3>
          <InputText label="Centres d'intérêt" inputName="areaOfInterests" />

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
