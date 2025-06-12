const getImageUploader = require('../controllers/Home/ImageController.js');
const { missionVision, getmissionVision } = require("../controllers/About/missionVisionController.js");
const { updateAboutContent, createOrUpdateAboutimage, getAboutContent } = require('../controllers/About/AboutContent.Controller.js');
const { getFoundations, createFoundation, updateFoundationById, deleteFoundation } = require("../controllers/About/FoundationController.js");

const express = require('express');

const AboutRoute =express.Router();
const upload = getImageUploader('/About');

AboutRoute.put('/missionVisionUpdate',missionVision);
AboutRoute.get('/getmissionVision',getmissionVision);

AboutRoute.post('/addfoundation',upload.single('image'), createFoundation);
AboutRoute.get('/getfoundation', getFoundations);
AboutRoute.put('/updatefoundation/:id', updateFoundationById);
AboutRoute.delete('/deletefoundation/:id', deleteFoundation);

AboutRoute.post('/uploadAboutContent', updateAboutContent);
AboutRoute.get('/getAboutContent', getAboutContent);
AboutRoute.post('/uploadAboutContentImages',upload.single('image'),createOrUpdateAboutimage);

module.exports = AboutRoute;



