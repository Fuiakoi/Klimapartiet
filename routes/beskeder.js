var express = require('express');
var router = express.Router();
var axios = require('axios');
var db = require('../database/db');

// Read the RAW json file from the gist
// router.get('/', async function(req, res) {
//   try {
//     const response = await axios.get('https://gist.githubusercontent.com/andracs/0aefa210b709f539e1583e2b169a810e/raw/3a3dd76d5ad38598e0a869bb67442c512c9db790/Beskeder.json');
//     const beskeder = response.data;
//     res.render('beskeder', { beskeder });
//   } catch (error) {
//     console.error(error);
//     res.render('error', { message: 'Error fetching messages', error });
//   }
// });

// To import the json beskeder.json into the database, uncomment the following route:
// Out comment again, when done!!!
// router.get('/', function(req, res, next) {
//   axios.get('https://gist.githubusercontent.com/andracs/0aefa210b709f539e1583e2b169a810e/raw/3a3dd76d5ad38598e0a869bb67442c512c9db790/Beskeder.json')
//     .then(function(response) {
//       return db.saveBeskeder(response.data); // save the data in the database
//     })
//     .then(function() {
//       res.send('Data imported successfully');
//     })
//     .catch(function(error) {
//       console.log(error);
//       res.render('error', { message: 'Error importing data', error });
//     });
// });

// Out comment this one, before the .JSON file is imported into the database!!!
// Shows the messages from the database
router.get('/', async function(req, res) {
  try {
    const beskeder = await db.getbeskeder();
    res.render('beskeder', { beskeder });
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Error fetching messages', error });
  }
});

module.exports = router;