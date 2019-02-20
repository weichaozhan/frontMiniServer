# 前端微服务方案

## 目的

随着业务发展，会出现子功能系统复用的需求。前端微服务化的目的是，实现某个功能模块可独立运行，且能够作为大型系统的子功能模块呈现。

## 说明

### 目录结构

``` javascript
+ frontMicroServer
	
	+ deployTest // 测试部署模块的服务
		- loader.js // 用于记录微服务模块的文件，以一级路由开头的键值对：{'module': ['http://localhost:3002/a.js']}，数组内为相关联的 js
		- server.js // 服务

	+ mainApp // 需要加载微服务的应用
		- mockServer // mock 服务
		+ src // 应用代码
			+ api // 接口
			+ assets // 静态资源
			+ components // 公用组件
			+ pages // 页面
			+ router // 路由
			+ store // redux 状态管理
			...
			...
			...

	+ moduleApp // 微服务应用
		+ src // 应用代码
			+ components // 应用代码
				- index.js // 必须，暴露应用路由，生产编译入口
				- index.jsx // 必须，微服务应用入口
		...
		...

	+ loader.js // 同 deployTest 中的 loader.js
```

## loader.js

**内容：**
```javascript
window.appData = window.appData || {} // window 下挂载 appData 暴露应用数据用于通信

/** 
 * modules 用于记录当前所有微服务应用信息，值为以每个微服务应用的一级路由和微服务必需的js 文件数组组成的对象
 * 例如：下面代码的 module 为应用 module 的一级路由，访问微应用的 test 页面路由为：/module/test,
 * 应为 /module/test 以 /module 开头，主应用会到 window.appData.modules 中查找是否有 module 属性的值，
 * 有则加载对用应用页面，没有则跳转 NotFound
 */
window.appData.modules = {
	'module': ['http://localhost:3002/dist/react.bundle.js', 'http://localhost:3002/dist/moduleApp-77646c77d004c232e17c.js', 'http://localhost:3002/dist/vendors~moduleApp.bundle.js']
}
```

## 加载微服务的应用 mainApp

### 命令

``` javascript
// 启动开发与 mock 服务
npm run start

// 执行构建
npm run build

// 启动开发服务
npm run dev

// 启动 mock 服务
npm run mock
```

### 说明

一、src/router/routeModule.js：

微服务路由挂载在顶级路由下，所以需要判断当前路由是否为顶级路由

![code](https://github.com/weichaozhan/frontMiniServer/blob/master/react/readmeAssets/mainAppCode2.png?raw=true)

二、暴露主应用路由到 window 下

src/router/routeModule.js：

![code](https://github.com/weichaozhan/frontMiniServer/blob/master/react/readmeAssets/mainAppCode1.png?raw=true)

三、index.html 需要添加 **最先** 下载 loader.js 的 script

```javascript
// 根据部署 loader.js 的服务域名修改
<script src="http://localhost:3002/loader.js"></script>
```

## 微服务应用 moduleApp

### 命令
```javascript
// 执行构建
npm run build

// 启动开发服务
npm run dev

```

### 说明

src 文件夹下，除了 components 文件夹，其他都用于开发环境开发构建一个可用的应用，components 下必须有一个 index.js 用于暴露微应用路由：

```javascript
// index.js

let appData = window.appData = window.appData || {}

appData.routes = (appData.routes || []).concat([
	{
		code:'/module',    
		path: '/module',
		component: Index, // 路由组件为 Index.jsx
	}
])
```

执行 npm run build 后，生成的文件在 dist 文件夹下，为一些应用的资源文件：js、css、图片等。

每个新的微应用都必须在 loader.js 中，添加对应资源，如：

```javascript
// 一般 react.bundle.js，moduleApp-[hash].js，vendors~moduleApp.bundle.js 三个按顺序添加到数组中
{
	{
		'module': [
			'http://localhost:3002/dist/react.bundle.js', 
			'http://localhost:3002/dist/moduleApp-77646c77d004c232e17c.js', 
			'http://localhost:3002/dist/vendors~moduleApp.bundle.js'
		],
	}
}
```

**注意：** 每次编译都务必更新 loader.js 文件


## 本地部署测试 deployTest

### 命令

```javascript
// 启动服务
npm run start
```

### 说明

一、将编译完成的微服务 dist 文件夹复制到 deployTest 下，更新 deployTest 下的 loader.js

执行 npm run start 启动服务。

二、启动需要加载微服务的主应用 mainAPP ，跳转微服务路由查看是否成功。

## 微服务的独立访问

可新建一个无内容的主程序，路由设置为空数组 [] ，加载微服务系统（相当于新建一个空的主程序专门用于访问微服务）。