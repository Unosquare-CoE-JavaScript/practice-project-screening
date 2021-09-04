module.exports = (sequelize, type) => {
  const Question = sequelize.define('question', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    desc: type.STRING,
  });

  Question.associate = (models) => {
    Question.hasMany(models.answer);
    Question.belongsToMany(models.topic, { through: 'questionsTopics' });
    Question.belongsToMany(models.seniority, {
      through: 'questionsSeniorities',
    });
  };

  return Question;
};
