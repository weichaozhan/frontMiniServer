window.appModules = {
    modules: {
        '^/module-a': 'http://localhost:3001/dist/test-app.umd.min.js'
    },
    actions: {
        /**
         * @description 下载对应路由的资源
         * @param {Object} to vue-router 将要跳转的路由
         * @param {Function} next vue-router next 函数
         */
        loadModules: (to, next) => {
            const { modules, modulesLoaded } = window.appModules
            const modulesKeys = Object.keys(modules)
            
            // 判断是否有模块前缀的路由
            const anyMatch = modulesKeys.some(moduleName => {
                const moduleNeed = new RegExp(moduleName).test(to.path)
            
                if (moduleNeed) {
                    // 是否已下载
                    if (modulesLoaded.indexOf(moduleName) < 0) {
                        const node = document.createElement('script')
                
                        node.setAttribute('src', modules[moduleName])
                        document.body.appendChild(node)
                        node.onload = () => {
                            // 已下载标记
                            window.appModules.modulesLoaded.push(moduleName)
                            next(to.path)
                        }
                    } else {
                        next()
                    }
                }
                return moduleNeed
            })
            // 没有匹配的前缀，继续跳转
            if (!anyMatch) {
                next()
            }
        }
    },
    modulesLoaded: [],
}