module.exports = (sequelize, type) => {
  const Seniority = sequelize.define('seniority', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    desc: type.STRING,
    // ie: jr, mid, sr, etc..
  });

  Seniority.associate = (models) => {
    Seniority.belongsToMany(models.question, {
      through: 'questionsSeniorities',
    });
  };

  return Seniority;
};
