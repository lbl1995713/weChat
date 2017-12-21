import io from 'socket.io-client'
let socket

export default {
	data(){
		return {
			friendList: []
		}
	},
	methods:{
		enterChatRoom() {
			this.$router.push({
				path: '/chatRoom'
			})
		},
		_searchUsersList() {
			this.$axios.get('/users', {
				params:{
					userId: this.$store.state.userId
				}
			})
			.then(res=>{
				if(res.data.status === 200){
					this.friendList = Array.from(res.data.result)
				}
			})
			.catch(err=>{
				this.$toast("网络错误,请检查网络")
			})
		},
		_setHeaderIndex(val) {
			return val%3 + 1
		}
	},
	mounted() {
		//获取用户列表
		this._searchUsersList()
        
        if(!socket){
        	socket = io('http://localhost:3000', {
				query: this.$store.state.user
			})
        }
        socket.on('onlineUsers', (res)=>{
        	//获取在线的用户
        	const response = new Set(res)
        	for(let elem of response.values()){
        		this.friendList.find(value=>{
        			if(value.userId === elem.userId){
        				return this.$set(value, 'state', true)
        			}
        		})
        	}
        })

        //获得用户上线的信息，将用户状态设置为在线
        if(!socket._callbacks.$userLogin){
        	socket.on('userLogin', (res)=>{
	        	for(let elem of Object.values(this.friendList)){
	        		if(res.data.userId === elem.userId){
	        			this.$set(elem, 'state', true)
	        			break
	        		}
	        	}
	        })
        }

        //获得用户下线的信息，将用户状态设置为下线
        if(!socket._callbacks.$userLogout){
        	socket.on('userLogout', (res)=>{
	        	for(let elem of Object.values(this.friendList)){
	        		if(res.data.userId === elem.userId){
	        			this.$set(elem, 'state', false)
	        			break
	        		}
	        	}
	        })
        }
	}
}