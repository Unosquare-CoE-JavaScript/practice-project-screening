const db = require('./models');
const app = require('./app');

// ! binded to docker port
const PORT = 80;

db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}`)
  );
});
