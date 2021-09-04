const express = require('express');
const router = express.Router();
const { apply, submit } = require('../controllers/questions');

// TODO write actual documentation for each endpoint
/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/apply', apply);

/**
 * @swagger
 * /:
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post('/submit', submit);

module.exports = router;
