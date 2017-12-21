/**
 *  作路由分发
 */
const express = require('express'),
	  router = express.Router(),
	  db_url = 'mongodb://localhost:27017/wechat',
	  mongoose = require('mongoose')

mongoose.connect(db_url,{useMongoClient:true}, ()=>{
	console.log('Mongoose connection success')
});

const userController = require('./controllers/userController')

router.post('/user/add', userController.addUserAction)
router.post('/user/login', userController.findUserAction)
router.get('/users', userController.searchUsersAction)

module.exports = router