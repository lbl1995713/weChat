export default {
	data() {
		return {
			model:{
				userName: '',
				password: '',
				confirmPassword: ''
			},
			errorText:{}
		}
	},
	methods:{
		register() {
			if(!this.model.userName){
				this.$toast('请输入用户名')
				this.$set(this.errorText, 'userName', '请输入用户名')
			}else if(!this.model.password){
				this.$toast('请输入您的账户密码')
				this.$set(this.errorText, 'password', '请输入您的账户密码')
			}else if(!this.model.confirmPassword){
				this.$toast('请确认您的账户密码')
				this.$set(this.errorText, 'confirmPassword', '请确认您的账户密码')
			}else if(this.model.confirmPassword != this.model.password){
				const err = {
					confirmPassword: "两次密码不一样",
					password: "两次密码不一样"
				}
				this.$set(this, 'errorText', err)
			}
			//提交请求api
			this.$axios.post('user/add', this.model)
			.then(res=>{
				console.log(res)
				if(res.data.status === 200){
					this.$router.push({
						name: "index"
					})
				}
			}, err=>{
				this.$toast("程序员凉了..")
			})
			.catch(err=>{
				this.$toast("网络错误,请检查网络")
			})
		}
	}
}