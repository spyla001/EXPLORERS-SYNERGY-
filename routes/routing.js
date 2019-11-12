const express = require('express');
const controller = require('../controller/connectionsController');
const router = express.Router();


router.get('/',controller.home);
router.get('/connections',controller.connections);
router.get('/connections/createconnection' ,controller.connection);

router.get('/connections/connection/:connectionID', controller.individualconnection);

router.get('/myconnections',controller.userconnections);

router.get('/about' ,controller.about);
router.get('/contact',controller.contact);


module.exports = router;
