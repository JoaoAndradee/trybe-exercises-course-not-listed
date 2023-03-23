module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define(
    'UserBook',
    {},
    {
      timestamp: false,
      underscored: true,
      tableName: 'users_books',
    },
    UserBook.associate = (models) => {
      models.book.belongsToMany(models.User, {
        as: 'users',
        through: UserBook,
        foreignKey: 'bookId',
        otherKey: 'userId',
      });
      models.User.belongsToMany(models.Book, {
        as: 'books',
        through: UserBook,
        foreignKey: 'userId',
        otherKey: 'bookId',
      });
    }
  );

  return UserBook;
}
