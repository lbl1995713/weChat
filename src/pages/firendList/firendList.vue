<template>
	<div>
	  <mu-list>
	    <mu-list-item
	    v-for="(item, index) in friendList"
	    :key="item.userName" 
	    :title="item.userName"
	    :titleClass="item.state?'pink':''"
	    @click="enterChatRoom">
	      <mu-avatar 
	        :src="item.header || '../../static/header' + _setHeaderIndex(index) + '.jpg'" 
	      	slot="leftAvatar"/>
	      <mu-icon value="chat_bubble" slot="right"/>
	    </mu-list-item>
	  </mu-list>
	</div>
</template>

<script type="text/javascript">
	export {default} from './firendListController'
</script>

<style type="text/css">
	.pink{
		color: pink;
	}
</style>