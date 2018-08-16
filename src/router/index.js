import Vue from "vue";
import VueRouter from "vue-router";

//路由集合
import Index from "../components/index.vue";
import Company from "../components/company.vue";

Vue.use(VueRouter);

const routes = [
	{
		path:"/",
		component: Index
	},
	{
		path:"/company",
		component: Company
	}
]

const router = new VueRouter({
	routes: routes   	//简写routes,  PS:必须是routes,不能routers
})

export default router;		//ES6 暴露 router 变量