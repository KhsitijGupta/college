const express = require('express');
const { uploadOrUpdateTopbar, getTopbar } = require('../controllers/Topbar/TopbarController');

const TopbarRouter =express.Router();


TopbarRouter.post('/addTopbarData',uploadOrUpdateTopbar );
TopbarRouter.get('/getTopbarData',getTopbar );


module.exports = TopbarRouter;
