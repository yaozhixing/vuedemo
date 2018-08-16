import "./css/base.css";
import "./css/index.less";

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from "./App.vue"
import router from "./router"

console.log("working That's is ok!");


/*实例化*/
new Vue({
	el: '#app',				//app.vue 的入口id名称
	router,					//路由数组集合
	render: h => h(App)		//html 的入口id名称
});

