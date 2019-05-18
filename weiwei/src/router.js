import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from './components/home/index.vue'
import ProjectList from './components/project/list'
import PersonalList from './components/personal/list'
import ProjectDetail from './components/project/detail'
import PersonalDetail from './components/personal/detail'
import Contract from './components/contract'

Vue.use(VueRouter)
let routes = [{
	path: '/',
	component: Home,
}, {
	path: '/home', 
	component: Home ,
}, {
	path: '/project/list', 
	component: ProjectList ,
}, {
	path: '/personal/list', 
	component: PersonalList ,
}, {
	path: '/project/detail/:type',
	component: ProjectDetail,
	props: (route) => {
        return { 
            type: route.params.type,
        }
    },
}, {
	path: '/personal/detail/:type',
	component: PersonalDetail,
	props: (route) => {
        return { 
            type: route.params.type,
        }
    },
}, {
	path: '/contract',
	component: Contract,
}];

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router;