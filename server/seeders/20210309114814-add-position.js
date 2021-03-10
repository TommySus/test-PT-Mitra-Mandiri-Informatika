'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Positions', [
      {
        code: 'SA',
        name: 'System Analyst',
        is_delete: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'BPS',
        name: 'BPS',
        is_delete: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'PRG',
        name: 'Programmer',
        is_delete: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'TEST',
        name: 'Tester',
        is_delete: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'Help',
        name: 'Helpdesk',
        is_delete: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Positions', null, {});
  }
};
