import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
        scrollBehavior(to, from, savePosition){
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
                        path: '/HelloWorld',
                        name: 'HelloWorld',
                        meta: {
                                title: "主页"
                        },
                        component: (resolve) => require(['@/views/HelloWorld.vue'], resolve)
                },
                {
                        path: '/login',
                        name: 'login',
                        meta: {
                                title: "登录"
                        },
                        component: (resolve) => require(['@/views/login.vue'], resolve)
                },
                {
                        path: '/collection',
                        name: "collection",
                        meta: {
                                title: "BB收藏"
                        },
                        component: (resolve) => require(['@/views/collection.vue'], resolve)
                },
                {
                        path: '/header',
                        name: "header",
                        meta: {
                                title: "头部"
                        },
                        component: (resolve) => require(['@/components/header.vue'], resolve)
                }
        ]
})
