'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      link: {
        type: Sequelize.STRING,
      },
      intro: {
        type: Sequelize.STRING,
      },
      decs: {
        type: Sequelize.TEXT,
      },
      best: {
        type: Sequelize.BOOLEAN,
      },
      tags: {
        type: Sequelize.TEXT,
      },
      min_print: {
        type: Sequelize.INTEGER,
      },
      idCate: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categorys',
          key: 'id',
        },
      },
      calculator: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Products');
  },
};
