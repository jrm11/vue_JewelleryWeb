import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior(to, from, savePosition) {
        "use strict";
        if (savePosition) {
            return savePosition;
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    //路由实现懒加载
    routes: [

        {
            path: '/login',
            name: 'login',
            meta: {
                title: "登录"
            },
            component: (resolve) => require(['@/views/login.vue'], resolve)
        },

        {
            path: '/stockGoods/index',
            name: "stockGoods/index",
            meta: {
                title: "主页"
            },
            component: (resolve) => require(['@/views/stockGoods/index.vue'], resolve)
        },
        {
            path: '/register',
            name: "register",
            meta: {
                title: "注册"
            },
            component: (resolve) => require(['@/views/register.vue'], resolve)
        },
        {
            path: '/forgetPwd',
            name: "forgetPwd",
            meta: {
                title: "忘记密码"
            },
            component: (resolve) => require(['@/views/forgetPwd.vue'], resolve)
        },
        {
            path: '/managerSystem/index',
            name: "managerSystem/index",
            meta: {
                title: "管理系统"
            },
            component: (resolve) => require(['@/views/managerSystem/index.vue'], resolve)
        },

        {
            path: '/index',
            name: "index",
            meta: {
                title: "头部"
            },
            component: (resolve) => require(['@/views/stockGoods/index.vue'], resolve)
        },
        {
            path: '/register',
            name: "register",
            meta: {
                title: "注册"
            },
            component: (resolve) => require(['@/views/register.vue'], resolve)
        },
        {
            path: '/forgetPwd',
            name: "forgetPwd",
            meta: {
                title: "忘记密码"
            },
            component: (resolve) => require(['@/views/forgetPwd.vue'], resolve)
        }
    ]
})
