const getImageUploader = require('../controllers/Home/ImageController.js');
const express = require('express');

const HomeRouter =express.Router();
const upload = getImageUploader('uploads/Home');


// HomeRouter.get('/bannerImages', getBannerImages);
// HomeRouter.post('/uploadBannerImages', upload.fields([
//   { name: 'image1', maxCount: 1 },
//   { name: 'image2', maxCount: 1 },
//   { name: 'image3', maxCount: 1 }
// ]), createOrAddImages);

// HomeRouter.delete('/deleteBannerImages/:id', DeleteImages);


module.exports = HomeRouter;
