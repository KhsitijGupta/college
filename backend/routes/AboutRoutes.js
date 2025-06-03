const getImageUploader = require('../controllers/Home/ImageController.js');
const { missionVision, getmissionVision } = require("../controllers/About/missionVisionController.js");
const { updateAboutContent, createOrUpdateAboutimage, getAboutContent } = require('../controllers/About/AboutContent.Controller.js');
const { createOrUpdateFoundation, getFoundation, createOrUpdateimage } = require("../controllers/About/FoundationController.js");

const express = require('express');

const AboutRoute =express.Router();
const uploadFoundationImage = getImageUploader('/About');

AboutRoute.put('/missionVisionUpdate',missionVision);
AboutRoute.get('/getmissionVision',getmissionVision);

AboutRoute.post('/updatefoundation', createOrUpdateFoundation);
AboutRoute.post('/uploadOurFoundationImages',uploadFoundationImage.single('image'),createOrUpdateimage);
AboutRoute.get('/getfoundation', getFoundation);

AboutRoute.post('/uploadAboutContent', updateAboutContent);
AboutRoute.get('/getrAboutContent', getAboutContent);
AboutRoute.post('/uploadAboutContentImages',uploadFoundationImage.single('image'),createOrUpdateAboutimage);

module.exports = AboutRoute;



