const express = require('express');
const path = require('path');
const app = express();
const controller = require('./controller/connectionsController');
const profilecontroller = require('./controller/profileController');
const session = require('express-session');

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(session({secret:"voyage"}));

app.use(function (req, res, next) {
  res.locals.user = req.session.theUser;
  res.locals.userprofile = req.session.userProfile;
  next()
})

//setting path to routes module
app.use('/',profilecontroller.router)
app.use('/',controller);



app.listen(3000, function()
{
  console.log("server listening on port 3000");
});
