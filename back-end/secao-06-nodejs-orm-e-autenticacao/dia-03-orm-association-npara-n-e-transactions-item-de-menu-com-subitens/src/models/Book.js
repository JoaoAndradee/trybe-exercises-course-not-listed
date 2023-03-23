module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      id: {type: DataTypes.INTEGER, primaryKey: true},
      name: DataTypes.STRING,
      releaseYear: DataTypes.INTEGER,
      totalPages: DataTypes.INTEGER,
    },
    {
      timestamp: false,
      underscored: true,
    }
  );

  return Book;
}
