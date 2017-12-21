<template>
	<div class="layout">
		<div class="content">
			<router-view
			keep-alive/>
		</div>
		<div class="footer">
			<mu-paper>
			    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
			      <mu-bottom-nav-item value="消息中心" title="消息中心" icon="send"/>
			      <mu-bottom-nav-item value="我的好友" title="我的好友" icon="grade"/>
			      <mu-bottom-nav-item value="个人中心" title="个人中心" icon="inbox"/>
			    </mu-bottom-nav>
			</mu-paper>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default require('./indexController')
</script>

<style type="text/css" scoped>
    .layout{
    	height: 100%;
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    }
    .content{
    	width: 100%;
    	height: 100%;
    }
	.footer{
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index:  1;
	}
</style>