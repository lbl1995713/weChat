const userDao = require("../DBSql/userDao")

exports.addUserAction = (req, res)=>{
	try{
		//先检查,再存储
		userDao.addUser(req.body, response=>{
			res.send(response)
		})
	}catch(err){
		console.log("报错信息:" + err)
	}
}

exports.findUserAction = (req, res)=>{
	try{
		userDao.checkUser(req.body, response=>{
			response.result = {
				userName: response.result.userName,
				userId: response.result._id
			}
			res.send(response)
		})
	}catch(err){
		console.log("报错信息:" + err)
	}
}

exports.searchUsersAction = (req, res)=>{
	try{
		userDao.searchUsers(req.query, response=>{
			let data = []
			for(let elem of Object.values(response.result)){
				data.push({
					userName: elem.userName,
					userId: elem._id
				})
			}
			response.result = data
			res.send(response)
		})
	}catch(err){
		console.log("报错信息:" + err)
	}
}