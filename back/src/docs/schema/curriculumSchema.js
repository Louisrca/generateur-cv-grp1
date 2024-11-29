/**
 * @swagger
 * components:
 *   schemas:
 *     Curriculum:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: First name of the user
 *         lastname:
 *           type: string
 *           description: Last name of the user
 *         jobTitle:
 *           type: string
 *           description: Job title of the user
 *         email:
 *           type: string
 *           description: Email address of the user
 *         description:
 *           type: string
 *           description: A short description or summary of the user
 *         phone:
 *           type: string
 *           description: Contact phone number of the user
 *         linkedin:
 *           type: string
 *           description: LinkedIn profile URL of the user
 *         github:
 *           type: string
 *           description: GitHub profile URL of the user
 *         skills:
 *           type: array
 *           items:
 *             type: string
 *           description: List of general skills
 *         languages:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the language
 *               level:
 *                 type: string
 *                 description: Proficiency level in the language
 *           description: List of languages with proficiency levels
 *         technicalSkills:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *                 description: Category of the technical skill (e.g., "Web Languages", "Frameworks")
 *               skills:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Name of the technical skill (e.g., "HTML", "React.js")
 *                     level:
 *                       type: string
 *                       description: Proficiency level of the technical skill (optional)
 *           description: List of technical skills with categories
 *         experiences:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Job title
 *               company:
 *                 type: string
 *                 description: Name of the company
 *               startYear:
 *                 type: string
 *                 format: date
 *                 description: Start date of the job
 *               endYear:
 *                 type: string
 *                 format: date
 *                 description: End date of the job (optional)
 *               description:
 *                 type: string
 *                 description: Description of the job or role
 *           description: List of job experiences
 *         educations:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               school:
 *                 type: string
 *                 description: Name of the school or university
 *               degree:
 *                 type: string
 *                 description: Degree obtained
 *               fieldOfStudy:
 *                 type: string
 *                 description: Field of study (optional)
 *               startYear:
 *                 type: string
 *                 format: date
 *                 description: Start date of the education
 *               endYear:
 *                 type: string
 *                 format: date
 *                 description: End date of the education (optional)
 *           description: List of educational qualifications
 *         areaOfInterests:
 *           type: array
 *           items:
 *             type: string
 *           description: Areas of interest (optional)
 *         creationAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the curriculum was created
 *         updateAt:
 *           type: string
 *           format: date-time
 *           description: Last date and time the curriculum was updated
 *         isPublic:
 *           type: boolean
 *           description: Indicates if the curriculum is public or private
 *         imageUrl:
 *           type: string
 *           description: URL of the profile image (optional)
 *         author:
 *           type: string
 *           description: The ID of the user who created this curriculum (Mongo ObjectId, reference to `User` model)
 *       required:
 *         - name
 *         - lastname
 *         - jobTitle
 *         - email
 *         - description
 *         - phone
 *         - skills
 *         - experiences
 *         - educations
 *         - creationAt
 *         - updateAt
 *         - author
 */
