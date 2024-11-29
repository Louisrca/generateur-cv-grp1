/**
 * @swagger
 * /curriculum:
 *   get:
 *     summary: Get all curriculums
 *     tags:
 *       - Curriculum
 *     responses:
 *       200:
 *         description: List of curriculums
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Curriculum'
 */

/**
 * @swagger
 * /curriculum/{id}:
 *   get:
 *     summary: Get a curriculum by author
 *     description: Retrieve details of a specific curriculum by its author.
 *     tags:
 *       - Curriculum
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the curriculum to retrieve
 *     responses:
 *       '200':
 *         description: Details of the curriculum
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 description:
 *                   type: string
 *       '404':
 *         description: Curriculum not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /curriculum:
 *   post:
 *     summary: Create a new curriculum
 *     description: Add a new curriculum to the database.
 *     tags:
 *       - Curriculum
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - title
 *               - author
 *     responses:
 *       '201':
 *         description: Curriculum created successfully
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /curriculum/{id}:
 *   put:
 *     summary: Update an existing curriculum
 *     description: Modify the details of a curriculum by its ID.
 *     tags:
 *       - Curriculum
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the curriculum to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Curriculum updated successfully
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Curriculum not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /curriculum/{id}:
 *   delete:
 *     summary: Delete a curriculum by ID
 *     description: Remove a curriculum from the database by its ID.
 *     tags:
 *       - Curriculum
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the curriculum to delete
 *     responses:
 *       '200':
 *         description: Curriculum deleted successfully
 *       '404':
 *         description: Curriculum not found
 *       '500':
 *         description: Internal server error
 */
