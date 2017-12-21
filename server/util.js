/**
 * 公共的新增方法
 * @param  {[type]}   model      [description]  mongoose的model
 * @param  {[type]}   conditions [description]  数据实例
 * @param  {Function} callback   [description]  回调函数
 */
exports.addData = (model, conditions, callback)=>{
	model.create(conditions, (err, result)=>{
		if(err){
			console.log(err)
			callback({
				status: 500,
				msg: "add data fail"
			})
		}
		else{
			console.log('save success')
			callback({
				status: 200,
				msg: "add data success"
			})
		}
	})
}

/**
 * 公共的list查找方法 
 * @param  {[type]}   model      [description]  mongoose的model
 * @param  {[type]}   conditions [description]  数据实例
 * @param  {[type]}   fields     [description]  限定条件
 * @param  {[type]}   options    [description]  查询方法的配置
 * @param  {Function} callback   [description]  回调函数
 */
exports.findData = (model, conditions, fields, options, callback)=>{
	model.find(conditions, fields, options, (err, result)=>{
		if(err){
			console.log(err)
			callback({
				status: 500,
				msg: "add data fail"
			})
		}else{
			if(result.length!=0){  
                callback({status: 200, msg: "find data success",result:result});  
            }  
            else{  
                callback({status: 500, msg: 'find fail:no this data!'});  
            }  
		}
	})
}

/**
 * 公共的单个数据查找方法 
 * @param  {[type]}   model      [description]  mongoose的model
 * @param  {[type]}   conditions [description]  数据实例
 * @param  {[type]}   fields     [description]  限定条件
 * @param  {[type]}   options    [description]  查询方法的配置
 * @param  {Function} callback   [description]  回调函数
 */
exports.findOneData = (model, conditions, fields, options, callback)=>{
	model.findOne(conditions, fields, options, (err, result)=>{
		if(err){
			console.log(err)
			callback({
				status: 500,
				msg: "add data fail"
			})
		}else{
			if(result){  
                callback({status: 200, msg: "find data success",result:result});  
            }  
            else{  
                callback({status: 500, msg: 'find fail:no this data!'});  
            }  
		}
	})
}