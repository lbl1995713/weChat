<template>
	<div class="layout">
		<mu-text-field 
		fullWidth
		v-model="model.userName" 
		:errorText="errorText.userName" 
		label="用户名"
		hintText="请输入用户名"
		@input="errorText = {}" 
		labelFloat/>
		<mu-text-field 
		fullWidth 
		v-model="model.password" 
		:errorText="errorText.password"
		label="密码"
		hintText="请输入密码"
		@input="errorText = {}"  
		type="password" 
		labelFloat/>
		<mu-text-field 
		fullWidth 
		label="确认密码" 
		:errorText="errorText.confirmPassword" 
		v-model="model.confirmPassword" 
		hintText="请再次输入密码" 
		@input="errorText = {}" 
		type="password" 
		labelFloat/>
		<mu-raised-button 
		label="立即注册"
		@click="register" 
		secondary
		fullWidth/>
		<mu-raised-button 
		label="返回登录"
		to="/"
		style="margin-top: 20px" 
		fullWidth 
		class="demo-raised-button" 
		primary/>
	</div>
</template>
<script type="text/javascript">
	export default require('./registerController')
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