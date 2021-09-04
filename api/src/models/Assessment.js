module.exports = (sequelize, type) => {
  const Assessment = sequelize.define('assessment', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    interviewer: type.STRING,
    candidate: type.STRING,
    score: type.FLOAT,
    passed: type.BOOLEAN,
  });

  Assessment.associate = (models) => {
    Assessment.belongsTo(models.role);
  };

  return Assessment;
};
