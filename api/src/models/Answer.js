module.exports = (sequelize, type) => {
  const Answer = sequelize.define('answer', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    desc: type.STRING,
    isCorrect: type.BOOLEAN,
  });

  Answer.associate = (models) => {
    Answer.belongsTo(models.question);
  };

  return Answer;
};
