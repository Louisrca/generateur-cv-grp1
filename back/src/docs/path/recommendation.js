/**
 * @swagger
 * /recommendation:
 *   post:
 *     summary: Create a new recommendation
 *     description: Add a new recommendation for a specific curriculum.
 *     tags:
 *       - Recommendation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: The recommendation message/content.
 *               curriculumId:
 *                 type: string
 *                 description: The ID of the curriculum for which the recommendation is made.
 *                 example: "60d2e8f0e9b4c4c5f8a1f1b4"
 *               author:
 *                 type: string
 *                 description: The ID of the user making the recommendation. This is a reference to the `User` model.
 *                 example: "60d2e8f0e9b4c4c5f8a1f1b5"
 *             required:
 *               - message
 *               - curriculumId
 *               - author
 *     responses:
 *       '201':
 *         description: Recommendation created successfully
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /recommendation/{curriculumId}:
 *   get:
 *     summary: Get all recommendations for a specific curriculum
 *     description: Retrieve all recommendations linked to a specific curriculum ID.
 *     tags:
 *       - Recommendation
 *     parameters:
 *       - in: path
 *         name: curriculumId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the curriculum to retrieve recommendations for
 *     responses:
 *       '200':
 *         description: List of recommendations for the curriculum
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recommendation'
 *       '404':
 *         description: No recommendations found for the specified curriculum
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /recommendation/all-recommendations-by-user/{id}:
 *   get:
 *     summary: Get all recommendations by a user
 *     description: Retrieve all recommendations made by a specific user.
 *     tags:
 *       - Recommendation
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to retrieve recommendations from
 *     responses:
 *       '200':
 *         description: List of recommendations made by the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recommendation'
 *       '404':
 *         description: No recommendations found for the specified user
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /recommendation/delete/{id}:
 *   delete:
 *     summary: Delete a recommendation by ID
 *     description: Remove a recommendation from the database by its ID.
 *     tags:
 *       - Recommendation
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the recommendation to delete
 *     responses:
 *       '200':
 *         description: Recommendation deleted successfully
 *       '404':
 *         description: Recommendation not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Recommendation:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the recommendation (Mongo ObjectId).
 *         message:
 *           type: string
 *           description: The content of the recommendation.
 *         creationAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the recommendation was created.
 *         author:
 *           type: string
 *           description: The ID of the user who created the recommendation (Mongo ObjectId, reference to `User` model).
 *         curriculumId:
 *           type: string
 *           description: The ID of the curriculum the recommendation is associated with (Mongo ObjectId, reference to `Curriculum` model).
 *       required:
 *         - message
 *         - curriculumId
 *         - author
 */
