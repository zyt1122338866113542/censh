import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import MyHeader from './components/MyHeader'
//引入所有的组件
import MintUi from "mint-ui"
//单引入mint-ui样式文件
import "mint-ui/lib/style.css"
//将mint-ui注册
Vue.use(MintUi)
import "./font/download/iconfont.css"

Vue.config.productionTip = false
axios.defaults.baseURL="http://localhost:5050";
Vue.prototype.axios=axios;
Vue.component("my-header",MyHeader);
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
