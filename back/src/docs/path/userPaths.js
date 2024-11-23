/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Get user profile
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: User profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 */
