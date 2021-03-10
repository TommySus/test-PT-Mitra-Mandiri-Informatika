'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Employees', 'PositionId', {
      type: Sequelize.INTEGER,
      reference: {
        model: {
          tableName: 'Positions'
        }
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Employees', 'PositionId')
  }
};
