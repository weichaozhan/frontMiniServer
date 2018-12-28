const TestApp = resolve => require(['./TestApp.vue'], resolve)
const MainApp = resolve => require(['./MainApp.vue'], resolve)
const ActionApp = resolve => require(['./ActionApp.vue'], resolve)

const routes = [
    {
        path: '/module-a/',
        component: MainApp
    },
    {
        path: '/module-a/test',
        component: TestApp
    },
    {
        path: '/module-a/action',
        component: ActionApp
    }
]

window.appData = window.appData || {};
window.appData.router && window.appData.router.addRoutes(routes, {
  override: true
});
