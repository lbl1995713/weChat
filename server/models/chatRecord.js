const mongoose =  require('mongoose')

const chatRecordSchema = new mongoose.Schema({
	_senderId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'user'
	},
	date: {
		type: Date,
		default: Date.now
	},
	content: String
})

exports.getModel = ()=>{
	return mongoose.model('chatRecord', chatRecordSchema)
}