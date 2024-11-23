/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: User's first name
 *         lastname:
 *           type: string
 *           description: User's last name
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation date of the user
 *         password:
 *           type: string
 *           description: User's password (hashed)
 *       required:
 *         - name
 *         - lastname
 *         - email
 *         - password
 */
