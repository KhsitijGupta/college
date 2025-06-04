const { AdminLogin } = require('../controllers/Admin/AdminLoginController.js');
const express = require('express');

const AdminRouter =express.Router();


AdminRouter.post('/login', AdminLogin);


module.exports = AdminRouter;
