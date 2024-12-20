const { request, DataTypes } = require("sequelize");

const sequelize = require("../database/conect");

const Teacher = sequelize.define(
    "Teacher",
    {
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "teacher",
    }
);

module.exports = Teacher;