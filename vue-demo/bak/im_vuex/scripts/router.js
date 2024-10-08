import Vue from 'vue'
// 引入vue-router库
import VueRouter from 'vue-router'
// 使用该插件
Vue.use(VueRouter)

// 引入需要被router管理的组件
import Nav from '../pages/Nav'
import Im from '../components/Im'

const router = new VueRouter({
    // 路由工作模式 默认hash 可选hash history
    // hash模式 访问路径以/#/开始 之后的路径不会传入服务器作为访问路由接收
    mode: 'hash',
    routes: [
        {
            name: 'nav',
            path: '/nav',   // route的跳转连接 标识 /时必须的(on-nested routes must include a leading slash character)
            component: Nav, // 跳转的具体组件
        },
        {
            name: 'im',
            path: '/im',   // route的跳转连接 标识 /时必须的(on-nested routes must include a leading slash character)
            component: Im, // 跳转的具体组件
            props($route) { // 函数式 直接获得$route对象 最后通过函数体内返回一个对象传入组件的props属性
                return { // 传递一个对象
                    role: $route.query.role,
                    serviceId: $route.query.serviceId,
                    userId: $route.query.userId
                }
            }
        },
    ]
})


export default router