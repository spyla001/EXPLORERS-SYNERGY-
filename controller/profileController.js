var express = require('express');
var router = express.Router();
var userDB = require('../utility/UserDB');
var connectionDB = require('../utility/connectionDB');

var bodyParser = require('body-parser');
var session = require('express-session');

var User = require('../model/User');
var Userprofile = require('../model/Userprofile');
var Userconnection = require('../model/Userconnection');

router.use(bodyParser.urlencoded({
    extended: false
}));

//Random User LOGIN
router.get('/login',function(req,res)
{
  if (req.session.theUser) {
          console.log('User already logged in');
          res.redirect('/');
      }
      else {
           users = userDB.getUsers();
           var user = users[Math.floor(Math.random() * users.length)];
           console.log(user);
           req.session.theUser = user;
           req.session.userProfile = userDB.getUserProfile(user.userId);
           console.log("User Data",req.session.userProfile);
           console.log('user logged in');
           res.redirect('/myconnections');
       }
})

//USER LOGOUT
router.get('/logout',  function(req,res)
{
  req.session.destroy(function(err)
{
  if(err)
  res.negotiate(err);

  else
  {
    console.log("user logged out")
    res.redirect('/');
}});

});


//MYCONNECTIONS
router.get('/myconnections', function(req,res)
{
  var data = req.session.userProfile;
  res.render('myconnections', {data:data});
})

//DELETING A CONNECTION
router.get('/myconnections/delete/:id', function(req,res)
{
  var id = parseInt(req.params.id);
  console.log(req.session.userProfile._userconnectionlist);
  var index = getSelectedconnection(req.session.userProfile._userconnectionlist, id)
  if(index === -1)
  {
    console.log("items not in list");
    res.redirect("/");
  }
  else {
    {
      req.session.userProfile._userconnectionlist.splice(index, 1);
      res.redirect('/myconnections');
    }
  }
});

//SAVING OR UPDATING A CONNECTION
router.get('/connections/connection/:id/save/:response',function(req,res)
{
  var index = getSelectedconnection(req.session.userProfile._userconnectionlist, parseInt(req.params.id));
  if(index === -1)
  {
    var connection = connectionDB.getConnection(parseInt(req.params.id));
    var newconnection = new Userconnection(connection.connectionID, connection.connectionName, connection.connectionType, req.params.response);
    req.session.userProfile._userconnectionlist.push(newconnection)
    req.session.save();
    res.redirect('/myconnections');
  }
  else {

      var connection = connectionDB.getConnection(parseInt(req.params.id));
      var newconnection = new Userconnection(connection.connectionID, connection.connectionName, connection.connectionType, req.params.response);
      req.session.userProfile._userconnectionlist[index] = newconnection
      req.session.save();
      res.redirect('/myconnections');
  }
});

//RETURNING A SELECTED CONNECTION
var getSelectedconnection = function(list,id)
{
  for(let index= 0; index< list.length; index++)
  {
    if(list[index]._connectionID === id)
    {
      return index;
    }
  }
  return -1;
}



module.exports.router = router;
