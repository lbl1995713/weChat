/* 懒加载组件 */
const login = ()=> import('@/pages/login/login'), 
      register = ()=>import ('@/pages/register/register'),
	  chatRoom =()=>import ('@/pages/chatRoom/chatRoom'),

      index = ()=> import('@/pages/index/index'),
	  roomList = ()=>import('@/pages/roomList/roomList'), 
	  firendList = ()=> import('@/pages/firendList/firendList'),
	  personalCenter = ()=> import('@/pages/personalCenter/personalCenter')

export default {
	routes:[
	    {
	    	path: '/',
	        name: 'login',
	        component: login
	    },
	    {
	    	path: '/register',
	    	name: 'register',
	    	component: register
	    },
	    {
	    	path: '/index',
	    	name: 'index',
	    	component: index,
	    	redirect: {
	    		name: 'firendList'
	    	},
	    	children:[{
	    		path: 'roomList',
	    		name: 'roomList',
	    		component: roomList
	    	},{
	    		path: 'firendList',
	    		name: 'firendList',
	    		component: firendList
	    	},{
	    		path: 'personalCenter',
	    		name: 'personalCenter',
	    		component: personalCenter
	    	}]
	    },
	    {
	    	path: '/chatRoom',
	    	name: 'chatRoom',
	    	component: chatRoom
	    }
	],
	/* 滚动行为控制 */
	scrollBehavior(to, from, savedPosition){
		return {x: 0, y: 0}
	}
}