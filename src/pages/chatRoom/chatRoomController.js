import io from 'socket.io-client'
let socket
export default{
	data(){
		return{
			inputValue: '',
			chatRecords: []
		}
	},
	methods:{
		submit() {
			if(!this.inputValue){
				return
			}
			socket.emit('chat message', this.inputValue, res=>{
				if(res){

				}
			})
			this.inputValue = ''
			console.log(this.chatRecords)
		}
	},
	beforeRouteUpdate() {
		
	},
	mounted() {
		socket = io('http://localhost:3000')
		socket.on('chat message', (res)=>{
            console.log(res)
            this.$set(this.chatRecords,
			          this.chatRecords.length,
			          res)
        });
	}
}