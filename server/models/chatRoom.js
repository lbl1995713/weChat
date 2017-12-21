const mongoose =  require('mongoose')

const chatRoomSchema = new mongoose.Schema({
	users:{
		type: Array,
		required: true
	}
})

exports.getModel = ()=>{
	return mongoose.model('chatRoom', chatRoomSchema)
}