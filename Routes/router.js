//1 import express
const express = require('express')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')


//3 import userController
const userController = require('../Controllers/userController')

const ProjectController = require('../Controllers/projectController')
const multerMiddleware = require('../Middlewares/multerMiddleware')
//2 create router
const router = express.Router()

router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)

router.post('/api/addProject',jwtMiddleware,multerMiddleware.single('projectImg'),ProjectController.addprojectAPI)

router.get('/api/getAllUserProject',jwtMiddleware,ProjectController.getAllUserProjectAPI)

router.get('/api/getUserProject',jwtMiddleware,ProjectController.getUserProjectAPI)


router.get('/api/getHomeProject',ProjectController.getHomeProjectAPI)

router.put('/api/editProject/:projectId',jwtMiddleware,multerMiddleware.single('projectImg'),ProjectController.editProjectAPI)

router.delete('/api/deleteProject/:projectId',jwtMiddleware,ProjectController.deleteProjectAPI)

module.exports = router;
