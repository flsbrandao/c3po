'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('customers', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birth_date:{
        type: Sequelize.DATE,
        allowNull:false
      },
      sex:{
        type: Sequelize.ENUM('M', 'F'),
        allowNull:false
      },
      age:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      city_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'cities', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    return queryInterface.dropTable('customers');
  }

};
