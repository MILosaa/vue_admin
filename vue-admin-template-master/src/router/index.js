import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path:'/user',
    component:Layout,
    name: 'user',
    meta: { title: '用户管理 ', icon: 'user' },
    children: [
      {
        path: 'userlist',
        name: 'userlist',
        component: () => import('@/views/user/index'),
        meta: { title: '用户列表', icon: 'table' }
      },
      {
        path: 'rolelist',
        name: 'rolelist',
        component: () => import('@/views/user/role'),
        meta: { title: '角色管理', icon: 'user' }
      },
      {
        path:'edituser',
        name:'edituser',
        component:()=>import('@/views/user/edituser'),
        meta:{title:'修改信息',icon:'user'},
        hidden:true
      },
      {
        path:'adduser',
        name:'adduser',
        component:()=>import('@/views/user/adduser'),
        meta:{title:'添加用户',icon:'user'},
        hidden:true
      },
      {
        path:'addrule',
        name:'addrule',
        component:()=>import('@/views/user/addrule'),
        meta:{title:'添加权限',icon:'user'},
        hidden:true
      },
      {
        path:'editrule',
        name:'editrule',
        component:()=>import('@/views/user/editrule'),
        meta:{title:'修改权限',icon:'user'},
        hidden:true
      },
      {
        path:'addrole',
        name:'addrole',
        component:()=>import('@/views/user/addrole'),
        meta:{title:'添加角色',icon:'user'},
        hidden:true
      },
      {
        path:'editrole',
        name:'editrole',
        component:()=>import('@/views/user/editrole'),
        meta:{title:'修改角色',icon:'user'},
        hidden:true
      },
      {
        path: 'authlist',
        name: 'authlist',
        component: () => import('@/views/user/auth'),
        meta: { title: '权限管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/shop',
    component: Layout,
    name: 'shop',
    meta: { title: '商城管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'category',
        name: 'category',
        component: () => import('@/views/shop/category'),
        meta: { title: '分类管理', icon: 'table' }
      },
      {
        path:'addcategory',
        name:'addcategory',
        component:()=>import('@/views/shop/addcategory'),
        meta:{title:'添加分类'},
        hidden:true
      },
      {
        path:'editcategory',
        name:'editcategory',
        component:()=>import('@/views/shop/editcategory'),
        meta:{title:'添加分类'},
        hidden:true
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('@/views/shop/product'),
        meta: { title: '商品管理', icon: 'tree' }
      },
      {
        path:'addproduct',
        name:'addproduct',
        component:()=>import('@/views/shop/addproduct'),
        meta:{title:'添加商品'},
        hidden:true
      },
      {
        path:'editproduct',
        name:'editproduct',
        component:()=>import('@/views/shop/editproduct'),
        meta:{title:'修改商品'},
        hidden:true
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
