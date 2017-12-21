
export default {
	data() {
		return {
			bottomNav: 'movies',
	        bottomNavColor: 'movies'
		}
	},
	methods:{
		handleChange (val) {
	      this.bottomNav = val
	      this._navgatorJump(val)
	    },
	    _navgatorJump(val) {
	    	switch(val){
		      	case '消息中心':
		      	this.$router.push({
		      		name: 'roomList'
		      	})
		      	return
		      	case '我的好友':
		      	this.$router.push({
		      		name: 'firendList'
		      	})
		      	return 
		      	case '个人中心':
		      	this.$router.push({
		      		name: 'personalCenter'
		      	})
		      	return 
		    }
	    }
	},
	created() {
		this.$store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
	},
	mounted() {
		this.bottomNav = '我的好友'

	}
}