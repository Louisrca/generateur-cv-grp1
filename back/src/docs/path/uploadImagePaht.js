/**
 * @swagger
 * components:
 *   schemas:
 *     Image:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the image
 *         image:
 *           type: object
 *           properties:
 *             data:
 *               type: string
 *               format: byte
 *               description: The image file data in binary format
 *             contentType:
 *               type: string
 *               description: The content type (MIME type) of the image (e.g., image/jpeg)
 *         uploadDate:
 *           type: string
 *           format: date-time
 *           description: The date when the image was uploaded
 *         curriculumId:
 *           type: string
 *           description: The ID of the curriculum associated with this image (Mongo ObjectId, reference to `Curriculum`model).
 *       required:
 *         - name
 *         - image
 *         - curriculumId
 */

/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Upload a new image
 *     description: Upload an image and associate it with a specific curriculum.
 *     tags:
 *       - Upload
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file to upload
 *               name:
 *                 type: string
 *                 description: The name of the image
 *               curriculumId:
 *                 type: string
 *                 description: The curriculum ID to associate the image with
 *     responses:
 *       '201':
 *         description: Image uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /upload/{curriculumId}:
 *   get:
 *     summary: Get an image by curriculum ID
 *     description: Retrieve an image associated with a specific curriculum by curriculum ID.
 *     tags:
 *       - Upload
 *     parameters:
 *       - in: path
 *         name: curriculumId
 *         schema:
 *           type: string
 *         required: true
 *         description: The curriculum ID to retrieve the associated image
 *     responses:
 *       '200':
 *         description: Image found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       '404':
 *         description: Image not found for the specified curriculum ID
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /upload:
 *   get:
 *     summary: Get all uploaded images
 *     description: Retrieve all uploaded images in the database.
 *     tags:
 *       - Upload
 *     responses:
 *       '200':
 *         description: List of images
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Image'
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /upload/{id}:
 *   post:
 *     summary: Update an existing image
 *     description: Update an existing image by its ID.
 *     tags:
 *       - Upload
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the image to update
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The new image file
 *               name:
 *                 type: string
 *                 description: The updated name of the image
 *               curriculumId:
 *                 type: string
 *                 description: The updated curriculum ID to associate the image with
 *     responses:
 *       '200':
 *         description: Image updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       '400':
 *         description: Invalid input data
 *       '404':
 *         description: Image not found
 *       '500':
 *         description: Internal server error
 */
