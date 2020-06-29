import loadable from '@loadable/component'
const routers = [{
        path: '/',
        exact: true, //精准
        component: loadable(() =>
            import ('../components/Home'))
    },
    {
        path: 'cv',
        exact: true,
        component: loadable(() =>
            import ('../components/Cv'))
    }
]

export default routers