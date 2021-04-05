const Home = () => import( /* webpackChunkName: 'home' */ '@pages/home')
const Blog = () => import( /* webpackChunkName: 'blog' */ '@pages/blog')
const Admin = () => import( /* webpackChunkName: 'user' */ '@pages/admin')
const AdminUser = () => import( /* webpackChunkName: 'user' */ '@pages/admin/user')
const NotFoundComponent = () => import( /* webpackChunkName: 'notfound' */ '@pages/404')

const routes = [{
        path: '/',
        component: Home,
        meta: {
            title: 'Welcome'
        }
    },
    {
        path: '/blog',
        alias: '/bk',
        component: Blog,
        meta: {
            title: 'Blog'
        }
    },
    {
        path: '/admin',
        component: Admin,
        meta: {
            title: 'Admin'
        },
        children: [{
            path: '/admin/user',
            name: 'admin__user',
            component: AdminUser,
            meta: {
                title: 'Admin-User'
            }
        }]
    },
    // {
    //   path: '/admin/user',
    //   component: AdminUser
    // },
    {
        path: '*',
        component: NotFoundComponent,
        meta: {
            title: 'Page Not Found'
        }
    }
]

export default routes