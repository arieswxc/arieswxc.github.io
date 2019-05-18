import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import _ from 'lodash';

window._ = _;
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
	router,
	render: h => h(App),
	// components: { App },
}).$mount('#app')
