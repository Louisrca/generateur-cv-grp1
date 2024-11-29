import { useForm, useFieldArray } from "react-hook-form";
import { usePostCurriculum } from "../../api/curriculum/curriculum";

const CreateCard = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      jobTitle: "",
      email: "",
      description: "",
      phone: "",
      linkedin: "",
      github: "",
      skills: [""],
      languages: [{ name: "", level: "" }],
      technicalSkills: [{ category: "", skills: [{ name: "", level: "" }] }],
      experiences: [
        { title: "", company: "", startYear: "", endYear: "", description: "" },
      ],
      educations: [
        {
          school: "",
          degree: "",
          fieldOfStudy: "",
          startYear: "",
          endYear: "",
        },
      ],
      isPublic: false,
      areaOfInterests: [""],
    },
  });

  const { mutate: postCurriculum } = usePostCurriculum();

  const { fields: skillFields, append: appendSkill } = useFieldArray({
    control,
    name: "skills",
  });

  const { fields: languageFields, append: appendLanguage } = useFieldArray({
    control,
    name: "languages",
  });

  const { fields: techSkillCategories, append: appendTechSkillCategory } =
    useFieldArray({
      control,
      name: "technicalSkills",
    });

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

  const onSubmit = (data) => {
    postCurriculum(data);
    console.log("Submitted Data:", data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Form</h1>
      <span
        style={{
          fontWeight: "bold",
          color: "blue",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        {
          " Vous pourrez ajouter une photo de profil dans l'onglet Edition de cv dans  Mes CV"
        }
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* General Information */}
        <div>
          <label>First Name:</label>
          <input {...register("name")} placeholder="First Name" />
        </div>
        <div>
          <label>Last Name:</label>
          <input {...register("lastname")} placeholder="Last Name" />
        </div>
        <div>
          <label>Job Title:</label>
          <input {...register("jobTitle")} placeholder="Job Title" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register("email")} placeholder="Email" />
        </div>
        <div>
          <label>Description:</label>
          <textarea {...register("description")} placeholder="Description" />
        </div>
        <div>
          <label>Phone:</label>
          <input {...register("phone")} placeholder="Phone Number" />
        </div>
        <div>
          <label>LinkedIn:</label>
          <input {...register("linkedin")} placeholder="LinkedIn URL" />
        </div>
        <div>
          <label>GitHub:</label>
          <input {...register("github")} placeholder="GitHub URL" />
        </div>

        {/* Skills */}
        <h3>Skills</h3>
        {skillFields.map((field, index) => (
          <div key={field.id}>
            <input {...register(`skills.${index}`)} placeholder="Skill" />
          </div>
        ))}
        <button type="button" onClick={() => appendSkill("")}>
          Add Skill
        </button>

        {/* Languages */}
        <h3>Languages</h3>
        {languageFields.map((field, index) => (
          <div key={field.id}>
            <input
              {...register(`languages.${index}.name`)}
              placeholder="Language"
            />
            <select {...register(`languages.${index}.level`)}>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Fluent">Fluent</option>
              <option value="Native">Native</option>
            </select>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendLanguage({ name: "", level: "" })}
        >
          Add Language
        </button>

        {/* Technical Skills */}
        <h3>Technical Skills</h3>
        {techSkillCategories.map((field, categoryIndex) => (
          <div key={field.id}>
            <input
              {...register(`technicalSkills.${categoryIndex}.category`)}
              placeholder="Category"
            />
            {field.skills.map((skill, skillIndex) => (
              <div key={skillIndex}>
                <input
                  {...register(
                    `technicalSkills.${categoryIndex}.skills.${skillIndex}.name`
                  )}
                  placeholder="Skill Name"
                />
                <select
                  {...register(
                    `technicalSkills.${categoryIndex}.skills.${skillIndex}.level`
                  )}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                appendTechSkillCategory({
                  category: "",
                  skills: [{ name: "", level: "" }],
                })
              }
            >
              Add Technical Skill Category
            </button>
          </div>
        ))}

        {/* Experiences */}
        <h3>Experiences</h3>
        {experienceFields.map((field, index) => (
          <div key={field.id}>
            <input
              {...register(`experiences.${index}.title`)}
              placeholder="Job Title"
            />
            <input
              {...register(`experiences.${index}.company`)}
              placeholder="Company"
            />
            <input
              type="date"
              {...register(`experiences.${index}.startYear`)}
              placeholder="Start Year"
            />
            <input
              type="date"
              {...register(`experiences.${index}.endYear`)}
              placeholder="End Year"
            />
            <textarea
              {...register(`experiences.${index}.description`)}
              placeholder="Description"
            />
          </div>
        ))}
        <button
          type="button"
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
          Add Experience
        </button>

        {/* Education */}
        <h3>Education</h3>
        {educationFields.map((field, index) => (
          <div key={field.id}>
            <input
              {...register(`educations.${index}.school`)}
              placeholder="School"
            />
            <input
              {...register(`educations.${index}.degree`)}
              placeholder="Degree"
            />
            <input
              {...register(`educations.${index}.fieldOfStudy`)}
              placeholder="Field of Study"
            />
            <input
              type="date"
              {...register(`educations.${index}.startYear`)}
              placeholder="Start Year"
            />
            <input
              type="date"
              {...register(`educations.${index}.endYear`)}
              placeholder="End Year"
            />
          </div>
        ))}
        <button
          type="button"
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
          Add Education
        </button>

        {/* Area of Interests */}
        <h3>Areas of Interest</h3>
        {interestFields.map((field, index) => (
          <div key={field.id}>
            <input
              {...register(`areaOfInterests.${index}`)}
              placeholder="Area of Interest"
            />
          </div>
        ))}
        <button type="button" onClick={() => appendInterest("")}>
          Add Area of Interest
        </button>

        {/* Public Toggle */}
        <div>
          <label>
            <input type="checkbox" {...register("isPublic")} />
            Make Profile Public
          </label>
        </div>

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCard;
