import Vue from 'vue'
// 引入vue-router库
import VueRouter from 'vue-router'
// 使用该插件
Vue.use(VueRouter)

// 引入需要被router管理的组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

export default new VueRouter({
    routes: [
        {
            path: '/about',   // route的跳转连接 标识 /时必须的(on-nested routes must include a leading slash character)
            component: About, // 跳转的具体组件
        },
        {
            path: '/home',
            component: Home,
            // 嵌套子路由
            children: [
                {
                    path: 'message',   // 子路由不能加/
                    component: Message,
                    children: [
                        {
                            name: 'detail', // 命名路由(不可重名 建议和path一致) 可以根据名字匹配路由 当嵌套层级过多时可以简化编码 :to="{name:'detail'}"
                            path: 'detail',
                            // path: 'detail/:id/:title', // path中提前用占位符拟定好参数名配合name使用params传参
                            component: Detail,
                            // 使用props接收解构参数 props中的数据最终会以组件的props属性形式传入
                            // props: {id, title} // 对象式 只能传递固定数据
                            // props: true // 布尔值 只能接收传递params的参数
                            props($route) { // 函数式 直接获得$route对象 最后通过函数体内返回一个对象传入组件的props属性
                                // return { // 单个字段传递
                                //     id: $route.query.id,
                                //     title: $route.query.title
                                // }
                                return { // 传递一个对象
                                    data: $route.query.data
                                }
                            }
                        },
                    ]
                },
                {
                    path: 'news',
                    component: News,
                },
            ]
        },
    ]
})