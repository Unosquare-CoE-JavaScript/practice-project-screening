module.exports = {
  definition: {
    openaspi: '3.0.1',
    info: {
      title: 'Screening API',
      version: '1.0.0',
      description:
        'API that send some random questions based on topics and seniorities and give feedback to recruiter.',
    },
    servers: [{ url: 'http://localhost:80' }],
  },
  apis: ['./src/routes/*.js'],
};
