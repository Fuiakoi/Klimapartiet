var express = require('express');
var router = express.Router();

router.post('/login', function(req, res) {
  console.log('POST /login');
  console.log('Received form data:', req.body);
  console.log('Username:', req.body.username);
  console.log('Password:', req.body.password);
  console.log('Condition:', req.body.username === 'admin' && req.body.password === 'password');

  if (req.body.username === 'admin' && req.body.password === 'password') {
    res.redirect('/'); // Redirect to the home page after successful login
  } else {
    res.send('Invalid username or password');
  }
});

module.exports = router;