import "./css/base.css";
import "./css/index.less";

import Vue from 'vue'
import App from "./App.vue"
// import router from "./router"

console.log("working That's is ok!");

new Vue({
	el:"#app",
	template: "<App/>",
	components: { App },
	data:{
		msg:"Hello Vue.js"
	}
})