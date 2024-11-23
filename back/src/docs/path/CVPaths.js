/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: List of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     description: Retrieve details of a specific book by its ID.
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the book to retrieve
 *     responses:
 *       '200':
 *         description: Details of the book
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
 *         description: Book not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /books/:
 *   post:
 *     summary: Create a new book
 *     description: Add a new book to the database.
 *     tags:
 *       - Books
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
 *         description: Book created successfully
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update an existing book
 *     description: Modify the details of a book by its ID.
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the book to update
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
 *         description: Book updated successfully
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Book not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     description: Remove a book from the database by its ID.
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the book to delete
 *     responses:
 *       '200':
 *         description: Book deleted successfully
 *       '404':
 *         description: Book not found
 *       '500':
 *         description: Internal server error
 */
