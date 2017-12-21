<template>
	<div class="layout">
		<div class="content" ref="content">
			<ul>
				<li v-for="record in chatRecords"
				v-text="record.value || record"></li>
			</ul>
		</div>
		<div class="footer">
			<mu-text-field 
			style="width:90%" 
			hintText="提示文字"
			v-model="inputValue"/>
			<mu-flat-button 
			label="发送信息" 
			@click="submit"
			class="demo-flat-button" 
			primary/>
		</div>                            
	</div>
</template>
<script>
	export default require('./chatRoomController')
</script>
<style type="text/css" scoped="">
    .layout{
    	height: 100%;
    }
    .content{
    	height: 90%;
    }
	.footer{
		width: 100%;
		height: 10%;
		display: flex;
		flex-direction: row;
	}
</style>