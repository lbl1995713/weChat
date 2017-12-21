export default {
	data(){
		return {
			model: {
				userName: '',
				password: ''
			}
		}
	},
	methods:{
		login() {
			if(!this.model.userName || !this.model.password){
				this.$toast("请输入完整账户的信息")
				return
			}
			this.$axios.post('user/login', this.model)
			.then(res=>{
				if(res.data.status === 200){
					sessionStorage.setItem("user",JSON.stringify(res.data.result))
					this.$store.commit('setUser', res.data.result)
					this.$router.push({
						name: "index"
					})
				}else{
					this.$toast("用户名或密码错误,请重新输入")
				}
			})
			.catch(err=>{
				console.log(err)
				this.$toast("网络错误,请检查网络")
			})
		}
	}
}