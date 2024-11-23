/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the book
 *         totalPages:
 *           type: integer
 *           description: Total number of pages in the book
 *         description:
 *           type: string
 *           description: Description of the book
 *         creationAt:
 *           type: string
 *           format: date-time
 *           description: Book creation date
 *         updateAt:
 *           type: string
 *           format: date-time
 *           description: Last update date
 *         author:
 *           $ref: '#/components/schemas/User'
 *       required:
 *         - title
 *         - totalPages
 *         - description
 */
