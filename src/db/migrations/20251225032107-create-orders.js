'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      vat: {
        type: Sequelize.INTEGER
      },
      link_file: {
        type: Sequelize.STRING
      },
      file_design: {
        type: Sequelize.STRING
      },
      deposit: {
        type: Sequelize.FLOAT
      },
      total: {
        type: Sequelize.FLOAT
      },
      filename: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      causes: {
        type: Sequelize.TEXT
      },
      userCheck: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      deadline: {
        type: Sequelize.INTEGER
      },
      time_start: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};