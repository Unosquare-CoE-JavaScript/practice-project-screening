const db = require('../models');
const Op = db.Sequelize.Op;

function apply(req, res) {
  // TODO: write actual business logic

  const { query } = req;
  Object.keys(query).forEach((prop) => (query[prop] = JSON.parse(query[prop])));
  const { topics, seniorities } = query;

  db.question
    .findAll({
      include: [
        db.answer,
        { model: db.topic, where: { id: { [Op.or]: topics } } },
        { model: db.seniority, where: { id: { [Op.or]: seniorities } } },
      ],
    })
    .then((response) => res.send(response));
}

function submit(req, res) {
  // TODO: write actual business logic
  // * save log to assessment table
  const { candidate, interviewer } = req.assessment;
  res.send({ candidate, interviewer });
}

module.exports = {
  apply,
  submit,
};
