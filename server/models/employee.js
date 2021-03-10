'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.Position)
    }
  };
  Employee.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: { msg: 'nama tidak boleh kosong' }
      }
    },
    birth_date: {
      type:DataTypes.DATE,
      allowNull:false,
      validate: {
        notEmpty: { msg: 'tanggal lahir tidak boleh kosong' }
      }
    },
    id_number: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: { msg: 'nomor induk pegawai tidak boleh kosong' }
      },
      
    },
    gender: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: { msg: 'gender tidak boleh kosong' }
      }
    },
    is_delete: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    PositionId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: { msg: 'posisi pekerjaan tidak boleh kosong' }
      }
    }
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};