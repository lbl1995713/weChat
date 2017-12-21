const userModel = require('../models/user'),
      DBHelper = require('../util')

exports.addUser = (conditions, callback)=>{
	const model = userModel.getModel()
	DBHelper.addData(model, conditions, res=>{
		callback(res)
	})
}

exports.checkUser = (conditions, callback)=>{
	const model = userModel.getModel()
	let fields = {},
	    options = {}     
	    
	DBHelper.findOneData(model, conditions, fields, options, result=>{
		callback(result)
	})
}

exports.searchUsers = (conditions, callback)=>{
	const model = userModel.getModel()
	let fields = {},
	    options = {},
	    _conditions = {
	    	_id: {$ne: conditions.userId}
	    } 
	DBHelper.findData(model, _conditions, fields, options, result=>{
		callback(result)
	})
}