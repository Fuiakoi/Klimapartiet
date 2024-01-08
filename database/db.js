const path = require('path');
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database/db.db')
});

const Brugere = require('../models/dbBrugere')(sequelize, Sequelize.DataTypes);
const Beskeder = require('../models/dbBeskeder')(sequelize, Sequelize.DataTypes);

async function getBruger() {
    return Brugere.findAll();
}

async function getbeskeder() {
    return await Beskeder.findAll({
      order: [['createdAt', 'DESC']],
      limit: 3
    });
  }

// to import the json beskeder.json into the database, uncomment the following method:
// Out comment, when done!!!
// async function saveBeskeder(beskederArray) {
//   for (let besked of beskederArray) {
//     await Beskeder.create({
//       id: besked.id,
//       createdAt: besked.createdAt,
//       message: besked.message,
//       from: besked.from.user,
//       to: besked.to.user
//     });
//   }
// }

sequelize.sync()
    .then(() => console.log('Tables have been created'))
    .catch(error => console.log('Error occurred:', error));

module.exports = {
    sequelize,
    Brugere,
    Beskeder,
    getBruger,
    getbeskeder,
    // Also this one!!!
    // saveBeskeder
};