export default {
	state: {
		user: {},
		userId: null
	},
	mutations:{
		setUser(state, user){
			state.user = user
			state.userId = user?user.userId:null
		}
	}
}