const Home = () => import( /* webpackChunkName: 'home' */ '@pages/home')
const NotFoundComponent = () => import( /* webpackChunkName: 'notfound' */ '@pages/404')

const routes = [{
        path: '/',
        component: Home,
        meta: {
            title: 'Welcome'
        }
    },
    {
        path: '*',
        component: NotFoundComponent,
        meta: {
            title: 'Page Not Found'
        }
    }
]

export default routes