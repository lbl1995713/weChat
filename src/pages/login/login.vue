<template>
	<div class="layout">
		<mu-text-field fullWidth 
		label="用户名" 
		hintText="请输入用户手机号"
		v-model="model.userName" 
		labelFloat/>

		<mu-text-field 
		fullWidth label="密码" 
		hintText="请输入密码" 
		v-model="model.password" 
		type="password" 
		labelFloat/>

		<mu-raised-button 
		label="登录"
		@click="login" 
		secondary
		fullWidth/>

		<mu-raised-button 
		label="立即注册"
		to="register"
		style="margin-top: 20px" 
		fullWidth 
		class="demo-raised-button" 
		primary/>
	</div>
</template>
<script>
	export default require('./loginController')
</script>
<style type="text/css" scoped>
	.layout{
    	height: 100%;
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    	padding: 5%;
    }
   
</style>
