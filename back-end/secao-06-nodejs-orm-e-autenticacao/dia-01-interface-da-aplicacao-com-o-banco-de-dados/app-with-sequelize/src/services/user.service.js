const { User } = require('../models');

const getAll = async () => {
  const users = User.findAll();

  return users;
}

module.exports = {
  getAll,
}
