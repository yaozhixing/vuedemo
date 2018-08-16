<template>
	<div id="app">
		<img src="images/ico2.png">
		<p>
			<span><router-link to="/">首页</router-link></span>
			<span><router-link to="/company">公司介绍</router-link></span>
		</p>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "app"
	}
</script>

<style scoped>
	
</style>