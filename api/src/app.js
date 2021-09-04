const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const options = require('./docs/swagger-config');
const verifyToken = require('./utils/verifyToken');
const questionRoutes = require('./routes/questions');

const app = express();

// swagger
const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// check authorization token middleware
app.use(verifyToken);

// routes
app.use('/api/questions', questionRoutes);

module.exports = app;
