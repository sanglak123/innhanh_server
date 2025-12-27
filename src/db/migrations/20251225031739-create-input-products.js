'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InputProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idProduct: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      index: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      placeholder: {
        type: Sequelize.STRING,
      },
      label: {
        type: Sequelize.STRING,
      },
      col: {
        type: Sequelize.INTEGER,
      },
      rows: {
        type: Sequelize.INTEGER,
      },
      min: {
        type: Sequelize.INTEGER,
      },
      max: {
        type: Sequelize.INTEGER,
      },
      step: {
        type: Sequelize.INTEGER,
      },
      options: {
        type: Sequelize.TEXT,
      },
      value: {
        type: Sequelize.STRING,
      },
      txt_true: {
        type: Sequelize.STRING,
      },
      txt_false: {
        type: Sequelize.STRING,
      },
      sign: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InputProducts');
  },
};
