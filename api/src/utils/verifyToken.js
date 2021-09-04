const jwt = require('jsonwebtoken');

/**
 * Verify if token is valid
 *
 * @param {Object} req request obj
 * @param {Object} res response obj
 * @param {Func} next next middleware
 */
function verifyToken(req, res, next) {
  const SECRET_KEY = process.env.JWT_SECRET_KEY;
  const Authorization = req.headers.authorization;

  const sendUnauthorized = () =>
    res.status(401).send({
      error: 'A valid token is required to get the requested response.',
    });

  if (!Authorization) {
    sendUnauthorized();
  } else {
    try {
      const { candidate, interviewer } = jwt.verify(Authorization, SECRET_KEY);
      req.assessment = { candidate, interviewer };
      next();
    } catch (error) {
      sendUnauthorized();
    }
  }
}

module.exports = verifyToken;
