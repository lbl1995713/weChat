const mongoose =  require('mongoose')

const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true
	},
	password: String
})

exports.getModel = ()=>{
	return mongoose.model('user', userSchema)
}