const { missionVision, getmissionVision } = require("../controllers/About/AboutController");
const { createOrUpdateFoundation, getFoundation } = require("../controllers/About/FoundationController.js");

const express = require('express');

const missionVisionRouter =express.Router();

missionVisionRouter.put('/missionVisionUpdate',missionVision);
missionVisionRouter.get('/getmissionVision',getmissionVision);

missionVisionRouter.post('/updatefoundation', createOrUpdateFoundation);
missionVisionRouter.get('/getfoundation', getFoundation);

module.exports = missionVisionRouter;
