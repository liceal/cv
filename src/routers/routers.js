import loadable from '@loadable/component'
const routers = [{
    path: '/',
    exact: true, //精准
    component: loadable(() =>
        import('../containers/markdown-cv/markdown-cv.js'))

}, {
    path: '/static-cv',
    exact: true, //精准
    component: loadable(() =>
        import('../containers/Cv/Cv.js'))
}
]

export default routers