module.exports = (sequelize, type) => {
  const Topic = sequelize.define('topic', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    desc: type.STRING,
    // rest, testing, react-hooks, etc..
  });

  Topic.associate = (models) => {
    Topic.belongsToMany(models.question, { through: 'questionsTopics' });
    Topic.belongsTo(models.role);
  };

  return Topic;
};
