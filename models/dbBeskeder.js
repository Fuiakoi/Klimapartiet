const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Beskeder = sequelize.define('Beskeder', {
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    to: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    })
    return Beskeder;
};