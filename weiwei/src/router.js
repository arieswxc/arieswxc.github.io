import Vue from 'vue';
import VueRouter from 'vue-router'
const Home = () =>  import('./components/home/index.vue')
const ProjectList = () =>  import('./components/project/list')
const PersonalList = () =>  import('./components/personal/list')
const ProjectDetail = () =>  import('./components/project/detail')
const PersonalDetail = () =>  import('./components/personal/detail')
const Contract = () =>  import('./components/contract')

Vue.use(VueRouter)
let routes = [{
	path: '/',
    component: Home,
    redirect: '/home',

}, {
	path: '/home', 
	component: Home ,
}, {
    path: '/project/list', 
    name: 'projectlist',
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
    name: 'personaldetail',
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