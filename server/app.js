/**
 *  入口文件 
 */
let express = require('express'),
	cors = require('cors'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	apis = require('./apis'),
	io

//配置express
const app = express()
app.use(cookieParser('wechat_session'))
app.use(session({
	secret: 'wechat_session',
	rolling: true,
	resave: true,
	saveUninitialized: true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
	origin:['http://localhost:8080','http://127.0.0.1:3000'],
	methods: ['GET','POST', 'DELETE','PUT'],
	alloweHeaders: ['Conten-Type', 'Authorization']
}))

app.use(apis)

let server = app.listen( process.env.PORT || 3000, function () {
  let host = server.address().address,
      port = server.address().port;

  console.log('Example server listening at http://localhost:' + port);
});



//配置socket.io
io = require('socket.io')(server)

let onlineUsers = []
io.on('connection', (socket)=>{
	console.log('a user connected')

    //将登陆信息广播给其他用户
	socket.broadcast.emit("userLogin", {data: socket.handshake.query})

	//检查在线的用户将在线的用户信息传给登陆的用户
	socket.emit('onlineUsers', onlineUsers)

    //用户上线将用户信息放入用户列表中
	if(!_verificateOnlineUser(onlineUsers, socket.handshake.query.userId)){
		onlineUsers.push({
			userName: socket.handshake.query.userName,
			userId: socket.handshake.query.userId
		})
	}

	socket.on('chat message', (msg)=>{
		console.log('message: ' + msg)
		io.emit('chat message', msg)
	})
	socket.on('disconnect', ()=>{
		//将下线信息广播给其他用户
		socket.broadcast.emit("userLogout", {data: socket.handshake.query})

		//将该用户从用户列表中删除
		for(let [index, elem] of Object.entries(onlineUsers)){
			if(elem.userId === socket.handshake.query.userId){
				onlineUsers.splice(index, 1)
			}
		}
		console.log('a user disconnected')
	})
})

const _verificateOnlineUser = (onlineUsers, connectUserId)=>{

	for(let elem of Object.values(onlineUsers)){
		if(elem.userId === connectUserId){
			return true
		}
	}

	return false
}