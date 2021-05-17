'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {

   return queryInterface.createTable('cities', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING(2),
      allowNull: false
    },
    created_at:{
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at:{
      type: Sequelize.DATE,
      allowNull: false
    }

   });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cities');
  }
};
