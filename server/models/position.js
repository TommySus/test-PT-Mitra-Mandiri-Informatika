'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Position.hasMany(models.Employee)
    }
  };
  Position.init({
    code: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: { msg: 'code posisi tidak boleh kosong' }
      }
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: { msg: 'nama posisi tidak boleh kosong' }
      }
    },
    is_delete: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Position',
  });
  return Position;
};