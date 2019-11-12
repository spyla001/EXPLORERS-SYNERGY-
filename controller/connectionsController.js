const connectionmodel = require('../model/connection');
const express = require('express');
const connectionDB = require('../utility/connectionDB');
const router = express.Router();

var User = require('../model/User');
var UserProfile = require('../model/Userprofile');
var Userconnection = require('../model/Userconnection');
var ProfileController = require('./profileController');
//SESSION data


//Function to render INDEX page
home = function(req,res)
{
  res.render('index');
};

// Function to RENDER CONNECTIONS PAGE
connections = function(req,res)
{
  var connectionTypes = getconnectionType();
  var connections = connectionDB.getConnections();
  console.log(connections);
  var data ={
              'types':connectionTypes,
              'connections':connections
            }

            res.render('connections',{'data':data});
}

// Function to RENDER CONNECTIONS PAGE
connection = function(req,res)
{
  res.render('newconnection');
}

// Function to RENDER CONNECTIONS PAGE
individualconnection = function(req,res)
{
  let ID = req.params.connectionID;
  var connection = connectionDB.getConnection(ID);
  console.log(connection);
  if(connection == undefined)
  {
    console.log('/');
    res.redirect('/');
  }
  res.render('connection',{data:connection});
}


// Function to RENDER CONNECTIONS PAGE
userconnections = function(req,res)
{

  res.render('myconnections');
};

// Function to RENDER CONNECTIONS PAGE
about = function(req,res)
{
  res.render('about');
}

// Function to RENDER CONNECTIONS PAGE
contact = function(req,res)
{
  res.render('contact');
}

// Function to dynamically adding catergories
var getconnectionType = function()
{
  let connectionTypes = [];
  let data = connectionDB.getConnections();
  data.forEach(function(connection)
  {
    if(!connectionTypes.includes(connection.connectionType))
    {
      console.log(connection.connectionType)
      connectionTypes.push(connection.connectionType);
    }
  });
  return connectionTypes;
}




router.get('/',home);
router.get('/connections',connections);
router.get('/connections/createconnection' ,connection);

router.get('/connections/connection/:connectionID', individualconnection);

router.get('/myconnections',userconnections);

router.get('/about' ,about);
router.get('/contact',contact);
router.get('/*',function(req,res)
{
  res.redirect('/');
});


module.exports = router;

// Function to RENDER INDEXPAGE
