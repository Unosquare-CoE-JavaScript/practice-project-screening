module.exports = (sequelize, type) => {
  const Role = sequelize.define('role', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    desc: type.STRING,
    // ie: frontend, backend, fullstack, qa, devops, etc..
  });

  Role.associate = (models) => {
    Role.hasMany(models.topic);
  };

  return Role;
};
