var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const {sequelize} = require('../database/db.js');
const brugere = require('../models/dbBrugere')(sequelize, Sequelize.DataTypes);

router.get('/', function(req, res, next) {
    res.render('registrer', { title: 'Klimapartiet - Registrer' });
});

router.post('/', async function(req, res, next) {
    try {
      const newBrugere = await brugere.create({
        name: req.body.name,
        email: req.body.email,
        birthday: req.body.birthday
      });

      res.redirect('/');
    } catch (error) {
      console.error('Error creating brugere:', error);
      res.redirect('/registrer');
    }
  });

module.exports = router;