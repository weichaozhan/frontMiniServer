(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["test-app"] = factory(require("vue"));
	else
		root["test-app"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		0: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "test-app.umd." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"1":1,"2":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"1":"b9a48675","2":"a8d6d316"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonptest_app"] = (typeof self !== 'undefined' ? self : this)["webpackJsonptest_app"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "055a":
/***/ (function(module, exports) {

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=tinymce.util.Tools.resolve("tinymce.util.Tools"),e=function(t,e){var i,n=t.dom,o=t.selection.getSelectedBlocks();o.length&&(i=n.getAttrib(o[0],"dir"),c.each(o,function(t){n.getParent(t.parentNode,'*[dir="'+e+'"]',n.getRoot())||n.setAttrib(t,"dir",i!==e?e:null)}),t.nodeChanged())},i=function(t){t.addCommand("mceDirectionLTR",function(){e(t,"ltr")}),t.addCommand("mceDirectionRTL",function(){e(t,"rtl")})},n=function(e){var i=[];return c.each("h1 h2 h3 h4 h5 h6 div p".split(" "),function(t){i.push(t+"[dir="+e+"]")}),i.join(",")},o=function(t){t.addButton("ltr",{title:"Left to right",cmd:"mceDirectionLTR",stateSelector:n("ltr")}),t.addButton("rtl",{title:"Right to left",cmd:"mceDirectionRTL",stateSelector:n("rtl")})};t.add("directionality",function(t){i(t),o(t)})}();

/***/ }),

/***/ "07af":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(e){return function(){return e}};function c(r){for(var o=[],e=1;e<arguments.length;e++)o[e-1]=arguments[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=o.concat(e);return r.apply(null,n)}}var n,r,o,a,i,l,u=t(!1),s=t(!0),m=u,f=s,d=function(){return p},p=(a={fold:function(e,t){return e()},is:m,isSome:m,isNone:f,getOr:o=function(e){return e},getOrThunk:r=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:o,orThunk:r,map:d,ap:d,each:function(){},bind:d,flatten:d,exists:m,forall:f,filter:d,equals:n=function(e){return e.isNone()},equals_:n,toArray:function(){return[]},toString:t("none()")},Object.freeze&&Object.freeze(a),a),y=function(n){var e=function(){return n},t=function(){return o},r=function(e){return e(n)},o={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:f,isNone:m,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return y(e(n))},ap:function(e){return e.fold(d,function(e){return y(e(n))})},each:function(e){e(n)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(n)?o:p},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(m,function(e){return t(n,e)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},h={some:y,none:d,from:function(e){return null===e||e===undefined?p:y(e)}},g=(i="function",function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&Array.prototype.isPrototypeOf(e)?"array":"object"===t&&String.prototype.isPrototypeOf(e)?"string":t}(e)===i}),k=(l=Array.prototype.indexOf)===undefined?function(e,t){return x(e,t)}:function(e,t){return l.call(e,t)},v=function(e,t){return-1<k(e,t)},b=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var a=e[o];r[o]=t(a,o,e)}return r},x=function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return n;return-1},C=(Array.prototype.slice,g(Array.from)&&Array.from,tinymce.util.Tools.resolve("tinymce.util.I18n")),w=tinymce.util.Tools.resolve("tinymce.Env"),A=w.mac?"\u2318":"Ctrl",S=w.mac?"Ctrl + Alt":"Shift + Alt",O={shortcuts:[{shortcut:A+" + B",action:"Bold"},{shortcut:A+" + I",action:"Italic"},{shortcut:A+" + U",action:"Underline"},{shortcut:A+" + A",action:"Select all"},{shortcut:A+" + Y or "+A+" + Shift + Z",action:"Redo"},{shortcut:A+" + Z",action:"Undo"},{shortcut:S+" + 1",action:"Header 1"},{shortcut:S+" + 2",action:"Header 2"},{shortcut:S+" + 3",action:"Header 3"},{shortcut:S+" + 4",action:"Header 4"},{shortcut:S+" + 5",action:"Header 5"},{shortcut:S+" + 6",action:"Header 6"},{shortcut:S+" + 7",action:"Paragraph"},{shortcut:S+" + 8",action:"Div"},{shortcut:S+" + 9",action:"Address"},{shortcut:"Alt + F9",action:"Focus to menubar"},{shortcut:"Alt + F10",action:"Focus to toolbar"},{shortcut:"Alt + F11",action:"Focus to element path"},{shortcut:"Ctrl + F9",action:"Focus to contextual toolbar"},{shortcut:A+" + K",action:"Insert link (if link plugin activated)"},{shortcut:A+" + S",action:"Save (if save plugin activated)"},{shortcut:A+" + F",action:"Find (if searchreplace plugin activated)"}]},T=function(){var e=b(O.shortcuts,function(e){return'<tr data-mce-tabstop="1" tabindex="-1" aria-label="Action: '+(t=e).action+", Shortcut: "+t.shortcut.replace(/Ctrl/g,"Control")+'"><td>'+C.translate(e.action)+"</td><td>"+e.shortcut+"</td></tr>";var t}).join("");return{title:"Handy Shortcuts",type:"container",style:"overflow-y: auto; overflow-x: hidden; max-height: 250px",items:[{type:"container",html:'<div><table class="mce-table-striped"><thead><th>'+C.translate("Action")+"</th><th>"+C.translate("Shortcut")+"</th></thead>"+e+"</table></div>"}]}},P=Object.keys,_=[{key:"advlist",name:"Advanced List"},{key:"anchor",name:"Anchor"},{key:"autolink",name:"Autolink"},{key:"autoresize",name:"Autoresize"},{key:"autosave",name:"Autosave"},{key:"bbcode",name:"BBCode"},{key:"charmap",name:"Character Map"},{key:"code",name:"Code"},{key:"codesample",name:"Code Sample"},{key:"colorpicker",name:"Color Picker"},{key:"compat3x",name:"3.x Compatibility"},{key:"contextmenu",name:"Context Menu"},{key:"directionality",name:"Directionality"},{key:"emoticons",name:"Emoticons"},{key:"fullpage",name:"Full Page"},{key:"fullscreen",name:"Full Screen"},{key:"help",name:"Help"},{key:"hr",name:"Horizontal Rule"},{key:"image",name:"Image"},{key:"imagetools",name:"Image Tools"},{key:"importcss",name:"Import CSS"},{key:"insertdatetime",name:"Insert Date/Time"},{key:"legacyoutput",name:"Legacy Output"},{key:"link",name:"Link"},{key:"lists",name:"Lists"},{key:"media",name:"Media"},{key:"nonbreaking",name:"Nonbreaking"},{key:"noneditable",name:"Noneditable"},{key:"pagebreak",name:"Page Break"},{key:"paste",name:"Paste"},{key:"preview",name:"Preview"},{key:"print",name:"Print"},{key:"save",name:"Save"},{key:"searchreplace",name:"Search and Replace"},{key:"spellchecker",name:"Spell Checker"},{key:"tabfocus",name:"Tab Focus"},{key:"table",name:"Table"},{key:"template",name:"Template"},{key:"textcolor",name:"Text Color"},{key:"textpattern",name:"Text Pattern"},{key:"toc",name:"Table of Contents"},{key:"visualblocks",name:"Visual Blocks"},{key:"visualchars",name:"Visual Characters"},{key:"wordcount",name:"Word Count"}],H=c(function(e,o){return e.replace(/\$\{([^{}]*)\}/g,function(e,t){var n,r=o[t];return"string"==(n=typeof r)||"number"===n?r.toString():e})},'<a href="${url}" target="_blank" rel="noopener">${name}</a>'),F=function(t,n){return function(e,t){for(var n=0,r=e.length;n<r;n++){var o=e[n];if(t(o,n,e))return h.some(o)}return h.none()}(_,function(e){return e.key===n}).fold(function(){var e=t.plugins[n].getMetadata;return"function"==typeof e?H(e()):n},function(e){return H({name:e.name,url:"https://www.tinymce.com/docs/plugins/"+e.key})})},M=function(t){var e,n,r,o=(r=P((e=t).plugins),e.settings.forced_plugins===undefined?r:function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var a=e[r];t(a,r,e)&&n.push(a)}return n}(r,(n=c(v,e.settings.forced_plugins),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return!n.apply(null,e)}))),a=b(o,function(e){return"<li>"+F(t,e)+"</li>"}),i=a.length,l=a.join("");return"<p><b>"+C.translate(["Plugins installed ({0}):",i])+"</b></p><ul>"+l+"</ul>"},E=function(e){return{title:"Plugins",type:"container",style:"overflow-y: auto; overflow-x: hidden;",layout:"flex",padding:10,spacing:10,items:[(t=e,{type:"container",html:'<div style="overflow-y: auto; overflow-x: hidden; max-height: 230px; height: 230px;" data-mce-tabstop="1" tabindex="-1">'+M(t)+"</div>",flex:1}),{type:"container",html:'<div style="padding: 10px; background: #e3e7f4; height: 100%;" data-mce-tabstop="1" tabindex="-1"><p><b>'+C.translate("Premium plugins:")+'</b></p><ul><li>PowerPaste</li><li>Spell Checker Pro</li><li>Accessibility Checker</li><li>Advanced Code Editor</li><li>Enhanced Media Embed</li><li>Link Checker</li></ul><br /><p style="float: right;"><a href="https://www.tinymce.com/pricing/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">'+C.translate("Learn more...")+"</a></p></div>",flex:1}]};var t},I=tinymce.util.Tools.resolve("tinymce.EditorManager"),j=function(){var e,t,n='<a href="https://www.tinymce.com/docs/changelog/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">TinyMCE '+(e=I.majorVersion,t=I.minorVersion,0===e.indexOf("@")?"X.X.X":e+"."+t)+"</a>";return[{type:"label",html:C.translate(["You are using {0}",n])},{type:"spacer",flex:1},{text:"Close",onclick:function(){this.parent().parent().close()}}]},L=function(e,t){return function(){e.windowManager.open({title:"Help",bodyType:"tabpanel",layout:"flex",body:[T(),E(e)],buttons:j(),onPostRender:function(){this.getEl("title").innerHTML='<img src="'+t+'/img/logo.png" alt="TinyMCE Logo" style="display: inline-block; width: 200px; height: 50px">'}})}},B=function(e,t){e.addCommand("mceHelp",L(e,t))},N=function(e,t){e.addButton("help",{icon:"help",onclick:L(e,t)}),e.addMenuItem("help",{text:"Help",icon:"help",context:"help",onclick:L(e,t)})};e.add("help",function(e,t){N(e,t),B(e,t),e.shortcuts.add("Alt+0","Open help dialog","mceHelp")})}();

/***/ }),

/***/ "07bd":
/***/ (function(module, exports) {

!function(){"use strict";var i=function(t){var e=t,n=function(){return e};return{get:n,set:function(t){e=t},clone:function(){return i(n())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),y=tinymce.util.Tools.resolve("tinymce.Env"),r=tinymce.util.Tools.resolve("tinymce.util.Delay"),h=function(t){return parseInt(t.getParam("autoresize_min_height",t.getElement().offsetHeight),10)},v=function(t){return parseInt(t.getParam("autoresize_max_height",0),10)},o=function(t){return t.getParam("autoresize_overflow_padding",1)},a=function(t){return t.getParam("autoresize_bottom_margin",50)},n=function(t){return t.getParam("autoresize_on_init",!0)},u=function(t,e,n,i,o){r.setEditorTimeout(t,function(){_(t,e),n--?u(t,e,n,i,o):o&&o()},i)},S=function(t,e){var n=t.getBody();n&&(n.style.overflowY=e?"":"hidden",e||(n.scrollTop=0))},_=function(t,e){var n,i,o,r,a,u,s,l,g,c,f,d=t.dom;if(i=t.getDoc())if((m=t).plugins.fullscreen&&m.plugins.fullscreen.isFullscreen())S(t,!0);else{var m;o=i.body,r=h(t),u=d.getStyle(o,"margin-top",!0),s=d.getStyle(o,"margin-bottom",!0),l=d.getStyle(o,"padding-top",!0),g=d.getStyle(o,"padding-bottom",!0),c=d.getStyle(o,"border-top-width",!0),f=d.getStyle(o,"border-bottom-width",!0),a=o.offsetHeight+parseInt(u,10)+parseInt(s,10)+parseInt(l,10)+parseInt(g,10)+parseInt(c,10)+parseInt(f,10),(isNaN(a)||a<=0)&&(a=y.ie?o.scrollHeight:y.webkit&&0===o.clientHeight?0:o.offsetHeight),a>h(t)&&(r=a);var p=v(t);p&&p<a?(r=p,S(t,!0)):S(t,!1),r!==e.get()&&(n=r-e.get(),d.setStyle(t.iframeElement,"height",r+"px"),e.set(r),y.webkit&&n<0&&_(t,e))}},s={setup:function(i,e){i.on("init",function(){var t,e,n=i.dom;t=o(i),e=a(i),!1!==t&&n.setStyles(i.getBody(),{paddingLeft:t,paddingRight:t}),!1!==e&&n.setStyles(i.getBody(),{paddingBottom:e})}),i.on("nodechange setcontent keyup FullscreenStateChanged",function(t){_(i,e)}),n(i)&&i.on("init",function(){u(i,e,20,100,function(){u(i,e,5,1e3)})})},resize:_},l=function(t,e){t.addCommand("mceAutoResize",function(){s.resize(t,e)})};t.add("autoresize",function(t){if(!t.inline){var e=i(0);l(t,e),s.setup(t,e)}})}();

/***/ }),

/***/ "07e2":
/***/ (function(module, exports) {

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=function(t,o){var r;return t.dom.getParents(t.selection.getStart(),function(t){var e;(e=t.style["forecolor"===o?"color":"background-color"])&&(r=r||e)}),r},g=function(t){var e,o=[];for(e=0;e<t.length;e+=2)o.push({text:t[e+1],color:"#"+t[e]});return o},r=function(t,e,o){t.undoManager.transact(function(){t.focus(),t.formatter.apply(e,{value:o}),t.nodeChanged()})},e=function(t,e){t.undoManager.transact(function(){t.focus(),t.formatter.remove(e,{value:null},null,!0),t.nodeChanged()})},o=function(o){o.addCommand("mceApplyTextcolor",function(t,e){r(o,t,e)}),o.addCommand("mceRemoveTextcolor",function(t){e(o,t)})},F=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),a=["000000","Black","993300","Burnt orange","333300","Dark olive","003300","Dark green","003366","Dark azure","000080","Navy Blue","333399","Indigo","333333","Very dark gray","800000","Maroon","FF6600","Orange","808000","Olive","008000","Green","008080","Teal","0000FF","Blue","666699","Grayish blue","808080","Gray","FF0000","Red","FF9900","Amber","99CC00","Yellow green","339966","Sea green","33CCCC","Turquoise","3366FF","Royal blue","800080","Purple","999999","Medium gray","FF00FF","Magenta","FFCC00","Gold","FFFF00","Yellow","00FF00","Lime","00FFFF","Aqua","00CCFF","Sky blue","993366","Red violet","FFFFFF","White","FF99CC","Pink","FFCC99","Peach","FFFF99","Light yellow","CCFFCC","Pale green","CCFFFF","Pale cyan","99CCFF","Light sky blue","CC99FF","Plum"],l=function(t){return t.getParam("textcolor_map",a)},c=function(t){return t.getParam("textcolor_rows",5)},u=function(t){return t.getParam("textcolor_cols",8)},m=function(t){return t.getParam("color_picker_callback",null)},s=function(t){return t.getParam("forecolor_map",l(t))},d=function(t){return t.getParam("backcolor_map",l(t))},f=function(t){return t.getParam("forecolor_rows",c(t))},b=function(t){return t.getParam("backcolor_rows",c(t))},p=function(t){return t.getParam("forecolor_cols",u(t))},C=function(t){return t.getParam("backcolor_cols",u(t))},y=m,v=function(t){return"function"==typeof m(t)},h=tinymce.util.Tools.resolve("tinymce.util.I18n"),P=function(t,e,o,r){var n,a,l,c,i,u,m,s=0,d=F.DOM.uniqueId("mcearia"),f=function(t,e){var o="transparent"===t;return'<td class="mce-grid-cell'+(o?" mce-colorbtn-trans":"")+'"><div id="'+d+"-"+s+++'" data-mce-color="'+(t||"")+'" role="option" tabIndex="-1" style="'+(t?"background-color: "+t:"")+'" title="'+h.translate(e)+'">'+(o?"&#215;":"")+"</div></td>"};for((n=g(o)).push({text:h.translate("No color"),color:"transparent"}),l='<table class="mce-grid mce-grid-border mce-colorbutton-grid" role="list" cellspacing="0"><tbody>',c=n.length-1,u=0;u<e;u++){for(l+="<tr>",i=0;i<t;i++)l+=c<(m=u*t+i)?"<td></td>":f((a=n[m]).color,a.text);l+="</tr>"}if(r){for(l+='<tr><td colspan="'+t+'" class="mce-custom-color-btn"><div id="'+d+'-c" class="mce-widget mce-btn mce-btn-small mce-btn-flat" role="button" tabindex="-1" aria-labelledby="'+d+'-c" style="width: 100%"><button type="button" role="presentation" tabindex="-1">'+h.translate("Custom...")+"</button></div></td></tr>",l+="<tr>",i=0;i<t;i++)l+=f("","Custom color");l+="</tr>"}return l+="</tbody></table>"},k=function(t,e){t.style.background=e,t.setAttribute("data-mce-color",e)},x=function(o){return function(t){var e=t.control;e._color?o.execCommand("mceApplyTextcolor",e.settings.format,e._color):o.execCommand("mceRemoveTextcolor",e.settings.format)}},T=function(r,c){return function(t){var e,a=this.parent(),o=n(r,a.settings.format),l=function(t){r.execCommand("mceApplyTextcolor",a.settings.format,t),a.hidePanel(),a.color(t)};F.DOM.getParent(t.target,".mce-custom-color-btn")&&(a.hidePanel(),y(r).call(r,function(t){var e,o,r,n=a.panel.getEl().getElementsByTagName("table")[0];for(e=i.map(n.rows[n.rows.length-1].childNodes,function(t){return t.firstChild}),r=0;r<e.length&&(o=e[r]).getAttribute("data-mce-color");r++);if(r===c)for(r=0;r<c-1;r++)k(e[r],e[r+1].getAttribute("data-mce-color"));k(o,t),l(t)},o)),(e=t.target.getAttribute("data-mce-color"))?(this.lastId&&F.DOM.get(this.lastId).setAttribute("aria-selected","false"),t.target.setAttribute("aria-selected",!0),this.lastId=t.target.id,"transparent"===e?(r.execCommand("mceRemoveTextcolor",a.settings.format),a.hidePanel(),a.resetColor()):l(e)):null!==e&&a.hidePanel()}},_=function(n,a){return function(){var t=a?p(n):C(n),e=a?f(n):b(n),o=a?s(n):d(n),r=v(n);return P(t,e,o,r)}},A=function(t){t.addButton("forecolor",{type:"colorbutton",tooltip:"Text color",format:"forecolor",panel:{role:"application",ariaRemember:!0,html:_(t,!0),onclick:T(t,p(t))},onclick:x(t)}),t.addButton("backcolor",{type:"colorbutton",tooltip:"Background color",format:"hilitecolor",panel:{role:"application",ariaRemember:!0,html:_(t,!1),onclick:T(t,C(t))},onclick:x(t)})};t.add("textcolor",function(t){o(t),A(t)})}();

/***/ }),

/***/ "09cd":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),d=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),v=tinymce.util.Tools.resolve("tinymce.EditorManager"),h=tinymce.util.Tools.resolve("tinymce.Env"),y=tinymce.util.Tools.resolve("tinymce.util.Tools"),o=function(e){return e.getParam("importcss_merge_classes")},n=function(e){return e.getParam("importcss_exclusive")},_=function(e){return e.getParam("importcss_selector_converter")},r=function(e){return e.getParam("importcss_selector_filter")},i=function(e){return e.getParam("importcss_groups")},u=function(e){return e.getParam("importcss_append")},l=function(e){return e.getParam("importcss_file_filter")},a=function(t){return"string"==typeof t?function(e){return-1!==e.indexOf(t)}:t instanceof RegExp?function(e){return t.test(e)}:t},f=function(f,e,m){var g=[],n={};function p(e,t){var n,r,i,c=e.href;if(r=c,i=h.cacheSuffix,"string"==typeof r&&(r=r.replace("?"+i,"").replace("&"+i,"")),(c=r)&&m(c,t)&&(o=c,u=(s=f).settings,!(l=!1!==u.skin&&(u.skin||"lightgray"))||o!==(u.skin_url?s.documentBaseURI.toAbsolute(u.skin_url):v.baseURL+"/skins/"+l)+"/content"+(s.inline?".inline":"")+".min.css")){var s,o,u,l;y.each(e.imports,function(e){p(e,!0)});try{n=e.cssRules||e.rules}catch(a){}y.each(n,function(e){e.styleSheet?p(e.styleSheet,!0):e.selectorText&&y.each(e.selectorText.split(","),function(e){g.push(y.trim(e))})})}}y.each(f.contentCSS,function(e){n[e]=!0}),m||(m=function(e,t){return t||n[e]});try{y.each(e.styleSheets,function(e){p(e)})}catch(t){}return g},x=function(e,t){var n,r=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(t);if(r){var i=r[1],c=r[2].substr(1).split(".").join(" "),s=y.makeMap("a,img");return r[1]?(n={title:t},e.schema.getTextBlockElements()[i]?n.block=i:e.schema.getBlockElements()[i]||s[i.toLowerCase()]?n.selector=i:n.inline=i):r[2]&&(n={inline:"span",title:t.substr(1),classes:c}),!1!==o(e)?n.classes=c:n.attributes={"class":c},n}},T=function(e,t){return null===t||!1!==n(e)},c=x,t=function(h){h.on("renderFormatsMenu",function(e){var t,p={},c=a(r(h)),v=e.control,s=(t=i(h),y.map(t,function(e){return y.extend({},e,{original:e,selectors:{},filter:a(e.filter),item:{text:e.title,menu:[]}})})),o=function(e,t){if(f=e,g=p,!(T(h,m=t)?f in g:f in m.selectors)){u=e,a=p,T(h,l=t)?a[u]=!0:l.selectors[u]=!0;var n=(c=(i=h).plugins.importcss,s=e,((o=t)&&o.selector_converter?o.selector_converter:_(i)?_(i):function(){return x(i,s)}).call(c,s,o));if(n){var r=n.name||d.DOM.uniqueId();return h.formatter.register(r,n),y.extend({},v.settings.itemDefaults,{text:n.title,format:r})}}var i,c,s,o,u,l,a,f,m,g;return null};u(h)||v.items().remove(),y.each(f(h,e.doc||h.getDoc(),a(l(h))),function(n){if(-1===n.indexOf(".mce-")&&(!c||c(n))){var e=(r=s,i=n,y.grep(r,function(e){return!e.filter||e.filter(i)}));if(0<e.length)y.each(e,function(e){var t=o(n,e);t&&e.item.menu.push(t)});else{var t=o(n,null);t&&v.add(t)}}var r,i}),y.each(s,function(e){0<e.item.menu.length&&v.add(e.item)}),e.control.renderNew()})},s=function(t){return{convertSelectorToFormat:function(e){return c(t,e)}}};e.add("importcss",function(e){return t(e),s(e)})}();

/***/ }),

/***/ "09f9":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=tinymce.util.Tools.resolve("tinymce.Env"),v=tinymce.util.Tools.resolve("tinymce.util.Tools"),w=function(e){return e.getParam("media_scripts")},b=function(e){return e.getParam("audio_template_callback")},y=function(e){return e.getParam("video_template_callback")},n=function(e){return e.getParam("media_live_embeds",!0)},t=function(e){return e.getParam("media_filter_html",!0)},s=function(e){return e.getParam("media_url_resolver")},m=function(e){return e.getParam("media_alt_source",!0)},d=function(e){return e.getParam("media_poster",!0)},h=function(e){return e.getParam("media_dimensions",!0)},p=tinymce.util.Tools.resolve("tinymce.html.SaxParser"),r=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),x=function(e,t){if(e)for(var r=0;r<e.length;r++)if(-1!==t.indexOf(e[r].filter))return e[r]},i=function(t){return function(e){return e?e.style[t].replace(/px$/,""):""}},a=function(i){return function(e,t){var r;e&&(e.style[i]=/^[0-9.]+$/.test(r=t)?r+"px":r)}},f={getMaxWidth:i("maxWidth"),getMaxHeight:i("maxHeight"),setMaxWidth:a("maxWidth"),setMaxHeight:a("maxHeight")},u=r.DOM,l=function(e){return u.getAttrib(e,"data-ephox-embed-iri")},j=function(e,t){return c=t,s=u.createFragment(c),""!==l(s.firstChild)?(o=t,n=u.createFragment(o).firstChild,{type:"ephox-embed-iri",source1:l(n),source2:"",poster:"",width:f.getMaxWidth(n),height:f.getMaxHeight(n)}):(i=e,r=t,p({validate:(a={},!1),allow_conditional_comments:!0,special:"script,noscript",start:function(e,t){if(a.source1||"param"!==e||(a.source1=t.map.movie),"iframe"!==e&&"object"!==e&&"embed"!==e&&"video"!==e&&"audio"!==e||(a.type||(a.type=e),a=v.extend(t.map,a)),"script"===e){var r=x(i,t.map.src);if(!r)return;a={type:"script",source1:t.map.src,width:r.width,height:r.height}}"source"===e&&(a.source1?a.source2||(a.source2=t.map.src):a.source1=t.map.src),"img"!==e||a.poster||(a.poster=t.map.src)}}).parse(r),a.source1=a.source1||a.src||a.data,a.source2=a.source2||"",a.poster=a.poster||"",a);var i,r,a,o,n,c,s},g=tinymce.util.Tools.resolve("tinymce.util.Promise"),M=function(e){var t={mp3:"audio/mpeg",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"}[e.toLowerCase().split(".").pop()];return t||""},_=tinymce.util.Tools.resolve("tinymce.html.Writer"),C=tinymce.util.Tools.resolve("tinymce.html.Schema"),S=r.DOM,F=function(e,t){var r,i,a,o;for(r in t)if(a=""+t[r],e.map[r])for(i=e.length;i--;)(o=e[i]).name===r&&(a?(e.map[r]=a,o.value=a):(delete e.map[r],e.splice(i,1)));else a&&(e.push({name:r,value:a}),e.map[r]=a)},k=function(e,t){var r,i,a=S.createFragment(e).firstChild;return f.setMaxWidth(a,t.width),f.setMaxHeight(a,t.height),r=a.outerHTML,i=_(),p(i).parse(r),i.getContent()},A=function(e,t,r){return u=e,l=S.createFragment(u),""!==S.getAttrib(l.firstChild,"data-ephox-embed-iri")?k(e,t):(i=e,a=t,o=r,c=_(),p({validate:!1,allow_conditional_comments:!(s=0),special:"script,noscript",comment:function(e){c.comment(e)},cdata:function(e){c.cdata(e)},text:function(e,t){c.text(e,t)},start:function(e,t,r){switch(e){case"video":case"object":case"embed":case"img":case"iframe":a.height!==undefined&&a.width!==undefined&&F(t,{width:a.width,height:a.height})}if(o)switch(e){case"video":F(t,{poster:a.poster,src:""}),a.source2&&F(t,{src:""});break;case"iframe":F(t,{src:a.source1});break;case"source":if(++s<=2&&(F(t,{src:a["source"+s],type:a["source"+s+"mime"]}),!a["source"+s]))return;break;case"img":if(!a.poster)return;n=!0}c.start(e,t,r)},end:function(e){if("video"===e&&o)for(var t=1;t<=2;t++)if(a["source"+t]){var r=[];r.map={},s<t&&(F(r,{src:a["source"+t],type:a["source"+t+"mime"]}),c.start("source",r,!0))}if(a.poster&&"object"===e&&o&&!n){var i=[];i.map={},F(i,{src:a.poster,width:a.width,height:a.height}),c.start("img",i,!0)}c.end(e)}},C({})).parse(i),c.getContent());var i,a,o,n,c,s,u,l},N=[{regex:/youtu\.be\/([\w\-_\?&=.]+)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$2?$4",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$2?title=0&amp;byline=0",allowFullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'//maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:!0},{regex:/dai\.ly\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:!0}],c=function(r,e){var i=v.extend({},e);if(!i.source1&&(v.extend(i,j(w(r),i.embed)),!i.source1))return"";i.source2||(i.source2=""),i.poster||(i.poster=""),i.source1=r.convertURL(i.source1,"source"),i.source2=r.convertURL(i.source2,"source"),i.source1mime=M(i.source1),i.source2mime=M(i.source2),i.poster=r.convertURL(i.poster,"poster");var t,a,o=(t=i.source1,0<(a=N.filter(function(e){return e.regex.test(t)})).length?v.extend({},a[0],{url:function(e,t){for(var r=e.regex.exec(t),i=e.url,a=function(e){i=i.replace("$"+e,function(){return r[e]?r[e]:""})},o=0;o<r.length;o++)a(o);return i.replace(/\?$/,"")}(a[0],t)}):null);if(o&&(i.source1=o.url,i.type=o.type,i.allowFullscreen=o.allowFullscreen,i.width=i.width||o.w,i.height=i.height||o.h),i.embed)return A(i.embed,i,!0);var n=x(w(r),i.source1);n&&(i.type="script",i.width=n.width,i.height=n.height);var c,s,u,l,m,d,h,p,f=b(r),g=y(r);return i.width=i.width||300,i.height=i.height||150,v.each(i,function(e,t){i[t]=r.dom.encode(e)}),"iframe"===i.type?(p=(h=i).allowFullscreen?' allowFullscreen="1"':"",'<iframe src="'+h.source1+'" width="'+h.width+'" height="'+h.height+'"'+p+"></iframe>"):"application/x-shockwave-flash"===i.source1mime?(d='<object data="'+(m=i).source1+'" width="'+m.width+'" height="'+m.height+'" type="application/x-shockwave-flash">',m.poster&&(d+='<img src="'+m.poster+'" width="'+m.width+'" height="'+m.height+'" />'),d+="</object>"):-1!==i.source1mime.indexOf("audio")?(u=i,(l=f)?l(u):'<audio controls="controls" src="'+u.source1+'">'+(u.source2?'\n<source src="'+u.source2+'"'+(u.source2mime?' type="'+u.source2mime+'"':"")+" />\n":"")+"</audio>"):"script"===i.type?'<script src="'+i.source1+'"><\/script>':(c=i,(s=g)?s(c):'<video width="'+c.width+'" height="'+c.height+'"'+(c.poster?' poster="'+c.poster+'"':"")+' controls="controls">\n<source src="'+c.source1+'"'+(c.source1mime?' type="'+c.source1mime+'"':"")+" />\n"+(c.source2?'<source src="'+c.source2+'"'+(c.source2mime?' type="'+c.source2mime+'"':"")+" />\n":"")+"</video>")},O={},P=function(t){return function(e){return c(t,e)}},T=function(e,t){var r,i,a,o,n,c=s(e);return c?(a=t,o=P(e),n=c,new g(function(t,e){var r=function(e){return e.html&&(O[a.source1]=e),t({url:a.source1,html:e.html?e.html:o(a)})};O[a.source1]?r(O[a.source1]):n({url:a.source1},r,e)})):(r=t,i=P(e),new g(function(e){e({html:i(r),url:r.source1})}))},$=function(e){return O.hasOwnProperty(e)},z=function(e,t){e.state.set("oldVal",e.value()),t.state.set("oldVal",t.value())},L=function(e,t){var r=e.find("#width")[0],i=e.find("#height")[0],a=e.find("#constrain")[0];r&&i&&a&&t(r,i,a.checked())},H=function(e,t,r){var i=e.state.get("oldVal"),a=t.state.get("oldVal"),o=e.value(),n=t.value();r&&i&&a&&o&&n&&(o!==i?(n=Math.round(o/i*n),isNaN(n)||t.value(n)):(o=Math.round(n/a*o),isNaN(o)||e.value(o))),z(e,t)},W=function(e){L(e,H)},J=function(e){var t=function(){e(function(e){W(e)})};return{type:"container",label:"Dimensions",layout:"flex",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:5,onchange:t,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:5,onchange:t,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}},R=function(e){L(e,z)},D=W,E=o.ie&&o.ie<=8?"onChange":"onInput",I=function(r){return function(e){var t=e&&e.msg?"Media embed handler error: "+e.msg:"Media embed handler threw unknown error.";r.notificationManager.open({type:"error",text:t})}},U=function(a,o){return function(e){var t=e.html,r=a.find("#embed")[0],i=v.extend(j(w(o),t),{source1:e.url});a.fromJSON(i),r&&(r.value(t),D(a))}},V=function(e,t){var r=e.dom.select("img[data-mce-object]");e.insertContent(t),function(e,t){var r,i,a=e.dom.select("img[data-mce-object]");for(r=0;r<t.length;r++)for(i=a.length-1;0<=i;i--)t[r]===a[i]&&a.splice(i,1);e.selection.select(a[0])}(e,r),e.nodeChanged()},B=function(i){var a,t,e,r,o,n=[{name:"source1",type:"filepicker",filetype:"media",size:40,autofocus:!0,label:"Source",onpaste:function(){setTimeout(function(){T(i,a.toJSON()).then(U(a,i))["catch"](I(i))},1)},onchange:function(e){var r,t;T(i,a.toJSON()).then(U(a,i))["catch"](I(i)),r=a,t=e.meta,v.each(t,function(e,t){r.find("#"+t).value(e)})},onbeforecall:function(e){e.meta=a.toJSON()}}],c=[];if(m(i)&&c.push({name:"source2",type:"filepicker",filetype:"media",size:40,label:"Alternative source"}),d(i)&&c.push({name:"poster",type:"filepicker",filetype:"image",size:40,label:"Poster"}),h(i)){var s=J(function(e){e(a),t=a.toJSON(),a.find("#embed").value(A(t.embed,t))});n.push(s)}r=(e=i).selection.getNode(),o=r.getAttribute("data-ephox-embed-iri"),t=o?{source1:o,"data-ephox-embed-iri":o,width:f.getMaxWidth(r),height:f.getMaxHeight(r)}:r.getAttribute("data-mce-object")?j(w(e),e.serializer.serialize(r,{selection:!0})):{};var u={id:"mcemediasource",type:"textbox",flex:1,name:"embed",value:function(e){var t=e.selection.getNode();if(t.getAttribute("data-mce-object")||t.getAttribute("data-ephox-embed-iri"))return e.selection.getContent()}(i),multiline:!0,rows:5,label:"Source"};u[E]=function(){t=v.extend({},j(w(i),this.value())),this.parent().parent().fromJSON(t)};var l=[{title:"General",type:"form",items:n},{title:"Embed",type:"container",layout:"flex",direction:"column",align:"stretch",padding:10,spacing:10,items:[{type:"label",text:"Paste your embed code below:",forId:"mcemediasource"},u]}];0<c.length&&l.push({title:"Advanced",type:"form",items:c}),a=i.windowManager.open({title:"Insert/edit media",data:t,bodyType:"tabpanel",body:l,onSubmit:function(){var t,e;D(a),t=i,(e=a.toJSON()).embed=A(e.embed,e),e.embed&&$(e.source1)?V(t,e.embed):T(t,e).then(function(e){V(t,e.html)})["catch"](I(t))}}),R(a)},G=function(e){return{showDialog:function(){B(e)}}},q=function(e){e.addCommand("mceMedia",function(){B(e)})},K=tinymce.util.Tools.resolve("tinymce.html.Node"),Q=function(a,e){if(!1===t(a))return e;var o,n=_();return p({validate:!1,allow_conditional_comments:!1,special:"script,noscript",comment:function(e){n.comment(e)},cdata:function(e){n.cdata(e)},text:function(e,t){n.text(e,t)},start:function(e,t,r){if(o=!0,"script"!==e&&"noscript"!==e){for(var i=0;i<t.length;i++){if(0===t[i].name.indexOf("on"))return;"style"===t[i].name&&(t[i].value=a.dom.serializeStyle(a.dom.parseStyle(t[i].value),e))}n.start(e,t,r),o=!1}},end:function(e){o||n.end(e)}},C({})).parse(e),n.getContent()},X=function(e,t){var r,i=t.name;return(r=new K("img",1)).shortEnded=!0,Z(e,t,r),r.attr({width:t.attr("width")||"300",height:t.attr("height")||("audio"===i?"30":"150"),style:t.attr("style"),src:o.transparentSrc,"data-mce-object":i,"class":"mce-object mce-object-"+i}),r},Y=function(e,t){var r,i,a,o=t.name;return(r=new K("span",1)).attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":o,"class":"mce-preview-object mce-object-"+o}),Z(e,t,r),(i=new K(o,1)).attr({src:t.attr("src"),allowfullscreen:t.attr("allowfullscreen"),style:t.attr("style"),"class":t.attr("class"),width:t.attr("width"),height:t.attr("height"),frameborder:"0"}),(a=new K("span",1)).attr("class","mce-shim"),r.append(i),r.append(a),r},Z=function(e,t,r){var i,a,o,n,c;for(n=(o=t.attributes).length;n--;)i=o[n].name,a=o[n].value,"width"!==i&&"height"!==i&&"style"!==i&&("data"!==i&&"src"!==i||(a=e.convertURL(a,i)),r.attr("data-mce-p-"+i,a));(c=t.firstChild&&t.firstChild.value)&&(r.attr("data-mce-html",escape(Q(e,c))),r.firstChild=null)},ee=function(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri"))return!0;return!1},te=function(a){return function(e){for(var t,r,i=e.length;i--;)(t=e[i]).parent&&(t.parent.attr("data-mce-object")||("script"!==t.name||(r=x(w(a),t.attr("src"))))&&(r&&(r.width&&t.attr("width",r.width.toString()),r.height&&t.attr("height",r.height.toString())),"iframe"===t.name&&n(a)&&o.ceFalse?ee(t)||t.replace(Y(a,t)):ee(t)||t.replace(X(a,t))))}},re=function(d){d.on("preInit",function(){var t=d.schema.getSpecialElements();v.each("video audio iframe object".split(" "),function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")});var r=d.schema.getBoolAttrs();v.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){r[e]={}}),d.parser.addNodeFilter("iframe,video,audio,object,embed,script",te(d)),d.serializer.addAttributeFilter("data-mce-object",function(e,t){for(var r,i,a,o,n,c,s,u,l=e.length;l--;)if((r=e[l]).parent){for(s=r.attr(t),i=new K(s,1),"audio"!==s&&"script"!==s&&((u=r.attr("class"))&&-1!==u.indexOf("mce-preview-object")?i.attr({width:r.firstChild.attr("width"),height:r.firstChild.attr("height")}):i.attr({width:r.attr("width"),height:r.attr("height")})),i.attr({style:r.attr("style")}),a=(o=r.attributes).length;a--;){var m=o[a].name;0===m.indexOf("data-mce-p-")&&i.attr(m.substr(11),o[a].value)}"script"===s&&i.attr("type","text/javascript"),(n=r.attr("data-mce-html"))&&((c=new K("#text",3)).raw=!0,c.value=Q(d,unescape(n)),i.append(c)),r.replace(i)}})}),d.on("setContent",function(){d.$("span.mce-preview-object").each(function(e,t){var r=d.$(t);0===r.find("span.mce-shim",t).length&&r.append('<span class="mce-shim"></span>')})})},ie=function(e){e.on("ResolveName",function(e){var t;1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)})},ae=function(t){t.on("click keyup",function(){var e=t.selection.getNode();e&&t.dom.hasClass(e,"mce-preview-object")&&t.dom.getAttrib(e,"data-mce-selected")&&e.setAttribute("data-mce-selected","2")}),t.on("ObjectSelected",function(e){var t=e.target.getAttribute("data-mce-object");"audio"!==t&&"script"!==t||e.preventDefault()}),t.on("objectResized",function(e){var t,r=e.target;r.getAttribute("data-mce-object")&&(t=r.getAttribute("data-mce-html"))&&(t=unescape(t),r.setAttribute("data-mce-html",escape(A(t,{width:e.width,height:e.height}))))})},oe=function(e){e.addButton("media",{tooltip:"Insert/edit media",cmd:"mceMedia",stateSelector:["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"]}),e.addMenuItem("media",{icon:"media",text:"Media",cmd:"mceMedia",context:"insert",prependToContext:!0})};e.add("media",function(e){return q(e),oe(e),ie(e),re(e),ae(e),G(e)})}();

/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0d6f":
/***/ (function(module, exports) {

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.util.VK"),e=function(t){return t.target_list},o=function(t){return t.rel_list},i=function(t){return t.link_class_list},p=function(t){return"boolean"==typeof t.link_assume_external_targets&&t.link_assume_external_targets},a=function(t){return"boolean"==typeof t.link_context_toolbar&&t.link_context_toolbar},r=function(t){return t.link_list},k=function(t){return"string"==typeof t.default_link_target},y=function(t){return t.default_link_target},b=e,_=function(t,e){t.settings.target_list=e},w=function(t){return!1!==e(t)},T=o,C=function(t){return o(t)!==undefined},M=i,O=function(t){return i(t)!==undefined},R=function(t){return!1!==t.link_title},N=function(t){return"boolean"==typeof t.allow_unsafe_link_target&&t.allow_unsafe_link_target},l=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),u=tinymce.util.Tools.resolve("tinymce.Env"),c=function(t){if(!u.ie||10<u.ie){var e=document.createElement("a");e.target="_blank",e.href=t,e.rel="noreferrer noopener";var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r=e,a=n,document.body.appendChild(r),r.dispatchEvent(a),document.body.removeChild(r)}else{var o=window.open("","_blank");if(o){o.opener=null;var i=o.document;i.open(),i.write('<meta http-equiv="refresh" content="0; url='+l.DOM.encode(t)+'">'),i.close()}}var r,a},A=tinymce.util.Tools.resolve("tinymce.util.Tools"),s=function(t,e){var n,o,i=["noopener"],r=t?t.split(/\s+/):[],a=function(t){return t.filter(function(t){return-1===A.inArray(i,t)})};return(r=e?(n=a(n=r)).length?n.concat(i):i:a(r)).length?(o=r,A.trim(o.sort().join(" "))):null},f=function(t,e){return e=e||t.selection.getNode(),m(e)?t.dom.select("a[href]",e)[0]:t.dom.getParent(e,"a[href]")},d=function(t){return t&&"A"===t.nodeName&&t.href},m=function(t){return t&&"FIGURE"===t.nodeName&&/\bimage\b/i.test(t.className)},v=function(t,e){var n,o;(o=t.dom.select("img",e)[0])&&(n=t.dom.getParents(o,"a[href]",e)[0])&&(n.parentNode.insertBefore(o,n),t.dom.remove(n))},g=function(t,e,n){var o,i;(i=t.dom.select("img",e)[0])&&(o=t.dom.create("a",n),i.parentNode.insertBefore(o,i),o.appendChild(i))},L=function(i,r){return function(o){i.undoManager.transact(function(){var t=i.selection.getNode(),e=f(i,t),n={href:o.href,target:o.target?o.target:null,rel:o.rel?o.rel:null,"class":o["class"]?o["class"]:null,title:o.title?o.title:null};C(i.settings)||!1!==N(i.settings)||(n.rel=s(n.rel,"_blank"===n.target)),o.href===r.href&&(r.attach(),r={}),e?(i.focus(),o.hasOwnProperty("text")&&("innerText"in e?e.innerText=o.text:e.textContent=o.text),i.dom.setAttribs(e,n),i.selection.select(e),i.undoManager.add()):m(t)?g(i,t,n):o.hasOwnProperty("text")?i.insertContent(i.dom.createHTML("a",n,i.dom.encode(o.text))):i.execCommand("mceInsertLink",!1,n)})}},P=function(e){return function(){e.undoManager.transact(function(){var t=e.selection.getNode();m(t)?v(e,t):e.execCommand("unlink")})}},h=d,x=function(t){return 0<A.grep(t,d).length},E=function(t){return!(/</.test(t)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(t)||-1===t.indexOf("href=")))},S=f,I=function(t,e){var n=e?e.innerText||e.textContent:t.getContent({format:"text"});return n.replace(/\uFEFF/g,"")},K=s,U=tinymce.util.Tools.resolve("tinymce.util.Delay"),D=tinymce.util.Tools.resolve("tinymce.util.XHR"),B={},F=function(t,o,e){var i=function(t,n){return n=n||[],A.each(t,function(t){var e={text:t.text||t.title};t.menu?e.menu=i(t.menu):(e.value=t.value,o&&o(e)),n.push(e)}),n};return i(t,e||[])},q=function(e,t,n){var o=e.selection.getRng();U.setEditorTimeout(e,function(){e.windowManager.confirm(t,function(t){e.selection.setRng(o),n(t)})})},V=function(a,t){var e,l,o,u,n,i,r,c,s,f,d,m={},v=a.selection,g=a.dom,h=function(t){var e=o.find("#text");(!e.value()||t.lastControl&&e.value()===t.lastControl.text())&&e.value(t.control.text()),o.find("#href").value(t.control.value())},x=function(){l||!u||m.text||this.parent().parent().find("#text")[0].value(this.value())};u=E(v.getContent()),e=S(a),m.text=l=I(a.selection,e),m.href=e?g.getAttrib(e,"href"):"",e?m.target=g.getAttrib(e,"target"):k(a.settings)&&(m.target=y(a.settings)),(d=g.getAttrib(e,"rel"))&&(m.rel=d),(d=g.getAttrib(e,"class"))&&(m["class"]=d),(d=g.getAttrib(e,"title"))&&(m.title=d),u&&(n={name:"text",type:"textbox",size:40,label:"Text to display",onchange:function(){m.text=this.value()}}),t&&(i={type:"listbox",label:"Link list",values:F(t,function(t){t.value=a.convertURL(t.value||t.url,"href")},[{text:"None",value:""}]),onselect:h,value:a.convertURL(m.href,"href"),onPostRender:function(){i=this}}),w(a.settings)&&(b(a.settings)===undefined&&_(a,[{text:"None",value:""},{text:"New window",value:"_blank"}]),c={name:"target",type:"listbox",label:"Target",values:F(b(a.settings))}),C(a.settings)&&(r={name:"rel",type:"listbox",label:"Rel",values:F(T(a.settings),function(t){!1===N(a.settings)&&(t.value=K(t.value,"_blank"===m.target))})}),O(a.settings)&&(s={name:"class",type:"listbox",label:"Class",values:F(M(a.settings),function(t){t.value&&(t.textStyle=function(){return a.formatter.getCssText({inline:"a",classes:[t.value]})})})}),R(a.settings)&&(f={name:"title",type:"textbox",label:"Title",value:m.title}),o=a.windowManager.open({title:"Insert link",data:m,body:[{name:"href",type:"filepicker",filetype:"file",size:40,autofocus:!0,label:"Url",onchange:function(t){var e=t.meta||{};i&&i.value(a.convertURL(this.value(),"href")),A.each(t.meta,function(t,e){var n=o.find("#"+e);"text"===e?0===l.length&&(n.value(t),m.text=t):n.value(t)}),e.attach&&(B={href:this.value(),attach:e.attach}),e.text||x.call(this)},onkeyup:x,onpaste:x,onbeforecall:function(t){t.meta=o.toJSON()}},n,f,function(n){var o=[];if(A.each(a.dom.select("a:not([href])"),function(t){var e=t.name||t.id;e&&o.push({text:e,value:"#"+e,selected:-1!==n.indexOf("#"+e)})}),o.length)return o.unshift({text:"None",value:""}),{name:"anchor",type:"listbox",label:"Anchors",values:o,onselect:h}}(m.href),i,r,c,s],onSubmit:function(t){var e=p(a.settings),n=L(a,B),o=P(a),i=A.extend({},m,t.data),r=i.href;r?(u&&i.text!==l||delete i.text,0<r.indexOf("@")&&-1===r.indexOf("//")&&-1===r.indexOf("mailto:")?q(a,"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",function(t){t&&(i.href="mailto:"+r),n(i)}):!0===e&&!/^\w+:/i.test(r)||!1===e&&/^\s*www[\.|\d\.]/i.test(r)?q(a,"The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(t){t&&(i.href="http://"+r),n(i)}):n(i)):o()}})},z=function(t){var e,n,o;n=V,"string"==typeof(o=r((e=t).settings))?D.send({url:o,success:function(t){n(e,JSON.parse(t))}}):"function"==typeof o?o(function(t){n(e,t)}):n(e,o)},H=function(t,e){return t.dom.getParent(e,"a[href]")},J=function(t){return H(t,t.selection.getStart())},$=function(t,e){if(e){var n=(i=e).getAttribute("data-mce-href")||i.getAttribute("href");if(/^#/.test(n)){var o=t.$(n);o.length&&t.selection.scrollIntoView(o[0],!0)}else c(e.href)}var i},j=function(t){return function(){z(t)}},G=function(t){return function(){$(t,J(t))}},X=function(r){return function(t){var e,n,o,i;return!!(a(r.settings)&&(!(i=r.plugins.contextmenu)||!i.isContextMenuVisible())&&h(t)&&3===(o=(n=(e=r.selection).getRng()).startContainer).nodeType&&e.isCollapsed()&&0<n.startOffset&&n.startOffset<o.data.length)}},Q=function(o){o.on("click",function(t){var e=H(o,t.target);e&&n.metaKeyPressed(t)&&(t.preventDefault(),$(o,e))}),o.on("keydown",function(t){var e,n=J(o);n&&13===t.keyCode&&!0===(e=t).altKey&&!1===e.shiftKey&&!1===e.ctrlKey&&!1===e.metaKey&&(t.preventDefault(),$(o,n))})},W=function(n){return function(){var e=this;n.on("nodechange",function(t){e.active(!n.readonly&&!!S(n,t.element))})}},Y=function(n){return function(){var e=this,t=function(t){x(t.parents)?e.show():e.hide()};x(n.dom.getParents(n.selection.getStart()))||e.hide(),n.on("nodechange",t),e.on("remove",function(){n.off("nodechange",t)})}},Z=function(t){t.addCommand("mceLink",j(t))},tt=function(t){t.addShortcut("Meta+K","",j(t))},et=function(t){t.addButton("link",{active:!1,icon:"link",tooltip:"Insert/edit link",onclick:j(t),onpostrender:W(t)}),t.addButton("unlink",{active:!1,icon:"unlink",tooltip:"Remove link",onclick:P(t),onpostrender:W(t)}),t.addContextToolbar&&t.addButton("openlink",{icon:"newtab",tooltip:"Open link",onclick:G(t)})},nt=function(t){t.addMenuItem("openlink",{text:"Open link",icon:"newtab",onclick:G(t),onPostRender:Y(t),prependToContext:!0}),t.addMenuItem("link",{icon:"link",text:"Link",shortcut:"Meta+K",onclick:j(t),stateSelector:"a[href]",context:"insert",prependToContext:!0}),t.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onclick:P(t),stateSelector:"a[href]"})},ot=function(t){t.addContextToolbar&&t.addContextToolbar(X(t),"openlink | link unlink")};t.add("link",function(t){et(t),nt(t),ot(t),Q(t),Z(t),tt(t)})}();

/***/ }),

/***/ "16bd":
/***/ (function(module, exports) {

!function(){"use strict";var l=function(t){var e=t,n=function(){return e};return{get:n,set:function(t){e=t},clone:function(){return l(n())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(t){return!(!/(^|[ ,])powerpaste([, ]|$)/.test(t.settings.plugins)||!e.get("powerpaste")||("undefined"!=typeof window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),0))},s=function(t,e){return{clipboard:t,quirks:e}},f=function(t,e,n,r){return t.fire("PastePreProcess",{content:e,internal:n,wordContent:r})},d=function(t,e,n,r){return t.fire("PastePostProcess",{node:e,internal:n,wordContent:r})},u=function(t,e){return t.fire("PastePlainTextToggle",{state:e})},n=function(t,e){return t.fire("paste",{ieFake:e})},m={shouldPlainTextInform:function(t){return t.getParam("paste_plaintext_inform",!0)},shouldBlockDrop:function(t){return t.getParam("paste_block_drop",!1)},shouldPasteDataImages:function(t){return t.getParam("paste_data_images",!1)},shouldFilterDrop:function(t){return t.getParam("paste_filter_drop",!0)},getPreProcess:function(t){return t.getParam("paste_preprocess")},getPostProcess:function(t){return t.getParam("paste_postprocess")},getWebkitStyles:function(t){return t.getParam("paste_webkit_styles")},shouldRemoveWebKitStyles:function(t){return t.getParam("paste_remove_styles_if_webkit",!0)},shouldMergeFormats:function(t){return t.getParam("paste_merge_formats",!0)},isSmartPasteEnabled:function(t){return t.getParam("smart_paste",!0)},isPasteAsTextEnabled:function(t){return t.getParam("paste_as_text",!1)},getRetainStyleProps:function(t){return t.getParam("paste_retain_style_properties")},getWordValidElements:function(t){return t.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody")},shouldConvertWordFakeLists:function(t){return t.getParam("paste_convert_word_fake_lists",!0)},shouldUseDefaultFilters:function(t){return t.getParam("paste_enable_default_filters",!0)}},r=function(t,e,n){var r,o,i;"text"===e.pasteFormat.get()?(e.pasteFormat.set("html"),u(t,!1)):(e.pasteFormat.set("text"),u(t,!0),i=t,!1===n.get()&&m.shouldPlainTextInform(i)&&(o="Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.",(r=t).notificationManager.open({text:r.translate(o),type:"info"}),n.set(!0))),t.focus()},c=function(t,n,e){t.addCommand("mceTogglePlainTextPaste",function(){r(t,n,e)}),t.addCommand("mceInsertClipboardContent",function(t,e){e.content&&n.pasteHtml(e.content,e.internal),e.text&&n.pasteText(e.text)})},v=tinymce.util.Tools.resolve("tinymce.Env"),h=tinymce.util.Tools.resolve("tinymce.util.Delay"),y=tinymce.util.Tools.resolve("tinymce.util.Tools"),o=tinymce.util.Tools.resolve("tinymce.util.VK"),t="x-tinymce/html",i="\x3c!-- "+t+" --\x3e",g=function(t){return i+t},p=function(t){return t.replace(i,"")},b=function(t){return-1!==t.indexOf(i)},x=function(){return t},P=tinymce.util.Tools.resolve("tinymce.html.Entities"),w=function(t){return t.replace(/\r?\n/g,"<br>")},_=function(t,e,n){var r=t.split(/\n\n/),o=function(t,e){var n,r=[],o="<"+t;if("object"==typeof e){for(n in e)e.hasOwnProperty(n)&&r.push(n+'="'+P.encodeAllRaw(e[n])+'"');r.length&&(o+=" "+r.join(" "))}return o+">"}(e,n),i="</"+e+">",a=y.map(r,function(t){return t.split(/\n/).join("<br />")});return 1===a.length?a[0]:y.map(a,function(t){return o+t+i}).join("")},D=function(t){return!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(t)},T=function(t,e,n){return e?_(t,e,n):w(t)},C=tinymce.util.Tools.resolve("tinymce.html.DomParser"),k=tinymce.util.Tools.resolve("tinymce.html.Node"),S=tinymce.util.Tools.resolve("tinymce.html.Schema"),O=tinymce.util.Tools.resolve("tinymce.html.Serializer");function R(e,t){return y.each(t,function(t){e=t.constructor===RegExp?e.replace(t,""):e.replace(t[0],t[1])}),e}var F={filter:R,innerText:function(e){var n=S(),r=C({},n),o="",i=n.getShortEndedElements(),a=y.makeMap("script noscript style textarea video audio iframe object"," "),s=n.getBlockElements();return e=R(e,[/<!\[[^\]]+\]>/g]),function t(e){var n=e.name,r=e;if("br"!==n){if("wbr"!==n)if(i[n]&&(o+=" "),a[n])o+=" ";else{if(3===e.type&&(o+=e.value),!e.shortEnded&&(e=e.firstChild))for(;t(e),e=e.next;);s[n]&&r.next&&(o+="\n","p"===n&&(o+="\n"))}}else o+="\n"}(r.parse(e)),o},trimHtml:function(t){return t=R(t,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(t,e,n){return e||n?"\xa0":" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])},createIdGenerator:function(t){var e=0;return function(){return t+e++}},isMsEdge:function(){return-1!==navigator.userAgent.indexOf(" Edge/")}};function E(e){var n,t;return t=[/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],e=e.replace(/^[\u00a0 ]+/,""),y.each(t,function(t){if(t.test(e))return!(n=!0)}),n}function A(t){var i,a,s=1;function n(t){var e="";if(3===t.type)return t.value;if(t=t.firstChild)for(;e+=n(t),t=t.next;);return e}function u(t,e){if(3===t.type&&e.test(t.value))return t.value=t.value.replace(e,""),!1;if(t=t.firstChild)do{if(!u(t,e))return!1}while(t=t.next);return!0}function e(e,n,r){var o=e._listLevel||s;o!==s&&(o<s?i&&(i=i.parent.parent):(a=i,i=null)),i&&i.name===n?i.append(e):(a=a||i,i=new k(n,1),1<r&&i.attr("start",""+r),e.wrap(i)),e.name="li",s<o&&a&&a.lastChild.append(i),s=o,function t(e){if(e._listIgnore)e.remove();else if(e=e.firstChild)for(;t(e),e=e.next;);}(e),u(e,/^\u00a0+/),u(e,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),u(e,/^\u00a0+/)}for(var r=[],o=t.firstChild;null!=o;)if(r.push(o),null!==(o=o.walk()))for(;void 0!==o&&o.parent!==t;)o=o.walk();for(var l=0;l<r.length;l++)if("p"===(t=r[l]).name&&t.firstChild){var c=n(t);if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(c)){e(t,"ul");continue}if(E(c)){var f=/([0-9]+)\./.exec(c),d=1;f&&(d=parseInt(f[1],10)),e(t,"ol",d);continue}if(t._listLevel){e(t,"ul",1);continue}i=null}else a=i,i=null}function I(n,r,o,i){var a,s={},t=n.dom.parseStyle(i);return y.each(t,function(t,e){switch(e){case"mso-list":(a=/\w+ \w+([0-9]+)/i.exec(i))&&(o._listLevel=parseInt(a[1],10)),/Ignore/i.test(t)&&o.firstChild&&(o._listIgnore=!0,o.firstChild._listIgnore=!0);break;case"horiz-align":e="text-align";break;case"vert-align":e="vertical-align";break;case"font-color":case"mso-foreground":e="color";break;case"mso-background":case"mso-highlight":e="background";break;case"font-weight":case"font-style":return void("normal"!==t&&(s[e]=t));case"mso-element":if(/^(comment|comment-list)$/i.test(t))return void o.remove()}0!==e.indexOf("mso-comment")?0!==e.indexOf("mso-")&&("all"===m.getRetainStyleProps(n)||r&&r[e])&&(s[e]=t):o.remove()}),/(bold)/i.test(s["font-weight"])&&(delete s["font-weight"],o.wrap(new k("b",1))),/(italic)/i.test(s["font-style"])&&(delete s["font-style"],o.wrap(new k("i",1))),(s=n.dom.serializeStyle(s,o.name))||null}var M,B,H,j,L,N={preProcess:function(t,e){return m.shouldUseDefaultFilters(t)?function(r,t){var e,o;(e=m.getRetainStyleProps(r))&&(o=y.makeMap(e.split(/[, ]/))),t=F.filter(t,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,"\xa0"],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(t,e){return 0<e.length?e.replace(/./," ").slice(Math.floor(e.length/2)).split("").join("\xa0"):""}]]);var n=m.getWordValidElements(r),i=S({valid_elements:n,valid_children:"-li[p]"});y.each(i.elements,function(t){t.attributes["class"]||(t.attributes["class"]={},t.attributesOrder.push("class")),t.attributes.style||(t.attributes.style={},t.attributesOrder.push("style"))});var a=C({},i);a.addAttributeFilter("style",function(t){for(var e,n=t.length;n--;)(e=t[n]).attr("style",I(r,o,e,e.attr("style"))),"span"===e.name&&e.parent&&!e.attributes.length&&e.unwrap()}),a.addAttributeFilter("class",function(t){for(var e,n,r=t.length;r--;)n=(e=t[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&e.remove(),e.attr("class",null)}),a.addNodeFilter("del",function(t){for(var e=t.length;e--;)t[e].remove()}),a.addNodeFilter("a",function(t){for(var e,n,r,o=t.length;o--;)if(n=(e=t[o]).attr("href"),r=e.attr("name"),n&&-1!==n.indexOf("#_msocom_"))e.remove();else if(n&&0===n.indexOf("file://")&&(n=n.split("#")[1])&&(n="#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){e.unwrap();continue}e.attr({href:n,name:r})}else e.unwrap()});var s=a.parse(t);return m.shouldConvertWordFakeLists(r)&&A(s),t=O({validate:r.settings.validate},i).serialize(s)}(t,e):e},isWordContent:function(t){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(t)||/class="OutlineElement/.test(t)||/id="?docs\-internal\-guid\-/.test(t)}},$=function(t,e){return{content:t,cancelled:e}},W=function(t,e,n,r){var o,i,a,s,u,l,c=f(t,e,n,r);return t.hasEventListeners("PastePostProcess")&&!c.isDefaultPrevented()?(o=t,i=c.content,a=n,s=r,u=o.dom.create("div",{style:"display:none"},i),l=d(o,u,a,s),$(l.node.innerHTML,l.isDefaultPrevented())):$(c.content,c.isDefaultPrevented())},z=function(t,e,n){var r=N.isWordContent(e),o=r?N.preProcess(t,e):e;return W(t,o,n,r)},U=function(t,e){var n,r;return t.insertContent((n=e,r=t.dom.create("body",{},n),y.each(r.querySelectorAll("meta"),function(t){return t.parentNode.removeChild(t)}),r.innerHTML),{merge:m.shouldMergeFormats(t),paste:!0}),!0},V=function(t){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(t)},q=function(t){return V(t)&&/.(gif|jpe?g|png)$/.test(t)},K=function(t,e,n){return!(!1!==t.selection.isCollapsed()||!V(e)||(o=e,i=n,(r=t).undoManager.extra(function(){i(r,o)},function(){r.execCommand("mceInsertLink",!1,o)}),0));var r,o,i},G=function(t,e,n){return!!q(e)&&(o=e,i=n,(r=t).undoManager.extra(function(){i(r,o)},function(){r.insertContent('<img src="'+o+'">')}),!0);var r,o,i},X=function(t,e){var n,r;!1===m.isSmartPasteEnabled(t)?U(t,e):(n=t,r=e,y.each([K,G,U],function(t){return!0!==t(n,r,U)}))},Y=function(t){return function(){return t}},Z=Y(!1),J=Y(!0),Q=Z,tt=J,et=function(){return nt},nt=(j={fold:function(t,e){return t()},is:Q,isSome:Q,isNone:tt,getOr:H=function(t){return t},getOrThunk:B=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:H,orThunk:B,map:et,ap:et,each:function(){},bind:et,flatten:et,exists:Q,forall:tt,filter:et,equals:M=function(t){return t.isNone()},equals_:M,toArray:function(){return[]},toString:Y("none()")},Object.freeze&&Object.freeze(j),j),rt=function(n){var t=function(){return n},e=function(){return o},r=function(t){return t(n)},o={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:tt,isNone:Q,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(t){return rt(t(n))},ap:function(t){return t.fold(et,function(t){return rt(t(n))})},each:function(t){t(n)},bind:r,flatten:t,exists:r,forall:r,filter:function(t){return t(n)?o:nt},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(Q,function(t){return e(n,t)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},ot={some:rt,none:et,from:function(t){return null===t||t===undefined?nt:rt(t)}},it=(L="function",function(t){return function(t){if(null===t)return"null";var e=typeof t;return"object"===e&&Array.prototype.isPrototypeOf(t)?"array":"object"===e&&String.prototype.isPrototypeOf(t)?"string":e}(t)===L}),at=function(t,e){for(var n=t.length,r=new Array(n),o=0;o<n;o++){var i=t[o];r[o]=e(i,o,t)}return r},st=function(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n,t)},ut=Array.prototype.slice,lt=it(Array.from)?Array.from:function(t){return ut.call(t)},ct=function(t){var n=ot.none(),e=[],r=function(t){o()?a(t):e.push(t)},o=function(){return n.isSome()},i=function(t){st(t,a)},a=function(e){n.each(function(t){setTimeout(function(){e(t)},0)})};return t(function(t){n=ot.some(t),i(e),e=[]}),{get:r,map:function(n){return ct(function(e){r(function(t){e(n(t))})})},isReady:o}},ft={nu:ct,pure:function(e){return ct(function(t){t(e)})}},dt=function(e){var t=function(t){var r;e((r=t,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this;setTimeout(function(){r.apply(n,t)},0)}))},n=function(){return ft.nu(t)};return{map:function(r){return dt(function(n){t(function(t){var e=r(t);n(e)})})},bind:function(n){return dt(function(e){t(function(t){n(t).get(e)})})},anonBind:function(n){return dt(function(e){t(function(t){n.get(e)})})},toLazy:n,toCached:function(){var e=null;return dt(function(t){null===e&&(e=n()),e.get(t)})},get:t}},mt={nu:dt,pure:function(e){return dt(function(t){t(e)})}},gt=function(a,t){return t(function(r){var o=[],i=0;0===a.length?r([]):st(a,function(t,e){var n;t.get((n=e,function(t){o[n]=t,++i>=a.length&&r(o)}))})})},pt=function(t,e){var n=at(t,e);return gt(n,mt.nu)},vt=function(t,e,n){var r=n||b(e),o=z(t,p(e),r);!1===o.cancelled&&X(t,o.content)},ht=function(t,e){e=t.dom.encode(e).replace(/\r\n/g,"\n"),e=T(e,t.settings.forced_root_block,t.settings.forced_root_block_attrs),vt(t,e,!1)},yt=function(t){var e={};if(t){if(t.getData){var n=t.getData("Text");n&&0<n.length&&-1===n.indexOf("data:text/mce-internal,")&&(e["text/plain"]=n)}if(t.types)for(var r=0;r<t.types.length;r++){var o=t.types[r];try{e[o]=t.getData(o)}catch(i){e[o]=""}}}return e},bt=function(t,e){return e in t&&0<t[e].length},xt=function(t){return bt(t,"text/html")||bt(t,"text/plain")},Pt=F.createIdGenerator("mceclip"),wt=function(e,t,n){var r,o,i,a,s="paste"===t.type?t.clipboardData:t.dataTransfer;if(e.settings.paste_data_images&&s){var u=(i=(o=s).items?at(lt(o.items),function(t){return t.getAsFile()}):[],a=o.files?lt(o.files):[],function(t,e){for(var n=[],r=0,o=t.length;r<o;r++){var i=t[r];e(i,r,t)&&n.push(i)}return n}(0<i.length?i:a,function(t){return/^image\/(jpeg|png|gif|bmp)$/.test(t.type)}));if(0<u.length)return t.preventDefault(),(r=u,pt(r,function(r){return mt.nu(function(t){var e=r.getAsFile?r.getAsFile():r,n=new window.FileReader;n.onload=function(){t({blob:e,uri:n.result})},n.readAsDataURL(e)})})).get(function(t){n&&e.selection.setRng(n),st(t,function(t){!function(t,e){var n,r,o,i,a,s,u,l=(n=e.uri,-1!==(r=n.indexOf(","))?n.substr(r+1):null),c=Pt(),f=t.settings.images_reuse_filename&&e.blob.name?(o=t,i=e.blob.name,(a=i.match(/([\s\S]+?)\.(?:jpeg|jpg|png|gif)$/i))?o.dom.encode(a[1]):null):c,d=new Image;if(d.src=e.uri,s=t.settings,u=d,!s.images_dataimg_filter||s.images_dataimg_filter(u)){var m,g=t.editorUpload.blobCache,p=void 0;(m=g.findFirst(function(t){return t.base64()===l}))?p=m:(p=g.create(c,e.blob,l,f),g.add(p)),vt(t,'<img src="'+p.blobUri()+'">',!1)}else vt(t,'<img src="'+e.uri+'">',!1)}(e,t)})}),!0}return!1},_t=function(t){return o.metaKeyPressed(t)&&86===t.keyCode||t.shiftKey&&45===t.keyCode},Dt=function(c,f,d){var m,g=0;function p(t,e,n,r){var o,i;bt(t,"text/html")?o=t["text/html"]:(o=f.getHtml(),r=r||b(o),f.isDefaultContent(o)&&(n=!0)),o=F.trimHtml(o),f.remove(),i=!1===r&&D(o),o.length&&!i||(n=!0),n&&(o=bt(t,"text/plain")&&i?t["text/plain"]:F.innerText(o)),f.isDefaultContent(o)?e||c.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):n?ht(c,o):vt(c,o,r)}c.on("keydown",function(t){function e(t){_t(t)&&!t.isDefaultPrevented()&&f.remove()}if(_t(t)&&!t.isDefaultPrevented()){if((m=t.shiftKey&&86===t.keyCode)&&v.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return;if(t.stopImmediatePropagation(),g=(new Date).getTime(),v.ie&&m)return t.preventDefault(),void n(c,!0);f.remove(),f.create(),c.once("keyup",e),c.once("paste",function(){c.off("keyup",e)})}}),c.on("paste",function(t){var e,n,r,o=(new Date).getTime(),i=(e=c,n=yt(t.clipboardData||e.getDoc().dataTransfer),F.isMsEdge()?y.extend(n,{"text/html":""}):n),a=(new Date).getTime()-o,s=(new Date).getTime()-g-a<1e3,u="text"===d.get()||m,l=bt(i,x());m=!1,t.isDefaultPrevented()||(r=t.clipboardData,-1!==navigator.userAgent.indexOf("Android")&&r&&r.items&&0===r.items.length)?f.remove():xt(i)||!wt(c,t,f.getLastRng()||c.selection.getRng())?(s||t.preventDefault(),!v.ie||s&&!t.ieFake||bt(i,"text/html")||(f.create(),c.dom.bind(f.getEl(),"paste",function(t){t.stopPropagation()}),c.getDoc().execCommand("Paste",!1,null),i["text/html"]=f.getHtml()),bt(i,"text/html")?(t.preventDefault(),l||(l=b(i["text/html"])),p(i,s,u,l)):h.setEditorTimeout(c,function(){p(i,s,u,l)},0)):f.remove()})},Tt=function(t){return v.ie&&t.inline?document.body:t.getBody()},Ct=function(e,t,n){var r;Tt(r=e)!==r.getBody()&&e.dom.bind(t,"paste keyup",function(t){Ot(e,n)||e.fire("paste")})},kt=function(t){return t.dom.get("mcepastebin")},St=function(t,e){return e===t},Ot=function(t,e){var n,r=kt(t);return(n=r)&&"mcepastebin"===n.id&&St(e,r.innerHTML)},Rt=function(a){var s=l(null),u="%MCEPASTEBIN%";return{create:function(){return e=s,n=u,o=(t=a).dom,i=t.getBody(),e.set(t.selection.getRng()),r=t.dom.add(Tt(t),"div",{id:"mcepastebin","class":"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n),(v.ie||v.gecko)&&o.setStyle(r,"left","rtl"===o.getStyle(i,"direction",!0)?65535:-65535),o.bind(r,"beforedeactivate focusin focusout",function(t){t.stopPropagation()}),Ct(t,r,n),r.focus(),void t.selection.select(r,!0);var t,e,n,r,o,i},remove:function(){return function(t,e){if(kt(t)){for(var n=void 0,r=e.get();n=t.dom.get("mcepastebin");)t.dom.remove(n),t.dom.unbind(n);r&&t.selection.setRng(r)}e.set(null)}(a,s)},getEl:function(){return kt(a)},getHtml:function(){return function(n){var e,t,r,o,i,a=function(t,e){t.appendChild(e),n.dom.remove(e,!0)};for(t=y.grep(Tt(n).childNodes,function(t){return"mcepastebin"===t.id}),e=t.shift(),y.each(t,function(t){a(e,t)}),r=(o=n.dom.select("div[id=mcepastebin]",e)).length-1;0<=r;r--)i=n.dom.create("div"),e.insertBefore(i,o[r]),a(i,o[r]);return e?e.innerHTML:""}(a)},getLastRng:function(){return s.get()},isDefault:function(){return Ot(a,u)},isDefaultContent:function(t){return St(u,t)}}},Ft=function(n,t){var e=Rt(n);return n.on("preInit",function(){return Dt(a=n,e,t),void a.parser.addNodeFilter("img",function(t,e,n){var r,o=function(t){t.attr("data-mce-object")||s===v.transparentSrc||t.remove()};if(!a.settings.paste_data_images&&(r=n).data&&!0===r.data.paste)for(var i=t.length;i--;)(s=t[i].attributes.map.src)&&(0===s.indexOf("webkit-fake-url")?o(t[i]):a.settings.allow_html_data_urls||0!==s.indexOf("data:")||o(t[i]))});var a,s}),{pasteFormat:t,pasteHtml:function(t,e){return vt(n,t,e)},pasteText:function(t){return ht(n,t)},pasteImageData:function(t,e){return wt(n,t,e)},getDataTransferItems:yt,hasHtmlOrText:xt,hasContentType:bt}},Et=function(){},At=function(t,e,n){if(r=t,!1!==v.iOS||r===undefined||"function"!=typeof r.setData||!0===F.isMsEdge())return!1;try{return t.clearData(),t.setData("text/html",e),t.setData("text/plain",n),t.setData(x(),e),!0}catch(o){return!1}var r},It=function(t,e,n,r){At(t.clipboardData,e.html,e.text)?(t.preventDefault(),r()):n(e.html,r)},Mt=function(s){return function(t,e){var n=g(t),r=s.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),o=s.dom.create("div",{contenteditable:"true"},n);s.dom.setStyles(r,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),r.appendChild(o),s.dom.add(s.getBody(),r);var i=s.selection.getRng();o.focus();var a=s.dom.createRng();a.selectNodeContents(o),s.selection.setRng(a),setTimeout(function(){s.selection.setRng(i),r.parentNode.removeChild(r),e()},0)}},Bt=function(t){return{html:t.selection.getContent({contextual:!0}),text:t.selection.getContent({format:"text"})}},Ht=function(t){return!t.selection.isCollapsed()||!!(e=t).dom.getParent(e.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",e.getBody());var e},jt=function(t){var e,n;t.on("cut",(e=t,function(t){Ht(e)&&It(t,Bt(e),Mt(e),function(){setTimeout(function(){e.execCommand("Delete")},0)})})),t.on("copy",(n=t,function(t){Ht(n)&&It(t,Bt(n),Mt(n),Et)}))},Lt=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),Nt=function(t,e){return Lt.getCaretRangeFromPoint(e.clientX,e.clientY,t.getDoc())},$t=function(t,e){t.focus(),t.selection.setRng(e)},Wt=function(a,s,u){m.shouldBlockDrop(a)&&a.on("dragend dragover draggesture dragdrop drop drag",function(t){t.preventDefault(),t.stopPropagation()}),m.shouldPasteDataImages(a)||a.on("drop",function(t){var e=t.dataTransfer;e&&e.files&&0<e.files.length&&t.preventDefault()}),a.on("drop",function(t){var e,n;if(n=Nt(a,t),!t.isDefaultPrevented()&&!u.get()){e=s.getDataTransferItems(t.dataTransfer);var r,o=s.hasContentType(e,x());if((s.hasHtmlOrText(e)&&(!(r=e["text/plain"])||0!==r.indexOf("file://"))||!s.pasteImageData(t,n))&&n&&m.shouldFilterDrop(a)){var i=e["mce-internal"]||e["text/html"]||e["text/plain"];i&&(t.preventDefault(),h.setEditorTimeout(a,function(){a.undoManager.transact(function(){e["mce-internal"]&&a.execCommand("Delete"),$t(a,n),i=F.trimHtml(i),e["text/html"]?s.pasteHtml(i,o):s.pasteText(i)})}))}}}),a.on("dragstart",function(t){u.set(!0)}),a.on("dragover dragend",function(t){m.shouldPasteDataImages(a)&&!1===u.get()&&(t.preventDefault(),$t(a,Nt(a,t))),"dragend"===t.type&&u.set(!1)})},zt=function(t){var e=t.plugins.paste,n=m.getPreProcess(t);n&&t.on("PastePreProcess",function(t){n.call(e,e,t)});var r=m.getPostProcess(t);r&&t.on("PastePostProcess",function(t){r.call(e,e,t)})};function Ut(e,n){e.on("PastePreProcess",function(t){t.content=n(e,t.content,t.internal,t.wordContent)})}function Vt(t,e){if(!N.isWordContent(e))return e;var n=[];y.each(t.schema.getBlockElements(),function(t,e){n.push(e)});var r=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");return e=F.filter(e,[[r,"$1"]]),e=F.filter(e,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function qt(t,e,n,r){if(r||n)return e;var l,o=m.getWebkitStyles(t);if(!1===m.shouldRemoveWebKitStyles(t)||"all"===o)return e;if(o&&(l=o.split(/[, ]/)),l){var c=t.dom,f=t.selection.getNode();e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,function(t,e,n,r){var o=c.parseStyle(c.decode(n)),i={};if("none"===l)return e+r;for(var a=0;a<l.length;a++){var s=o[l[a]],u=c.getStyle(f,l[a],!0);/color/.test(l[a])&&(s=c.toHex(s),u=c.toHex(u)),u!==s&&(i[l[a]]=s)}return(i=c.serializeStyle(i,"span"))?e+' style="'+i+'"'+r:e+r})}else e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return e=e.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,function(t,e,n,r){return e+' style="'+n+'"'+r})}function Kt(n,t){n.$("a",t).find("font,u").each(function(t,e){n.dom.remove(e,!0)})}var Gt=function(t){var e,n;v.webkit&&Ut(t,qt),v.ie&&(Ut(t,Vt),n=Kt,(e=t).on("PastePostProcess",function(t){n(e,t.node)}))},Xt=function(t,e,n){var r=n.control;r.active("text"===e.pasteFormat.get()),t.on("PastePlainTextToggle",function(t){r.active(t.state)})},Yt=function(t,e){var n=function(r){for(var o=[],t=1;t<arguments.length;t++)o[t-1]=arguments[t];return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=o.concat(t);return r.apply(null,n)}}(Xt,t,e);t.addButton("pastetext",{active:!1,icon:"pastetext",tooltip:"Paste as text",cmd:"mceTogglePlainTextPaste",onPostRender:n}),t.addMenuItem("pastetext",{text:"Paste as text",selectable:!0,active:e.pasteFormat,cmd:"mceTogglePlainTextPaste",onPostRender:n})};e.add("paste",function(t){if(!1===a(t)){var e=l(!1),n=l(!1),r=l(m.isPasteAsTextEnabled(t)?"text":"html"),o=Ft(t,r),i=Gt(t);return Yt(t,o),c(t,o,e),zt(t),jt(t),Wt(t,o,n),s(o,i)}})}();

/***/ }),

/***/ "1706":
/***/ (function(module, exports) {

!function(){"use strict";var e,n,t,r,o,i,u,a,l,s,c=tinymce.util.Tools.resolve("tinymce.PluginManager"),f=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),d=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),m=tinymce.util.Tools.resolve("tinymce.util.VK"),p=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),v=tinymce.util.Tools.resolve("tinymce.util.Tools"),g=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),h=function(e){return e&&"BR"===e.nodeName},y=function(e){return e&&3===e.nodeType},N=function(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)},S=function(e){return e&&/^(OL|UL)$/.test(e.nodeName)},O=function(e){return e&&/^(DT|DD)$/.test(e.nodeName)},C=function(e){return e&&/^(LI|DT|DD)$/.test(e.nodeName)},b=function(e){return e&&/^(TH|TD)$/.test(e.nodeName)},L=h,T=function(e,n){return n&&!!e.schema.getTextBlockElements()[n.nodeName]},D=function(e,n){return e&&e.nodeName in n},E=function(e,n){return!!h(n)&&!(!e.isBlock(n.nextSibling)||h(n.previousSibling))},w=function(e,n,t){var r=e.isEmpty(n);return!(t&&0<e.select("span[data-mce-type=bookmark]",n).length)&&r},k=function(e,n){return e.isChildOf(n,e.getRoot())},A=function(e,n){if(y(e))return{container:e,offset:n};var t=f.getNode(e,n);return y(t)?{container:t,offset:n>=e.childNodes.length?t.data.length:0}:t.previousSibling&&y(t.previousSibling)?{container:t.previousSibling,offset:t.previousSibling.data.length}:t.nextSibling&&y(t.nextSibling)?{container:t.nextSibling,offset:0}:{container:e,offset:n}},x=function(e){var n=e.cloneRange(),t=A(e.startContainer,e.startOffset);n.setStart(t.container,t.offset);var r=A(e.endContainer,e.endOffset);return n.setEnd(r.container,r.offset),n},R=g.DOM,I=function(o){var i={},e=function(e){var n,t,r;t=o[e?"startContainer":"endContainer"],r=o[e?"startOffset":"endOffset"],1===t.nodeType&&(n=R.create("span",{"data-mce-type":"bookmark"}),t.hasChildNodes()?(r=Math.min(r,t.childNodes.length-1),e?t.insertBefore(n,t.childNodes[r]):R.insertAfter(n,t.childNodes[r])):t.appendChild(n),t=n,r=0),i[e?"startContainer":"endContainer"]=t,i[e?"startOffset":"endOffset"]=r};return e(!0),o.collapsed||e(),i},B=function(o){function e(e){var n,t,r;n=r=o[e?"startContainer":"endContainer"],t=o[e?"startOffset":"endOffset"],n&&(1===n.nodeType&&(t=function(e){for(var n=e.parentNode.firstChild,t=0;n;){if(n===e)return t;1===n.nodeType&&"bookmark"===n.getAttribute("data-mce-type")||t++,n=n.nextSibling}return-1}(n),n=n.parentNode,R.remove(r),!n.hasChildNodes()&&R.isBlock(n)&&n.appendChild(R.create("br"))),o[e?"startContainer":"endContainer"]=n,o[e?"startOffset":"endOffset"]=t)}e(!0),e();var n=R.createRng();return n.setStart(o.startContainer,o.startOffset),o.endContainer&&n.setEnd(o.endContainer,o.endOffset),x(n)},_=function(e){return function(){return e}},P=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return!t.apply(null,e)}},M=_(!1),U=_(!0),F=M,j=U,H=function(){return $},$=(r={fold:function(e,n){return e()},is:F,isSome:F,isNone:j,getOr:t=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:t,orThunk:n,map:H,ap:H,each:function(){},bind:H,flatten:H,exists:F,forall:j,filter:H,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:_("none()")},Object.freeze&&Object.freeze(r),r),q=function(t){var e=function(){return t},n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:j,isNone:F,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return q(e(t))},ap:function(e){return e.fold(H,function(e){return q(e(t))})},each:function(e){e(t)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(t)?o:$},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(F,function(e){return n(t,e)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return o},W={some:q,none:H,from:function(e){return null===e||e===undefined?$:q(e)}},z=function(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"===n&&Array.prototype.isPrototypeOf(e)?"array":"object"===n&&String.prototype.isPrototypeOf(e)?"string":n}(e)===n}},K=z("string"),V=z("boolean"),X=z("function"),Q=z("number"),Y=function(e,n){for(var t=e.length,r=new Array(t),o=0;o<t;o++){var i=e[o];r[o]=n(i,o,e)}return r},G=function(e,n){for(var t=0,r=e.length;t<r;t++)n(e[t],t,e)},J=function(e,n){for(var t=[],r=0,o=e.length;r<o;r++){var i=e[r];n(i,r,e)&&t.push(i)}return t},Z=function(e,n,t){return G(e,function(e){t=n(t,e)}),t},ee=function(e,n){for(var t=0,r=e.length;t<r;t++){var o=e[t];if(n(o,t,e))return W.some(o)}return W.none()},ne=Array.prototype.push,te=function(e,n){return function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!Array.prototype.isPrototypeOf(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e);ne.apply(n,e[t])}return n}(Y(e,n))},re=Array.prototype.slice,oe=function(e){return 0===e.length?W.none():W.some(e[0])},ie=function(e){return 0===e.length?W.none():W.some(e[e.length-1])},ue=(X(Array.from)&&Array.from,"undefined"!=typeof window?window:Function("return this;")()),ae=function(e,n){return function(e,n){for(var t=n!==undefined&&null!==n?n:ue,r=0;r<e.length&&t!==undefined&&null!==t;++r)t=t[e[r]];return t}(e.split("."),n)},se=function(e,n){var t=ae(e,n);if(t===undefined||null===t)throw e+" not available on this browser";return t},ce=function(e){var n,t=ae("ownerDocument.defaultView",e);return(n=t,se("HTMLElement",n)).prototype.isPrototypeOf(e)},fe=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),le=function(e){var n=e.selection.getStart(!0);return e.dom.getParent(n,"OL,UL,DL",me(e,n))},de=function(e){var t,n,r,o=e.selection.getSelectedBlocks();return v.grep((t=e,n=o,r=v.map(n,function(e){var n=t.dom.getParent(e,"li,dd,dt",me(t,e));return n||e}),fe.unique(r)),function(e){return C(e)})},me=function(e,n){var t=e.dom.getParents(n,"TD,TH");return 0<t.length?t[0]:e.getBody()},ge=function(e,n){var t=e.dom.getParents(n,"ol,ul",me(e,n));return ie(t)},pe=function(n,e){var t=Y(e,function(e){return ge(n,e).getOr(e)});return fe.unique(t)},ve={isList:function(e){var n=le(e);return ce(n)},getParentList:le,getSelectedSubLists:function(e){var n,t,r,o=le(e),i=e.selection.getSelectedBlocks();return r=i,(t=o)&&1===r.length&&r[0]===t?(n=o,v.grep(n.querySelectorAll("ol,ul,dl"),function(e){return N(e)})):v.grep(i,function(e){return N(e)&&o!==e})},getSelectedListItems:de,getClosestListRootElm:me,getSelectedDlItems:function(e){return J(de(e),O)},getSelectedListRoots:function(e){var n,t,r,o=(t=ge(n=e,n.selection.getStart()),r=J(n.selection.getSelectedBlocks(),S),t.toArray().concat(r));return pe(e,o)}},he=function(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(r.test(n))return r}return undefined}(e,n);if(!t)return{major:0,minor:0};var r=function(e){return Number(n.replace(t,"$"+e))};return Ne(r(1),r(2))},ye=function(){return Ne(0,0)},Ne=function(e,n){return{major:e,minor:n}},Se={nu:Ne,detect:function(e,n){var t=String(n).toLowerCase();return 0===e.length?ye():he(e,t)},unknown:ye},Oe="Firefox",Ce=function(e,n){return function(){return n===e}},be=function(e){var n=e.current;return{current:n,version:e.version,isEdge:Ce("Edge",n),isChrome:Ce("Chrome",n),isIE:Ce("IE",n),isOpera:Ce("Opera",n),isFirefox:Ce(Oe,n),isSafari:Ce("Safari",n)}},Le={unknown:function(){return be({current:undefined,version:Se.unknown()})},nu:be,edge:_("Edge"),chrome:_("Chrome"),ie:_("IE"),opera:_("Opera"),firefox:_(Oe),safari:_("Safari")},Te="Windows",De="Android",Ee="Solaris",we="FreeBSD",ke=function(e,n){return function(){return n===e}},Ae=function(e){var n=e.current;return{current:n,version:e.version,isWindows:ke(Te,n),isiOS:ke("iOS",n),isAndroid:ke(De,n),isOSX:ke("OSX",n),isLinux:ke("Linux",n),isSolaris:ke(Ee,n),isFreeBSD:ke(we,n)}},xe={unknown:function(){return Ae({current:undefined,version:Se.unknown()})},nu:Ae,windows:_(Te),ios:_("iOS"),android:_(De),linux:_("Linux"),osx:_("OSX"),solaris:_(Ee),freebsd:_(we)},Re=function(e,n){var t=String(n).toLowerCase();return ee(e,function(e){return e.search(t)})},Ie=function(e,t){return Re(e,t).map(function(e){var n=Se.detect(e.versionRegexes,t);return{current:e.name,version:n}})},Be=function(e,t){return Re(e,t).map(function(e){var n=Se.detect(e.versionRegexes,t);return{current:e.name,version:n}})},_e=function(e,n){return-1!==e.indexOf(n)},Pe=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Me=function(n){return function(e){return _e(e,n)}},Ue=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return _e(e,"edge/")&&_e(e,"chrome")&&_e(e,"safari")&&_e(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Pe],search:function(e){return _e(e,"chrome")&&!_e(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return _e(e,"msie")||_e(e,"trident")}},{name:"Opera",versionRegexes:[Pe,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Me("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Me("firefox")},{name:"Safari",versionRegexes:[Pe,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(_e(e,"safari")||_e(e,"mobile/"))&&_e(e,"applewebkit")}}],Fe=[{name:"Windows",search:Me("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return _e(e,"iphone")||_e(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Me("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Me("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Me("linux"),versionRegexes:[]},{name:"Solaris",search:Me("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Me("freebsd"),versionRegexes:[]}],je={browsers:_(Ue),oses:_(Fe)},He=function(e){var n,t,r,o,i,u,a,s,c,f,l,d=je.browsers(),m=je.oses(),g=Ie(d,e).fold(Le.unknown,Le.nu),p=Be(m,e).fold(xe.unknown,xe.nu);return{browser:g,os:p,deviceType:(t=g,r=e,o=(n=p).isiOS()&&!0===/ipad/i.test(r),i=n.isiOS()&&!o,u=n.isAndroid()&&3===n.version.major,a=n.isAndroid()&&4===n.version.major,s=o||u||a&&!0===/mobile/i.test(r),c=n.isiOS()||n.isAndroid(),f=c&&!s,l=t.isSafari()&&n.isiOS()&&!1===/safari/i.test(r),{isiPad:_(o),isiPhone:_(i),isTablet:_(s),isPhone:_(f),isTouch:_(c),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:_(l)})}},$e={detect:(o=function(){var e=navigator.userAgent;return He(e)},u=!1,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return u||(u=!0,i=o.apply(null,e)),i})},qe=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:_(e)}},We={fromHtml:function(e,n){var t=(n||document).createElement("div");if(t.innerHTML=e,!t.hasChildNodes()||1<t.childNodes.length)throw console.error("HTML does not have a single root node",e),"HTML must have a single root node";return qe(t.childNodes[0])},fromTag:function(e,n){var t=(n||document).createElement(e);return qe(t)},fromText:function(e,n){var t=(n||document).createTextNode(e);return qe(t)},fromDom:qe,fromPoint:function(e,n,t){var r=e.dom();return W.from(r.elementFromPoint(n,t)).map(qe)}},ze=(Node.ATTRIBUTE_NODE,Node.CDATA_SECTION_NODE,Node.COMMENT_NODE,Node.DOCUMENT_NODE,Node.DOCUMENT_TYPE_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE),Ke=(Node.TEXT_NODE,Node.PROCESSING_INSTRUCTION_NODE,Node.ENTITY_REFERENCE_NODE,Node.ENTITY_NODE,Node.NOTATION_NODE,ze),Ve=($e.detect().browser.isIE(),function(e,n){var t=e.dom();if(t.nodeType!==Ke)return!1;if(t.matches!==undefined)return t.matches(n);if(t.msMatchesSelector!==undefined)return t.msMatchesSelector(n);if(t.webkitMatchesSelector!==undefined)return t.webkitMatchesSelector(n);if(t.mozMatchesSelector!==undefined)return t.mozMatchesSelector(n);throw new Error("Browser lacks native selectors")}),Xe=Object.keys,Qe=function(e){return e.dom().nodeName.toLowerCase()},Ye=function(e,n){var t=e.dom();!function(e,n){for(var t=Xe(e),r=0,o=t.length;r<o;r++){var i=t[r];n(e[i],i,e)}}(n,function(e,n){!function(e,n,t){if(!(K(t)||V(t)||Q(t)))throw console.error("Invalid call to Attr.set. Key ",n,":: Value ",t,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(n,t+"")}(t,n,e)})},Ge=function(e){return Z(e.dom().attributes,function(e,n){return e[n.name]=n.value,e},{})},Je=function(e){var n=e.dom();return W.from(n.parentNode).map(We.fromDom)},Ze=function(e){var n=e.dom();return Y(n.childNodes,We.fromDom)},en=function(e,n){var t=e.dom().childNodes;return W.from(t[n]).map(We.fromDom)},nn=function(e){return en(e,0)},tn=function(e){return en(e,e.dom().childNodes.length-1)},rn=(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]}("element","offset"),function(n,t){Je(n).each(function(e){e.dom().insertBefore(t.dom(),n.dom())})}),on=function(e,n){e.dom().appendChild(n.dom())},un=function(n,e){G(e,function(e){on(n,e)})},an=function(e){var n=e.dom();null!==n.parentNode&&n.parentNode.removeChild(n)},sn=function(e){return n=e,t=!0,We.fromDom(n.dom().cloneNode(t));var n,t},cn=function(e,n){var t,r,o,i,u=(t=e,r=n,o=We.fromTag(r),i=Ge(t),Ye(o,i),o);rn(e,u);var a=Ze(e);return un(u,a),an(e),u},fn=tinymce.util.Tools.resolve("tinymce.Env"),ln=g.DOM,dn=function(e,n,t){var r,o,i,u=ln.createFragment(),a=e.schema.getBlockElements();if(e.settings.forced_root_block&&(t=t||e.settings.forced_root_block),t&&((o=ln.create(t)).tagName===e.settings.forced_root_block&&ln.setAttribs(o,e.settings.forced_root_block_attrs),D(n.firstChild,a)||u.appendChild(o)),n)for(;r=n.firstChild;){var s=r.nodeName;i||"SPAN"===s&&"bookmark"===r.getAttribute("data-mce-type")||(i=!0),D(r,a)?(u.appendChild(r),o=null):t?(o||(o=ln.create(t),u.appendChild(o)),o.appendChild(r)):u.appendChild(r)}return e.settings.forced_root_block?i||fn.ie&&!(10<fn.ie)||o.appendChild(ln.create("br",{"data-mce-bogus":"1"})):u.appendChild(ln.create("br")),u},mn=g.DOM,gn=function(e,n,t,r){var o,i,u,a,s;for(u=mn.select('span[data-mce-type="bookmark"]',n),r=r||dn(e,t),(o=mn.createRng()).setStartAfter(t),o.setEndAfter(n),a=(i=o.extractContents()).firstChild;a;a=a.firstChild)if("LI"===a.nodeName&&e.dom.isEmpty(a)){mn.remove(a);break}e.dom.isEmpty(i)||mn.insertAfter(i,n),mn.insertAfter(r,n),w(e.dom,t.parentNode)&&(s=t.parentNode,v.each(u,function(e){s.parentNode.insertBefore(e,t.parentNode)}),mn.remove(s)),mn.remove(t),w(e.dom,n)&&mn.remove(n)},pn=function(e,n){for(var t=[],r=0;r<e.length;r++){var o=e[r];if(!o.isSome())return W.none();t.push(o.getOrDie())}return W.some(n.apply(null,t))},vn=function(e,n,t){if(!K(t))throw console.error("Invalid call to CSS.set. Property ",n,":: Value ",t,":: Element ",e),new Error("CSS value must be a string: "+t);e.style!==undefined&&e.style.setProperty(n,t)},hn=function(e,n){on(e.item,n.list)},yn=function(i,e,u){for(var a=[],n=function(e){var n,t,r,o=(n=i,t=u,r={list:We.fromTag(t,n),item:We.fromTag("li",n)},on(r.list,r.item),r);ie(a).each(function(e){return hn(e,o)}),a.push(o)},t=0;t<e;t++)n();return a},Nn=function(c,e,f){var n=e.slice(0,f.depth);return ie(n).each(function(e){var n,t,r,o,i,u,a,s;n=e,r=c,o=f.itemAttributes,i=f.content,u=We.fromTag("li",r),Ye(u,o),un(u,i),t=u,on(n.list,t),n.item=t,s=f,Qe((a=e).list).toUpperCase()!==s.listType&&(a.list=cn(a.list,s.listType)),Ye(a.list,s.listAttributes)}),n},Sn=function(e,n,t){var r=yn(e,t.depth-n.length,t.listType);return function(e,n){ie(e).each(function(e){Ye(e.list,n.listAttributes),Ye(e.item,n.itemAttributes),un(e.item,n.content)});for(var t=0;t<e.length-1;t++)r=e[t].item,o="list-style-type",i="none",u=r.dom(),vn(u,o,i);var r,o,i,u}(r,t),pn([ie(n),oe(r)],hn),n.concat(r)},On=function(e){return 0<e.depth},Cn=function(e){return e.isSelected},bn=Object.prototype.hasOwnProperty,Ln=(a=function(e,n){return n},function(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];if(0===e.length)throw new Error("Can't merge zero objects");for(var t={},r=0;r<e.length;r++){var o=e[r];for(var i in o)bn.call(o,i)&&(t[i]=a(t[i],o[i]))}return t}),Tn=function(e,r){var n=r.depth-1;e[n].each(function(e){return t=e,(n=r).listType=t.listType,void(n.listAttributes=Ln({},t.listAttributes));var n,t});var t=e.slice(0,n);return t.push(W.some(r)),t},Dn=function(e){Z(e,function(e,n){return n.depth>e.length?function(e,n){for(var t=e.slice(0),r=n.depth-e.length,o=1;o<r;o++)t.push(W.none());return t.push(W.some(n)),t}(e,n):Tn(e,n)},[])},En=function(e){var n=e,t=function(){return n};return{get:t,set:function(e){n=e},clone:function(){return En(t())}}};(s=l||(l={})).OL="OL",s.UL="UL",s.DL="DL";var wn=function(e){switch(Qe(e)){case"ol":return W.some(l.OL);case"ul":return W.some(l.UL);case"dl":return W.some(l.DL);default:return W.none()}},kn=function(e){return Ve(e,"OL,UL,DL")},An=function(e){return nn(e).map(kn).getOr(!1)},xn=function(e){var n=Ze(e),t=n.length+(tn(e).map(kn).getOr(!1)?-1:0);return Y(n.slice(0,t),sn)},Rn=function(u,e,a,s){var c=function(r){for(var o=[],e=1;e<arguments.length;e++)o[e-1]=arguments[e];return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=o.concat(e);return r.apply(null,t)}}(In,u,e,a),f=function(r){return e.each(function(e){var n,t;n="Start"===r?e.start:e.end,t=s,n.dom()===t.dom()&&a.set("Start"===r)})};return nn(s).filter(kn).fold(function(){f("Start");var e,n,t,r,o=(e=s,n=u,t=a.get(),r=Je(e),{depth:n,isSelected:t,content:xn(e),listType:r.bind(wn).getOr(l.OL),listAttributes:r.map(Ge).getOr({}),itemAttributes:Ge(e)});f("End");var i=tn(s).filter(kn).map(c).getOr([]);return[o].concat(i)},c)},In=function(e,n,t,r){var o=e+1;return te(Ze(r),function(e){return kn(e)?In(o,n,t,e):Rn(o,n,t,e)})},Bn=function(i,e){return Y(e,function(e){var n,t,r,o=(n=e.content,r=(t||document).createDocumentFragment(),G(n,function(e){r.appendChild(e.dom())}),We.fromDom(r));return We.fromDom(dn(i,o.dom()))})},_n=function(e,n){return Dn(n),(t=e.contentDocument,r=n,o=Z(r,function(e,n){return n.depth>e.length?Sn(t,e,n):Nn(t,e,n)},[]),oe(o).map(function(e){return e.list})).toArray();var t,r,o},Pn=function(e){var n,t,r=Y(ve.getSelectedListItems(e),We.fromDom);return pn([ee(r,P(An)),ee((n=r,t=re.call(n,0),t.reverse(),t),P(An))],function(e,n){return{start:e,end:n}})},Mn=function(a,e,s){var n,t,r,o=(n=e,t=Pn(a),r=En(!1),Y(n,function(e){return{entries:In(0,t,r,e),sourceList:e}}));G(o,function(e){var n,t,r,o,i,u;n=e.entries,t=s,G(J(n,Cn),function(e){return function(e,n){switch(e){case"Indent":n.depth++;break;case"Outdent":n.depth--;break;case"Flatten":n.depth=0}}(t,e)}),r=e.sourceList,i=a,u=e.entries,o=te(function(e,n){if(0===e.length)return[];for(var t=n(e[0]),r=[],o=[],i=0,u=e.length;i<u;i++){var a=e[i],s=n(a);s!==t&&(r.push(o),o=[]),t=s,o.push(a)}return 0!==o.length&&r.push(o),r}(u,On),function(e){return oe(e).map(On).getOr(!1)?_n(i,e):Bn(i,e)}),G(o,function(e){rn(r,e)}),an(e.sourceList)})},Un=function(e){Ve(e,"DT")&&cn(e,"DD")},Fn=function(r,e,n){G(n,"Indent"===e?Un:function(e){return n=r,void(Ve(t=e,"DD")?cn(t,"DT"):Ve(t,"DT")&&Je(t).each(function(e){return gn(n,e.dom(),t.dom())}));var n,t})},jn=function(e,n){var t=Y(ve.getSelectedDlItems(e),We.fromDom),r=Y(ve.getSelectedListRoots(e),We.fromDom);if(t.length||r.length){var o=e.selection.getBookmark();Fn(e,n,t),Mn(e,r,n),e.selection.moveToBookmark(o),e.selection.setRng(x(e.selection.getRng())),e.nodeChanged()}},Hn=function(e){jn(e,"Indent")},$n=function(e){jn(e,"Outdent")},qn=function(e){jn(e,"Flatten")},Wn=function(t,e){v.each(e,function(e,n){t.setAttribute(n,e)})},zn=function(e,n,t){var r,o,i,u,a,s,c;r=e,o=n,u=(i=t)["list-style-type"]?i["list-style-type"]:null,r.setStyle(o,"list-style-type",u),a=e,Wn(s=n,(c=t)["list-attributes"]),v.each(a.select("li",s),function(e){Wn(e,c["list-item-attributes"])})},Kn=function(e,n,t,r){var o,i;for(o=n[t?"startContainer":"endContainer"],i=n[t?"startOffset":"endOffset"],1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!t&&L(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(T(e,o))return o;if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o;o=o.parentNode}return o},Vn=function(f,l,d){void 0===d&&(d={});var e,n=f.selection.getRng(!0),m="LI",t=ve.getClosestListRootElm(f,f.selection.getStart(!0)),g=f.dom;"false"!==g.getContentEditable(f.selection.getNode())&&("DL"===(l=l.toUpperCase())&&(m="DT"),e=I(n),v.each(function(t,e,r){for(var o,i=[],u=t.dom,n=Kn(t,e,!0,r),a=Kn(t,e,!1,r),s=[],c=n;c&&(s.push(c),c!==a);c=c.nextSibling);return v.each(s,function(e){if(T(t,e))return i.push(e),void(o=null);if(u.isBlock(e)||L(e))return L(e)&&u.remove(e),void(o=null);var n=e.nextSibling;p.isBookmarkNode(e)&&(T(t,n)||!n&&e.parentNode===r)?o=null:(o||(o=u.create("p"),e.parentNode.insertBefore(o,e),i.push(o)),o.appendChild(e))}),i}(f,n,t),function(e){var n,t,r,o,i,u,a,s,c;(t=e.previousSibling)&&N(t)&&t.nodeName===l&&(r=t,o=d,i=g.getStyle(r,"list-style-type"),u=o?o["list-style-type"]:"",i===(u=null===u?"":u))?(n=t,e=g.rename(e,m),t.appendChild(e)):(n=g.create(l),e.parentNode.insertBefore(n,e),n.appendChild(e),e=g.rename(e,m)),a=g,s=e,c=["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"],v.each(c,function(e){var n;return a.setStyle(s,((n={})[e]="",n))}),zn(g,n,d),Qn(f.dom,n)}),f.selection.setRng(B(e)))},Xn=function(e,n,t){return s=t,(a=n)&&s&&N(a)&&a.nodeName===s.nodeName&&(i=n,u=t,(o=e).getStyle(i,"list-style-type",!0)===o.getStyle(u,"list-style-type",!0))&&(r=t,n.className===r.className);var r,o,i,u,a,s},Qn=function(e,n){var t,r;if(t=n.nextSibling,Xn(e,n,t)){for(;r=t.firstChild;)n.appendChild(r);e.remove(t)}if(t=n.previousSibling,Xn(e,n,t)){for(;r=t.lastChild;)n.insertBefore(r,n.firstChild);e.remove(t)}},Yn=function(n,e,t,r,o){if(e.nodeName!==r||Gn(o)){var i=I(n.selection.getRng(!0));v.each([e].concat(t),function(e){!function(e,n,t,r){if(n.nodeName!==t){var o=e.rename(n,t);zn(e,o,r)}else zn(e,n,r)}(n.dom,e,r,o)}),n.selection.setRng(B(i))}else qn(n)},Gn=function(e){return"list-style-type"in e},Jn={toggleList:function(e,n,t){var r=ve.getParentList(e),o=ve.getSelectedSubLists(e);t=t||{},r&&0<o.length?Yn(e,r,o,n,t):function(e,n,t,r){if(n!==e.getBody())if(n)if(n.nodeName!==t||Gn(r)){var o=I(e.selection.getRng(!0));zn(e.dom,n,r),Qn(e.dom,e.dom.rename(n,t)),e.selection.setRng(B(o))}else qn(e);else Vn(e,t,r)}(e,r,n,t)},mergeWithAdjacentLists:Qn},Zn=g.DOM,et=function(e,n){var t,r=n.parentNode;"LI"===r.nodeName&&r.firstChild===n&&((t=r.previousSibling)&&"LI"===t.nodeName?(t.appendChild(n),w(e,r)&&Zn.remove(r)):Zn.setStyle(r,"listStyleType","none")),N(r)&&(t=r.previousSibling)&&"LI"===t.nodeName&&t.appendChild(n)},nt=function(n,e){v.each(v.grep(n.select("ol,ul",e)),function(e){et(n,e)})},tt=function(e,n,t,r){var o,i,u=n.startContainer,a=n.startOffset;if(3===u.nodeType&&(t?a<u.data.length:0<a))return u;for(o=e.schema.getNonEmptyElements(),1===u.nodeType&&(u=f.getNode(u,a)),i=new d(u,r),t&&E(e.dom,u)&&i.next();u=i[t?"next":"prev2"]();){if("LI"===u.nodeName&&!u.hasChildNodes())return u;if(o[u.nodeName])return u;if(3===u.nodeType&&0<u.data.length)return u}},rt=function(e,n){var t=n.childNodes;return 1===t.length&&!N(t[0])&&e.isBlock(t[0])},ot=function(e,n,t){var r,o,i,u;if(o=rt(e,t)?t.firstChild:t,rt(i=e,u=n)&&i.remove(u.firstChild,!0),!w(e,n,!0))for(;r=n.firstChild;)o.appendChild(r)},it=function(e,n,t){var r,o,i=n.parentNode;k(e,n)&&k(e,t)&&(N(t.lastChild)&&(o=t.lastChild),i===t.lastChild&&L(i.previousSibling)&&e.remove(i.previousSibling),(r=t.lastChild)&&L(r)&&n.hasChildNodes()&&e.remove(r),w(e,t,!0)&&e.$(t).empty(),ot(e,n,t),o&&t.appendChild(o),e.remove(n),w(e,i)&&i!==e.getRoot()&&e.remove(i))},ut=function(e,n,t,r){var o,i,u,a=e.dom;if(a.isEmpty(r))i=t,u=r,(o=e).dom.$(u).empty(),it(o.dom,i,u),o.selection.setCursorLocation(u);else{var s=I(n);it(a,t,r),e.selection.setRng(B(s))}},at=function(e,n){var t,r,o,i=e.dom,u=e.selection,a=u.getStart(),s=ve.getClosestListRootElm(e,a),c=i.getParent(u.getStart(),"LI",s);if(c){if((t=c.parentNode)===e.getBody()&&w(i,t))return!0;if(r=x(u.getRng(!0)),(o=i.getParent(tt(e,r,n,s),"LI",s))&&o!==c)return n?ut(e,r,o,c):function(e,n,t,r){var o=I(n);it(e.dom,t,r);var i=B(o);e.selection.setRng(i)}(e,r,c,o),!0;if(!o&&!n)return qn(e),!0}return!1},st=function(e,n){return at(e,n)||function(o,i){var u=o.dom,e=o.selection.getStart(),a=ve.getClosestListRootElm(o,e),s=u.getParent(e,u.isBlock,a);if(s&&u.isEmpty(s)){var n=x(o.selection.getRng(!0)),c=u.getParent(tt(o,n,i,a),"LI",a);if(c)return o.undoManager.transact(function(){var e,n,t,r;n=s,t=a,r=(e=u).getParent(n.parentNode,e.isBlock,t),e.remove(n),r&&e.isEmpty(r)&&e.remove(r),Jn.mergeWithAdjacentLists(u,c.parentNode),o.selection.select(c,!0),o.selection.collapse(i)}),!0}return!1}(e,n)},ct=function(e,n){return e.selection.isCollapsed()?st(e,n):(r=(t=e).selection.getStart(),o=ve.getClosestListRootElm(t,r),!!(t.dom.getParent(r,"LI,DT,DD",o)||0<ve.getSelectedListItems(t).length)&&(t.undoManager.transact(function(){t.execCommand("Delete"),nt(t.dom,t.getBody())}),!0));var t,r,o},ft=function(n){n.on("keydown",function(e){e.keyCode===m.BACKSPACE?ct(n,!1)&&e.preventDefault():e.keyCode===m.DELETE&&ct(n,!0)&&e.preventDefault()})},lt=ct,dt=function(n){return{backspaceDelete:function(e){lt(n,e)}}},mt=function(n,t){return function(){var e=n.dom.getParent(n.selection.getStart(),"UL,OL,DL");return e&&e.nodeName===t}},gt=function(t){t.on("BeforeExecCommand",function(e){var n=e.command.toLowerCase();"indent"===n?Hn(t):"outdent"===n&&$n(t)}),t.addCommand("InsertUnorderedList",function(e,n){Jn.toggleList(t,"UL",n)}),t.addCommand("InsertOrderedList",function(e,n){Jn.toggleList(t,"OL",n)}),t.addCommand("InsertDefinitionList",function(e,n){Jn.toggleList(t,"DL",n)}),t.addCommand("RemoveList",function(){qn(t)}),t.addQueryStateHandler("InsertUnorderedList",mt(t,"UL")),t.addQueryStateHandler("InsertOrderedList",mt(t,"OL")),t.addQueryStateHandler("InsertDefinitionList",mt(t,"DL"))},pt=function(e){return e.getParam("lists_indent_on_tab",!0)},vt=function(e){var n;pt(e)&&(n=e).on("keydown",function(e){e.keyCode!==m.TAB||m.metaKeyPressed(e)||ve.isList(n)&&(e.preventDefault(),n.undoManager.transact(function(){e.shiftKey?$n(n):Hn(n)}))}),ft(e)},ht=function(n,i){return function(e){var o=e.control;n.on("NodeChange",function(e){var n=function(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t;return-1}(e.parents,b),t=-1!==n?e.parents.slice(0,n):e.parents,r=v.grep(t,N);o.active(0<r.length&&r[0].nodeName===i)})}},yt=function(e){var n,t,r;t="advlist",r=(n=e).settings.plugins?n.settings.plugins:"",-1===v.inArray(r.split(/[ ,]/),t)&&(e.addButton("numlist",{active:!1,title:"Numbered list",cmd:"InsertOrderedList",onPostRender:ht(e,"OL")}),e.addButton("bullist",{active:!1,title:"Bullet list",cmd:"InsertUnorderedList",onPostRender:ht(e,"UL")})),e.addButton("indent",{icon:"indent",title:"Increase indent",cmd:"Indent"})};c.add("lists",function(e){return vt(e),yt(e),gt(e),dt(e)})}();

/***/ }),

/***/ "19bf":
/***/ (function(module, exports) {

!function(){"use strict";var r=function(t){var e=t,n=function(){return e};return{get:n,set:function(t){e=t},clone:function(){return r(n())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),$=tinymce.util.Tools.resolve("tinymce.util.Tools");function n(t,e){return i(document.createElement("canvas"),t,e)}function o(t){return t.getContext("2d")}function i(t,e,n){return t.width=e,t.height=n,t}var h={create:n,clone:function(t){var e;return o(e=n(t.width,t.height)).drawImage(t,0,0),e},resize:i,get2dContext:o,get3dContext:function(t){var e=null;try{e=t.getContext("webgl")||t.getContext("experimental-webgl")}catch(n){}return e||(e=null),e}},p={getWidth:function(t){return t.naturalWidth||t.width},getHeight:function(t){return t.naturalHeight||t.height}},g=window.Promise?window.Promise:function(){var t=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(t,r(o,this),r(a,this))},e=t.immediateFn||"function"==typeof window.setImmediate&&window.setImmediate||function(t){setTimeout(t,1)};function r(t,e){return function(){t.apply(e,arguments)}}var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(r){var o=this;null!==this._state?e(function(){var t=o._state?r.onFulfilled:r.onRejected;if(null!==t){var e;try{e=t(o._value)}catch(n){return void r.reject(n)}r.resolve(e)}else(o._state?r.resolve:r.reject)(o._value)}):this._deferreds.push(r)}function o(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then;if("function"==typeof e)return void l(r(e,t),r(o,this),r(a,this))}this._state=!0,this._value=t,u.call(this)}catch(n){a.call(this,n)}}function a(t){this._state=!1,this._value=t,u.call(this)}function u(){for(var t=0,e=this._deferreds.length;t<e;t++)i.call(this,this._deferreds[t]);this._deferreds=null}function c(t,e,n,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=r}function l(t,e,n){var r=!1;try{t(function(t){r||(r=!0,e(t))},function(t){r||(r=!0,n(t))})}catch(o){if(r)return;r=!0,n(o)}}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype.then=function(n,r){var o=this;return new t(function(t,e){i.call(o,new c(n,r,t,e))})},t.all=function(){var c=Array.prototype.slice.call(1===arguments.length&&n(arguments[0])?arguments[0]:arguments);return new t(function(o,i){if(0===c.length)return o([]);var a=c.length;function u(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void n.call(t,function(t){u(e,t)},i)}c[e]=t,0==--a&&o(c)}catch(r){i(r)}}for(var t=0;t<c.length;t++)u(t,c[t])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(t){t(e)})},t.reject=function(n){return new t(function(t,e){e(n)})},t.race=function(o){return new t(function(t,e){for(var n=0,r=o.length;n<r;n++)o[n].then(t,e)})},t}(),a=function(t){return function(){return t}};function u(r){for(var o=[],t=1;t<arguments.length;t++)o[t-1]=arguments[t];return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=o.concat(t);return r.apply(null,n)}}var c,l,s,f,d=a(!1),m=a(!0),y=d,v=m,b=function(){return w},w=(f={fold:function(t,e){return t()},is:y,isSome:y,isNone:v,getOr:s=function(t){return t},getOrThunk:l=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:s,orThunk:l,map:b,ap:b,each:function(){},bind:b,flatten:b,exists:y,forall:v,filter:b,equals:c=function(t){return t.isNone()},equals_:c,toArray:function(){return[]},toString:a("none()")},Object.freeze&&Object.freeze(f),f),x=function(n){var t=function(){return n},e=function(){return o},r=function(t){return t(n)},o={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:v,isNone:y,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(t){return x(t(n))},ap:function(t){return t.fold(b,function(t){return x(t(n))})},each:function(t){t(n)},bind:r,flatten:t,exists:r,forall:r,filter:function(t){return t(n)?o:w},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(y,function(t){return e(n,t)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},I={some:x,none:b,from:function(t){return null===t||t===undefined?w:x(t)}},T="undefined"!=typeof window?window:Function("return this;")(),R=function(t,e){return function(t,e){for(var n=e!==undefined&&null!==e?e:T,r=0;r<t.length&&n!==undefined&&null!==n;++r)n=n[t[r]];return n}(t.split("."),e)},S={getOrDie:function(t,e){var n=R(t,e);if(n===undefined||null===n)throw t+" not available on this browser";return n}};function O(){return new(S.getOrDie("FileReader"))}var F={atob:function(t){return S.getOrDie("atob")(t)},requestAnimationFrame:function(t){S.getOrDie("requestAnimationFrame")(t)}};function C(u){return new g(function(t,e){var n=URL.createObjectURL(u),r=new Image,o=function(){r.removeEventListener("load",i),r.removeEventListener("error",a)};function i(){o(),t(r)}function a(){o(),e("Unable to load data of type "+u.type+": "+n)}r.addEventListener("load",i),r.addEventListener("error",a),r.src=n,r.complete&&i()})}function E(r){return new g(function(t,n){var e=new XMLHttpRequest;e.open("GET",r,!0),e.responseType="blob",e.onload=function(){200==this.status&&t(this.response)},e.onerror=function(){var t,e=this;n(0===this.status?((t=new Error("No access to download image")).code=18,t.name="SecurityError",t):new Error("Error "+e.status+" downloading image"))},e.send()})}function D(t){var e=t.split(","),n=/data:([^;]+)/.exec(e[0]);if(!n)return I.none();for(var r,o,i,a=n[1],u=e[1],c=F.atob(u),l=c.length,s=Math.ceil(l/1024),f=new Array(s),d=0;d<s;++d){for(var h=1024*d,p=Math.min(h+1024,l),g=new Array(p-h),m=h,y=0;m<p;++y,++m)g[y]=c[m].charCodeAt(0);f[d]=(r=g,new(S.getOrDie("Uint8Array"))(r))}return I.some((o=f,i={type:a},new(S.getOrDie("Blob"))(o,i)))}function A(n){return new g(function(t,e){D(n).fold(function(){e("uri is not base64: "+n)},t)})}function _(n){return new g(function(t){var e=O();e.onloadend=function(){t(e.result)},e.readAsDataURL(n)})}var k={blobToImage:C,imageToBlob:function(t){var e=t.src;return 0===e.indexOf("data:")?A(e):E(e)},blobToArrayBuffer:function(n){return new g(function(t){var e=O();e.onloadend=function(){t(e.result)},e.readAsArrayBuffer(n)})},blobToDataUri:_,blobToBase64:function(t){return _(t).then(function(t){return t.split(",")[1]})},dataUriToBlobSync:D,canvasToBlob:function(t,n,r){return n=n||"image/png",HTMLCanvasElement.prototype.toBlob?new g(function(e){t.toBlob(function(t){e(t)},n,r)}):A(t.toDataURL(n,r))},canvasToDataURL:function(t,e,n){return e=e||"image/png",t.then(function(t){return t.toDataURL(e,n)})},blobToCanvas:function(t){return C(t).then(function(t){var e,n;return e=t,URL.revokeObjectURL(e.src),n=h.create(p.getWidth(t),p.getHeight(t)),h.get2dContext(n).drawImage(t,0,0),n})},uriToBlob:function(t){return 0===t.indexOf("blob:")?E(t):0===t.indexOf("data:")?A(t):null}},L=function(t){return k.blobToImage(t)},P=function(t){return k.imageToBlob(t)};function B(t,e,n){var r=e.type;function o(e,n){return t.then(function(t){return k.canvasToDataURL(t,e,n)})}return{getType:a(r),toBlob:function(){return g.resolve(e)},toDataURL:function(){return n},toBase64:function(){return n.split(",")[1]},toAdjustedBlob:function(e,n){return t.then(function(t){return k.canvasToBlob(t,e,n)})},toAdjustedDataURL:o,toAdjustedBase64:function(t,e){return o(t,e).then(function(t){return t.split(",")[1]})},toCanvas:function(){return t.then(h.clone)}}}function H(e){return k.blobToDataUri(e).then(function(t){return B(k.blobToCanvas(e),e,t)})}var M={fromBlob:H,fromCanvas:function(e,t){return k.canvasToBlob(e,t).then(function(t){return B(g.resolve(e),t,e.toDataURL())})},fromImage:function(t){return k.imageToBlob(t).then(function(t){return H(t)})},fromBlobAndUrlSync:function(t,e){return B(k.blobToCanvas(t),t,e)}};function N(t,e,n){return n<(t=parseFloat(t))?t=n:t<e&&(t=e),t}var U=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10];function j(t,e){var n,r,o,i,a=[],u=new Array(10);for(n=0;n<5;n++){for(r=0;r<5;r++)a[r]=e[r+5*n];for(r=0;r<5;r++){for(o=i=0;o<5;o++)i+=t[r+5*o]*a[o];u[r+5*n]=i}}return u}function G(t,n){return n=N(n,0,1),t.map(function(t,e){return e%6==0?t=1-(1-t)*n:t*=n,N(t,0,1)})}var z={identity:function(){return[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]},adjust:G,multiply:j,adjustContrast:function(t,e){var n;return e=N(e,-1,1),j(t,[(n=(e*=100)<0?127+e/100*127:127*(n=0==(n=e%1)?U[e]:U[Math.floor(e)]*(1-n)+U[Math.floor(e)+1]*n)+127)/127,0,0,0,.5*(127-n),0,n/127,0,0,.5*(127-n),0,0,n/127,0,.5*(127-n),0,0,0,1,0,0,0,0,0,1])},adjustBrightness:function(t,e){return j(t,[1,0,0,0,e=N(255*e,-255,255),0,1,0,0,e,0,0,1,0,e,0,0,0,1,0,0,0,0,0,1])},adjustSaturation:function(t,e){var n;return j(t,[.3086*(1-(n=1+(0<(e=N(e,-1,1))?3*e:e)))+n,.6094*(1-n),.082*(1-n),0,0,.3086*(1-n),.6094*(1-n)+n,.082*(1-n),0,0,.3086*(1-n),.6094*(1-n),.082*(1-n)+n,0,0,0,0,0,1,0,0,0,0,0,1])},adjustHue:function(t,e){var n,r,o,i,a;return e=N(e,-180,180)/180*Math.PI,j(t,[(o=.213)+.787*(n=Math.cos(e))+(r=Math.sin(e))*-o,(i=.715)+n*-i+r*-i,(a=.072)+n*-a+.928*r,0,0,o+n*-o+.143*r,i+n*(1-i)+.14*r,a+n*-a+-.283*r,0,0,o+n*-o+-.787*r,i+n*-i+r*i,a+.928*n+r*a,0,0,0,0,0,1,0,0,0,0,0,1])},adjustColors:function(t,e,n,r){return j(t,[e=N(e,0,2),0,0,0,0,0,n=N(n,0,2),0,0,0,0,0,r=N(r,0,2),0,0,0,0,0,1,0,0,0,0,0,1])},adjustSepia:function(t,e){return j(t,G([.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0,0,0,0,0,1],e=N(e,0,1)))},adjustGrayscale:function(t,e){return j(t,G([.33,.34,.33,0,0,.33,.34,.33,0,0,.33,.34,.33,0,0,0,0,0,1,0,0,0,0,0,1],e=N(e,0,1)))}};function V(a,u){return a.toCanvas().then(function(t){return e=t,n=a.getType(),r=u,i=h.get2dContext(e),o=function(t,e){var n,r,o,i,a,u=t.data,c=e[0],l=e[1],s=e[2],f=e[3],d=e[4],h=e[5],p=e[6],g=e[7],m=e[8],y=e[9],v=e[10],b=e[11],w=e[12],x=e[13],I=e[14],T=e[15],R=e[16],S=e[17],O=e[18],F=e[19];for(a=0;a<u.length;a+=4)n=u[a],r=u[a+1],o=u[a+2],i=u[a+3],u[a]=n*c+r*l+o*s+i*f+d,u[a+1]=n*h+r*p+o*g+i*m+y,u[a+2]=n*v+r*b+o*w+i*x+I,u[a+3]=n*T+r*R+o*S+i*O+F;return t}(i.getImageData(0,0,e.width,e.height),r),i.putImageData(o,0,0),M.fromCanvas(e,n);var e,n,r,o,i})}function W(u,c){return u.toCanvas().then(function(t){return e=t,n=u.getType(),r=c,a=h.get2dContext(e),o=a.getImageData(0,0,e.width,e.height),i=a.getImageData(0,0,e.width,e.height),i=function(t,e,n){var r,o,i,a,u,c,l,s,f,d,h,p,g,m,y,v,b;function w(t,e,n){return n<t?t=n:t<e&&(t=e),t}for(i=Math.round(Math.sqrt(n.length)),a=Math.floor(i/2),r=t.data,o=e.data,v=t.width,b=t.height,c=0;c<b;c++)for(u=0;u<v;u++){for(l=s=f=0,h=0;h<i;h++)for(d=0;d<i;d++)p=w(u+d-a,0,v-1),g=w(c+h-a,0,b-1),m=4*(g*v+p),y=n[h*i+d],l+=r[m]*y,s+=r[m+1]*y,f+=r[m+2]*y;o[m=4*(c*v+u)]=w(l,0,255),o[m+1]=w(s,0,255),o[m+2]=w(f,0,255)}return e}(o,i,r),a.putImageData(i,0,0),M.fromCanvas(e,n);var e,n,r,o,i,a})}function q(u){return function(e,n){return e.toCanvas().then(function(t){return function(t,e,n){var r,o,i=h.get2dContext(t),a=new Array(256);for(o=0;o<a.length;o++)a[o]=u(o,n);return r=function(t,e){var n,r=t.data;for(n=0;n<r.length;n+=4)r[n]=e[r[n]],r[n+1]=e[r[n+1]],r[n+2]=e[r[n+2]];return t}(i.getImageData(0,0,t.width,t.height),a),i.putImageData(r,0,0),M.fromCanvas(t,e)}(t,e.getType(),n)})}}function Y(n){return function(t,e){return V(t,n(z.identity(),e))}}function X(e){return function(t){return W(t,e)}}var J,K={invert:(J=[-1,0,0,0,255,0,-1,0,0,255,0,0,-1,0,255,0,0,0,1,0],function(t){return V(t,J)}),brightness:Y(z.adjustBrightness),hue:Y(z.adjustHue),saturate:Y(z.adjustSaturation),contrast:Y(z.adjustContrast),grayscale:Y(z.adjustGrayscale),sepia:Y(z.adjustSepia),colorize:function(t,e,n,r){return V(t,z.adjustColors(z.identity(),e,n,r))},sharpen:X([0,-1,0,-1,5,-1,0,-1,0]),emboss:X([-2,-1,0,-1,1,1,0,1,2]),gamma:q(function(t,e){return 255*Math.pow(t/255,1-e)}),exposure:q(function(t,e){return 255*(1-Math.exp(-t/255*e))}),colorFilter:V,convoluteFilter:W},Z={scale:function e(t,n,r){var o=p.getWidth(t),i=p.getHeight(t),a=n/o,u=r/i,c=!1;(a<.5||2<a)&&(a=a<.5?.5:2,c=!0),(u<.5||2<u)&&(u=u<.5?.5:2,c=!0);var l,s,f,d=(l=t,s=a,f=u,new g(function(t){var e=p.getWidth(l),n=p.getHeight(l),r=Math.floor(e*s),o=Math.floor(n*f),i=h.create(r,o),a=h.get2dContext(i);a.drawImage(l,0,0,e,n,0,0,r,o),t(i)}));return c?d.then(function(t){return e(t,n,r)}):d}},Q={rotate:function(c,l){return c.toCanvas().then(function(t){return e=t,n=c.getType(),r=l,o=h.create(e.width,e.height),i=h.get2dContext(o),90!=(r=r<(u=a=0)?360+r:r)&&270!=r||h.resize(o,o.height,o.width),90!=r&&180!=r||(a=o.width),270!=r&&180!=r||(u=o.height),i.translate(a,u),i.rotate(r*Math.PI/180),i.drawImage(e,0,0),M.fromCanvas(o,n);var e,n,r,o,i,a,u})},flip:function(a,u){return a.toCanvas().then(function(t){return e=t,n=a.getType(),r=u,o=h.create(e.width,e.height),i=h.get2dContext(o),"v"==r?(i.scale(1,-1),i.drawImage(e,0,-o.height)):(i.scale(-1,1),i.drawImage(e,-o.width,0)),M.fromCanvas(o,n);var e,n,r,o,i})},crop:function(c,l,s,f,d){return c.toCanvas().then(function(t){return e=t,n=c.getType(),r=l,o=s,i=f,a=d,u=h.create(i,a),h.get2dContext(u).drawImage(e,-r,-o),M.fromCanvas(u,n);var e,n,r,o,i,a,u})},resize:function(e,n,r){return e.toCanvas().then(function(t){return Z.scale(t,n,r).then(function(t){return M.fromCanvas(t,e.getType())})})}},tt=function(){function t(t){this.littleEndian=!1,this._dv=new DataView(t)}return t.prototype.readByteAt=function(t){return this._dv.getUint8(t)},t.prototype.read=function(t,e){if(t+e>this.length())return null;for(var n=this.littleEndian?0:-8*(e-1),r=0,o=0;r<e;r++)o|=this.readByteAt(t+r)<<Math.abs(n+8*r);return o},t.prototype.BYTE=function(t){return this.read(t,1)},t.prototype.SHORT=function(t){return this.read(t,2)},t.prototype.LONG=function(t){return this.read(t,4)},t.prototype.SLONG=function(t){var e=this.read(t,4);return 2147483647<e?e-4294967296:e},t.prototype.CHAR=function(t){return String.fromCharCode(this.read(t,1))},t.prototype.STRING=function(t,e){return this.asArray("CHAR",t,e).join("")},t.prototype.SEGMENT=function(t,e){var n=this._dv.buffer;switch(arguments.length){case 2:return n.slice(t,t+e);case 1:return n.slice(t);default:return n}},t.prototype.asArray=function(t,e,n){for(var r=[],o=0;o<n;o++)r[o]=this[t](e+o);return r},t.prototype.length=function(){return this._dv?this._dv.byteLength:0},t}(),et={274:"Orientation",270:"ImageDescription",271:"Make",272:"Model",305:"Software",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},nt={36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37386:"FocalLength",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},rt={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"},ot={513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength"},it={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}},at=function(){function t(t){this._offsets={tiffHeader:10,IFD0:null,IFD1:null,exifIFD:null,gpsIFD:null},this._tiffTags={};var e=this;if(e._reader=new tt(t),e._idx=e._offsets.tiffHeader,65505!==e.SHORT(0)||"EXIF\0"!==e.STRING(4,5).toUpperCase())throw new Error("Exif data cannot be read or not available.");if(e._reader.littleEndian=18761==e.SHORT(e._idx),42!==e.SHORT(e._idx+=2))throw new Error("Invalid Exif data.");e._offsets.IFD0=e._offsets.tiffHeader+e.LONG(e._idx+=2),e._tiffTags=e.extractTags(e._offsets.IFD0,et),"ExifIFDPointer"in e._tiffTags&&(e._offsets.exifIFD=e._offsets.tiffHeader+e._tiffTags.ExifIFDPointer,delete e._tiffTags.ExifIFDPointer),"GPSInfoIFDPointer"in e._tiffTags&&(e._offsets.gpsIFD=e._offsets.tiffHeader+e._tiffTags.GPSInfoIFDPointer,delete e._tiffTags.GPSInfoIFDPointer);var n=e.LONG(e._offsets.IFD0+12*e.SHORT(e._offsets.IFD0)+2);n&&(e._offsets.IFD1=e._offsets.tiffHeader+n)}return t.prototype.BYTE=function(t){return this._reader.BYTE(t)},t.prototype.SHORT=function(t){return this._reader.SHORT(t)},t.prototype.LONG=function(t){return this._reader.LONG(t)},t.prototype.SLONG=function(t){return this._reader.SLONG(t)},t.prototype.CHAR=function(t){return this._reader.CHAR(t)},t.prototype.STRING=function(t,e){return this._reader.STRING(t,e)},t.prototype.SEGMENT=function(t,e){return this._reader.SEGMENT(t,e)},t.prototype.asArray=function(t,e,n){for(var r=[],o=0;o<n;o++)r[o]=this[t](e+o);return r},t.prototype.length=function(){return this._reader.length()},t.prototype.UNDEFINED=function(){return this.BYTE.apply(this,arguments)},t.prototype.RATIONAL=function(t){return this.LONG(t)/this.LONG(t+4)},t.prototype.SRATIONAL=function(t){return this.SLONG(t)/this.SLONG(t+4)},t.prototype.ASCII=function(t){return this.CHAR(t)},t.prototype.TIFF=function(){return this._tiffTags},t.prototype.EXIF=function(){var t=null;if(this._offsets.exifIFD){try{t=this.extractTags(this._offsets.exifIFD,nt)}catch(r){return null}if(t.ExifVersion&&Array.isArray(t.ExifVersion)){for(var e=0,n="";e<t.ExifVersion.length;e++)n+=String.fromCharCode(t.ExifVersion[e]);t.ExifVersion=n}}return t},t.prototype.GPS=function(){var t=null;if(this._offsets.gpsIFD){try{t=this.extractTags(this._offsets.gpsIFD,rt)}catch(e){return null}t.GPSVersionID&&Array.isArray(t.GPSVersionID)&&(t.GPSVersionID=t.GPSVersionID.join("."))}return t},t.prototype.thumb=function(){var t=this;if(t._offsets.IFD1)try{var e=t.extractTags(t._offsets.IFD1,ot);if("JPEGInterchangeFormat"in e)return t.SEGMENT(t._offsets.tiffHeader+e.JPEGInterchangeFormat,e.JPEGInterchangeFormatLength)}catch(n){}return null},t.prototype.extractTags=function(t,e){var n,r,o,i,a,u,c,l,s=this,f=[],d={},h={1:"BYTE",7:"UNDEFINED",2:"ASCII",3:"SHORT",4:"LONG",5:"RATIONAL",9:"SLONG",10:"SRATIONAL"},p={BYTE:1,UNDEFINED:1,ASCII:1,SHORT:2,LONG:4,RATIONAL:8,SLONG:4,SRATIONAL:8};for(n=s.SHORT(t),r=0;r<n;r++)if(f=[],c=t+2+12*r,(o=e[s.SHORT(c)])!==undefined){if(i=h[s.SHORT(c+=2)],a=s.LONG(c+=2),!(u=p[i]))throw new Error("Invalid Exif data.");if(c+=4,4<u*a&&(c=s.LONG(c)+s._offsets.tiffHeader),c+u*a>=s.length())throw new Error("Invalid Exif data.");"ASCII"!==i?(f=s.asArray(i,c,a),l=1==a?f[0]:f,it.hasOwnProperty(o)&&"object"!=typeof l?d[o]=it[o][l]:d[o]=l):d[o]=s.STRING(c,a).replace(/\0$/,"").trim()}return d},t}(),ut=function(t){var e,n,r=[],o=0;for(e=2;e<=t.length();)if(65488<=(n=t.SHORT(e))&&n<=65495)e+=2;else{if(65498===n||65497===n)break;o=t.SHORT(e+2)+2,65505<=n&&n<=65519&&r.push({hex:n,name:"APP"+(15&n),start:e,length:o,segment:t.SEGMENT(e,o)}),e+=o}return r},ct=function(u){return k.blobToArrayBuffer(u).then(function(t){try{var e=new tt(t);if(65496===e.SHORT(0)){var n=ut(e),r=n.filter(function(t){return"APP1"===t.name}),o={};if(!r.length)return g.reject("Headers did not include required information");var i=new at(r[0].segment);return(o={tiff:i.TIFF(),exif:i.EXIF(),gps:i.GPS(),thumb:i.thumb()}).rawHeaders=n,o}return g.reject("Image was not a jpeg")}catch(a){return g.reject("Unsupported format or not an image: "+u.type+" (Exception: "+a.message+")")}})},lt=function(t,e){return Q.rotate(t,e)},st={invert:function(t){return K.invert(t)},sharpen:function(t){return K.sharpen(t)},emboss:function(t){return K.emboss(t)},brightness:function(t,e){return K.brightness(t,e)},hue:function(t,e){return K.hue(t,e)},saturate:function(t,e){return K.saturate(t,e)},contrast:function(t,e){return K.contrast(t,e)},grayscale:function(t,e){return K.grayscale(t,e)},sepia:function(t,e){return K.sepia(t,e)},colorize:function(t,e,n,r){return K.colorize(t,e,n,r)},gamma:function(t,e){return K.gamma(t,e)},exposure:function(t,e){return K.exposure(t,e)},flip:function(t,e){return Q.flip(t,e)},crop:function(t,e,n,r,o){return Q.crop(t,e,n,r,o)},resize:function(t,e,n){return Q.resize(t,e,n)},rotate:lt,exifRotate:function(e){return e.toBlob().then(ct).then(function(t){switch(t.tiff.Orientation){case 6:return lt(e,90);case 3:return lt(e,180);case 8:return lt(e,270);default:return e}},function(){return e})}},ft=function(t){return t.toBlob()},dt={blobToImageResult:function(t){return M.fromBlob(t)},fromBlobAndUrlSync:function(t,e){return M.fromBlobAndUrlSync(t,e)},imageToImageResult:function(t){return M.fromImage(t)},imageResultToBlob:function(t,e,n){return e===undefined&&n===undefined?ft(t):t.toAdjustedBlob(e,n)},imageResultToOriginalBlob:ft,imageResultToDataURL:function(t){return t.toDataURL()}},ht=function(){return S.getOrDie("URL")},pt={createObjectURL:function(t){return ht().createObjectURL(t)},revokeObjectURL:function(t){ht().revokeObjectURL(t)}},gt=tinymce.util.Tools.resolve("tinymce.util.Delay"),mt=tinymce.util.Tools.resolve("tinymce.util.Promise"),yt=tinymce.util.Tools.resolve("tinymce.util.URI"),vt=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),bt=tinymce.util.Tools.resolve("tinymce.ui.Factory"),wt=tinymce.util.Tools.resolve("tinymce.geom.Rect"),xt=function(n){return new mt(function(t){var e=function(){n.removeEventListener("load",e),t(n)};n.complete?t(n):n.addEventListener("load",e)})},It=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),Tt=tinymce.util.Tools.resolve("tinymce.util.Observable"),Rt=tinymce.util.Tools.resolve("tinymce.util.VK"),St=0,Ot={create:function(t){return new(bt.get("Control").extend({Defaults:{classes:"imagepanel"},selection:function(t){return arguments.length?(this.state.set("rect",t),this):this.state.get("rect")},imageSize:function(){var t=this.state.get("viewRect");return{w:t.w,h:t.h}},toggleCropRect:function(t){this.state.set("cropEnabled",t)},imageSrc:function(t){var o=this,i=new Image;i.src=t,xt(i).then(function(){var t,e,n=o.state.get("viewRect");if((e=o.$el.find("img"))[0])e.replaceWith(i);else{var r=document.createElement("div");r.className="mce-imagepanel-bg",o.getEl().appendChild(r),o.getEl().appendChild(i)}t={x:0,y:0,w:i.naturalWidth,h:i.naturalHeight},o.state.set("viewRect",t),o.state.set("rect",wt.inflate(t,-20,-20)),n&&n.w===t.w&&n.h===t.h||o.zoomFit(),o.repaintImage(),o.fire("load")})},zoom:function(t){return arguments.length?(this.state.set("zoom",t),this):this.state.get("zoom")},postRender:function(){return this.imageSrc(this.settings.imageSrc),this._super()},zoomFit:function(){var t,e,n,r,o,i;t=this.$el.find("img"),e=this.getEl().clientWidth,n=this.getEl().clientHeight,r=t[0].naturalWidth,o=t[0].naturalHeight,1<=(i=Math.min((e-10)/r,(n-10)/o))&&(i=1),this.zoom(i)},repaintImage:function(){var t,e,n,r,o,i,a,u,c,l,s;s=this.getEl(),c=this.zoom(),l=this.state.get("rect"),a=this.$el.find("img"),u=this.$el.find(".mce-imagepanel-bg"),o=s.offsetWidth,i=s.offsetHeight,n=a[0].naturalWidth*c,r=a[0].naturalHeight*c,t=Math.max(0,o/2-n/2),e=Math.max(0,i/2-r/2),a.css({left:t,top:e,width:n,height:r}),u.css({left:t,top:e,width:n,height:r}),this.cropRect&&(this.cropRect.setRect({x:l.x*c+t,y:l.y*c+e,w:l.w*c,h:l.h*c}),this.cropRect.setClampRect({x:t,y:e,w:n,h:r}),this.cropRect.setViewPortRect({x:0,y:0,w:o,h:i}))},bindStates:function(){var r=this;function n(t){r.cropRect=function(l,n,s,r,o){var f,a,t,i,e="mce-",u=e+"crid-"+St++;function d(t,e){return{x:e.x-t.x,y:e.y-t.y,w:e.w,h:e.h}}function c(t,e,n,r){var o,i,a,u,c;o=e.x,i=e.y,a=e.w,u=e.h,o+=n*t.deltaX,i+=r*t.deltaY,(a+=n*t.deltaW)<20&&(a=20),(u+=r*t.deltaH)<20&&(u=20),c=l=wt.clamp({x:o,y:i,w:a,h:u},s,"move"===t.name),c=d(s,c),f.fire("updateRect",{rect:c}),g(c)}function h(e){function t(t,e){e.h<0&&(e.h=0),e.w<0&&(e.w=0),It("#"+u+"-"+t,r).css({left:e.x,top:e.y,width:e.w,height:e.h})}$.each(a,function(t){It("#"+u+"-"+t.name,r).css({left:e.w*t.xMul+e.x,top:e.h*t.yMul+e.y})}),t("top",{x:n.x,y:n.y,w:n.w,h:e.y-n.y}),t("right",{x:e.x+e.w,y:e.y,w:n.w-e.x-e.w+n.x,h:e.h}),t("bottom",{x:n.x,y:e.y+e.h,w:n.w,h:n.h-e.y-e.h+n.y}),t("left",{x:n.x,y:e.y,w:e.x-n.x,h:e.h}),t("move",e)}function p(t){h(l=t)}function g(t){var e,n;p((e=s,{x:(n=t).x+e.x,y:n.y+e.y,w:n.w,h:n.h}))}return a=[{name:"move",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:0,deltaH:0,label:"Crop Mask"},{name:"nw",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:-1,deltaH:-1,label:"Top Left Crop Handle"},{name:"ne",xMul:1,yMul:0,deltaX:0,deltaY:1,deltaW:1,deltaH:-1,label:"Top Right Crop Handle"},{name:"sw",xMul:0,yMul:1,deltaX:1,deltaY:0,deltaW:-1,deltaH:1,label:"Bottom Left Crop Handle"},{name:"se",xMul:1,yMul:1,deltaX:0,deltaY:0,deltaW:1,deltaH:1,label:"Bottom Right Crop Handle"}],i=["top","right","bottom","left"],It('<div id="'+u+'" class="'+e+'croprect-container" role="grid" aria-dropeffect="execute">').appendTo(r),$.each(i,function(t){It("#"+u,r).append('<div id="'+u+"-"+t+'"class="'+e+'croprect-block" style="display: none" data-mce-bogus="all">')}),$.each(a,function(t){It("#"+u,r).append('<div id="'+u+"-"+t.name+'" class="'+e+"croprect-handle "+e+"croprect-handle-"+t.name+'"style="display: none" data-mce-bogus="all" role="gridcell" tabindex="-1" aria-label="'+t.label+'" aria-grabbed="false">')}),t=$.map(a,function(e){var n;return new(bt.get("DragHelper"))(u,{document:r.ownerDocument,handle:u+"-"+e.name,start:function(){n=l},drag:function(t){c(e,n,t.deltaX,t.deltaY)}})}),h(l),It(r).on("focusin focusout",function(t){It(t.target).attr("aria-grabbed","focus"===t.type)}),It(r).on("keydown",function(e){var i;function t(t,e,n,r,o){t.stopPropagation(),t.preventDefault(),c(i,n,r,o)}switch($.each(a,function(t){if(e.target.id===u+"-"+t.name)return i=t,!1}),e.keyCode){case Rt.LEFT:t(e,0,l,-10,0);break;case Rt.RIGHT:t(e,0,l,10,0);break;case Rt.UP:t(e,0,l,0,-10);break;case Rt.DOWN:t(e,0,l,0,10);break;case Rt.ENTER:case Rt.SPACEBAR:e.preventDefault(),o()}}),f=$.extend({toggleVisibility:function(t){var e;e=$.map(a,function(t){return"#"+u+"-"+t.name}).concat($.map(i,function(t){return"#"+u+"-"+t})).join(","),t?It(e,r).show():It(e,r).hide()},setClampRect:function(t){s=t,h(l)},setRect:p,getInnerRect:function(){return d(s,l)},setInnerRect:g,setViewPortRect:function(t){n=t,h(l)},destroy:function(){$.each(t,function(t){t.destroy()}),t=[]}},Tt)}(t,r.state.get("viewRect"),r.state.get("viewRect"),r.getEl(),function(){r.fire("crop")}),r.cropRect.on("updateRect",function(t){var e=t.rect,n=r.zoom();e={x:Math.round(e.x/n),y:Math.round(e.y/n),w:Math.round(e.w/n),h:Math.round(e.h/n)},r.state.set("rect",e)}),r.on("remove",r.cropRect.destroy)}r.state.on("change:cropEnabled",function(t){r.cropRect.toggleVisibility(t.value),r.repaintImage()}),r.state.on("change:zoom",function(){r.repaintImage()}),r.state.on("change:rect",function(t){var e=t.value;r.cropRect||n(e),r.cropRect.setRect(e)})}}))(t)}};function Ft(t){return{blob:t,url:pt.createObjectURL(t)}}function Ct(t){t&&pt.revokeObjectURL(t.url)}function Et(t){$.each(t,Ct)}function Dt(i,a,t,e){var u,n,r,c,o,l,s,f,d,h,p,g,m,y,v,b,w,x,I,T,R,S,O,F,C,E,D,A=function(){var n=[],r=-1;function t(){return 0<r}function e(){return-1!==r&&r<n.length-1}return{data:n,add:function(t){var e;return e=n.splice(++r),n.push(t),{state:t,removed:e}},undo:function(){if(t())return n[--r]},redo:function(){if(e())return n[++r]},canUndo:t,canRedo:e}}(),_=function(t){return i.rtl?t.reverse():t};function k(t){var e,n,r,o;e=u.find("#w")[0],n=u.find("#h")[0],r=parseInt(e.value(),10),o=parseInt(n.value(),10),u.find("#constrain")[0].checked()&&F&&C&&r&&o&&("w"===t.control.settings.name?(o=Math.round(r*E),n.value(o)):(r=Math.round(o*D),e.value(r))),F=r,C=o}function L(t){return Math.round(100*t)+"%"}function P(){u.find("#undo").disabled(!A.canUndo()),u.find("#redo").disabled(!A.canRedo()),u.statusbar.find("#save").disabled(!A.canUndo())}function B(){u.find("#undo").disabled(!0),u.find("#redo").disabled(!0)}function H(t){t&&f.imageSrc(t.url)}function M(e){return function(){var t=$.grep(O,function(t){return t.settings.name!==e});$.each(t,function(t){t.hide()}),e.show(),e.focus()}}function N(t){H(c=Ft(t))}function U(t){H(a=Ft(t)),Et(A.add(a).removed),P()}function j(){var e=f.selection();dt.blobToImageResult(a.blob).then(function(t){st.crop(t,e.x,e.y,e.w,e.h).then(q).then(function(t){U(t),z()})})}var G=function(e){var n=[].slice.call(arguments,1);return function(){var t=c||a;dt.blobToImageResult(t.blob).then(function(t){e.apply(this,[t].concat(n)).then(q).then(N)})}};function z(){H(a),Ct(c),M(n)(),P()}function V(){c?(U(c.blob),z()):function t(e,n){c?n():setTimeout(function(){0<e--?t(e,n):i.windowManager.alert("Error: failed to apply image operation.")},10)}(100,V)}function W(t){return bt.create("Form",{layout:"flex",direction:"row",labelGap:5,border:"0 0 1 0",align:"center",pack:"center",padding:"0 10 0 10",spacing:5,flex:0,minHeight:60,defaults:{classes:"imagetool",type:"button"},items:t})}var q=function(t){return t.toBlob()};function Y(t,e){return W(_([{text:"Back",onclick:z},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:V}])).hide().on("show",function(){B(),dt.blobToImageResult(a.blob).then(function(t){return e(t)}).then(q).then(function(t){var e=Ft(t);H(e),Ct(c),c=e})})}function X(t,n,e,r,o){return W(_([{text:"Back",onclick:z},{type:"spacer",flex:1},{type:"slider",flex:1,ondragend:function(t){var e;e=t.value,dt.blobToImageResult(a.blob).then(function(t){return n(t,e)}).then(q).then(function(t){var e=Ft(t);H(e),Ct(c),c=e})},minValue:i.rtl?o:r,maxValue:i.rtl?r:o,value:e,previewFilter:L},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:V}])).hide().on("show",function(){this.find("slider").value(e),B()})}o=W(_([{text:"Back",onclick:z},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:j}])).hide().on("show hide",function(t){f.toggleCropRect("show"===t.type)}).on("show",B),l=W(_([{text:"Back",onclick:z},{type:"spacer",flex:1},{type:"textbox",name:"w",label:"Width",size:4,onkeyup:k},{type:"textbox",name:"h",label:"Height",size:4,onkeyup:k},{type:"checkbox",name:"constrain",text:"Constrain proportions",checked:!0,onchange:function(t){!0===t.control.value()&&(E=C/F,D=F/C)}},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:"submit"}])).hide().on("submit",function(t){var e=parseInt(u.find("#w").value(),10),n=parseInt(u.find("#h").value(),10);t.preventDefault(),function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=[].slice.call(arguments,1);return function(){dt.blobToImageResult(a.blob).then(function(t){e.apply(this,[t].concat(r)).then(q).then(U)})}}(st.resize,e,n)(),z()}).on("show",B),s=W(_([{text:"Back",onclick:z},{type:"spacer",flex:1},{icon:"fliph",tooltip:"Flip horizontally",onclick:G(st.flip,"h")},{icon:"flipv",tooltip:"Flip vertically",onclick:G(st.flip,"v")},{icon:"rotateleft",tooltip:"Rotate counterclockwise",onclick:G(st.rotate,-90)},{icon:"rotateright",tooltip:"Rotate clockwise",onclick:G(st.rotate,90)},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:V}])).hide().on("show",B),p=Y(0,st.invert),I=Y(0,st.sharpen),T=Y(0,st.emboss),g=X(0,st.brightness,0,-1,1),m=X(0,st.hue,180,0,360),y=X(0,st.saturate,0,-1,1),v=X(0,st.contrast,0,-1,1),b=X(0,st.grayscale,0,0,1),w=X(0,st.sepia,0,0,1),x=function(t,o){function e(){var e,n,r;e=u.find("#r")[0].value(),n=u.find("#g")[0].value(),r=u.find("#b")[0].value(),dt.blobToImageResult(a.blob).then(function(t){return o(t,e,n,r)}).then(q).then(function(t){var e=Ft(t);H(e),Ct(c),c=e})}var n=i.rtl?2:0,r=i.rtl?0:2;return W(_([{text:"Back",onclick:z},{type:"spacer",flex:1},{type:"slider",label:"R",name:"r",minValue:n,value:1,maxValue:r,ondragend:e,previewFilter:L},{type:"slider",label:"G",name:"g",minValue:n,value:1,maxValue:r,ondragend:e,previewFilter:L},{type:"slider",label:"B",name:"b",minValue:n,value:1,maxValue:r,ondragend:e,previewFilter:L},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:V}])).hide().on("show",function(){u.find("#r,#g,#b").value(1),B()})}(0,st.colorize),R=X(0,st.gamma,0,-1,1),S=X(0,st.exposure,1,0,2),r=W(_([{text:"Back",onclick:z},{type:"spacer",flex:1},{text:"hue",icon:"hue",onclick:M(m)},{text:"saturate",icon:"saturate",onclick:M(y)},{text:"sepia",icon:"sepia",onclick:M(w)},{text:"emboss",icon:"emboss",onclick:M(T)},{text:"exposure",icon:"exposure",onclick:M(S)},{type:"spacer",flex:1}])).hide(),n=W(_([{tooltip:"Crop",icon:"crop",onclick:M(o)},{tooltip:"Resize",icon:"resize2",onclick:M(l)},{tooltip:"Orientation",icon:"orientation",onclick:M(s)},{tooltip:"Brightness",icon:"sun",onclick:M(g)},{tooltip:"Sharpen",icon:"sharpen",onclick:M(I)},{tooltip:"Contrast",icon:"contrast",onclick:M(v)},{tooltip:"Color levels",icon:"drop",onclick:M(x)},{tooltip:"Gamma",icon:"gamma",onclick:M(R)},{tooltip:"Invert",icon:"invert",onclick:M(p)}])),f=Ot.create({flex:1,imageSrc:a.url}),d=bt.create("Container",{layout:"flex",direction:"column",pack:"start",border:"0 1 0 0",padding:5,spacing:5,items:[{type:"button",icon:"undo",tooltip:"Undo",name:"undo",onclick:function(){H(a=A.undo()),P()}},{type:"button",icon:"redo",tooltip:"Redo",name:"redo",onclick:function(){H(a=A.redo()),P()}},{type:"button",icon:"zoomin",tooltip:"Zoom in",onclick:function(){var t=f.zoom();t<2&&(t+=.1),f.zoom(t)}},{type:"button",icon:"zoomout",tooltip:"Zoom out",onclick:function(){var t=f.zoom();.1<t&&(t-=.1),f.zoom(t)}}]}),h=bt.create("Container",{type:"container",layout:"flex",direction:"row",align:"stretch",flex:1,items:_([d,f])}),O=[n,o,l,s,r,p,g,m,y,v,b,w,x,I,T,R,S],(u=i.windowManager.open({layout:"flex",direction:"column",align:"stretch",minWidth:Math.min(vt.DOM.getViewPort().w,800),minHeight:Math.min(vt.DOM.getViewPort().h,650),title:"Edit image",items:O.concat([h]),buttons:_([{text:"Save",name:"save",subtype:"primary",onclick:function(){t(a.blob),u.close()}},{text:"Cancel",onclick:"close"}])})).on("close",function(){e(),Et(A.data),c=A=null}),A.add(a),P(),f.on("load",function(){F=f.imageSize().w,C=f.imageSize().h,E=C/F,D=F/C,u.find("#w").value(F),u.find("#h").value(C)}),f.on("crop",j)}var At,_t={edit:function(r,t){return new mt(function(e,n){return t.toBlob().then(function(t){Dt(r,Ft(t),e,n)})})}},kt={getImageSize:function(t){var e,n;function r(t){return/^[0-9\.]+px$/.test(t)}return e=t.style.width,n=t.style.height,e||n?r(e)&&r(n)?{w:parseInt(e,10),h:parseInt(n,10)}:null:(e=t.width,n=t.height,e&&n?{w:parseInt(e,10),h:parseInt(n,10)}:null)},setImageSize:function(t,e){var n,r;e&&(n=t.style.width,r=t.style.height,(n||r)&&(t.style.width=e.w+"px",t.style.height=e.h+"px",t.removeAttribute("data-mce-style")),n=t.width,r=t.height,(n||r)&&(t.setAttribute("width",e.w),t.setAttribute("height",e.h)))},getNaturalImageSize:function(t){return{w:t.naturalWidth,h:t.naturalHeight}}},Lt=(At="function",function(t){return function(t){if(null===t)return"null";var e=typeof t;return"object"===e&&Array.prototype.isPrototypeOf(t)?"array":"object"===e&&String.prototype.isPrototypeOf(t)?"string":e}(t)===At}),Pt=function(t,e){for(var n=0,r=t.length;n<r;n++){var o=t[n];if(e(o,n,t))return I.some(o)}return I.none()};Array.prototype.slice;Lt(Array.from)&&Array.from;var Bt=function(t){return null!==t&&t!==undefined},Ht=function(t,e){var n;return n=e.reduce(function(t,e){return Bt(t)?t[e]:undefined},t),Bt(n)?n:null},Mt=function(e){return new mt(function(n){var t=O();t.onload=function(t){var e=t.target;n(e.result)},t.readAsText(e)})},Nt=function(e,r,o){return new mt(function(t){var n;(n=new(S.getOrDie("XMLHttpRequest"))).onreadystatechange=function(){4===n.readyState&&t({status:n.status,blob:this.response})},n.open("GET",e,!0),n.withCredentials=o,$.each(r,function(t,e){n.setRequestHeader(e,t)}),n.responseType="blob",n.send()})},Ut=function(t){var e;try{e=JSON.parse(t)}catch(n){}return e},jt=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],Gt=[{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],zt=function(e){return"ImageProxy HTTP error: "+Pt(jt,function(t){return e===t.code}).fold(a("Unknown ImageProxy error"),function(t){return t.message})},Vt=function(t){var e=zt(t);return mt.reject(e)},Wt=function(e){return Pt(Gt,function(t){return t.type===e}).fold(a("Unknown service error"),function(t){return t.message})},qt=function(t,e){return Mt(e).then(function(t){var e,n,r=(e=Ut(t),"ImageProxy Service error: "+((n=Ht(e,["error","type"]))?Wt(n):"Invalid JSON in service error message"));return mt.reject(r)})},Yt=function(t,e){return 400===(n=t)||403===n||500===n?qt(0,e):Vt(t);var n},Xt=Vt,$t=function(t,e){var n,r,o,i={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":e};return Nt((n=t,r=e,o=-1===n.indexOf("?")?"?":"&",/[?&]apiKey=/.test(n)||!r?n:n+o+"apiKey="+encodeURIComponent(r)),i,!1).then(function(t){return t.status<200||300<=t.status?Yt(t.status,t.blob):mt.resolve(t.blob)})},Jt=function(t,e,n){return e?$t(t,e):Nt(t,{},n).then(function(t){return t.status<200||300<=t.status?Xt(t.status):mt.resolve(t.blob)})},Kt=0,Zt=function(t,e){t.notificationManager.open({text:e,type:"error"})},Qt=function(t){return t.selection.getNode()},te=function(t,e){var n=e.src;return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new yt(n).host===t.documentBaseURI.host},ee=function(t,e){return-1!==$.inArray(t.getParam("imagetools_cors_hosts",[],"string[]"),new yt(e.src).host)},ne=function(t,e){var n,r,o,i,a=e.src;return ee(t,e)?Jt(e.src,null,(r=t,o=e,-1!==$.inArray(r.getParam("imagetools_credentials_hosts",[],"string[]"),new yt(o.src).host))):te(t,e)?P(e):(a=t.getParam("imagetools_proxy"),a+=(-1===a.indexOf("?")?"?":"&")+"url="+encodeURIComponent(e.src),n=(i=t).getParam("api_key",i.getParam("imagetools_api_key","","string"),"string"),Jt(a,n,!1))},re=function(t){var e;return(e=t.editorUpload.blobCache.getByUri(Qt(t).src))?mt.resolve(e.blob()):ne(t,Qt(t))},oe=function(t){clearTimeout(t.get())},ie=function(c,l,s,f,d){return l.toBlob().then(function(t){var e,n,r,o,i,a,u;return r=c.editorUpload.blobCache,e=(i=Qt(c)).src,c.getParam("images_reuse_filename",!1,"boolean")&&((o=r.getByUri(e))?(e=o.uri(),n=o.name()):(a=c,n=(u=e.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i))?a.dom.encode(u[1]):null)),o=r.create({id:"imagetools"+Kt++,blob:t,base64:l.toBase64(),uri:e,name:n}),r.add(o),c.undoManager.transact(function(){c.$(i).on("load",function t(){var e,n,r;c.$(i).off("load",t),c.nodeChanged(),s?c.editorUpload.uploadImagesAuto():(oe(f),e=c,n=f,r=gt.setEditorTimeout(e,function(){e.editorUpload.uploadImagesAuto()},e.getParam("images_upload_timeout",3e4,"number")),n.set(r))}),d&&c.$(i).attr({width:d.w,height:d.h}),c.$(i).attr({src:o.blobUri()}).removeAttr("data-mce-src")}),o})},ae=function(e,n,t,r){return function(){return e._scanForImages().then(u(re,e)).then(dt.blobToImageResult).then(t).then(function(t){return ie(e,t,!1,n,r)},function(t){Zt(e,t)})}},ue=function(n,r,o){return function(){var t=kt.getImageSize(Qt(n)),e=t?{w:t.h,h:t.w}:null;return ae(n,r,function(t){return st.rotate(t,o)},e)()}},ce=function(t,e,n){return function(){return ae(t,e,function(t){return st.flip(t,n)})()}},le=function(e,r){return function(){var o=Qt(e),i=kt.getNaturalImageSize(o),n=function(r){return new mt(function(n){L(r).then(function(t){var e=kt.getNaturalImageSize(t);i.w===e.w&&i.h===e.h||kt.getImageSize(o)&&kt.setImageSize(o,e),pt.revokeObjectURL(t.src),n(r)})})};re(e).then(dt.blobToImageResult).then(u(function(e,t){return _t.edit(e,t).then(n).then(dt.blobToImageResult).then(function(t){return ie(e,t,!0,r)},function(){})},e),function(t){Zt(e,t)})}},se=function(t,e){return t.dom.is(e,"img:not([data-mce-object],[data-mce-placeholder])")&&(te(t,e)||ee(t,e)||t.settings.imagetools_proxy)},fe=oe,de=function(n,t){$.each({mceImageRotateLeft:ue(n,t,-90),mceImageRotateRight:ue(n,t,90),mceImageFlipVertical:ce(n,t,"v"),mceImageFlipHorizontal:ce(n,t,"h"),mceEditImage:le(n,t)},function(t,e){n.addCommand(e,t)})},he=function(n,r,o){n.on("NodeChange",function(t){var e=o.get();e&&e.src!==t.element.src&&(fe(r),n.editorUpload.uploadImagesAuto(),o.set(null)),se(n,t.element)&&o.set(t.element)})},pe=function(t){t.addButton("rotateleft",{title:"Rotate counterclockwise",cmd:"mceImageRotateLeft"}),t.addButton("rotateright",{title:"Rotate clockwise",cmd:"mceImageRotateRight"}),t.addButton("flipv",{title:"Flip vertically",cmd:"mceImageFlipVertical"}),t.addButton("fliph",{title:"Flip horizontally",cmd:"mceImageFlipHorizontal"}),t.addButton("editimage",{title:"Edit image",cmd:"mceEditImage"}),t.addButton("imageoptions",{title:"Image options",icon:"options",cmd:"mceImage"})},ge=function(t){t.addContextToolbar(u(se,t),t.getParam("imagetools_toolbar","rotateleft rotateright | flipv fliph | crop editimage imageoptions"))};t.add("imagetools",function(t){var e=r(0),n=r(null);de(t,e),pe(t),ge(t),he(t,e,n)})}();

/***/ }),

/***/ "226a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_93cc8f0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4d08");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_93cc8f0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_93cc8f0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_93cc8f0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "29a5":
/***/ (function(module, exports) {

tinymce.addI18n('zh_CN',{
"Redo": "\u91cd\u590d",
"Undo": "\u64a4\u6d88",
"Cut": "\u526a\u5207",
"Copy": "\u590d\u5236",
"Paste": "\u7c98\u8d34",
"Select all": "\u5168\u9009",
"New document": "\u65b0\u6587\u6863",
"Ok": "\u786e\u5b9a",
"Cancel": "\u53d6\u6d88",
"Visual aids": "\u7f51\u683c\u7ebf",
"Bold": "\u7c97\u4f53",
"Italic": "\u659c\u4f53",
"Underline": "\u4e0b\u5212\u7ebf",
"Strikethrough": "\u5220\u9664\u7ebf",
"Superscript": "\u4e0a\u6807",
"Subscript": "\u4e0b\u6807",
"Clear formatting": "\u6e05\u9664\u683c\u5f0f",
"Align left": "\u5de6\u5bf9\u9f50",
"Align center": "\u5c45\u4e2d",
"Align right": "\u53f3\u5bf9\u9f50",
"Justify": "\u4e24\u7aef\u5bf9\u9f50",
"Bullet list": "\u9879\u76ee\u7b26\u53f7",
"Numbered list": "\u7f16\u53f7\u5217\u8868",
"Decrease indent": "\u51cf\u5c11\u7f29\u8fdb",
"Increase indent": "\u589e\u52a0\u7f29\u8fdb",
"Close": "\u5173\u95ed",
"Formats": "\u683c\u5f0f",
"Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X\/C\/V keyboard shortcuts instead.": "\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5bf9\u526a\u8d34\u677f\u7684\u8bbf\u95ee\uff0c\u8bf7\u4f7f\u7528Ctrl+X\/C\/V\u952e\u8fdb\u884c\u590d\u5236\u7c98\u8d34\u3002",
"Headers": "\u6807\u9898",
"Header 1": "\u6807\u98981",
"Header 2": "\u6807\u98982",
"Header 3": "\u6807\u98983",
"Header 4": "\u6807\u98984",
"Header 5": "\u6807\u98985",
"Header 6": "\u6807\u98986",
"Headings": "\u6807\u9898",
"Heading 1": "\u6807\u98981",
"Heading 2": "\u6807\u98982",
"Heading 3": "\u6807\u98983",
"Heading 4": "\u6807\u98984",
"Heading 5": "\u6807\u98985",
"Heading 6": "\u6807\u98986",
"Preformatted": "\u9884\u683c\u5f0f\u5316",
"Div": "Div\u533a\u5757",
"Pre": "\u9884\u683c\u5f0f\u6587\u672c",
"Code": "\u4ee3\u7801",
"Paragraph": "\u6bb5\u843d",
"Blockquote": "\u5f15\u7528",
"Inline": "\u6587\u672c",
"Blocks": "\u533a\u5757",
"Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "\u5f53\u524d\u4e3a\u7eaf\u6587\u672c\u7c98\u8d34\u6a21\u5f0f\uff0c\u518d\u6b21\u70b9\u51fb\u53ef\u4ee5\u56de\u5230\u666e\u901a\u7c98\u8d34\u6a21\u5f0f\u3002",
"Font Family": "\u5b57\u4f53",
"Font Sizes": "\u5b57\u53f7",
"Class": "Class",
"Browse for an image": "\u6d4f\u89c8\u56fe\u50cf",
"OR": "\u6216",
"Drop an image here": "\u62d6\u653e\u4e00\u5f20\u56fe\u50cf\u81f3\u6b64",
"Upload": "\u4e0a\u4f20",
"Block": "\u5757",
"Align": "\u5bf9\u9f50",
"Default": "\u9ed8\u8ba4",
"Circle": "\u7a7a\u5fc3\u5706",
"Disc": "\u5b9e\u5fc3\u5706",
"Square": "\u65b9\u5757",
"Lower Alpha": "\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd",
"Lower Greek": "\u5c0f\u5199\u5e0c\u814a\u5b57\u6bcd",
"Lower Roman": "\u5c0f\u5199\u7f57\u9a6c\u5b57\u6bcd",
"Upper Alpha": "\u5927\u5199\u82f1\u6587\u5b57\u6bcd",
"Upper Roman": "\u5927\u5199\u7f57\u9a6c\u5b57\u6bcd",
"Anchor": "\u951a\u70b9",
"Name": "\u540d\u79f0",
"Id": "\u6807\u8bc6\u7b26",
"Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.": "\u6807\u8bc6\u7b26\u5e94\u8be5\u4ee5\u5b57\u6bcd\u5f00\u5934\uff0c\u540e\u8ddf\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7834\u6298\u53f7\u3001\u70b9\u3001\u5192\u53f7\u6216\u4e0b\u5212\u7ebf\u3002",
"You have unsaved changes are you sure you want to navigate away?": "\u4f60\u8fd8\u6709\u6587\u6863\u5c1a\u672a\u4fdd\u5b58\uff0c\u786e\u5b9a\u8981\u79bb\u5f00\uff1f",
"Restore last draft": "\u6062\u590d\u4e0a\u6b21\u7684\u8349\u7a3f",
"Special character": "\u7279\u6b8a\u7b26\u53f7",
"Source code": "\u6e90\u4ee3\u7801",
"Insert\/Edit code sample": "\u63d2\u5165\/\u7f16\u8f91\u4ee3\u7801\u793a\u4f8b",
"Language": "\u8bed\u8a00",
"Code sample": "\u4ee3\u7801\u793a\u4f8b",
"Color": "\u989c\u8272",
"R": "R",
"G": "G",
"B": "B",
"Left to right": "\u4ece\u5de6\u5230\u53f3",
"Right to left": "\u4ece\u53f3\u5230\u5de6",
"Emoticons": "\u8868\u60c5",
"Document properties": "\u6587\u6863\u5c5e\u6027",
"Title": "\u6807\u9898",
"Keywords": "\u5173\u952e\u8bcd",
"Description": "\u63cf\u8ff0",
"Robots": "\u673a\u5668\u4eba",
"Author": "\u4f5c\u8005",
"Encoding": "\u7f16\u7801",
"Fullscreen": "\u5168\u5c4f",
"Action": "\u64cd\u4f5c",
"Shortcut": "\u5feb\u6377\u952e",
"Help": "\u5e2e\u52a9",
"Address": "\u5730\u5740",
"Focus to menubar": "\u79fb\u52a8\u7126\u70b9\u5230\u83dc\u5355\u680f",
"Focus to toolbar": "\u79fb\u52a8\u7126\u70b9\u5230\u5de5\u5177\u680f",
"Focus to element path": "\u79fb\u52a8\u7126\u70b9\u5230\u5143\u7d20\u8def\u5f84",
"Focus to contextual toolbar": "\u79fb\u52a8\u7126\u70b9\u5230\u4e0a\u4e0b\u6587\u83dc\u5355",
"Insert link (if link plugin activated)": "\u63d2\u5165\u94fe\u63a5 (\u5982\u679c\u94fe\u63a5\u63d2\u4ef6\u5df2\u6fc0\u6d3b)",
"Save (if save plugin activated)": "\u4fdd\u5b58(\u5982\u679c\u4fdd\u5b58\u63d2\u4ef6\u5df2\u6fc0\u6d3b)",
"Find (if searchreplace plugin activated)": "\u67e5\u627e(\u5982\u679c\u67e5\u627e\u66ff\u6362\u63d2\u4ef6\u5df2\u6fc0\u6d3b)",
"Plugins installed ({0}):": "\u5df2\u5b89\u88c5\u63d2\u4ef6 ({0}):",
"Premium plugins:": "\u4f18\u79c0\u63d2\u4ef6\uff1a",
"Learn more...": "\u4e86\u89e3\u66f4\u591a...",
"You are using {0}": "\u4f60\u6b63\u5728\u4f7f\u7528 {0}",
"Plugins": "\u63d2\u4ef6",
"Handy Shortcuts": "\u5feb\u6377\u952e",
"Horizontal line": "\u6c34\u5e73\u5206\u5272\u7ebf",
"Insert\/edit image": "\u63d2\u5165\/\u7f16\u8f91\u56fe\u7247",
"Image description": "\u56fe\u7247\u63cf\u8ff0",
"Source": "\u5730\u5740",
"Dimensions": "\u5927\u5c0f",
"Constrain proportions": "\u4fdd\u6301\u7eb5\u6a2a\u6bd4",
"General": "\u666e\u901a",
"Advanced": "\u9ad8\u7ea7",
"Style": "\u6837\u5f0f",
"Vertical space": "\u5782\u76f4\u8fb9\u8ddd",
"Horizontal space": "\u6c34\u5e73\u8fb9\u8ddd",
"Border": "\u8fb9\u6846",
"Insert image": "\u63d2\u5165\u56fe\u7247",
"Image": "\u56fe\u7247",
"Image list": "\u56fe\u7247\u5217\u8868",
"Rotate counterclockwise": "\u9006\u65f6\u9488\u65cb\u8f6c",
"Rotate clockwise": "\u987a\u65f6\u9488\u65cb\u8f6c",
"Flip vertically": "\u5782\u76f4\u7ffb\u8f6c",
"Flip horizontally": "\u6c34\u5e73\u7ffb\u8f6c",
"Edit image": "\u7f16\u8f91\u56fe\u7247",
"Image options": "\u56fe\u7247\u9009\u9879",
"Zoom in": "\u653e\u5927",
"Zoom out": "\u7f29\u5c0f",
"Crop": "\u88c1\u526a",
"Resize": "\u8c03\u6574\u5927\u5c0f",
"Orientation": "\u65b9\u5411",
"Brightness": "\u4eae\u5ea6",
"Sharpen": "\u9510\u5316",
"Contrast": "\u5bf9\u6bd4\u5ea6",
"Color levels": "\u989c\u8272\u5c42\u6b21",
"Gamma": "\u4f3d\u9a6c\u503c",
"Invert": "\u53cd\u8f6c",
"Apply": "\u5e94\u7528",
"Back": "\u540e\u9000",
"Insert date\/time": "\u63d2\u5165\u65e5\u671f\/\u65f6\u95f4",
"Date\/time": "\u65e5\u671f\/\u65f6\u95f4",
"Insert link": "\u63d2\u5165\u94fe\u63a5",
"Insert\/edit link": "\u63d2\u5165\/\u7f16\u8f91\u94fe\u63a5",
"Text to display": "\u663e\u793a\u6587\u5b57",
"Url": "\u5730\u5740",
"Target": "\u6253\u5f00\u65b9\u5f0f",
"None": "\u65e0",
"New window": "\u5728\u65b0\u7a97\u53e3\u6253\u5f00",
"Remove link": "\u5220\u9664\u94fe\u63a5",
"Anchors": "\u951a\u70b9",
"Link": "\u94fe\u63a5",
"Paste or type a link": "\u7c98\u8d34\u6216\u8f93\u5165\u94fe\u63a5",
"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "\u4f60\u6240\u586b\u5199\u7684URL\u5730\u5740\u4e3a\u90ae\u4ef6\u5730\u5740\uff0c\u9700\u8981\u52a0\u4e0amailto:\u524d\u7f00\u5417\uff1f",
"The URL you entered seems to be an external link. Do you want to add the required http:\/\/ prefix?": "\u4f60\u6240\u586b\u5199\u7684URL\u5730\u5740\u5c5e\u4e8e\u5916\u90e8\u94fe\u63a5\uff0c\u9700\u8981\u52a0\u4e0ahttp:\/\/:\u524d\u7f00\u5417\uff1f",
"Link list": "\u94fe\u63a5\u5217\u8868",
"Insert video": "\u63d2\u5165\u89c6\u9891",
"Insert\/edit video": "\u63d2\u5165\/\u7f16\u8f91\u89c6\u9891",
"Insert\/edit media": "\u63d2\u5165\/\u7f16\u8f91\u5a92\u4f53",
"Alternative source": "\u955c\u50cf",
"Poster": "\u5c01\u9762",
"Paste your embed code below:": "\u5c06\u5185\u5d4c\u4ee3\u7801\u7c98\u8d34\u5728\u4e0b\u9762:",
"Embed": "\u5185\u5d4c",
"Media": "\u5a92\u4f53",
"Nonbreaking space": "\u4e0d\u95f4\u65ad\u7a7a\u683c",
"Page break": "\u5206\u9875\u7b26",
"Paste as text": "\u7c98\u8d34\u4e3a\u6587\u672c",
"Preview": "\u9884\u89c8",
"Print": "\u6253\u5370",
"Save": "\u4fdd\u5b58",
"Find": "\u67e5\u627e",
"Replace with": "\u66ff\u6362\u4e3a",
"Replace": "\u66ff\u6362",
"Replace all": "\u5168\u90e8\u66ff\u6362",
"Prev": "\u4e0a\u4e00\u4e2a",
"Next": "\u4e0b\u4e00\u4e2a",
"Find and replace": "\u67e5\u627e\u548c\u66ff\u6362",
"Could not find the specified string.": "\u672a\u627e\u5230\u641c\u7d22\u5185\u5bb9.",
"Match case": "\u533a\u5206\u5927\u5c0f\u5199",
"Whole words": "\u5168\u5b57\u5339\u914d",
"Spellcheck": "\u62fc\u5199\u68c0\u67e5",
"Ignore": "\u5ffd\u7565",
"Ignore all": "\u5168\u90e8\u5ffd\u7565",
"Finish": "\u5b8c\u6210",
"Add to Dictionary": "\u6dfb\u52a0\u5230\u5b57\u5178",
"Insert table": "\u63d2\u5165\u8868\u683c",
"Table properties": "\u8868\u683c\u5c5e\u6027",
"Delete table": "\u5220\u9664\u8868\u683c",
"Cell": "\u5355\u5143\u683c",
"Row": "\u884c",
"Column": "\u5217",
"Cell properties": "\u5355\u5143\u683c\u5c5e\u6027",
"Merge cells": "\u5408\u5e76\u5355\u5143\u683c",
"Split cell": "\u62c6\u5206\u5355\u5143\u683c",
"Insert row before": "\u5728\u4e0a\u65b9\u63d2\u5165",
"Insert row after": "\u5728\u4e0b\u65b9\u63d2\u5165",
"Delete row": "\u5220\u9664\u884c",
"Row properties": "\u884c\u5c5e\u6027",
"Cut row": "\u526a\u5207\u884c",
"Copy row": "\u590d\u5236\u884c",
"Paste row before": "\u7c98\u8d34\u5230\u4e0a\u65b9",
"Paste row after": "\u7c98\u8d34\u5230\u4e0b\u65b9",
"Insert column before": "\u5728\u5de6\u4fa7\u63d2\u5165",
"Insert column after": "\u5728\u53f3\u4fa7\u63d2\u5165",
"Delete column": "\u5220\u9664\u5217",
"Cols": "\u5217",
"Rows": "\u884c",
"Width": "\u5bbd",
"Height": "\u9ad8",
"Cell spacing": "\u5355\u5143\u683c\u5916\u95f4\u8ddd",
"Cell padding": "\u5355\u5143\u683c\u5185\u8fb9\u8ddd",
"Caption": "\u6807\u9898",
"Left": "\u5de6\u5bf9\u9f50",
"Center": "\u5c45\u4e2d",
"Right": "\u53f3\u5bf9\u9f50",
"Cell type": "\u5355\u5143\u683c\u7c7b\u578b",
"Scope": "\u8303\u56f4",
"Alignment": "\u5bf9\u9f50\u65b9\u5f0f",
"H Align": "\u6c34\u5e73\u5bf9\u9f50",
"V Align": "\u5782\u76f4\u5bf9\u9f50",
"Top": "\u9876\u90e8\u5bf9\u9f50",
"Middle": "\u5782\u76f4\u5c45\u4e2d",
"Bottom": "\u5e95\u90e8\u5bf9\u9f50",
"Header cell": "\u8868\u5934\u5355\u5143\u683c",
"Row group": "\u884c\u7ec4",
"Column group": "\u5217\u7ec4",
"Row type": "\u884c\u7c7b\u578b",
"Header": "\u8868\u5934",
"Body": "\u8868\u4f53",
"Footer": "\u8868\u5c3e",
"Border color": "\u8fb9\u6846\u989c\u8272",
"Insert template": "\u63d2\u5165\u6a21\u677f",
"Templates": "\u6a21\u677f",
"Template": "\u6a21\u677f",
"Text color": "\u6587\u5b57\u989c\u8272",
"Background color": "\u80cc\u666f\u8272",
"Custom...": "\u81ea\u5b9a\u4e49...",
"Custom color": "\u81ea\u5b9a\u4e49\u989c\u8272",
"No color": "\u65e0",
"Table of Contents": "\u5185\u5bb9\u5217\u8868",
"Show blocks": "\u663e\u793a\u533a\u5757\u8fb9\u6846",
"Show invisible characters": "\u663e\u793a\u4e0d\u53ef\u89c1\u5b57\u7b26",
"Words: {0}": "\u5b57\u6570\uff1a{0}",
"{0} words": "{0} \u5b57",
"File": "\u6587\u4ef6",
"Edit": "\u7f16\u8f91",
"Insert": "\u63d2\u5165",
"View": "\u89c6\u56fe",
"Format": "\u683c\u5f0f",
"Table": "\u8868\u683c",
"Tools": "\u5de5\u5177",
"Powered by {0}": "\u7531{0}\u9a71\u52a8",
"Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "\u5728\u7f16\u8f91\u533a\u6309ALT-F9\u6253\u5f00\u83dc\u5355\uff0c\u6309ALT-F10\u6253\u5f00\u5de5\u5177\u680f\uff0c\u6309ALT-0\u67e5\u770b\u5e2e\u52a9"
});

/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "33a1":
/***/ (function(module, exports) {

!function(){"use strict";var i,e=tinymce.util.Tools.resolve("tinymce.PluginManager"),d=function(e){return!1!==e.settings.image_dimensions},l=function(e){return!0===e.settings.image_advtab},m=function(e){return e.getParam("image_prepend_url","")},n=function(e){return e.getParam("image_class_list")},r=function(e){return!1!==e.settings.image_description},a=function(e){return!0===e.settings.image_title},o=function(e){return!0===e.settings.image_caption},u=function(e){return e.getParam("image_list",!1)},c=function(e){return e.getParam("images_upload_url",!1)},s=function(e){return e.getParam("images_upload_handler",!1)},g=function(e){return e.getParam("images_upload_url")},f=function(e){return e.getParam("images_upload_handler")},p=function(e){return e.getParam("images_upload_base_path")},h=function(e){return e.getParam("images_upload_credentials")},v="undefined"!=typeof window?window:Function("return this;")(),b=function(e,t){return function(e,t){for(var n=t!==undefined&&null!==t?t:v,r=0;r<e.length&&n!==undefined&&null!==n;++r)n=n[e[r]];return n}(e.split("."),t)},y={getOrDie:function(e,t){var n=b(e,t);if(n===undefined||null===n)throw e+" not available on this browser";return n}},x=tinymce.util.Tools.resolve("tinymce.util.Promise"),w=tinymce.util.Tools.resolve("tinymce.util.Tools"),C=tinymce.util.Tools.resolve("tinymce.util.XHR"),S=function(e,t){return Math.max(parseInt(e,10),parseInt(t,10))},N=function(e,n){var r=document.createElement("img");function t(e,t){r.parentNode&&r.parentNode.removeChild(r),n({width:e,height:t})}r.onload=function(){t(S(r.width,r.clientWidth),S(r.height,r.clientHeight))},r.onerror=function(){t(0,0)};var a=r.style;a.visibility="hidden",a.position="fixed",a.bottom=a.left="0px",a.width=a.height="auto",document.body.appendChild(r),r.src=e},_=function(e,a,t){return function n(e,r){return r=r||[],w.each(e,function(e){var t={text:e.text||e.title};e.menu?t.menu=n(e.menu):(t.value=e.value,a(t)),r.push(t)}),r}(e,t||[])},T=function(e){return e&&(e=e.replace(/px$/,"")),e},A=function(e){return 0<e.length&&/^[0-9]+$/.test(e)&&(e+="px"),e},R=function(e){if(e.margin){var t=e.margin.split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e},t=function(e,t){var n=u(e);"string"==typeof n?C.send({url:n,success:function(e){t(JSON.parse(e))}}):"function"==typeof n?n(t):t(n)},I=function(e,t,n){function r(){n.onload=n.onerror=null,e.selection&&(e.selection.select(n),e.nodeChanged())}n.onload=function(){t.width||t.height||!d(e)||e.dom.setAttribs(n,{width:n.clientWidth,height:n.clientHeight}),r()},n.onerror=r},O=function(r){return new x(function(e,t){var n=new(y.getOrDie("FileReader"));n.onload=function(){e(n.result)},n.onerror=function(){t(n.error.message)},n.readAsDataURL(r)})},L=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),P=Object.prototype.hasOwnProperty,U=(i=function(e,t){return t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var a=e[r];for(var o in a)P.call(a,o)&&(n[o]=i(n[o],a[o]))}return n}),E=L.DOM,k=function(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?T(e.style.marginLeft):""},M=function(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?T(e.style.marginTop):""},D=function(e){return e.style.borderWidth?T(e.style.borderWidth):""},z=function(e,t){return e.hasAttribute(t)?e.getAttribute(t):""},B=function(e,t){return e.style[t]?e.style[t]:""},H=function(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName},j=function(e,t,n){e.setAttribute(t,n)},F=function(e){var t,n,r,a;H(e)?(a=(r=e).parentNode,E.insertAfter(r,a),E.remove(a)):(t=e,n=E.create("figure",{"class":"image"}),E.insertAfter(n,t),n.appendChild(t),n.appendChild(E.create("figcaption",{contentEditable:!0},"Caption")),n.contentEditable="false")},W=function(e,t){var n=e.getAttribute("style"),r=t(null!==n?n:"");0<r.length?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")},J=function(e,r){return function(e,t,n){e.style[t]?(e.style[t]=A(n),W(e,r)):j(e,t,n)}},V=function(e,t){return e.style[t]?T(e.style[t]):z(e,t)},G=function(e,t){var n=A(t);e.style.marginLeft=n,e.style.marginRight=n},$=function(e,t){var n=A(t);e.style.marginTop=n,e.style.marginBottom=n},X=function(e,t){var n=A(t);e.style.borderWidth=n},q=function(e,t){e.style.borderStyle=t},K=function(e){return"FIGURE"===e.nodeName},Q=function(e,t){var n=document.createElement("img");return j(n,"style",t.style),(k(n)||""!==t.hspace)&&G(n,t.hspace),(M(n)||""!==t.vspace)&&$(n,t.vspace),(D(n)||""!==t.border)&&X(n,t.border),(B(n,"borderStyle")||""!==t.borderStyle)&&q(n,t.borderStyle),e(n.getAttribute("style"))},Y=function(e,t){return{src:z(t,"src"),alt:z(t,"alt"),title:z(t,"title"),width:V(t,"width"),height:V(t,"height"),"class":z(t,"class"),style:e(z(t,"style")),caption:H(t),hspace:k(t),vspace:M(t),border:D(t),borderStyle:B(t,"borderStyle")}},Z=function(e,t,n,r,a){n[r]!==t[r]&&a(e,r,n[r])},ee=function(r,a){return function(e,t,n){r(e,n),W(e,a)}},te=function(e,t,n){var r=Y(e,n);Z(n,r,t,"caption",function(e,t,n){return F(e)}),Z(n,r,t,"src",j),Z(n,r,t,"alt",j),Z(n,r,t,"title",j),Z(n,r,t,"width",J(0,e)),Z(n,r,t,"height",J(0,e)),Z(n,r,t,"class",j),Z(n,r,t,"style",ee(function(e,t){return j(e,"style",t)},e)),Z(n,r,t,"hspace",ee(G,e)),Z(n,r,t,"vspace",ee($,e)),Z(n,r,t,"border",ee(X,e)),Z(n,r,t,"borderStyle",ee(q,e))},ne=function(e,t){var n=e.dom.styles.parse(t),r=R(n),a=e.dom.styles.parse(e.dom.styles.serialize(r));return e.dom.styles.serialize(a)},re=function(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image");return n?e.dom.select("img",n)[0]:t&&("IMG"!==t.nodeName||t.getAttribute("data-mce-object")||t.getAttribute("data-mce-placeholder"))?null:t},ae=function(t,e){var n=t.dom,r=n.getParent(e.parentNode,function(e){return t.schema.getTextBlockElements()[e.nodeName]},t.getBody());return r?n.split(r,e):e},oe=function(t){var e=re(t);return e?Y(function(e){return ne(t,e)},e):{src:"",alt:"",title:"",width:"",height:"","class":"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:""}},ie=function(t,e){var n=function(e,t){var n=document.createElement("img");if(te(e,U(t,{caption:!1}),n),j(n,"alt",t.alt),t.caption){var r=E.create("figure",{"class":"image"});return r.appendChild(n),r.appendChild(E.create("figcaption",{contentEditable:!0},"Caption")),r.contentEditable="false",r}return n}(function(e){return ne(t,e)},e);t.dom.setAttrib(n,"data-mce-id","__mcenew"),t.focus(),t.selection.setContent(n.outerHTML);var r=t.dom.select('*[data-mce-id="__mcenew"]')[0];if(t.dom.setAttrib(r,"data-mce-id",null),K(r)){var a=ae(t,r);t.selection.select(a)}else t.selection.select(r)},le=function(e,t){var n=re(e);n?t.src?function(t,e){var n,r=re(t);if(te(function(e){return ne(t,e)},e,r),n=r,t.dom.setAttrib(n,"src",n.getAttribute("src")),K(r.parentNode)){var a=r.parentNode;ae(t,a),t.selection.select(r.parentNode)}else t.selection.select(r),I(t,e,r)}(e,t):function(e,t){if(t){var n=e.dom.is(t.parentNode,"figure.image")?t.parentNode:t;e.dom.remove(n),e.focus(),e.nodeChanged(),e.dom.isEmpty(e.getBody())&&(e.setContent(""),e.selection.setCursorLocation())}}(e,n):t.src&&ie(e,t)},ue=function(n,r){r.find("#style").each(function(e){var t=Q(function(e){return ne(n,e)},U({src:"",alt:"",title:"",width:"",height:"","class":"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:""},r.toJSON()));e.value(t)})},ce=function(t){return{title:"Advanced",type:"form",pack:"start",items:[{label:"Style",name:"style",type:"textbox",onchange:(o=t,function(e){var t=o.dom,n=e.control.rootControl;if(l(o)){var r=n.toJSON(),a=t.parseStyle(r.style);n.find("#vspace").value(""),n.find("#hspace").value(""),((a=R(a))["margin-top"]&&a["margin-bottom"]||a["margin-right"]&&a["margin-left"])&&(a["margin-top"]===a["margin-bottom"]?n.find("#vspace").value(T(a["margin-top"])):n.find("#vspace").value(""),a["margin-right"]===a["margin-left"]?n.find("#hspace").value(T(a["margin-right"])):n.find("#hspace").value("")),a["border-width"]?n.find("#border").value(T(a["border-width"])):n.find("#border").value(""),a["border-style"]?n.find("#borderStyle").value(a["border-style"]):n.find("#borderStyle").value(""),n.find("#style").value(t.serializeStyle(t.parseStyle(t.serializeStyle(a))))}})},{type:"form",layout:"grid",packV:"start",columns:2,padding:0,defaults:{type:"textbox",maxWidth:50,onchange:function(e){ue(t,e.control.rootControl)}},items:[{label:"Vertical space",name:"vspace"},{label:"Border width",name:"border"},{label:"Horizontal space",name:"hspace"},{label:"Border style",type:"listbox",name:"borderStyle",width:90,maxWidth:90,onselect:function(e){ue(t,e.control.rootControl)},values:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]};var o},se=function(e,t){e.state.set("oldVal",e.value()),t.state.set("oldVal",t.value())},de=function(e,t){var n=e.find("#width")[0],r=e.find("#height")[0],a=e.find("#constrain")[0];n&&r&&a&&t(n,r,a.checked())},me=function(e,t,n){var r=e.state.get("oldVal"),a=t.state.get("oldVal"),o=e.value(),i=t.value();n&&r&&a&&o&&i&&(o!==r?(i=Math.round(o/r*i),isNaN(i)||t.value(i)):(o=Math.round(i/a*o),isNaN(o)||e.value(o))),se(e,t)},ge=function(e){de(e,me)},fe=function(){var e=function(e){ge(e.control.rootControl)};return{type:"container",label:"Dimensions",layout:"flex",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:5,onchange:e,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:5,onchange:e,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}},pe=function(e){de(e,se)},he=ge,ve=function(e){e.meta=e.control.rootControl.toJSON()},be=function(s,e){var t=[{name:"src",type:"filepicker",filetype:"image",label:"Source",autofocus:!0,onchange:function(e){var t,n,r,a,o,i,l,u,c;n=s,i=(t=e).meta||{},l=t.control,u=l.rootControl,(c=u.find("#image-list")[0])&&c.value(n.convertURL(l.value(),"src")),w.each(i,function(e,t){u.find("#"+t).value(e)}),i.width||i.height||(r=n.convertURL(l.value(),"src"),a=m(n),o=new RegExp("^(?:[a-z]+:)?//","i"),a&&!o.test(r)&&r.substring(0,a.length)!==a&&(r=a+r),l.value(r),N(n.documentBaseURI.toAbsolute(l.value()),function(e){e.width&&e.height&&d(n)&&(u.find("#width").value(e.width),u.find("#height").value(e.height),pe(u))}))},onbeforecall:ve},e];return r(s)&&t.push({name:"alt",type:"textbox",label:"Image description"}),a(s)&&t.push({name:"title",type:"textbox",label:"Image Title"}),d(s)&&t.push(fe()),n(s)&&t.push({name:"class",type:"listbox",label:"Class",values:_(n(s),function(e){e.value&&(e.textStyle=function(){return s.formatter.getCssText({inline:"img",classes:[e.value]})})})}),o(s)&&t.push({name:"caption",type:"checkbox",label:"Caption"}),t},ye=function(e,t){return{title:"General",type:"form",items:be(e,t)}},xe=be,we=function(){return y.getOrDie("URL")},Ce=function(e){return we().createObjectURL(e)},Se=function(e){we().revokeObjectURL(e)},Ne=tinymce.util.Tools.resolve("tinymce.ui.Factory"),_e=function(){};function Te(i){var t=function(e,r,a,t){var o,n;(o=new(y.getOrDie("XMLHttpRequest"))).open("POST",i.url),o.withCredentials=i.credentials,o.upload.onprogress=function(e){t(e.loaded/e.total*100)},o.onerror=function(){a("Image upload failed due to a XHR Transport error. Code: "+o.status)},o.onload=function(){var e,t,n;o.status<200||300<=o.status?a("HTTP Error: "+o.status):(e=JSON.parse(o.responseText))&&"string"==typeof e.location?r((t=i.basePath,n=e.location,t?t.replace(/\/$/,"")+"/"+n.replace(/^\//,""):n)):a("Invalid JSON: "+o.responseText)},(n=new FormData).append("file",e.blob(),e.filename()),o.send(n)};return i=w.extend({credentials:!1,handler:t},i),{upload:function(e){return i.url||i.handler!==t?(r=e,a=i.handler,new x(function(e,t){try{a(r,e,t,_e)}catch(n){t(n.message)}})):x.reject("Upload url missing from the settings.");var r,a}}}var Ae=function(u){return function(e){var t=Ne.get("Throbber"),n=e.control.rootControl,r=new t(n.getEl()),a=e.control.value(),o=Ce(a),i=Te({url:g(u),basePath:p(u),credentials:h(u),handler:f(u)}),l=function(){r.hide(),Se(o)};return r.show(),O(a).then(function(e){var t=u.editorUpload.blobCache.create({blob:a,blobUri:o,name:a.name?a.name.replace(/\.[^\.]+$/,""):null,base64:e.split(",")[1]});return i.upload(t).then(function(e){var t=n.find("#src");return t.value(e),n.find("tabpanel")[0].activateTab(0),t.fire("change"),l(),e})})["catch"](function(e){u.windowManager.alert(e),l()})}},Re=".jpg,.jpeg,.png,.gif",Ie=function(e){return{title:"Upload",type:"form",layout:"flex",direction:"column",align:"stretch",padding:"20 20 20 20",items:[{type:"container",layout:"flex",direction:"column",align:"center",spacing:10,items:[{text:"Browse for an image",type:"browsebutton",accept:Re,onchange:Ae(e)},{text:"OR",type:"label"}]},{text:"Drop an image here",type:"dropzone",accept:Re,height:100,onchange:Ae(e)}]}};function Oe(r){for(var a=[],e=1;e<arguments.length;e++)a[e-1]=arguments[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=a.concat(e);return r.apply(null,n)}}var Le=function(t,e){var n=e.control.getRoot();he(n),t.undoManager.transact(function(){var e=U(oe(t),n.toJSON());le(t,e)}),t.editorUpload.uploadImagesAuto()};function Pe(o){function e(e){var n,t,r=oe(o);if(e&&(t={type:"listbox",label:"Image list",name:"image-list",values:_(e,function(e){e.value=o.convertURL(e.value||e.url,"src")},[{text:"None",value:""}]),value:r.src&&o.convertURL(r.src,"src"),onselect:function(e){var t=n.find("#alt");(!t.value()||e.lastControl&&t.value()===e.lastControl.text())&&t.value(e.control.text()),n.find("#src").value(e.control.value()).fire("change")},onPostRender:function(){t=this}}),l(o)||c(o)||s(o)){var a=[ye(o,t)];l(o)&&a.push(ce(o)),(c(o)||s(o))&&a.push(Ie(o)),n=o.windowManager.open({title:"Insert/edit image",data:r,bodyType:"tabpanel",body:a,onSubmit:Oe(Le,o)})}else n=o.windowManager.open({title:"Insert/edit image",data:r,body:xe(o,t),onSubmit:Oe(Le,o)});pe(n)}return{open:function(){t(o,e)}}}var Ue=function(e){e.addCommand("mceImage",Pe(e).open)},Ee=function(o){return function(e){for(var t,n,r=e.length,a=function(e){e.attr("contenteditable",o?"true":null)};r--;)t=e[r],(n=t.attr("class"))&&/\bimage\b/.test(n)&&(t.attr("contenteditable",o?"false":null),w.each(t.getAll("figcaption"),a))}},ke=function(e){e.on("preInit",function(){e.parser.addNodeFilter("figure",Ee(!0)),e.serializer.addNodeFilter("figure",Ee(!1))})},Me=function(e){e.addButton("image",{icon:"image",tooltip:"Insert/edit image",onclick:Pe(e).open,stateSelector:"img:not([data-mce-object],[data-mce-placeholder]),figure.image"}),e.addMenuItem("image",{icon:"image",text:"Image",onclick:Pe(e).open,context:"insert",prependToContext:!0})};e.add("image",function(e){ke(e),Me(e),Ue(e)})}();

/***/ }),

/***/ "3aa6":
/***/ (function(module, exports) {

!function(){"use strict";var o=function(t){var n=t,e=function(){return n};return{get:e,set:function(t){n=t},clone:function(){return o(e())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(t){return{isContextMenuVisible:function(){return t.get()}}},r=function(t){return t.settings.contextmenu_never_use_native},u=function(t){return t.getParam("contextmenu","link openlink image inserttable | cell row column deletetable")},l=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),s=function(t){return l.DOM.select(t.settings.ui_container)[0]},a=function(t,n){return{x:t,y:n}},f=function(t,n,e){return a(t.x+n,t.y+e)},m=function(t,n){if(t&&"static"!==l.DOM.getStyle(t,"position",!0)){var e=l.DOM.getPos(t),o=e.x-t.scrollLeft,i=e.y-t.scrollTop;return f(n,-o,-i)}return f(n,0,0)},c=function(t,n){if(t.inline)return m(s(t),a((u=n).pageX,u.pageY));var e,o,i,r,u,c=(e=t.getContentAreaContainer(),o=a((r=n).clientX,r.clientY),i=l.DOM.getPos(e),f(o,i.x,i.y));return m(s(t),c)},g=tinymce.util.Tools.resolve("tinymce.ui.Factory"),v=tinymce.util.Tools.resolve("tinymce.util.Tools"),y=function(t,n,e,o){null===o.get()?o.set(function(e,n){var t,o,i=[];o=u(e),v.each(o.split(/[ ,]/),function(t){var n=e.menuItems[t];"|"===t&&(n={text:t}),n&&(n.shortcut="",i.push(n))});for(var r=0;r<i.length;r++)"|"===i[r].text&&(0!==r&&r!==i.length-1||i.splice(r,1));return(t=g.create("menu",{items:i,context:"contextmenu",classes:"contextmenu"})).uiContainer=s(e),t.renderTo(s(e)),t.on("hide",function(t){t.control===this&&n.set(!1)}),e.on("remove",function(){t.remove(),t=null}),t}(t,e)):o.get().show(),o.get().moveTo(n.x,n.y),e.set(!0)},x=function(e,o,i){e.on("contextmenu",function(t){var n;n=e,(!t.ctrlKey||r(n))&&(t.preventDefault(),y(e,c(e,t),o,i))})};t.add("contextmenu",function(t){var n=o(null),e=o(!1);return x(t,e,n),i(e)})}();

/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4d08":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5001":
/***/ (function(module, exports) {

(function () {
var modern = (function () {
    'use strict';

    var global = tinymce.util.Tools.resolve('tinymce.ThemeManager');

    var global$1 = tinymce.util.Tools.resolve('tinymce.EditorManager');

    var global$2 = tinymce.util.Tools.resolve('tinymce.util.Tools');

    var isBrandingEnabled = function (editor) {
      return editor.getParam('branding', true, 'boolean');
    };
    var hasMenubar = function (editor) {
      return getMenubar(editor) !== false;
    };
    var getMenubar = function (editor) {
      return editor.getParam('menubar');
    };
    var hasStatusbar = function (editor) {
      return editor.getParam('statusbar', true, 'boolean');
    };
    var getToolbarSize = function (editor) {
      return editor.getParam('toolbar_items_size');
    };
    var isReadOnly = function (editor) {
      return editor.getParam('readonly', false, 'boolean');
    };
    var getFixedToolbarContainer = function (editor) {
      return editor.getParam('fixed_toolbar_container');
    };
    var getInlineToolbarPositionHandler = function (editor) {
      return editor.getParam('inline_toolbar_position_handler');
    };
    var getMenu = function (editor) {
      return editor.getParam('menu');
    };
    var getRemovedMenuItems = function (editor) {
      return editor.getParam('removed_menuitems', '');
    };
    var getMinWidth = function (editor) {
      return editor.getParam('min_width', 100, 'number');
    };
    var getMinHeight = function (editor) {
      return editor.getParam('min_height', 100, 'number');
    };
    var getMaxWidth = function (editor) {
      return editor.getParam('max_width', 65535, 'number');
    };
    var getMaxHeight = function (editor) {
      return editor.getParam('max_height', 65535, 'number');
    };
    var isSkinDisabled = function (editor) {
      return editor.settings.skin === false;
    };
    var isInline = function (editor) {
      return editor.getParam('inline', false, 'boolean');
    };
    var getResize = function (editor) {
      var resize = editor.getParam('resize', 'vertical');
      if (resize === false) {
        return 'none';
      } else if (resize === 'both') {
        return 'both';
      } else {
        return 'vertical';
      }
    };
    var getSkinUrl = function (editor) {
      var settings = editor.settings;
      var skin = settings.skin;
      var skinUrl = settings.skin_url;
      if (skin !== false) {
        var skinName = skin ? skin : 'lightgray';
        if (skinUrl) {
          skinUrl = editor.documentBaseURI.toAbsolute(skinUrl);
        } else {
          skinUrl = global$1.baseURL + '/skins/' + skinName;
        }
      }
      return skinUrl;
    };
    var getIndexedToolbars = function (settings, defaultToolbar) {
      var toolbars = [];
      for (var i = 1; i < 10; i++) {
        var toolbar = settings['toolbar' + i];
        if (!toolbar) {
          break;
        }
        toolbars.push(toolbar);
      }
      var mainToolbar = settings.toolbar ? [settings.toolbar] : [defaultToolbar];
      return toolbars.length > 0 ? toolbars : mainToolbar;
    };
    var getToolbars = function (editor) {
      var toolbar = editor.getParam('toolbar');
      var defaultToolbar = 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image';
      if (toolbar === false) {
        return [];
      } else if (global$2.isArray(toolbar)) {
        return global$2.grep(toolbar, function (toolbar) {
          return toolbar.length > 0;
        });
      } else {
        return getIndexedToolbars(editor.settings, defaultToolbar);
      }
    };

    var global$3 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

    var global$4 = tinymce.util.Tools.resolve('tinymce.ui.Factory');

    var global$5 = tinymce.util.Tools.resolve('tinymce.util.I18n');

    var fireSkinLoaded = function (editor) {
      return editor.fire('SkinLoaded');
    };
    var fireResizeEditor = function (editor) {
      return editor.fire('ResizeEditor');
    };
    var fireBeforeRenderUI = function (editor) {
      return editor.fire('BeforeRenderUI');
    };
    var Events = {
      fireSkinLoaded: fireSkinLoaded,
      fireResizeEditor: fireResizeEditor,
      fireBeforeRenderUI: fireBeforeRenderUI
    };

    var focus = function (panel, type) {
      return function () {
        var item = panel.find(type)[0];
        if (item) {
          item.focus(true);
        }
      };
    };
    var addKeys = function (editor, panel) {
      editor.shortcuts.add('Alt+F9', '', focus(panel, 'menubar'));
      editor.shortcuts.add('Alt+F10,F10', '', focus(panel, 'toolbar'));
      editor.shortcuts.add('Alt+F11', '', focus(panel, 'elementpath'));
      panel.on('cancel', function () {
        editor.focus();
      });
    };
    var A11y = { addKeys: addKeys };

    var global$6 = tinymce.util.Tools.resolve('tinymce.geom.Rect');

    var global$7 = tinymce.util.Tools.resolve('tinymce.util.Delay');

    var noop = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    var constant = function (value) {
      return function () {
        return value;
      };
    };
    var never = constant(false);
    var always = constant(true);

    var never$1 = never;
    var always$1 = always;
    var none = function () {
      return NONE;
    };
    var NONE = function () {
      var eq = function (o) {
        return o.isNone();
      };
      var call$$1 = function (thunk) {
        return thunk();
      };
      var id = function (n) {
        return n;
      };
      var noop$$1 = function () {
      };
      var nul = function () {
        return null;
      };
      var undef = function () {
        return undefined;
      };
      var me = {
        fold: function (n, s) {
          return n();
        },
        is: never$1,
        isSome: never$1,
        isNone: always$1,
        getOr: id,
        getOrThunk: call$$1,
        getOrDie: function (msg) {
          throw new Error(msg || 'error: getOrDie called on none.');
        },
        getOrNull: nul,
        getOrUndefined: undef,
        or: id,
        orThunk: call$$1,
        map: none,
        ap: none,
        each: noop$$1,
        bind: none,
        flatten: none,
        exists: never$1,
        forall: always$1,
        filter: none,
        equals: eq,
        equals_: eq,
        toArray: function () {
          return [];
        },
        toString: constant('none()')
      };
      if (Object.freeze)
        Object.freeze(me);
      return me;
    }();
    var some = function (a) {
      var constant_a = function () {
        return a;
      };
      var self = function () {
        return me;
      };
      var map = function (f) {
        return some(f(a));
      };
      var bind = function (f) {
        return f(a);
      };
      var me = {
        fold: function (n, s) {
          return s(a);
        },
        is: function (v) {
          return a === v;
        },
        isSome: always$1,
        isNone: never$1,
        getOr: constant_a,
        getOrThunk: constant_a,
        getOrDie: constant_a,
        getOrNull: constant_a,
        getOrUndefined: constant_a,
        or: self,
        orThunk: self,
        map: map,
        ap: function (optfab) {
          return optfab.fold(none, function (fab) {
            return some(fab(a));
          });
        },
        each: function (f) {
          f(a);
        },
        bind: bind,
        flatten: constant_a,
        exists: bind,
        forall: bind,
        filter: function (f) {
          return f(a) ? me : NONE;
        },
        equals: function (o) {
          return o.is(a);
        },
        equals_: function (o, elementEq) {
          return o.fold(never$1, function (b) {
            return elementEq(a, b);
          });
        },
        toArray: function () {
          return [a];
        },
        toString: function () {
          return 'some(' + a + ')';
        }
      };
      return me;
    };
    var from = function (value) {
      return value === null || value === undefined ? NONE : some(value);
    };
    var Option = {
      some: some,
      none: none,
      from: from
    };

    var getUiContainerDelta = function (ctrl) {
      var uiContainer = getUiContainer(ctrl);
      if (uiContainer && global$3.DOM.getStyle(uiContainer, 'position', true) !== 'static') {
        var containerPos = global$3.DOM.getPos(uiContainer);
        var dx = uiContainer.scrollLeft - containerPos.x;
        var dy = uiContainer.scrollTop - containerPos.y;
        return Option.some({
          x: dx,
          y: dy
        });
      } else {
        return Option.none();
      }
    };
    var setUiContainer = function (editor, ctrl) {
      var uiContainer = global$3.DOM.select(editor.settings.ui_container)[0];
      ctrl.getRoot().uiContainer = uiContainer;
    };
    var getUiContainer = function (ctrl) {
      return ctrl ? ctrl.getRoot().uiContainer : null;
    };
    var inheritUiContainer = function (fromCtrl, toCtrl) {
      return toCtrl.uiContainer = getUiContainer(fromCtrl);
    };
    var UiContainer = {
      getUiContainerDelta: getUiContainerDelta,
      setUiContainer: setUiContainer,
      getUiContainer: getUiContainer,
      inheritUiContainer: inheritUiContainer
    };

    var createToolbar = function (editor, items, size) {
      var toolbarItems = [];
      var buttonGroup;
      if (!items) {
        return;
      }
      global$2.each(items.split(/[ ,]/), function (item) {
        var itemName;
        var bindSelectorChanged = function () {
          var selection = editor.selection;
          if (item.settings.stateSelector) {
            selection.selectorChanged(item.settings.stateSelector, function (state) {
              item.active(state);
            }, true);
          }
          if (item.settings.disabledStateSelector) {
            selection.selectorChanged(item.settings.disabledStateSelector, function (state) {
              item.disabled(state);
            });
          }
        };
        if (item === '|') {
          buttonGroup = null;
        } else {
          if (!buttonGroup) {
            buttonGroup = {
              type: 'buttongroup',
              items: []
            };
            toolbarItems.push(buttonGroup);
          }
          if (editor.buttons[item]) {
            itemName = item;
            item = editor.buttons[itemName];
            if (typeof item === 'function') {
              item = item();
            }
            item.type = item.type || 'button';
            item.size = size;
            item = global$4.create(item);
            buttonGroup.items.push(item);
            if (editor.initialized) {
              bindSelectorChanged();
            } else {
              editor.on('init', bindSelectorChanged);
            }
          }
        }
      });
      return {
        type: 'toolbar',
        layout: 'flow',
        items: toolbarItems
      };
    };
    var createToolbars = function (editor, size) {
      var toolbars = [];
      var addToolbar = function (items) {
        if (items) {
          toolbars.push(createToolbar(editor, items, size));
        }
      };
      global$2.each(getToolbars(editor), function (toolbar) {
        addToolbar(toolbar);
      });
      if (toolbars.length) {
        return {
          type: 'panel',
          layout: 'stack',
          classes: 'toolbar-grp',
          ariaRoot: true,
          ariaRemember: true,
          items: toolbars
        };
      }
    };
    var Toolbar = {
      createToolbar: createToolbar,
      createToolbars: createToolbars
    };

    var DOM = global$3.DOM;
    var toClientRect = function (geomRect) {
      return {
        left: geomRect.x,
        top: geomRect.y,
        width: geomRect.w,
        height: geomRect.h,
        right: geomRect.x + geomRect.w,
        bottom: geomRect.y + geomRect.h
      };
    };
    var hideAllFloatingPanels = function (editor) {
      global$2.each(editor.contextToolbars, function (toolbar) {
        if (toolbar.panel) {
          toolbar.panel.hide();
        }
      });
    };
    var movePanelTo = function (panel, pos) {
      panel.moveTo(pos.left, pos.top);
    };
    var togglePositionClass = function (panel, relPos, predicate) {
      relPos = relPos ? relPos.substr(0, 2) : '';
      global$2.each({
        t: 'down',
        b: 'up'
      }, function (cls, pos) {
        panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(0, 1)));
      });
      global$2.each({
        l: 'left',
        r: 'right'
      }, function (cls, pos) {
        panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(1, 1)));
      });
    };
    var userConstrain = function (handler, x, y, elementRect, contentAreaRect, panelRect) {
      panelRect = toClientRect({
        x: x,
        y: y,
        w: panelRect.w,
        h: panelRect.h
      });
      if (handler) {
        panelRect = handler({
          elementRect: toClientRect(elementRect),
          contentAreaRect: toClientRect(contentAreaRect),
          panelRect: panelRect
        });
      }
      return panelRect;
    };
    var addContextualToolbars = function (editor) {
      var scrollContainer;
      var getContextToolbars = function () {
        return editor.contextToolbars || [];
      };
      var getElementRect = function (elm) {
        var pos, targetRect, root;
        pos = DOM.getPos(editor.getContentAreaContainer());
        targetRect = editor.dom.getRect(elm);
        root = editor.dom.getRoot();
        if (root.nodeName === 'BODY') {
          targetRect.x -= root.ownerDocument.documentElement.scrollLeft || root.scrollLeft;
          targetRect.y -= root.ownerDocument.documentElement.scrollTop || root.scrollTop;
        }
        targetRect.x += pos.x;
        targetRect.y += pos.y;
        return targetRect;
      };
      var reposition = function (match, shouldShow) {
        var relPos, panelRect, elementRect, contentAreaRect, panel, relRect, testPositions, smallElementWidthThreshold;
        var handler = getInlineToolbarPositionHandler(editor);
        if (editor.removed) {
          return;
        }
        if (!match || !match.toolbar.panel) {
          hideAllFloatingPanels(editor);
          return;
        }
        testPositions = [
          'bc-tc',
          'tc-bc',
          'tl-bl',
          'bl-tl',
          'tr-br',
          'br-tr'
        ];
        panel = match.toolbar.panel;
        if (shouldShow) {
          panel.show();
        }
        elementRect = getElementRect(match.element);
        panelRect = DOM.getRect(panel.getEl());
        contentAreaRect = DOM.getRect(editor.getContentAreaContainer() || editor.getBody());
        var delta = UiContainer.getUiContainerDelta(panel).getOr({
          x: 0,
          y: 0
        });
        elementRect.x += delta.x;
        elementRect.y += delta.y;
        panelRect.x += delta.x;
        panelRect.y += delta.y;
        contentAreaRect.x += delta.x;
        contentAreaRect.y += delta.y;
        smallElementWidthThreshold = 25;
        if (DOM.getStyle(match.element, 'display', true) !== 'inline') {
          var clientRect = match.element.getBoundingClientRect();
          elementRect.w = clientRect.width;
          elementRect.h = clientRect.height;
        }
        if (!editor.inline) {
          contentAreaRect.w = editor.getDoc().documentElement.offsetWidth;
        }
        if (editor.selection.controlSelection.isResizable(match.element) && elementRect.w < smallElementWidthThreshold) {
          elementRect = global$6.inflate(elementRect, 0, 8);
        }
        relPos = global$6.findBestRelativePosition(panelRect, elementRect, contentAreaRect, testPositions);
        elementRect = global$6.clamp(elementRect, contentAreaRect);
        if (relPos) {
          relRect = global$6.relativePosition(panelRect, elementRect, relPos);
          movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
        } else {
          contentAreaRect.h += panelRect.h;
          elementRect = global$6.intersect(contentAreaRect, elementRect);
          if (elementRect) {
            relPos = global$6.findBestRelativePosition(panelRect, elementRect, contentAreaRect, [
              'bc-tc',
              'bl-tl',
              'br-tr'
            ]);
            if (relPos) {
              relRect = global$6.relativePosition(panelRect, elementRect, relPos);
              movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
            } else {
              movePanelTo(panel, userConstrain(handler, elementRect.x, elementRect.y, elementRect, contentAreaRect, panelRect));
            }
          } else {
            panel.hide();
          }
        }
        togglePositionClass(panel, relPos, function (pos1, pos2) {
          return pos1 === pos2;
        });
      };
      var repositionHandler = function (show) {
        return function () {
          var execute = function () {
            if (editor.selection) {
              reposition(findFrontMostMatch(editor.selection.getNode()), show);
            }
          };
          global$7.requestAnimationFrame(execute);
        };
      };
      var bindScrollEvent = function (panel) {
        if (!scrollContainer) {
          var reposition_1 = repositionHandler(true);
          var uiContainer_1 = UiContainer.getUiContainer(panel);
          scrollContainer = editor.selection.getScrollContainer() || editor.getWin();
          DOM.bind(scrollContainer, 'scroll', reposition_1);
          DOM.bind(uiContainer_1, 'scroll', reposition_1);
          editor.on('remove', function () {
            DOM.unbind(scrollContainer, 'scroll', reposition_1);
            DOM.unbind(uiContainer_1, 'scroll', reposition_1);
          });
        }
      };
      var showContextToolbar = function (match) {
        var panel;
        if (match.toolbar.panel) {
          match.toolbar.panel.show();
          reposition(match);
          return;
        }
        panel = global$4.create({
          type: 'floatpanel',
          role: 'dialog',
          classes: 'tinymce tinymce-inline arrow',
          ariaLabel: 'Inline toolbar',
          layout: 'flex',
          direction: 'column',
          align: 'stretch',
          autohide: false,
          autofix: true,
          fixed: true,
          border: 1,
          items: Toolbar.createToolbar(editor, match.toolbar.items),
          oncancel: function () {
            editor.focus();
          }
        });
        UiContainer.setUiContainer(editor, panel);
        bindScrollEvent(panel);
        match.toolbar.panel = panel;
        panel.renderTo().reflow();
        reposition(match);
      };
      var hideAllContextToolbars = function () {
        global$2.each(getContextToolbars(), function (toolbar) {
          if (toolbar.panel) {
            toolbar.panel.hide();
          }
        });
      };
      var findFrontMostMatch = function (targetElm) {
        var i, y, parentsAndSelf;
        var toolbars = getContextToolbars();
        parentsAndSelf = editor.$(targetElm).parents().add(targetElm);
        for (i = parentsAndSelf.length - 1; i >= 0; i--) {
          for (y = toolbars.length - 1; y >= 0; y--) {
            if (toolbars[y].predicate(parentsAndSelf[i])) {
              return {
                toolbar: toolbars[y],
                element: parentsAndSelf[i]
              };
            }
          }
        }
        return null;
      };
      editor.on('click keyup setContent ObjectResized', function (e) {
        if (e.type === 'setcontent' && !e.selection) {
          return;
        }
        global$7.setEditorTimeout(editor, function () {
          var match;
          match = findFrontMostMatch(editor.selection.getNode());
          if (match) {
            hideAllContextToolbars();
            showContextToolbar(match);
          } else {
            hideAllContextToolbars();
          }
        });
      });
      editor.on('blur hide contextmenu', hideAllContextToolbars);
      editor.on('ObjectResizeStart', function () {
        var match = findFrontMostMatch(editor.selection.getNode());
        if (match && match.toolbar.panel) {
          match.toolbar.panel.hide();
        }
      });
      editor.on('ResizeEditor ResizeWindow', repositionHandler(true));
      editor.on('nodeChange', repositionHandler(false));
      editor.on('remove', function () {
        global$2.each(getContextToolbars(), function (toolbar) {
          if (toolbar.panel) {
            toolbar.panel.remove();
          }
        });
        editor.contextToolbars = {};
      });
      editor.shortcuts.add('ctrl+F9', '', function () {
        var match = findFrontMostMatch(editor.selection.getNode());
        if (match && match.toolbar.panel) {
          match.toolbar.panel.items()[0].focus();
        }
      });
    };
    var ContextToolbars = { addContextualToolbars: addContextualToolbars };

    var typeOf = function (x) {
      if (x === null)
        return 'null';
      var t = typeof x;
      if (t === 'object' && Array.prototype.isPrototypeOf(x))
        return 'array';
      if (t === 'object' && String.prototype.isPrototypeOf(x))
        return 'string';
      return t;
    };
    var isType = function (type) {
      return function (value) {
        return typeOf(value) === type;
      };
    };
    var isFunction = isType('function');
    var isNumber = isType('number');

    var rawIndexOf = function () {
      var pIndexOf = Array.prototype.indexOf;
      var fastIndex = function (xs, x) {
        return pIndexOf.call(xs, x);
      };
      var slowIndex = function (xs, x) {
        return slowIndexOf(xs, x);
      };
      return pIndexOf === undefined ? slowIndex : fastIndex;
    }();
    var indexOf = function (xs, x) {
      var r = rawIndexOf(xs, x);
      return r === -1 ? Option.none() : Option.some(r);
    };
    var exists = function (xs, pred) {
      return findIndex(xs, pred).isSome();
    };
    var map = function (xs, f) {
      var len = xs.length;
      var r = new Array(len);
      for (var i = 0; i < len; i++) {
        var x = xs[i];
        r[i] = f(x, i, xs);
      }
      return r;
    };
    var each = function (xs, f) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        f(x, i, xs);
      }
    };
    var filter = function (xs, pred) {
      var r = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          r.push(x);
        }
      }
      return r;
    };
    var foldl = function (xs, f, acc) {
      each(xs, function (x) {
        acc = f(acc, x);
      });
      return acc;
    };
    var find = function (xs, pred) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          return Option.some(x);
        }
      }
      return Option.none();
    };
    var findIndex = function (xs, pred) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          return Option.some(i);
        }
      }
      return Option.none();
    };
    var slowIndexOf = function (xs, x) {
      for (var i = 0, len = xs.length; i < len; ++i) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    };
    var push = Array.prototype.push;
    var flatten = function (xs) {
      var r = [];
      for (var i = 0, len = xs.length; i < len; ++i) {
        if (!Array.prototype.isPrototypeOf(xs[i]))
          throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
        push.apply(r, xs[i]);
      }
      return r;
    };
    var slice = Array.prototype.slice;
    var from$1 = isFunction(Array.from) ? Array.from : function (x) {
      return slice.call(x);
    };

    var defaultMenus = {
      file: {
        title: 'File',
        items: 'newdocument restoredraft | preview | print'
      },
      edit: {
        title: 'Edit',
        items: 'undo redo | cut copy paste pastetext | selectall'
      },
      view: {
        title: 'View',
        items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen'
      },
      insert: {
        title: 'Insert',
        items: 'image link media template codesample inserttable | charmap hr | pagebreak nonbreaking anchor toc | insertdatetime'
      },
      format: {
        title: 'Format',
        items: 'bold italic underline strikethrough superscript subscript codeformat | blockformats align | removeformat'
      },
      tools: {
        title: 'Tools',
        items: 'spellchecker spellcheckerlanguage | a11ycheck code'
      },
      table: { title: 'Table' },
      help: { title: 'Help' }
    };
    var delimiterMenuNamePair = function () {
      return {
        name: '|',
        item: { text: '|' }
      };
    };
    var createMenuNameItemPair = function (name, item) {
      var menuItem = item ? {
        name: name,
        item: item
      } : null;
      return name === '|' ? delimiterMenuNamePair() : menuItem;
    };
    var hasItemName = function (namedMenuItems, name) {
      return findIndex(namedMenuItems, function (namedMenuItem) {
        return namedMenuItem.name === name;
      }).isSome();
    };
    var isSeparator = function (namedMenuItem) {
      return namedMenuItem && namedMenuItem.item.text === '|';
    };
    var cleanupMenu = function (namedMenuItems, removedMenuItems) {
      var menuItemsPass1 = filter(namedMenuItems, function (namedMenuItem) {
        return removedMenuItems.hasOwnProperty(namedMenuItem.name) === false;
      });
      var menuItemsPass2 = filter(menuItemsPass1, function (namedMenuItem, i, namedMenuItems) {
        return !isSeparator(namedMenuItem) || !isSeparator(namedMenuItems[i - 1]);
      });
      return filter(menuItemsPass2, function (namedMenuItem, i, namedMenuItems) {
        return !isSeparator(namedMenuItem) || i > 0 && i < namedMenuItems.length - 1;
      });
    };
    var createMenu = function (editorMenuItems, menus, removedMenuItems, context) {
      var menuButton, menu, namedMenuItems, isUserDefined;
      if (menus) {
        menu = menus[context];
        isUserDefined = true;
      } else {
        menu = defaultMenus[context];
      }
      if (menu) {
        menuButton = { text: menu.title };
        namedMenuItems = [];
        global$2.each((menu.items || '').split(/[ ,]/), function (name) {
          var namedMenuItem = createMenuNameItemPair(name, editorMenuItems[name]);
          if (namedMenuItem) {
            namedMenuItems.push(namedMenuItem);
          }
        });
        if (!isUserDefined) {
          global$2.each(editorMenuItems, function (item, name) {
            if (item.context === context && !hasItemName(namedMenuItems, name)) {
              if (item.separator === 'before') {
                namedMenuItems.push(delimiterMenuNamePair());
              }
              if (item.prependToContext) {
                namedMenuItems.unshift(createMenuNameItemPair(name, item));
              } else {
                namedMenuItems.push(createMenuNameItemPair(name, item));
              }
              if (item.separator === 'after') {
                namedMenuItems.push(delimiterMenuNamePair());
              }
            }
          });
        }
        menuButton.menu = map(cleanupMenu(namedMenuItems, removedMenuItems), function (menuItem) {
          return menuItem.item;
        });
        if (!menuButton.menu.length) {
          return null;
        }
      }
      return menuButton;
    };
    var getDefaultMenubar = function (editor) {
      var name;
      var defaultMenuBar = [];
      var menu = getMenu(editor);
      if (menu) {
        for (name in menu) {
          defaultMenuBar.push(name);
        }
      } else {
        for (name in defaultMenus) {
          defaultMenuBar.push(name);
        }
      }
      return defaultMenuBar;
    };
    var createMenuButtons = function (editor) {
      var menuButtons = [];
      var defaultMenuBar = getDefaultMenubar(editor);
      var removedMenuItems = global$2.makeMap(getRemovedMenuItems(editor).split(/[ ,]/));
      var menubar = getMenubar(editor);
      var enabledMenuNames = typeof menubar === 'string' ? menubar.split(/[ ,]/) : defaultMenuBar;
      for (var i = 0; i < enabledMenuNames.length; i++) {
        var menuItems = enabledMenuNames[i];
        var menu = createMenu(editor.menuItems, getMenu(editor), removedMenuItems, menuItems);
        if (menu) {
          menuButtons.push(menu);
        }
      }
      return menuButtons;
    };
    var Menubar = { createMenuButtons: createMenuButtons };

    var DOM$1 = global$3.DOM;
    var getSize = function (elm) {
      return {
        width: elm.clientWidth,
        height: elm.clientHeight
      };
    };
    var resizeTo = function (editor, width, height) {
      var containerElm, iframeElm, containerSize, iframeSize;
      containerElm = editor.getContainer();
      iframeElm = editor.getContentAreaContainer().firstChild;
      containerSize = getSize(containerElm);
      iframeSize = getSize(iframeElm);
      if (width !== null) {
        width = Math.max(getMinWidth(editor), width);
        width = Math.min(getMaxWidth(editor), width);
        DOM$1.setStyle(containerElm, 'width', width + (containerSize.width - iframeSize.width));
        DOM$1.setStyle(iframeElm, 'width', width);
      }
      height = Math.max(getMinHeight(editor), height);
      height = Math.min(getMaxHeight(editor), height);
      DOM$1.setStyle(iframeElm, 'height', height);
      Events.fireResizeEditor(editor);
    };
    var resizeBy = function (editor, dw, dh) {
      var elm = editor.getContentAreaContainer();
      resizeTo(editor, elm.clientWidth + dw, elm.clientHeight + dh);
    };
    var Resize = {
      resizeTo: resizeTo,
      resizeBy: resizeBy
    };

    var global$8 = tinymce.util.Tools.resolve('tinymce.Env');

    var api = function (elm) {
      return {
        element: function () {
          return elm;
        }
      };
    };
    var trigger = function (sidebar, panel, callbackName) {
      var callback = sidebar.settings[callbackName];
      if (callback) {
        callback(api(panel.getEl('body')));
      }
    };
    var hidePanels = function (name, container, sidebars) {
      global$2.each(sidebars, function (sidebar) {
        var panel = container.items().filter('#' + sidebar.name)[0];
        if (panel && panel.visible() && sidebar.name !== name) {
          trigger(sidebar, panel, 'onhide');
          panel.visible(false);
        }
      });
    };
    var deactivateButtons = function (toolbar) {
      toolbar.items().each(function (ctrl) {
        ctrl.active(false);
      });
    };
    var findSidebar = function (sidebars, name) {
      return global$2.grep(sidebars, function (sidebar) {
        return sidebar.name === name;
      })[0];
    };
    var showPanel = function (editor, name, sidebars) {
      return function (e) {
        var btnCtrl = e.control;
        var container = btnCtrl.parents().filter('panel')[0];
        var panel = container.find('#' + name)[0];
        var sidebar = findSidebar(sidebars, name);
        hidePanels(name, container, sidebars);
        deactivateButtons(btnCtrl.parent());
        if (panel && panel.visible()) {
          trigger(sidebar, panel, 'onhide');
          panel.hide();
          btnCtrl.active(false);
        } else {
          if (panel) {
            panel.show();
            trigger(sidebar, panel, 'onshow');
          } else {
            panel = global$4.create({
              type: 'container',
              name: name,
              layout: 'stack',
              classes: 'sidebar-panel',
              html: ''
            });
            container.prepend(panel);
            trigger(sidebar, panel, 'onrender');
            trigger(sidebar, panel, 'onshow');
          }
          btnCtrl.active(true);
        }
        Events.fireResizeEditor(editor);
      };
    };
    var isModernBrowser = function () {
      return !global$8.ie || global$8.ie >= 11;
    };
    var hasSidebar = function (editor) {
      return isModernBrowser() && editor.sidebars ? editor.sidebars.length > 0 : false;
    };
    var createSidebar = function (editor) {
      var buttons = global$2.map(editor.sidebars, function (sidebar) {
        var settings = sidebar.settings;
        return {
          type: 'button',
          icon: settings.icon,
          image: settings.image,
          tooltip: settings.tooltip,
          onclick: showPanel(editor, sidebar.name, editor.sidebars)
        };
      });
      return {
        type: 'panel',
        name: 'sidebar',
        layout: 'stack',
        classes: 'sidebar',
        items: [{
            type: 'toolbar',
            layout: 'stack',
            classes: 'sidebar-toolbar',
            items: buttons
          }]
      };
    };
    var Sidebar = {
      hasSidebar: hasSidebar,
      createSidebar: createSidebar
    };

    var fireSkinLoaded$1 = function (editor) {
      var done = function () {
        editor._skinLoaded = true;
        Events.fireSkinLoaded(editor);
      };
      return function () {
        if (editor.initialized) {
          done();
        } else {
          editor.on('init', done);
        }
      };
    };
    var SkinLoaded = { fireSkinLoaded: fireSkinLoaded$1 };

    var DOM$2 = global$3.DOM;
    var switchMode = function (panel) {
      return function (e) {
        panel.find('*').disabled(e.mode === 'readonly');
      };
    };
    var editArea = function (border) {
      return {
        type: 'panel',
        name: 'iframe',
        layout: 'stack',
        classes: 'edit-area',
        border: border,
        html: ''
      };
    };
    var editAreaContainer = function (editor) {
      return {
        type: 'panel',
        layout: 'stack',
        classes: 'edit-aria-container',
        border: '1 0 0 0',
        items: [
          editArea('0'),
          Sidebar.createSidebar(editor)
        ]
      };
    };
    var render = function (editor, theme, args) {
      var panel, resizeHandleCtrl, startSize;
      if (isSkinDisabled(editor) === false && args.skinUiCss) {
        DOM$2.styleSheetLoader.load(args.skinUiCss, SkinLoaded.fireSkinLoaded(editor));
      } else {
        SkinLoaded.fireSkinLoaded(editor)();
      }
      panel = theme.panel = global$4.create({
        type: 'panel',
        role: 'application',
        classes: 'tinymce',
        style: 'visibility: hidden',
        layout: 'stack',
        border: 1,
        items: [
          {
            type: 'container',
            classes: 'top-part',
            items: [
              hasMenubar(editor) === false ? null : {
                type: 'menubar',
                border: '0 0 1 0',
                items: Menubar.createMenuButtons(editor)
              },
              Toolbar.createToolbars(editor, getToolbarSize(editor))
            ]
          },
          Sidebar.hasSidebar(editor) ? editAreaContainer(editor) : editArea('1 0 0 0')
        ]
      });
      UiContainer.setUiContainer(editor, panel);
      if (getResize(editor) !== 'none') {
        resizeHandleCtrl = {
          type: 'resizehandle',
          direction: getResize(editor),
          onResizeStart: function () {
            var elm = editor.getContentAreaContainer().firstChild;
            startSize = {
              width: elm.clientWidth,
              height: elm.clientHeight
            };
          },
          onResize: function (e) {
            if (getResize(editor) === 'both') {
              Resize.resizeTo(editor, startSize.width + e.deltaX, startSize.height + e.deltaY);
            } else {
              Resize.resizeTo(editor, null, startSize.height + e.deltaY);
            }
          }
        };
      }
      if (hasStatusbar(editor)) {
        var linkHtml = '<a href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce" rel="noopener" target="_blank" role="presentation" tabindex="-1">Tiny</a>';
        var html = global$5.translate([
          'Powered by {0}',
          linkHtml
        ]);
        var brandingLabel = isBrandingEnabled(editor) ? {
          type: 'label',
          classes: 'branding',
          html: ' ' + html
        } : null;
        panel.add({
          type: 'panel',
          name: 'statusbar',
          classes: 'statusbar',
          layout: 'flow',
          border: '1 0 0 0',
          ariaRoot: true,
          items: [
            {
              type: 'elementpath',
              editor: editor
            },
            resizeHandleCtrl,
            brandingLabel
          ]
        });
      }
      Events.fireBeforeRenderUI(editor);
      editor.on('SwitchMode', switchMode(panel));
      panel.renderBefore(args.targetNode).reflow();
      if (isReadOnly(editor)) {
        editor.setMode('readonly');
      }
      if (args.width) {
        DOM$2.setStyle(panel.getEl(), 'width', args.width);
      }
      editor.on('remove', function () {
        panel.remove();
        panel = null;
      });
      A11y.addKeys(editor, panel);
      ContextToolbars.addContextualToolbars(editor);
      return {
        iframeContainer: panel.find('#iframe')[0].getEl(),
        editorContainer: panel.getEl()
      };
    };
    var Iframe = { render: render };

    var global$9 = tinymce.util.Tools.resolve('tinymce.dom.DomQuery');

    var count = 0;
    var funcs = {
      id: function () {
        return 'mceu_' + count++;
      },
      create: function (name$$1, attrs, children) {
        var elm = document.createElement(name$$1);
        global$3.DOM.setAttribs(elm, attrs);
        if (typeof children === 'string') {
          elm.innerHTML = children;
        } else {
          global$2.each(children, function (child) {
            if (child.nodeType) {
              elm.appendChild(child);
            }
          });
        }
        return elm;
      },
      createFragment: function (html) {
        return global$3.DOM.createFragment(html);
      },
      getWindowSize: function () {
        return global$3.DOM.getViewPort();
      },
      getSize: function (elm) {
        var width, height;
        if (elm.getBoundingClientRect) {
          var rect = elm.getBoundingClientRect();
          width = Math.max(rect.width || rect.right - rect.left, elm.offsetWidth);
          height = Math.max(rect.height || rect.bottom - rect.bottom, elm.offsetHeight);
        } else {
          width = elm.offsetWidth;
          height = elm.offsetHeight;
        }
        return {
          width: width,
          height: height
        };
      },
      getPos: function (elm, root) {
        return global$3.DOM.getPos(elm, root || funcs.getContainer());
      },
      getContainer: function () {
        return global$8.container ? global$8.container : document.body;
      },
      getViewPort: function (win) {
        return global$3.DOM.getViewPort(win);
      },
      get: function (id) {
        return document.getElementById(id);
      },
      addClass: function (elm, cls) {
        return global$3.DOM.addClass(elm, cls);
      },
      removeClass: function (elm, cls) {
        return global$3.DOM.removeClass(elm, cls);
      },
      hasClass: function (elm, cls) {
        return global$3.DOM.hasClass(elm, cls);
      },
      toggleClass: function (elm, cls, state) {
        return global$3.DOM.toggleClass(elm, cls, state);
      },
      css: function (elm, name$$1, value) {
        return global$3.DOM.setStyle(elm, name$$1, value);
      },
      getRuntimeStyle: function (elm, name$$1) {
        return global$3.DOM.getStyle(elm, name$$1, true);
      },
      on: function (target, name$$1, callback, scope) {
        return global$3.DOM.bind(target, name$$1, callback, scope);
      },
      off: function (target, name$$1, callback) {
        return global$3.DOM.unbind(target, name$$1, callback);
      },
      fire: function (target, name$$1, args) {
        return global$3.DOM.fire(target, name$$1, args);
      },
      innerHtml: function (elm, html) {
        global$3.DOM.setHTML(elm, html);
      }
    };

    var isStatic = function (elm) {
      return funcs.getRuntimeStyle(elm, 'position') === 'static';
    };
    var isFixed = function (ctrl) {
      return ctrl.state.get('fixed');
    };
    function calculateRelativePosition(ctrl, targetElm, rel) {
      var ctrlElm, pos, x, y, selfW, selfH, targetW, targetH, viewport, size;
      viewport = getWindowViewPort();
      pos = funcs.getPos(targetElm, UiContainer.getUiContainer(ctrl));
      x = pos.x;
      y = pos.y;
      if (isFixed(ctrl) && isStatic(document.body)) {
        x -= viewport.x;
        y -= viewport.y;
      }
      ctrlElm = ctrl.getEl();
      size = funcs.getSize(ctrlElm);
      selfW = size.width;
      selfH = size.height;
      size = funcs.getSize(targetElm);
      targetW = size.width;
      targetH = size.height;
      rel = (rel || '').split('');
      if (rel[0] === 'b') {
        y += targetH;
      }
      if (rel[1] === 'r') {
        x += targetW;
      }
      if (rel[0] === 'c') {
        y += Math.round(targetH / 2);
      }
      if (rel[1] === 'c') {
        x += Math.round(targetW / 2);
      }
      if (rel[3] === 'b') {
        y -= selfH;
      }
      if (rel[4] === 'r') {
        x -= selfW;
      }
      if (rel[3] === 'c') {
        y -= Math.round(selfH / 2);
      }
      if (rel[4] === 'c') {
        x -= Math.round(selfW / 2);
      }
      return {
        x: x,
        y: y,
        w: selfW,
        h: selfH
      };
    }
    var getUiContainerViewPort = function (customUiContainer) {
      return {
        x: 0,
        y: 0,
        w: customUiContainer.scrollWidth - 1,
        h: customUiContainer.scrollHeight - 1
      };
    };
    var getWindowViewPort = function () {
      var win = window;
      var x = Math.max(win.pageXOffset, document.body.scrollLeft, document.documentElement.scrollLeft);
      var y = Math.max(win.pageYOffset, document.body.scrollTop, document.documentElement.scrollTop);
      var w = win.innerWidth || document.documentElement.clientWidth;
      var h = win.innerHeight || document.documentElement.clientHeight;
      return {
        x: x,
        y: y,
        w: w,
        h: h
      };
    };
    var getViewPortRect = function (ctrl) {
      var customUiContainer = UiContainer.getUiContainer(ctrl);
      return customUiContainer && !isFixed(ctrl) ? getUiContainerViewPort(customUiContainer) : getWindowViewPort();
    };
    var Movable = {
      testMoveRel: function (elm, rels) {
        var viewPortRect = getViewPortRect(this);
        for (var i = 0; i < rels.length; i++) {
          var pos = calculateRelativePosition(this, elm, rels[i]);
          if (isFixed(this)) {
            if (pos.x > 0 && pos.x + pos.w < viewPortRect.w && pos.y > 0 && pos.y + pos.h < viewPortRect.h) {
              return rels[i];
            }
          } else {
            if (pos.x > viewPortRect.x && pos.x + pos.w < viewPortRect.w + viewPortRect.x && pos.y > viewPortRect.y && pos.y + pos.h < viewPortRect.h + viewPortRect.y) {
              return rels[i];
            }
          }
        }
        return rels[0];
      },
      moveRel: function (elm, rel) {
        if (typeof rel !== 'string') {
          rel = this.testMoveRel(elm, rel);
        }
        var pos = calculateRelativePosition(this, elm, rel);
        return this.moveTo(pos.x, pos.y);
      },
      moveBy: function (dx, dy) {
        var self$$1 = this, rect = self$$1.layoutRect();
        self$$1.moveTo(rect.x + dx, rect.y + dy);
        return self$$1;
      },
      moveTo: function (x, y) {
        var self$$1 = this;
        function constrain(value, max, size) {
          if (value < 0) {
            return 0;
          }
          if (value + size > max) {
            value = max - size;
            return value < 0 ? 0 : value;
          }
          return value;
        }
        if (self$$1.settings.constrainToViewport) {
          var viewPortRect = getViewPortRect(this);
          var layoutRect = self$$1.layoutRect();
          x = constrain(x, viewPortRect.w + viewPortRect.x, layoutRect.w);
          y = constrain(y, viewPortRect.h + viewPortRect.y, layoutRect.h);
        }
        var uiContainer = UiContainer.getUiContainer(self$$1);
        if (uiContainer && isStatic(uiContainer) && !isFixed(self$$1)) {
          x -= uiContainer.scrollLeft;
          y -= uiContainer.scrollTop;
        }
        if (uiContainer) {
          x += 1;
          y += 1;
        }
        if (self$$1.state.get('rendered')) {
          self$$1.layoutRect({
            x: x,
            y: y
          }).repaint();
        } else {
          self$$1.settings.x = x;
          self$$1.settings.y = y;
        }
        self$$1.fire('move', {
          x: x,
          y: y
        });
        return self$$1;
      }
    };

    var global$a = tinymce.util.Tools.resolve('tinymce.util.Class');

    var global$b = tinymce.util.Tools.resolve('tinymce.util.EventDispatcher');

    var BoxUtils = {
      parseBox: function (value) {
        var len;
        var radix = 10;
        if (!value) {
          return;
        }
        if (typeof value === 'number') {
          value = value || 0;
          return {
            top: value,
            left: value,
            bottom: value,
            right: value
          };
        }
        value = value.split(' ');
        len = value.length;
        if (len === 1) {
          value[1] = value[2] = value[3] = value[0];
        } else if (len === 2) {
          value[2] = value[0];
          value[3] = value[1];
        } else if (len === 3) {
          value[3] = value[1];
        }
        return {
          top: parseInt(value[0], radix) || 0,
          right: parseInt(value[1], radix) || 0,
          bottom: parseInt(value[2], radix) || 0,
          left: parseInt(value[3], radix) || 0
        };
      },
      measureBox: function (elm, prefix) {
        function getStyle(name) {
          var defaultView = elm.ownerDocument.defaultView;
          if (defaultView) {
            var computedStyle = defaultView.getComputedStyle(elm, null);
            if (computedStyle) {
              name = name.replace(/[A-Z]/g, function (a) {
                return '-' + a;
              });
              return computedStyle.getPropertyValue(name);
            } else {
              return null;
            }
          }
          return elm.currentStyle[name];
        }
        function getSide(name) {
          var val = parseFloat(getStyle(name));
          return isNaN(val) ? 0 : val;
        }
        return {
          top: getSide(prefix + 'TopWidth'),
          right: getSide(prefix + 'RightWidth'),
          bottom: getSide(prefix + 'BottomWidth'),
          left: getSide(prefix + 'LeftWidth')
        };
      }
    };

    function noop$1() {
    }
    function ClassList(onchange) {
      this.cls = [];
      this.cls._map = {};
      this.onchange = onchange || noop$1;
      this.prefix = '';
    }
    global$2.extend(ClassList.prototype, {
      add: function (cls) {
        if (cls && !this.contains(cls)) {
          this.cls._map[cls] = true;
          this.cls.push(cls);
          this._change();
        }
        return this;
      },
      remove: function (cls) {
        if (this.contains(cls)) {
          var i = void 0;
          for (i = 0; i < this.cls.length; i++) {
            if (this.cls[i] === cls) {
              break;
            }
          }
          this.cls.splice(i, 1);
          delete this.cls._map[cls];
          this._change();
        }
        return this;
      },
      toggle: function (cls, state) {
        var curState = this.contains(cls);
        if (curState !== state) {
          if (curState) {
            this.remove(cls);
          } else {
            this.add(cls);
          }
          this._change();
        }
        return this;
      },
      contains: function (cls) {
        return !!this.cls._map[cls];
      },
      _change: function () {
        delete this.clsValue;
        this.onchange.call(this);
      }
    });
    ClassList.prototype.toString = function () {
      var value;
      if (this.clsValue) {
        return this.clsValue;
      }
      value = '';
      for (var i = 0; i < this.cls.length; i++) {
        if (i > 0) {
          value += ' ';
        }
        value += this.prefix + this.cls[i];
      }
      return value;
    };

    function unique(array) {
      var uniqueItems = [];
      var i = array.length, item;
      while (i--) {
        item = array[i];
        if (!item.__checked) {
          uniqueItems.push(item);
          item.__checked = 1;
        }
      }
      i = uniqueItems.length;
      while (i--) {
        delete uniqueItems[i].__checked;
      }
      return uniqueItems;
    }
    var expression = /^([\w\\*]+)?(?:#([\w\-\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i;
    var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
    var whiteSpace = /^\s*|\s*$/g;
    var Collection;
    var Selector = global$a.extend({
      init: function (selector) {
        var match = this.match;
        function compileNameFilter(name) {
          if (name) {
            name = name.toLowerCase();
            return function (item) {
              return name === '*' || item.type === name;
            };
          }
        }
        function compileIdFilter(id) {
          if (id) {
            return function (item) {
              return item._name === id;
            };
          }
        }
        function compileClassesFilter(classes) {
          if (classes) {
            classes = classes.split('.');
            return function (item) {
              var i = classes.length;
              while (i--) {
                if (!item.classes.contains(classes[i])) {
                  return false;
                }
              }
              return true;
            };
          }
        }
        function compileAttrFilter(name, cmp, check) {
          if (name) {
            return function (item) {
              var value = item[name] ? item[name]() : '';
              return !cmp ? !!check : cmp === '=' ? value === check : cmp === '*=' ? value.indexOf(check) >= 0 : cmp === '~=' ? (' ' + value + ' ').indexOf(' ' + check + ' ') >= 0 : cmp === '!=' ? value !== check : cmp === '^=' ? value.indexOf(check) === 0 : cmp === '$=' ? value.substr(value.length - check.length) === check : false;
            };
          }
        }
        function compilePsuedoFilter(name) {
          var notSelectors;
          if (name) {
            name = /(?:not\((.+)\))|(.+)/i.exec(name);
            if (!name[1]) {
              name = name[2];
              return function (item, index, length) {
                return name === 'first' ? index === 0 : name === 'last' ? index === length - 1 : name === 'even' ? index % 2 === 0 : name === 'odd' ? index % 2 === 1 : item[name] ? item[name]() : false;
              };
            }
            notSelectors = parseChunks(name[1], []);
            return function (item) {
              return !match(item, notSelectors);
            };
          }
        }
        function compile(selector, filters, direct) {
          var parts;
          function add(filter) {
            if (filter) {
              filters.push(filter);
            }
          }
          parts = expression.exec(selector.replace(whiteSpace, ''));
          add(compileNameFilter(parts[1]));
          add(compileIdFilter(parts[2]));
          add(compileClassesFilter(parts[3]));
          add(compileAttrFilter(parts[4], parts[5], parts[6]));
          add(compilePsuedoFilter(parts[7]));
          filters.pseudo = !!parts[7];
          filters.direct = direct;
          return filters;
        }
        function parseChunks(selector, selectors) {
          var parts = [];
          var extra, matches, i;
          do {
            chunker.exec('');
            matches = chunker.exec(selector);
            if (matches) {
              selector = matches[3];
              parts.push(matches[1]);
              if (matches[2]) {
                extra = matches[3];
                break;
              }
            }
          } while (matches);
          if (extra) {
            parseChunks(extra, selectors);
          }
          selector = [];
          for (i = 0; i < parts.length; i++) {
            if (parts[i] !== '>') {
              selector.push(compile(parts[i], [], parts[i - 1] === '>'));
            }
          }
          selectors.push(selector);
          return selectors;
        }
        this._selectors = parseChunks(selector, []);
      },
      match: function (control, selectors) {
        var i, l, si, sl, selector, fi, fl, filters, index, length, siblings, count, item;
        selectors = selectors || this._selectors;
        for (i = 0, l = selectors.length; i < l; i++) {
          selector = selectors[i];
          sl = selector.length;
          item = control;
          count = 0;
          for (si = sl - 1; si >= 0; si--) {
            filters = selector[si];
            while (item) {
              if (filters.pseudo) {
                siblings = item.parent().items();
                index = length = siblings.length;
                while (index--) {
                  if (siblings[index] === item) {
                    break;
                  }
                }
              }
              for (fi = 0, fl = filters.length; fi < fl; fi++) {
                if (!filters[fi](item, index, length)) {
                  fi = fl + 1;
                  break;
                }
              }
              if (fi === fl) {
                count++;
                break;
              } else {
                if (si === sl - 1) {
                  break;
                }
              }
              item = item.parent();
            }
          }
          if (count === sl) {
            return true;
          }
        }
        return false;
      },
      find: function (container) {
        var matches = [], i, l;
        var selectors = this._selectors;
        function collect(items, selector, index) {
          var i, l, fi, fl, item;
          var filters = selector[index];
          for (i = 0, l = items.length; i < l; i++) {
            item = items[i];
            for (fi = 0, fl = filters.length; fi < fl; fi++) {
              if (!filters[fi](item, i, l)) {
                fi = fl + 1;
                break;
              }
            }
            if (fi === fl) {
              if (index === selector.length - 1) {
                matches.push(item);
              } else {
                if (item.items) {
                  collect(item.items(), selector, index + 1);
                }
              }
            } else if (filters.direct) {
              return;
            }
            if (item.items) {
              collect(item.items(), selector, index);
            }
          }
        }
        if (container.items) {
          for (i = 0, l = selectors.length; i < l; i++) {
            collect(container.items(), selectors[i], 0);
          }
          if (l > 1) {
            matches = unique(matches);
          }
        }
        if (!Collection) {
          Collection = Selector.Collection;
        }
        return new Collection(matches);
      }
    });

    var Collection$1, proto;
    var push$1 = Array.prototype.push, slice$1 = Array.prototype.slice;
    proto = {
      length: 0,
      init: function (items) {
        if (items) {
          this.add(items);
        }
      },
      add: function (items) {
        var self = this;
        if (!global$2.isArray(items)) {
          if (items instanceof Collection$1) {
            self.add(items.toArray());
          } else {
            push$1.call(self, items);
          }
        } else {
          push$1.apply(self, items);
        }
        return self;
      },
      set: function (items) {
        var self = this;
        var len = self.length;
        var i;
        self.length = 0;
        self.add(items);
        for (i = self.length; i < len; i++) {
          delete self[i];
        }
        return self;
      },
      filter: function (selector) {
        var self = this;
        var i, l;
        var matches = [];
        var item, match;
        if (typeof selector === 'string') {
          selector = new Selector(selector);
          match = function (item) {
            return selector.match(item);
          };
        } else {
          match = selector;
        }
        for (i = 0, l = self.length; i < l; i++) {
          item = self[i];
          if (match(item)) {
            matches.push(item);
          }
        }
        return new Collection$1(matches);
      },
      slice: function () {
        return new Collection$1(slice$1.apply(this, arguments));
      },
      eq: function (index) {
        return index === -1 ? this.slice(index) : this.slice(index, +index + 1);
      },
      each: function (callback) {
        global$2.each(this, callback);
        return this;
      },
      toArray: function () {
        return global$2.toArray(this);
      },
      indexOf: function (ctrl) {
        var self = this;
        var i = self.length;
        while (i--) {
          if (self[i] === ctrl) {
            break;
          }
        }
        return i;
      },
      reverse: function () {
        return new Collection$1(global$2.toArray(this).reverse());
      },
      hasClass: function (cls) {
        return this[0] ? this[0].classes.contains(cls) : false;
      },
      prop: function (name, value) {
        var self = this;
        var item;
        if (value !== undefined) {
          self.each(function (item) {
            if (item[name]) {
              item[name](value);
            }
          });
          return self;
        }
        item = self[0];
        if (item && item[name]) {
          return item[name]();
        }
      },
      exec: function (name) {
        var self = this, args = global$2.toArray(arguments).slice(1);
        self.each(function (item) {
          if (item[name]) {
            item[name].apply(item, args);
          }
        });
        return self;
      },
      remove: function () {
        var i = this.length;
        while (i--) {
          this[i].remove();
        }
        return this;
      },
      addClass: function (cls) {
        return this.each(function (item) {
          item.classes.add(cls);
        });
      },
      removeClass: function (cls) {
        return this.each(function (item) {
          item.classes.remove(cls);
        });
      }
    };
    global$2.each('fire on off show hide append prepend before after reflow'.split(' '), function (name) {
      proto[name] = function () {
        var args = global$2.toArray(arguments);
        this.each(function (ctrl) {
          if (name in ctrl) {
            ctrl[name].apply(ctrl, args);
          }
        });
        return this;
      };
    });
    global$2.each('text name disabled active selected checked visible parent value data'.split(' '), function (name) {
      proto[name] = function (value) {
        return this.prop(name, value);
      };
    });
    Collection$1 = global$a.extend(proto);
    Selector.Collection = Collection$1;
    var Collection$2 = Collection$1;

    var Binding = function (settings) {
      this.create = settings.create;
    };
    Binding.create = function (model, name) {
      return new Binding({
        create: function (otherModel, otherName) {
          var bindings;
          var fromSelfToOther = function (e) {
            otherModel.set(otherName, e.value);
          };
          var fromOtherToSelf = function (e) {
            model.set(name, e.value);
          };
          otherModel.on('change:' + otherName, fromOtherToSelf);
          model.on('change:' + name, fromSelfToOther);
          bindings = otherModel._bindings;
          if (!bindings) {
            bindings = otherModel._bindings = [];
            otherModel.on('destroy', function () {
              var i = bindings.length;
              while (i--) {
                bindings[i]();
              }
            });
          }
          bindings.push(function () {
            model.off('change:' + name, fromSelfToOther);
          });
          return model.get(name);
        }
      });
    };

    var global$c = tinymce.util.Tools.resolve('tinymce.util.Observable');

    function isNode(node) {
      return node.nodeType > 0;
    }
    function isEqual(a, b) {
      var k, checked;
      if (a === b) {
        return true;
      }
      if (a === null || b === null) {
        return a === b;
      }
      if (typeof a !== 'object' || typeof b !== 'object') {
        return a === b;
      }
      if (global$2.isArray(b)) {
        if (a.length !== b.length) {
          return false;
        }
        k = a.length;
        while (k--) {
          if (!isEqual(a[k], b[k])) {
            return false;
          }
        }
      }
      if (isNode(a) || isNode(b)) {
        return a === b;
      }
      checked = {};
      for (k in b) {
        if (!isEqual(a[k], b[k])) {
          return false;
        }
        checked[k] = true;
      }
      for (k in a) {
        if (!checked[k] && !isEqual(a[k], b[k])) {
          return false;
        }
      }
      return true;
    }
    var ObservableObject = global$a.extend({
      Mixins: [global$c],
      init: function (data) {
        var name, value;
        data = data || {};
        for (name in data) {
          value = data[name];
          if (value instanceof Binding) {
            data[name] = value.create(this, name);
          }
        }
        this.data = data;
      },
      set: function (name, value) {
        var key, args;
        var oldValue = this.data[name];
        if (value instanceof Binding) {
          value = value.create(this, name);
        }
        if (typeof name === 'object') {
          for (key in name) {
            this.set(key, name[key]);
          }
          return this;
        }
        if (!isEqual(oldValue, value)) {
          this.data[name] = value;
          args = {
            target: this,
            name: name,
            value: value,
            oldValue: oldValue
          };
          this.fire('change:' + name, args);
          this.fire('change', args);
        }
        return this;
      },
      get: function (name) {
        return this.data[name];
      },
      has: function (name) {
        return name in this.data;
      },
      bind: function (name) {
        return Binding.create(this, name);
      },
      destroy: function () {
        this.fire('destroy');
      }
    });

    var dirtyCtrls = {}, animationFrameRequested;
    var ReflowQueue = {
      add: function (ctrl) {
        var parent$$1 = ctrl.parent();
        if (parent$$1) {
          if (!parent$$1._layout || parent$$1._layout.isNative()) {
            return;
          }
          if (!dirtyCtrls[parent$$1._id]) {
            dirtyCtrls[parent$$1._id] = parent$$1;
          }
          if (!animationFrameRequested) {
            animationFrameRequested = true;
            global$7.requestAnimationFrame(function () {
              var id, ctrl;
              animationFrameRequested = false;
              for (id in dirtyCtrls) {
                ctrl = dirtyCtrls[id];
                if (ctrl.state.get('rendered')) {
                  ctrl.reflow();
                }
              }
              dirtyCtrls = {};
            }, document.body);
          }
        }
      },
      remove: function (ctrl) {
        if (dirtyCtrls[ctrl._id]) {
          delete dirtyCtrls[ctrl._id];
        }
      }
    };

    var hasMouseWheelEventSupport = 'onmousewheel' in document;
    var hasWheelEventSupport = false;
    var classPrefix = 'mce-';
    var Control, idCounter = 0;
    var proto$1 = {
      Statics: { classPrefix: classPrefix },
      isRtl: function () {
        return Control.rtl;
      },
      classPrefix: classPrefix,
      init: function (settings) {
        var self$$1 = this;
        var classes, defaultClasses;
        function applyClasses(classes) {
          var i;
          classes = classes.split(' ');
          for (i = 0; i < classes.length; i++) {
            self$$1.classes.add(classes[i]);
          }
        }
        self$$1.settings = settings = global$2.extend({}, self$$1.Defaults, settings);
        self$$1._id = settings.id || 'mceu_' + idCounter++;
        self$$1._aria = { role: settings.role };
        self$$1._elmCache = {};
        self$$1.$ = global$9;
        self$$1.state = new ObservableObject({
          visible: true,
          active: false,
          disabled: false,
          value: ''
        });
        self$$1.data = new ObservableObject(settings.data);
        self$$1.classes = new ClassList(function () {
          if (self$$1.state.get('rendered')) {
            self$$1.getEl().className = this.toString();
          }
        });
        self$$1.classes.prefix = self$$1.classPrefix;
        classes = settings.classes;
        if (classes) {
          if (self$$1.Defaults) {
            defaultClasses = self$$1.Defaults.classes;
            if (defaultClasses && classes !== defaultClasses) {
              applyClasses(defaultClasses);
            }
          }
          applyClasses(classes);
        }
        global$2.each('title text name visible disabled active value'.split(' '), function (name$$1) {
          if (name$$1 in settings) {
            self$$1[name$$1](settings[name$$1]);
          }
        });
        self$$1.on('click', function () {
          if (self$$1.disabled()) {
            return false;
          }
        });
        self$$1.settings = settings;
        self$$1.borderBox = BoxUtils.parseBox(settings.border);
        self$$1.paddingBox = BoxUtils.parseBox(settings.padding);
        self$$1.marginBox = BoxUtils.parseBox(settings.margin);
        if (settings.hidden) {
          self$$1.hide();
        }
      },
      Properties: 'parent,name',
      getContainerElm: function () {
        var uiContainer = UiContainer.getUiContainer(this);
        return uiContainer ? uiContainer : funcs.getContainer();
      },
      getParentCtrl: function (elm) {
        var ctrl;
        var lookup = this.getRoot().controlIdLookup;
        while (elm && lookup) {
          ctrl = lookup[elm.id];
          if (ctrl) {
            break;
          }
          elm = elm.parentNode;
        }
        return ctrl;
      },
      initLayoutRect: function () {
        var self$$1 = this;
        var settings = self$$1.settings;
        var borderBox, layoutRect;
        var elm = self$$1.getEl();
        var width, height, minWidth, minHeight, autoResize;
        var startMinWidth, startMinHeight, initialSize;
        borderBox = self$$1.borderBox = self$$1.borderBox || BoxUtils.measureBox(elm, 'border');
        self$$1.paddingBox = self$$1.paddingBox || BoxUtils.measureBox(elm, 'padding');
        self$$1.marginBox = self$$1.marginBox || BoxUtils.measureBox(elm, 'margin');
        initialSize = funcs.getSize(elm);
        startMinWidth = settings.minWidth;
        startMinHeight = settings.minHeight;
        minWidth = startMinWidth || initialSize.width;
        minHeight = startMinHeight || initialSize.height;
        width = settings.width;
        height = settings.height;
        autoResize = settings.autoResize;
        autoResize = typeof autoResize !== 'undefined' ? autoResize : !width && !height;
        width = width || minWidth;
        height = height || minHeight;
        var deltaW = borderBox.left + borderBox.right;
        var deltaH = borderBox.top + borderBox.bottom;
        var maxW = settings.maxWidth || 65535;
        var maxH = settings.maxHeight || 65535;
        self$$1._layoutRect = layoutRect = {
          x: settings.x || 0,
          y: settings.y || 0,
          w: width,
          h: height,
          deltaW: deltaW,
          deltaH: deltaH,
          contentW: width - deltaW,
          contentH: height - deltaH,
          innerW: width - deltaW,
          innerH: height - deltaH,
          startMinWidth: startMinWidth || 0,
          startMinHeight: startMinHeight || 0,
          minW: Math.min(minWidth, maxW),
          minH: Math.min(minHeight, maxH),
          maxW: maxW,
          maxH: maxH,
          autoResize: autoResize,
          scrollW: 0
        };
        self$$1._lastLayoutRect = {};
        return layoutRect;
      },
      layoutRect: function (newRect) {
        var self$$1 = this;
        var curRect = self$$1._layoutRect, lastLayoutRect, size, deltaWidth, deltaHeight, repaintControls;
        if (!curRect) {
          curRect = self$$1.initLayoutRect();
        }
        if (newRect) {
          deltaWidth = curRect.deltaW;
          deltaHeight = curRect.deltaH;
          if (newRect.x !== undefined) {
            curRect.x = newRect.x;
          }
          if (newRect.y !== undefined) {
            curRect.y = newRect.y;
          }
          if (newRect.minW !== undefined) {
            curRect.minW = newRect.minW;
          }
          if (newRect.minH !== undefined) {
            curRect.minH = newRect.minH;
          }
          size = newRect.w;
          if (size !== undefined) {
            size = size < curRect.minW ? curRect.minW : size;
            size = size > curRect.maxW ? curRect.maxW : size;
            curRect.w = size;
            curRect.innerW = size - deltaWidth;
          }
          size = newRect.h;
          if (size !== undefined) {
            size = size < curRect.minH ? curRect.minH : size;
            size = size > curRect.maxH ? curRect.maxH : size;
            curRect.h = size;
            curRect.innerH = size - deltaHeight;
          }
          size = newRect.innerW;
          if (size !== undefined) {
            size = size < curRect.minW - deltaWidth ? curRect.minW - deltaWidth : size;
            size = size > curRect.maxW - deltaWidth ? curRect.maxW - deltaWidth : size;
            curRect.innerW = size;
            curRect.w = size + deltaWidth;
          }
          size = newRect.innerH;
          if (size !== undefined) {
            size = size < curRect.minH - deltaHeight ? curRect.minH - deltaHeight : size;
            size = size > curRect.maxH - deltaHeight ? curRect.maxH - deltaHeight : size;
            curRect.innerH = size;
            curRect.h = size + deltaHeight;
          }
          if (newRect.contentW !== undefined) {
            curRect.contentW = newRect.contentW;
          }
          if (newRect.contentH !== undefined) {
            curRect.contentH = newRect.contentH;
          }
          lastLayoutRect = self$$1._lastLayoutRect;
          if (lastLayoutRect.x !== curRect.x || lastLayoutRect.y !== curRect.y || lastLayoutRect.w !== curRect.w || lastLayoutRect.h !== curRect.h) {
            repaintControls = Control.repaintControls;
            if (repaintControls) {
              if (repaintControls.map && !repaintControls.map[self$$1._id]) {
                repaintControls.push(self$$1);
                repaintControls.map[self$$1._id] = true;
              }
            }
            lastLayoutRect.x = curRect.x;
            lastLayoutRect.y = curRect.y;
            lastLayoutRect.w = curRect.w;
            lastLayoutRect.h = curRect.h;
          }
          return self$$1;
        }
        return curRect;
      },
      repaint: function () {
        var self$$1 = this;
        var style, bodyStyle, bodyElm, rect, borderBox;
        var borderW, borderH, lastRepaintRect, round, value;
        round = !document.createRange ? Math.round : function (value) {
          return value;
        };
        style = self$$1.getEl().style;
        rect = self$$1._layoutRect;
        lastRepaintRect = self$$1._lastRepaintRect || {};
        borderBox = self$$1.borderBox;
        borderW = borderBox.left + borderBox.right;
        borderH = borderBox.top + borderBox.bottom;
        if (rect.x !== lastRepaintRect.x) {
          style.left = round(rect.x) + 'px';
          lastRepaintRect.x = rect.x;
        }
        if (rect.y !== lastRepaintRect.y) {
          style.top = round(rect.y) + 'px';
          lastRepaintRect.y = rect.y;
        }
        if (rect.w !== lastRepaintRect.w) {
          value = round(rect.w - borderW);
          style.width = (value >= 0 ? value : 0) + 'px';
          lastRepaintRect.w = rect.w;
        }
        if (rect.h !== lastRepaintRect.h) {
          value = round(rect.h - borderH);
          style.height = (value >= 0 ? value : 0) + 'px';
          lastRepaintRect.h = rect.h;
        }
        if (self$$1._hasBody && rect.innerW !== lastRepaintRect.innerW) {
          value = round(rect.innerW);
          bodyElm = self$$1.getEl('body');
          if (bodyElm) {
            bodyStyle = bodyElm.style;
            bodyStyle.width = (value >= 0 ? value : 0) + 'px';
          }
          lastRepaintRect.innerW = rect.innerW;
        }
        if (self$$1._hasBody && rect.innerH !== lastRepaintRect.innerH) {
          value = round(rect.innerH);
          bodyElm = bodyElm || self$$1.getEl('body');
          if (bodyElm) {
            bodyStyle = bodyStyle || bodyElm.style;
            bodyStyle.height = (value >= 0 ? value : 0) + 'px';
          }
          lastRepaintRect.innerH = rect.innerH;
        }
        self$$1._lastRepaintRect = lastRepaintRect;
        self$$1.fire('repaint', {}, false);
      },
      updateLayoutRect: function () {
        var self$$1 = this;
        self$$1.parent()._lastRect = null;
        funcs.css(self$$1.getEl(), {
          width: '',
          height: ''
        });
        self$$1._layoutRect = self$$1._lastRepaintRect = self$$1._lastLayoutRect = null;
        self$$1.initLayoutRect();
      },
      on: function (name$$1, callback) {
        var self$$1 = this;
        function resolveCallbackName(name$$1) {
          var callback, scope;
          if (typeof name$$1 !== 'string') {
            return name$$1;
          }
          return function (e) {
            if (!callback) {
              self$$1.parentsAndSelf().each(function (ctrl) {
                var callbacks = ctrl.settings.callbacks;
                if (callbacks && (callback = callbacks[name$$1])) {
                  scope = ctrl;
                  return false;
                }
              });
            }
            if (!callback) {
              e.action = name$$1;
              this.fire('execute', e);
              return;
            }
            return callback.call(scope, e);
          };
        }
        getEventDispatcher(self$$1).on(name$$1, resolveCallbackName(callback));
        return self$$1;
      },
      off: function (name$$1, callback) {
        getEventDispatcher(this).off(name$$1, callback);
        return this;
      },
      fire: function (name$$1, args, bubble) {
        var self$$1 = this;
        args = args || {};
        if (!args.control) {
          args.control = self$$1;
        }
        args = getEventDispatcher(self$$1).fire(name$$1, args);
        if (bubble !== false && self$$1.parent) {
          var parent$$1 = self$$1.parent();
          while (parent$$1 && !args.isPropagationStopped()) {
            parent$$1.fire(name$$1, args, false);
            parent$$1 = parent$$1.parent();
          }
        }
        return args;
      },
      hasEventListeners: function (name$$1) {
        return getEventDispatcher(this).has(name$$1);
      },
      parents: function (selector) {
        var self$$1 = this;
        var ctrl, parents = new Collection$2();
        for (ctrl = self$$1.parent(); ctrl; ctrl = ctrl.parent()) {
          parents.add(ctrl);
        }
        if (selector) {
          parents = parents.filter(selector);
        }
        return parents;
      },
      parentsAndSelf: function (selector) {
        return new Collection$2(this).add(this.parents(selector));
      },
      next: function () {
        var parentControls = this.parent().items();
        return parentControls[parentControls.indexOf(this) + 1];
      },
      prev: function () {
        var parentControls = this.parent().items();
        return parentControls[parentControls.indexOf(this) - 1];
      },
      innerHtml: function (html) {
        this.$el.html(html);
        return this;
      },
      getEl: function (suffix) {
        var id = suffix ? this._id + '-' + suffix : this._id;
        if (!this._elmCache[id]) {
          this._elmCache[id] = global$9('#' + id)[0];
        }
        return this._elmCache[id];
      },
      show: function () {
        return this.visible(true);
      },
      hide: function () {
        return this.visible(false);
      },
      focus: function () {
        try {
          this.getEl().focus();
        } catch (ex) {
        }
        return this;
      },
      blur: function () {
        this.getEl().blur();
        return this;
      },
      aria: function (name$$1, value) {
        var self$$1 = this, elm = self$$1.getEl(self$$1.ariaTarget);
        if (typeof value === 'undefined') {
          return self$$1._aria[name$$1];
        }
        self$$1._aria[name$$1] = value;
        if (self$$1.state.get('rendered')) {
          elm.setAttribute(name$$1 === 'role' ? name$$1 : 'aria-' + name$$1, value);
        }
        return self$$1;
      },
      encode: function (text, translate) {
        if (translate !== false) {
          text = this.translate(text);
        }
        return (text || '').replace(/[&<>"]/g, function (match) {
          return '&#' + match.charCodeAt(0) + ';';
        });
      },
      translate: function (text) {
        return Control.translate ? Control.translate(text) : text;
      },
      before: function (items) {
        var self$$1 = this, parent$$1 = self$$1.parent();
        if (parent$$1) {
          parent$$1.insert(items, parent$$1.items().indexOf(self$$1), true);
        }
        return self$$1;
      },
      after: function (items) {
        var self$$1 = this, parent$$1 = self$$1.parent();
        if (parent$$1) {
          parent$$1.insert(items, parent$$1.items().indexOf(self$$1));
        }
        return self$$1;
      },
      remove: function () {
        var self$$1 = this;
        var elm = self$$1.getEl();
        var parent$$1 = self$$1.parent();
        var newItems, i;
        if (self$$1.items) {
          var controls = self$$1.items().toArray();
          i = controls.length;
          while (i--) {
            controls[i].remove();
          }
        }
        if (parent$$1 && parent$$1.items) {
          newItems = [];
          parent$$1.items().each(function (item) {
            if (item !== self$$1) {
              newItems.push(item);
            }
          });
          parent$$1.items().set(newItems);
          parent$$1._lastRect = null;
        }
        if (self$$1._eventsRoot && self$$1._eventsRoot === self$$1) {
          global$9(elm).off();
        }
        var lookup = self$$1.getRoot().controlIdLookup;
        if (lookup) {
          delete lookup[self$$1._id];
        }
        if (elm && elm.parentNode) {
          elm.parentNode.removeChild(elm);
        }
        self$$1.state.set('rendered', false);
        self$$1.state.destroy();
        self$$1.fire('remove');
        return self$$1;
      },
      renderBefore: function (elm) {
        global$9(elm).before(this.renderHtml());
        this.postRender();
        return this;
      },
      renderTo: function (elm) {
        global$9(elm || this.getContainerElm()).append(this.renderHtml());
        this.postRender();
        return this;
      },
      preRender: function () {
      },
      render: function () {
      },
      renderHtml: function () {
        return '<div id="' + this._id + '" class="' + this.classes + '"></div>';
      },
      postRender: function () {
        var self$$1 = this;
        var settings = self$$1.settings;
        var elm, box, parent$$1, name$$1, parentEventsRoot;
        self$$1.$el = global$9(self$$1.getEl());
        self$$1.state.set('rendered', true);
        for (name$$1 in settings) {
          if (name$$1.indexOf('on') === 0) {
            self$$1.on(name$$1.substr(2), settings[name$$1]);
          }
        }
        if (self$$1._eventsRoot) {
          for (parent$$1 = self$$1.parent(); !parentEventsRoot && parent$$1; parent$$1 = parent$$1.parent()) {
            parentEventsRoot = parent$$1._eventsRoot;
          }
          if (parentEventsRoot) {
            for (name$$1 in parentEventsRoot._nativeEvents) {
              self$$1._nativeEvents[name$$1] = true;
            }
          }
        }
        bindPendingEvents(self$$1);
        if (settings.style) {
          elm = self$$1.getEl();
          if (elm) {
            elm.setAttribute('style', settings.style);
            elm.style.cssText = settings.style;
          }
        }
        if (self$$1.settings.border) {
          box = self$$1.borderBox;
          self$$1.$el.css({
            'border-top-width': box.top,
            'border-right-width': box.right,
            'border-bottom-width': box.bottom,
            'border-left-width': box.left
          });
        }
        var root = self$$1.getRoot();
        if (!root.controlIdLookup) {
          root.controlIdLookup = {};
        }
        root.controlIdLookup[self$$1._id] = self$$1;
        for (var key in self$$1._aria) {
          self$$1.aria(key, self$$1._aria[key]);
        }
        if (self$$1.state.get('visible') === false) {
          self$$1.getEl().style.display = 'none';
        }
        self$$1.bindStates();
        self$$1.state.on('change:visible', function (e) {
          var state = e.value;
          var parentCtrl;
          if (self$$1.state.get('rendered')) {
            self$$1.getEl().style.display = state === false ? 'none' : '';
            self$$1.getEl().getBoundingClientRect();
          }
          parentCtrl = self$$1.parent();
          if (parentCtrl) {
            parentCtrl._lastRect = null;
          }
          self$$1.fire(state ? 'show' : 'hide');
          ReflowQueue.add(self$$1);
        });
        self$$1.fire('postrender', {}, false);
      },
      bindStates: function () {
      },
      scrollIntoView: function (align) {
        function getOffset(elm, rootElm) {
          var x, y, parent$$1 = elm;
          x = y = 0;
          while (parent$$1 && parent$$1 !== rootElm && parent$$1.nodeType) {
            x += parent$$1.offsetLeft || 0;
            y += parent$$1.offsetTop || 0;
            parent$$1 = parent$$1.offsetParent;
          }
          return {
            x: x,
            y: y
          };
        }
        var elm = this.getEl(), parentElm = elm.parentNode;
        var x, y, width, height, parentWidth, parentHeight;
        var pos = getOffset(elm, parentElm);
        x = pos.x;
        y = pos.y;
        width = elm.offsetWidth;
        height = elm.offsetHeight;
        parentWidth = parentElm.clientWidth;
        parentHeight = parentElm.clientHeight;
        if (align === 'end') {
          x -= parentWidth - width;
          y -= parentHeight - height;
        } else if (align === 'center') {
          x -= parentWidth / 2 - width / 2;
          y -= parentHeight / 2 - height / 2;
        }
        parentElm.scrollLeft = x;
        parentElm.scrollTop = y;
        return this;
      },
      getRoot: function () {
        var ctrl = this, rootControl;
        var parents = [];
        while (ctrl) {
          if (ctrl.rootControl) {
            rootControl = ctrl.rootControl;
            break;
          }
          parents.push(ctrl);
          rootControl = ctrl;
          ctrl = ctrl.parent();
        }
        if (!rootControl) {
          rootControl = this;
        }
        var i = parents.length;
        while (i--) {
          parents[i].rootControl = rootControl;
        }
        return rootControl;
      },
      reflow: function () {
        ReflowQueue.remove(this);
        var parent$$1 = this.parent();
        if (parent$$1 && parent$$1._layout && !parent$$1._layout.isNative()) {
          parent$$1.reflow();
        }
        return this;
      }
    };
    global$2.each('text title visible disabled active value'.split(' '), function (name$$1) {
      proto$1[name$$1] = function (value) {
        if (arguments.length === 0) {
          return this.state.get(name$$1);
        }
        if (typeof value !== 'undefined') {
          this.state.set(name$$1, value);
        }
        return this;
      };
    });
    Control = global$a.extend(proto$1);
    function getEventDispatcher(obj) {
      if (!obj._eventDispatcher) {
        obj._eventDispatcher = new global$b({
          scope: obj,
          toggleEvent: function (name$$1, state) {
            if (state && global$b.isNative(name$$1)) {
              if (!obj._nativeEvents) {
                obj._nativeEvents = {};
              }
              obj._nativeEvents[name$$1] = true;
              if (obj.state.get('rendered')) {
                bindPendingEvents(obj);
              }
            }
          }
        });
      }
      return obj._eventDispatcher;
    }
    function bindPendingEvents(eventCtrl) {
      var i, l, parents, eventRootCtrl, nativeEvents, name$$1;
      function delegate(e) {
        var control = eventCtrl.getParentCtrl(e.target);
        if (control) {
          control.fire(e.type, e);
        }
      }
      function mouseLeaveHandler() {
        var ctrl = eventRootCtrl._lastHoverCtrl;
        if (ctrl) {
          ctrl.fire('mouseleave', { target: ctrl.getEl() });
          ctrl.parents().each(function (ctrl) {
            ctrl.fire('mouseleave', { target: ctrl.getEl() });
          });
          eventRootCtrl._lastHoverCtrl = null;
        }
      }
      function mouseEnterHandler(e) {
        var ctrl = eventCtrl.getParentCtrl(e.target), lastCtrl = eventRootCtrl._lastHoverCtrl, idx = 0, i, parents, lastParents;
        if (ctrl !== lastCtrl) {
          eventRootCtrl._lastHoverCtrl = ctrl;
          parents = ctrl.parents().toArray().reverse();
          parents.push(ctrl);
          if (lastCtrl) {
            lastParents = lastCtrl.parents().toArray().reverse();
            lastParents.push(lastCtrl);
            for (idx = 0; idx < lastParents.length; idx++) {
              if (parents[idx] !== lastParents[idx]) {
                break;
              }
            }
            for (i = lastParents.length - 1; i >= idx; i--) {
              lastCtrl = lastParents[i];
              lastCtrl.fire('mouseleave', { target: lastCtrl.getEl() });
            }
          }
          for (i = idx; i < parents.length; i++) {
            ctrl = parents[i];
            ctrl.fire('mouseenter', { target: ctrl.getEl() });
          }
        }
      }
      function fixWheelEvent(e) {
        e.preventDefault();
        if (e.type === 'mousewheel') {
          e.deltaY = -1 / 40 * e.wheelDelta;
          if (e.wheelDeltaX) {
            e.deltaX = -1 / 40 * e.wheelDeltaX;
          }
        } else {
          e.deltaX = 0;
          e.deltaY = e.detail;
        }
        e = eventCtrl.fire('wheel', e);
      }
      nativeEvents = eventCtrl._nativeEvents;
      if (nativeEvents) {
        parents = eventCtrl.parents().toArray();
        parents.unshift(eventCtrl);
        for (i = 0, l = parents.length; !eventRootCtrl && i < l; i++) {
          eventRootCtrl = parents[i]._eventsRoot;
        }
        if (!eventRootCtrl) {
          eventRootCtrl = parents[parents.length - 1] || eventCtrl;
        }
        eventCtrl._eventsRoot = eventRootCtrl;
        for (l = i, i = 0; i < l; i++) {
          parents[i]._eventsRoot = eventRootCtrl;
        }
        var eventRootDelegates = eventRootCtrl._delegates;
        if (!eventRootDelegates) {
          eventRootDelegates = eventRootCtrl._delegates = {};
        }
        for (name$$1 in nativeEvents) {
          if (!nativeEvents) {
            return false;
          }
          if (name$$1 === 'wheel' && !hasWheelEventSupport) {
            if (hasMouseWheelEventSupport) {
              global$9(eventCtrl.getEl()).on('mousewheel', fixWheelEvent);
            } else {
              global$9(eventCtrl.getEl()).on('DOMMouseScroll', fixWheelEvent);
            }
            continue;
          }
          if (name$$1 === 'mouseenter' || name$$1 === 'mouseleave') {
            if (!eventRootCtrl._hasMouseEnter) {
              global$9(eventRootCtrl.getEl()).on('mouseleave', mouseLeaveHandler).on('mouseover', mouseEnterHandler);
              eventRootCtrl._hasMouseEnter = 1;
            }
          } else if (!eventRootDelegates[name$$1]) {
            global$9(eventRootCtrl.getEl()).on(name$$1, delegate);
            eventRootDelegates[name$$1] = true;
          }
          nativeEvents[name$$1] = false;
        }
      }
    }
    var Control$1 = Control;

    var hasTabstopData = function (elm) {
      return elm.getAttribute('data-mce-tabstop') ? true : false;
    };
    function KeyboardNavigation (settings) {
      var root = settings.root;
      var focusedElement, focusedControl;
      function isElement(node) {
        return node && node.nodeType === 1;
      }
      try {
        focusedElement = document.activeElement;
      } catch (ex) {
        focusedElement = document.body;
      }
      focusedControl = root.getParentCtrl(focusedElement);
      function getRole(elm) {
        elm = elm || focusedElement;
        if (isElement(elm)) {
          return elm.getAttribute('role');
        }
        return null;
      }
      function getParentRole(elm) {
        var role, parent$$1 = elm || focusedElement;
        while (parent$$1 = parent$$1.parentNode) {
          if (role = getRole(parent$$1)) {
            return role;
          }
        }
      }
      function getAriaProp(name$$1) {
        var elm = focusedElement;
        if (isElement(elm)) {
          return elm.getAttribute('aria-' + name$$1);
        }
      }
      function isTextInputElement(elm) {
        var tagName = elm.tagName.toUpperCase();
        return tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT';
      }
      function canFocus(elm) {
        if (isTextInputElement(elm) && !elm.hidden) {
          return true;
        }
        if (hasTabstopData(elm)) {
          return true;
        }
        if (/^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell|slider)$/.test(getRole(elm))) {
          return true;
        }
        return false;
      }
      function getFocusElements(elm) {
        var elements = [];
        function collect(elm) {
          if (elm.nodeType !== 1 || elm.style.display === 'none' || elm.disabled) {
            return;
          }
          if (canFocus(elm)) {
            elements.push(elm);
          }
          for (var i = 0; i < elm.childNodes.length; i++) {
            collect(elm.childNodes[i]);
          }
        }
        collect(elm || root.getEl());
        return elements;
      }
      function getNavigationRoot(targetControl) {
        var navigationRoot, controls;
        targetControl = targetControl || focusedControl;
        controls = targetControl.parents().toArray();
        controls.unshift(targetControl);
        for (var i = 0; i < controls.length; i++) {
          navigationRoot = controls[i];
          if (navigationRoot.settings.ariaRoot) {
            break;
          }
        }
        return navigationRoot;
      }
      function focusFirst(targetControl) {
        var navigationRoot = getNavigationRoot(targetControl);
        var focusElements = getFocusElements(navigationRoot.getEl());
        if (navigationRoot.settings.ariaRemember && 'lastAriaIndex' in navigationRoot) {
          moveFocusToIndex(navigationRoot.lastAriaIndex, focusElements);
        } else {
          moveFocusToIndex(0, focusElements);
        }
      }
      function moveFocusToIndex(idx, elements) {
        if (idx < 0) {
          idx = elements.length - 1;
        } else if (idx >= elements.length) {
          idx = 0;
        }
        if (elements[idx]) {
          elements[idx].focus();
        }
        return idx;
      }
      function moveFocus(dir, elements) {
        var idx = -1;
        var navigationRoot = getNavigationRoot();
        elements = elements || getFocusElements(navigationRoot.getEl());
        for (var i = 0; i < elements.length; i++) {
          if (elements[i] === focusedElement) {
            idx = i;
          }
        }
        idx += dir;
        navigationRoot.lastAriaIndex = moveFocusToIndex(idx, elements);
      }
      function left() {
        var parentRole = getParentRole();
        if (parentRole === 'tablist') {
          moveFocus(-1, getFocusElements(focusedElement.parentNode));
        } else if (focusedControl.parent().submenu) {
          cancel();
        } else {
          moveFocus(-1);
        }
      }
      function right() {
        var role = getRole(), parentRole = getParentRole();
        if (parentRole === 'tablist') {
          moveFocus(1, getFocusElements(focusedElement.parentNode));
        } else if (role === 'menuitem' && parentRole === 'menu' && getAriaProp('haspopup')) {
          enter();
        } else {
          moveFocus(1);
        }
      }
      function up() {
        moveFocus(-1);
      }
      function down() {
        var role = getRole(), parentRole = getParentRole();
        if (role === 'menuitem' && parentRole === 'menubar') {
          enter();
        } else if (role === 'button' && getAriaProp('haspopup')) {
          enter({ key: 'down' });
        } else {
          moveFocus(1);
        }
      }
      function tab(e) {
        var parentRole = getParentRole();
        if (parentRole === 'tablist') {
          var elm = getFocusElements(focusedControl.getEl('body'))[0];
          if (elm) {
            elm.focus();
          }
        } else {
          moveFocus(e.shiftKey ? -1 : 1);
        }
      }
      function cancel() {
        focusedControl.fire('cancel');
      }
      function enter(aria) {
        aria = aria || {};
        focusedControl.fire('click', {
          target: focusedElement,
          aria: aria
        });
      }
      root.on('keydown', function (e) {
        function handleNonTabOrEscEvent(e, handler) {
          if (isTextInputElement(focusedElement) || hasTabstopData(focusedElement)) {
            return;
          }
          if (getRole(focusedElement) === 'slider') {
            return;
          }
          if (handler(e) !== false) {
            e.preventDefault();
          }
        }
        if (e.isDefaultPrevented()) {
          return;
        }
        switch (e.keyCode) {
        case 37:
          handleNonTabOrEscEvent(e, left);
          break;
        case 39:
          handleNonTabOrEscEvent(e, right);
          break;
        case 38:
          handleNonTabOrEscEvent(e, up);
          break;
        case 40:
          handleNonTabOrEscEvent(e, down);
          break;
        case 27:
          cancel();
          break;
        case 14:
        case 13:
        case 32:
          handleNonTabOrEscEvent(e, enter);
          break;
        case 9:
          tab(e);
          e.preventDefault();
          break;
        }
      });
      root.on('focusin', function (e) {
        focusedElement = e.target;
        focusedControl = e.control;
      });
      return { focusFirst: focusFirst };
    }

    var selectorCache = {};
    var Container = Control$1.extend({
      init: function (settings) {
        var self = this;
        self._super(settings);
        settings = self.settings;
        if (settings.fixed) {
          self.state.set('fixed', true);
        }
        self._items = new Collection$2();
        if (self.isRtl()) {
          self.classes.add('rtl');
        }
        self.bodyClasses = new ClassList(function () {
          if (self.state.get('rendered')) {
            self.getEl('body').className = this.toString();
          }
        });
        self.bodyClasses.prefix = self.classPrefix;
        self.classes.add('container');
        self.bodyClasses.add('container-body');
        if (settings.containerCls) {
          self.classes.add(settings.containerCls);
        }
        self._layout = global$4.create((settings.layout || '') + 'layout');
        if (self.settings.items) {
          self.add(self.settings.items);
        } else {
          self.add(self.render());
        }
        self._hasBody = true;
      },
      items: function () {
        return this._items;
      },
      find: function (selector) {
        selector = selectorCache[selector] = selectorCache[selector] || new Selector(selector);
        return selector.find(this);
      },
      add: function (items) {
        var self = this;
        self.items().add(self.create(items)).parent(self);
        return self;
      },
      focus: function (keyboard) {
        var self = this;
        var focusCtrl, keyboardNav, items;
        if (keyboard) {
          keyboardNav = self.keyboardNav || self.parents().eq(-1)[0].keyboardNav;
          if (keyboardNav) {
            keyboardNav.focusFirst(self);
            return;
          }
        }
        items = self.find('*');
        if (self.statusbar) {
          items.add(self.statusbar.items());
        }
        items.each(function (ctrl) {
          if (ctrl.settings.autofocus) {
            focusCtrl = null;
            return false;
          }
          if (ctrl.canFocus) {
            focusCtrl = focusCtrl || ctrl;
          }
        });
        if (focusCtrl) {
          focusCtrl.focus();
        }
        return self;
      },
      replace: function (oldItem, newItem) {
        var ctrlElm;
        var items = this.items();
        var i = items.length;
        while (i--) {
          if (items[i] === oldItem) {
            items[i] = newItem;
            break;
          }
        }
        if (i >= 0) {
          ctrlElm = newItem.getEl();
          if (ctrlElm) {
            ctrlElm.parentNode.removeChild(ctrlElm);
          }
          ctrlElm = oldItem.getEl();
          if (ctrlElm) {
            ctrlElm.parentNode.removeChild(ctrlElm);
          }
        }
        newItem.parent(this);
      },
      create: function (items) {
        var self = this;
        var settings;
        var ctrlItems = [];
        if (!global$2.isArray(items)) {
          items = [items];
        }
        global$2.each(items, function (item) {
          if (item) {
            if (!(item instanceof Control$1)) {
              if (typeof item === 'string') {
                item = { type: item };
              }
              settings = global$2.extend({}, self.settings.defaults, item);
              item.type = settings.type = settings.type || item.type || self.settings.defaultType || (settings.defaults ? settings.defaults.type : null);
              item = global$4.create(settings);
            }
            ctrlItems.push(item);
          }
        });
        return ctrlItems;
      },
      renderNew: function () {
        var self = this;
        self.items().each(function (ctrl, index) {
          var containerElm;
          ctrl.parent(self);
          if (!ctrl.state.get('rendered')) {
            containerElm = self.getEl('body');
            if (containerElm.hasChildNodes() && index <= containerElm.childNodes.length - 1) {
              global$9(containerElm.childNodes[index]).before(ctrl.renderHtml());
            } else {
              global$9(containerElm).append(ctrl.renderHtml());
            }
            ctrl.postRender();
            ReflowQueue.add(ctrl);
          }
        });
        self._layout.applyClasses(self.items().filter(':visible'));
        self._lastRect = null;
        return self;
      },
      append: function (items) {
        return this.add(items).renderNew();
      },
      prepend: function (items) {
        var self = this;
        self.items().set(self.create(items).concat(self.items().toArray()));
        return self.renderNew();
      },
      insert: function (items, index, before) {
        var self = this;
        var curItems, beforeItems, afterItems;
        items = self.create(items);
        curItems = self.items();
        if (!before && index < curItems.length - 1) {
          index += 1;
        }
        if (index >= 0 && index < curItems.length) {
          beforeItems = curItems.slice(0, index).toArray();
          afterItems = curItems.slice(index).toArray();
          curItems.set(beforeItems.concat(items, afterItems));
        }
        return self.renderNew();
      },
      fromJSON: function (data) {
        var self = this;
        for (var name in data) {
          self.find('#' + name).value(data[name]);
        }
        return self;
      },
      toJSON: function () {
        var self = this, data = {};
        self.find('*').each(function (ctrl) {
          var name = ctrl.name(), value = ctrl.value();
          if (name && typeof value !== 'undefined') {
            data[name] = value;
          }
        });
        return data;
      },
      renderHtml: function () {
        var self = this, layout = self._layout, role = this.settings.role;
        self.preRender();
        layout.preRender(self);
        return '<div id="' + self._id + '" class="' + self.classes + '"' + (role ? ' role="' + this.settings.role + '"' : '') + '>' + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</div>';
      },
      postRender: function () {
        var self = this;
        var box;
        self.items().exec('postRender');
        self._super();
        self._layout.postRender(self);
        self.state.set('rendered', true);
        if (self.settings.style) {
          self.$el.css(self.settings.style);
        }
        if (self.settings.border) {
          box = self.borderBox;
          self.$el.css({
            'border-top-width': box.top,
            'border-right-width': box.right,
            'border-bottom-width': box.bottom,
            'border-left-width': box.left
          });
        }
        if (!self.parent()) {
          self.keyboardNav = KeyboardNavigation({ root: self });
        }
        return self;
      },
      initLayoutRect: function () {
        var self = this, layoutRect = self._super();
        self._layout.recalc(self);
        return layoutRect;
      },
      recalc: function () {
        var self = this;
        var rect = self._layoutRect;
        var lastRect = self._lastRect;
        if (!lastRect || lastRect.w !== rect.w || lastRect.h !== rect.h) {
          self._layout.recalc(self);
          rect = self.layoutRect();
          self._lastRect = {
            x: rect.x,
            y: rect.y,
            w: rect.w,
            h: rect.h
          };
          return true;
        }
      },
      reflow: function () {
        var i;
        ReflowQueue.remove(this);
        if (this.visible()) {
          Control$1.repaintControls = [];
          Control$1.repaintControls.map = {};
          this.recalc();
          i = Control$1.repaintControls.length;
          while (i--) {
            Control$1.repaintControls[i].repaint();
          }
          if (this.settings.layout !== 'flow' && this.settings.layout !== 'stack') {
            this.repaint();
          }
          Control$1.repaintControls = [];
        }
        return this;
      }
    });

    function getDocumentSize(doc) {
      var documentElement, body, scrollWidth, clientWidth;
      var offsetWidth, scrollHeight, clientHeight, offsetHeight;
      var max = Math.max;
      documentElement = doc.documentElement;
      body = doc.body;
      scrollWidth = max(documentElement.scrollWidth, body.scrollWidth);
      clientWidth = max(documentElement.clientWidth, body.clientWidth);
      offsetWidth = max(documentElement.offsetWidth, body.offsetWidth);
      scrollHeight = max(documentElement.scrollHeight, body.scrollHeight);
      clientHeight = max(documentElement.clientHeight, body.clientHeight);
      offsetHeight = max(documentElement.offsetHeight, body.offsetHeight);
      return {
        width: scrollWidth < offsetWidth ? clientWidth : scrollWidth,
        height: scrollHeight < offsetHeight ? clientHeight : scrollHeight
      };
    }
    function updateWithTouchData(e) {
      var keys, i;
      if (e.changedTouches) {
        keys = 'screenX screenY pageX pageY clientX clientY'.split(' ');
        for (i = 0; i < keys.length; i++) {
          e[keys[i]] = e.changedTouches[0][keys[i]];
        }
      }
    }
    function DragHelper (id, settings) {
      var $eventOverlay;
      var doc = settings.document || document;
      var downButton;
      var start, stop$$1, drag, startX, startY;
      settings = settings || {};
      var handleElement = doc.getElementById(settings.handle || id);
      start = function (e) {
        var docSize = getDocumentSize(doc);
        var handleElm, cursor;
        updateWithTouchData(e);
        e.preventDefault();
        downButton = e.button;
        handleElm = handleElement;
        startX = e.screenX;
        startY = e.screenY;
        if (window.getComputedStyle) {
          cursor = window.getComputedStyle(handleElm, null).getPropertyValue('cursor');
        } else {
          cursor = handleElm.runtimeStyle.cursor;
        }
        $eventOverlay = global$9('<div></div>').css({
          position: 'absolute',
          top: 0,
          left: 0,
          width: docSize.width,
          height: docSize.height,
          zIndex: 2147483647,
          opacity: 0.0001,
          cursor: cursor
        }).appendTo(doc.body);
        global$9(doc).on('mousemove touchmove', drag).on('mouseup touchend', stop$$1);
        settings.start(e);
      };
      drag = function (e) {
        updateWithTouchData(e);
        if (e.button !== downButton) {
          return stop$$1(e);
        }
        e.deltaX = e.screenX - startX;
        e.deltaY = e.screenY - startY;
        e.preventDefault();
        settings.drag(e);
      };
      stop$$1 = function (e) {
        updateWithTouchData(e);
        global$9(doc).off('mousemove touchmove', drag).off('mouseup touchend', stop$$1);
        $eventOverlay.remove();
        if (settings.stop) {
          settings.stop(e);
        }
      };
      this.destroy = function () {
        global$9(handleElement).off();
      };
      global$9(handleElement).on('mousedown touchstart', start);
    }

    var Scrollable = {
      init: function () {
        var self = this;
        self.on('repaint', self.renderScroll);
      },
      renderScroll: function () {
        var self = this, margin = 2;
        function repaintScroll() {
          var hasScrollH, hasScrollV, bodyElm;
          function repaintAxis(axisName, posName, sizeName, contentSizeName, hasScroll, ax) {
            var containerElm, scrollBarElm, scrollThumbElm;
            var containerSize, scrollSize, ratio, rect;
            var posNameLower, sizeNameLower;
            scrollBarElm = self.getEl('scroll' + axisName);
            if (scrollBarElm) {
              posNameLower = posName.toLowerCase();
              sizeNameLower = sizeName.toLowerCase();
              global$9(self.getEl('absend')).css(posNameLower, self.layoutRect()[contentSizeName] - 1);
              if (!hasScroll) {
                global$9(scrollBarElm).css('display', 'none');
                return;
              }
              global$9(scrollBarElm).css('display', 'block');
              containerElm = self.getEl('body');
              scrollThumbElm = self.getEl('scroll' + axisName + 't');
              containerSize = containerElm['client' + sizeName] - margin * 2;
              containerSize -= hasScrollH && hasScrollV ? scrollBarElm['client' + ax] : 0;
              scrollSize = containerElm['scroll' + sizeName];
              ratio = containerSize / scrollSize;
              rect = {};
              rect[posNameLower] = containerElm['offset' + posName] + margin;
              rect[sizeNameLower] = containerSize;
              global$9(scrollBarElm).css(rect);
              rect = {};
              rect[posNameLower] = containerElm['scroll' + posName] * ratio;
              rect[sizeNameLower] = containerSize * ratio;
              global$9(scrollThumbElm).css(rect);
            }
          }
          bodyElm = self.getEl('body');
          hasScrollH = bodyElm.scrollWidth > bodyElm.clientWidth;
          hasScrollV = bodyElm.scrollHeight > bodyElm.clientHeight;
          repaintAxis('h', 'Left', 'Width', 'contentW', hasScrollH, 'Height');
          repaintAxis('v', 'Top', 'Height', 'contentH', hasScrollV, 'Width');
        }
        function addScroll() {
          function addScrollAxis(axisName, posName, sizeName, deltaPosName, ax) {
            var scrollStart;
            var axisId = self._id + '-scroll' + axisName, prefix = self.classPrefix;
            global$9(self.getEl()).append('<div id="' + axisId + '" class="' + prefix + 'scrollbar ' + prefix + 'scrollbar-' + axisName + '">' + '<div id="' + axisId + 't" class="' + prefix + 'scrollbar-thumb"></div>' + '</div>');
            self.draghelper = new DragHelper(axisId + 't', {
              start: function () {
                scrollStart = self.getEl('body')['scroll' + posName];
                global$9('#' + axisId).addClass(prefix + 'active');
              },
              drag: function (e) {
                var ratio, hasScrollH, hasScrollV, containerSize;
                var layoutRect = self.layoutRect();
                hasScrollH = layoutRect.contentW > layoutRect.innerW;
                hasScrollV = layoutRect.contentH > layoutRect.innerH;
                containerSize = self.getEl('body')['client' + sizeName] - margin * 2;
                containerSize -= hasScrollH && hasScrollV ? self.getEl('scroll' + axisName)['client' + ax] : 0;
                ratio = containerSize / self.getEl('body')['scroll' + sizeName];
                self.getEl('body')['scroll' + posName] = scrollStart + e['delta' + deltaPosName] / ratio;
              },
              stop: function () {
                global$9('#' + axisId).removeClass(prefix + 'active');
              }
            });
          }
          self.classes.add('scroll');
          addScrollAxis('v', 'Top', 'Height', 'Y', 'Width');
          addScrollAxis('h', 'Left', 'Width', 'X', 'Height');
        }
        if (self.settings.autoScroll) {
          if (!self._hasScroll) {
            self._hasScroll = true;
            addScroll();
            self.on('wheel', function (e) {
              var bodyEl = self.getEl('body');
              bodyEl.scrollLeft += (e.deltaX || 0) * 10;
              bodyEl.scrollTop += e.deltaY * 10;
              repaintScroll();
            });
            global$9(self.getEl('body')).on('scroll', repaintScroll);
          }
          repaintScroll();
        }
      }
    };

    var Panel = Container.extend({
      Defaults: {
        layout: 'fit',
        containerCls: 'panel'
      },
      Mixins: [Scrollable],
      renderHtml: function () {
        var self = this;
        var layout = self._layout;
        var innerHtml = self.settings.html;
        self.preRender();
        layout.preRender(self);
        if (typeof innerHtml === 'undefined') {
          innerHtml = '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + layout.renderHtml(self) + '</div>';
        } else {
          if (typeof innerHtml === 'function') {
            innerHtml = innerHtml.call(self);
          }
          self._hasBody = false;
        }
        return '<div id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1" role="group">' + (self._preBodyHtml || '') + innerHtml + '</div>';
      }
    });

    var Resizable = {
      resizeToContent: function () {
        this._layoutRect.autoResize = true;
        this._lastRect = null;
        this.reflow();
      },
      resizeTo: function (w, h) {
        if (w <= 1 || h <= 1) {
          var rect = funcs.getWindowSize();
          w = w <= 1 ? w * rect.w : w;
          h = h <= 1 ? h * rect.h : h;
        }
        this._layoutRect.autoResize = false;
        return this.layoutRect({
          minW: w,
          minH: h,
          w: w,
          h: h
        }).reflow();
      },
      resizeBy: function (dw, dh) {
        var self = this, rect = self.layoutRect();
        return self.resizeTo(rect.w + dw, rect.h + dh);
      }
    };

    var documentClickHandler, documentScrollHandler, windowResizeHandler;
    var visiblePanels = [];
    var zOrder = [];
    var hasModal;
    function isChildOf(ctrl, parent$$1) {
      while (ctrl) {
        if (ctrl === parent$$1) {
          return true;
        }
        ctrl = ctrl.parent();
      }
    }
    function skipOrHidePanels(e) {
      var i = visiblePanels.length;
      while (i--) {
        var panel = visiblePanels[i], clickCtrl = panel.getParentCtrl(e.target);
        if (panel.settings.autohide) {
          if (clickCtrl) {
            if (isChildOf(clickCtrl, panel) || panel.parent() === clickCtrl) {
              continue;
            }
          }
          e = panel.fire('autohide', { target: e.target });
          if (!e.isDefaultPrevented()) {
            panel.hide();
          }
        }
      }
    }
    function bindDocumentClickHandler() {
      if (!documentClickHandler) {
        documentClickHandler = function (e) {
          if (e.button === 2) {
            return;
          }
          skipOrHidePanels(e);
        };
        global$9(document).on('click touchstart', documentClickHandler);
      }
    }
    function bindDocumentScrollHandler() {
      if (!documentScrollHandler) {
        documentScrollHandler = function () {
          var i;
          i = visiblePanels.length;
          while (i--) {
            repositionPanel(visiblePanels[i]);
          }
        };
        global$9(window).on('scroll', documentScrollHandler);
      }
    }
    function bindWindowResizeHandler() {
      if (!windowResizeHandler) {
        var docElm_1 = document.documentElement;
        var clientWidth_1 = docElm_1.clientWidth, clientHeight_1 = docElm_1.clientHeight;
        windowResizeHandler = function () {
          if (!document.all || clientWidth_1 !== docElm_1.clientWidth || clientHeight_1 !== docElm_1.clientHeight) {
            clientWidth_1 = docElm_1.clientWidth;
            clientHeight_1 = docElm_1.clientHeight;
            FloatPanel.hideAll();
          }
        };
        global$9(window).on('resize', windowResizeHandler);
      }
    }
    function repositionPanel(panel) {
      var scrollY$$1 = funcs.getViewPort().y;
      function toggleFixedChildPanels(fixed, deltaY) {
        var parent$$1;
        for (var i = 0; i < visiblePanels.length; i++) {
          if (visiblePanels[i] !== panel) {
            parent$$1 = visiblePanels[i].parent();
            while (parent$$1 && (parent$$1 = parent$$1.parent())) {
              if (parent$$1 === panel) {
                visiblePanels[i].fixed(fixed).moveBy(0, deltaY).repaint();
              }
            }
          }
        }
      }
      if (panel.settings.autofix) {
        if (!panel.state.get('fixed')) {
          panel._autoFixY = panel.layoutRect().y;
          if (panel._autoFixY < scrollY$$1) {
            panel.fixed(true).layoutRect({ y: 0 }).repaint();
            toggleFixedChildPanels(true, scrollY$$1 - panel._autoFixY);
          }
        } else {
          if (panel._autoFixY > scrollY$$1) {
            panel.fixed(false).layoutRect({ y: panel._autoFixY }).repaint();
            toggleFixedChildPanels(false, panel._autoFixY - scrollY$$1);
          }
        }
      }
    }
    function addRemove(add, ctrl) {
      var i, zIndex = FloatPanel.zIndex || 65535, topModal;
      if (add) {
        zOrder.push(ctrl);
      } else {
        i = zOrder.length;
        while (i--) {
          if (zOrder[i] === ctrl) {
            zOrder.splice(i, 1);
          }
        }
      }
      if (zOrder.length) {
        for (i = 0; i < zOrder.length; i++) {
          if (zOrder[i].modal) {
            zIndex++;
            topModal = zOrder[i];
          }
          zOrder[i].getEl().style.zIndex = zIndex;
          zOrder[i].zIndex = zIndex;
          zIndex++;
        }
      }
      var modalBlockEl = global$9('#' + ctrl.classPrefix + 'modal-block', ctrl.getContainerElm())[0];
      if (topModal) {
        global$9(modalBlockEl).css('z-index', topModal.zIndex - 1);
      } else if (modalBlockEl) {
        modalBlockEl.parentNode.removeChild(modalBlockEl);
        hasModal = false;
      }
      FloatPanel.currentZIndex = zIndex;
    }
    var FloatPanel = Panel.extend({
      Mixins: [
        Movable,
        Resizable
      ],
      init: function (settings) {
        var self$$1 = this;
        self$$1._super(settings);
        self$$1._eventsRoot = self$$1;
        self$$1.classes.add('floatpanel');
        if (settings.autohide) {
          bindDocumentClickHandler();
          bindWindowResizeHandler();
          visiblePanels.push(self$$1);
        }
        if (settings.autofix) {
          bindDocumentScrollHandler();
          self$$1.on('move', function () {
            repositionPanel(this);
          });
        }
        self$$1.on('postrender show', function (e) {
          if (e.control === self$$1) {
            var $modalBlockEl_1;
            var prefix_1 = self$$1.classPrefix;
            if (self$$1.modal && !hasModal) {
              $modalBlockEl_1 = global$9('#' + prefix_1 + 'modal-block', self$$1.getContainerElm());
              if (!$modalBlockEl_1[0]) {
                $modalBlockEl_1 = global$9('<div id="' + prefix_1 + 'modal-block" class="' + prefix_1 + 'reset ' + prefix_1 + 'fade"></div>').appendTo(self$$1.getContainerElm());
              }
              global$7.setTimeout(function () {
                $modalBlockEl_1.addClass(prefix_1 + 'in');
                global$9(self$$1.getEl()).addClass(prefix_1 + 'in');
              });
              hasModal = true;
            }
            addRemove(true, self$$1);
          }
        });
        self$$1.on('show', function () {
          self$$1.parents().each(function (ctrl) {
            if (ctrl.state.get('fixed')) {
              self$$1.fixed(true);
              return false;
            }
          });
        });
        if (settings.popover) {
          self$$1._preBodyHtml = '<div class="' + self$$1.classPrefix + 'arrow"></div>';
          self$$1.classes.add('popover').add('bottom').add(self$$1.isRtl() ? 'end' : 'start');
        }
        self$$1.aria('label', settings.ariaLabel);
        self$$1.aria('labelledby', self$$1._id);
        self$$1.aria('describedby', self$$1.describedBy || self$$1._id + '-none');
      },
      fixed: function (state) {
        var self$$1 = this;
        if (self$$1.state.get('fixed') !== state) {
          if (self$$1.state.get('rendered')) {
            var viewport = funcs.getViewPort();
            if (state) {
              self$$1.layoutRect().y -= viewport.y;
            } else {
              self$$1.layoutRect().y += viewport.y;
            }
          }
          self$$1.classes.toggle('fixed', state);
          self$$1.state.set('fixed', state);
        }
        return self$$1;
      },
      show: function () {
        var self$$1 = this;
        var i;
        var state = self$$1._super();
        i = visiblePanels.length;
        while (i--) {
          if (visiblePanels[i] === self$$1) {
            break;
          }
        }
        if (i === -1) {
          visiblePanels.push(self$$1);
        }
        return state;
      },
      hide: function () {
        removeVisiblePanel(this);
        addRemove(false, this);
        return this._super();
      },
      hideAll: function () {
        FloatPanel.hideAll();
      },
      close: function () {
        var self$$1 = this;
        if (!self$$1.fire('close').isDefaultPrevented()) {
          self$$1.remove();
          addRemove(false, self$$1);
        }
        return self$$1;
      },
      remove: function () {
        removeVisiblePanel(this);
        this._super();
      },
      postRender: function () {
        var self$$1 = this;
        if (self$$1.settings.bodyRole) {
          this.getEl('body').setAttribute('role', self$$1.settings.bodyRole);
        }
        return self$$1._super();
      }
    });
    FloatPanel.hideAll = function () {
      var i = visiblePanels.length;
      while (i--) {
        var panel = visiblePanels[i];
        if (panel && panel.settings.autohide) {
          panel.hide();
          visiblePanels.splice(i, 1);
        }
      }
    };
    function removeVisiblePanel(panel) {
      var i;
      i = visiblePanels.length;
      while (i--) {
        if (visiblePanels[i] === panel) {
          visiblePanels.splice(i, 1);
        }
      }
      i = zOrder.length;
      while (i--) {
        if (zOrder[i] === panel) {
          zOrder.splice(i, 1);
        }
      }
    }

    var isFixed$1 = function (inlineToolbarContainer, editor) {
      return !!(inlineToolbarContainer && !editor.settings.ui_container);
    };
    var render$1 = function (editor, theme, args) {
      var panel, inlineToolbarContainer;
      var DOM = global$3.DOM;
      var fixedToolbarContainer = getFixedToolbarContainer(editor);
      if (fixedToolbarContainer) {
        inlineToolbarContainer = DOM.select(fixedToolbarContainer)[0];
      }
      var reposition = function () {
        if (panel && panel.moveRel && panel.visible() && !panel._fixed) {
          var scrollContainer = editor.selection.getScrollContainer(), body = editor.getBody();
          var deltaX = 0, deltaY = 0;
          if (scrollContainer) {
            var bodyPos = DOM.getPos(body), scrollContainerPos = DOM.getPos(scrollContainer);
            deltaX = Math.max(0, scrollContainerPos.x - bodyPos.x);
            deltaY = Math.max(0, scrollContainerPos.y - bodyPos.y);
          }
          panel.fixed(false).moveRel(body, editor.rtl ? [
            'tr-br',
            'br-tr'
          ] : [
            'tl-bl',
            'bl-tl',
            'tr-br'
          ]).moveBy(deltaX, deltaY);
        }
      };
      var show = function () {
        if (panel) {
          panel.show();
          reposition();
          DOM.addClass(editor.getBody(), 'mce-edit-focus');
        }
      };
      var hide = function () {
        if (panel) {
          panel.hide();
          FloatPanel.hideAll();
          DOM.removeClass(editor.getBody(), 'mce-edit-focus');
        }
      };
      var render = function () {
        if (panel) {
          if (!panel.visible()) {
            show();
          }
          return;
        }
        panel = theme.panel = global$4.create({
          type: inlineToolbarContainer ? 'panel' : 'floatpanel',
          role: 'application',
          classes: 'tinymce tinymce-inline',
          layout: 'flex',
          direction: 'column',
          align: 'stretch',
          autohide: false,
          autofix: true,
          fixed: isFixed$1(inlineToolbarContainer, editor),
          border: 1,
          items: [
            hasMenubar(editor) === false ? null : {
              type: 'menubar',
              border: '0 0 1 0',
              items: Menubar.createMenuButtons(editor)
            },
            Toolbar.createToolbars(editor, getToolbarSize(editor))
          ]
        });
        UiContainer.setUiContainer(editor, panel);
        Events.fireBeforeRenderUI(editor);
        if (inlineToolbarContainer) {
          panel.renderTo(inlineToolbarContainer).reflow();
        } else {
          panel.renderTo().reflow();
        }
        A11y.addKeys(editor, panel);
        show();
        ContextToolbars.addContextualToolbars(editor);
        editor.on('nodeChange', reposition);
        editor.on('ResizeWindow', reposition);
        editor.on('activate', show);
        editor.on('deactivate', hide);
        editor.nodeChanged();
      };
      editor.settings.content_editable = true;
      editor.on('focus', function () {
        if (isSkinDisabled(editor) === false && args.skinUiCss) {
          DOM.styleSheetLoader.load(args.skinUiCss, render, render);
        } else {
          render();
        }
      });
      editor.on('blur hide', hide);
      editor.on('remove', function () {
        if (panel) {
          panel.remove();
          panel = null;
        }
      });
      if (isSkinDisabled(editor) === false && args.skinUiCss) {
        DOM.styleSheetLoader.load(args.skinUiCss, SkinLoaded.fireSkinLoaded(editor));
      } else {
        SkinLoaded.fireSkinLoaded(editor)();
      }
      return {};
    };
    var Inline = { render: render$1 };

    function Throbber (elm, inline) {
      var self = this;
      var state;
      var classPrefix = Control$1.classPrefix;
      var timer;
      self.show = function (time, callback) {
        function render() {
          if (state) {
            global$9(elm).append('<div class="' + classPrefix + 'throbber' + (inline ? ' ' + classPrefix + 'throbber-inline' : '') + '"></div>');
            if (callback) {
              callback();
            }
          }
        }
        self.hide();
        state = true;
        if (time) {
          timer = global$7.setTimeout(render, time);
        } else {
          render();
        }
        return self;
      };
      self.hide = function () {
        var child = elm.lastChild;
        global$7.clearTimeout(timer);
        if (child && child.className.indexOf('throbber') !== -1) {
          child.parentNode.removeChild(child);
        }
        state = false;
        return self;
      };
    }

    var setup = function (editor, theme) {
      var throbber;
      editor.on('ProgressState', function (e) {
        throbber = throbber || new Throbber(theme.panel.getEl('body'));
        if (e.state) {
          throbber.show(e.time);
        } else {
          throbber.hide();
        }
      });
    };
    var ProgressState = { setup: setup };

    var renderUI = function (editor, theme, args) {
      var skinUrl = getSkinUrl(editor);
      if (skinUrl) {
        args.skinUiCss = skinUrl + '/skin.min.css';
        editor.contentCSS.push(skinUrl + '/content' + (editor.inline ? '.inline' : '') + '.min.css');
      }
      ProgressState.setup(editor, theme);
      return isInline(editor) ? Inline.render(editor, theme, args) : Iframe.render(editor, theme, args);
    };
    var Render = { renderUI: renderUI };

    var Tooltip = Control$1.extend({
      Mixins: [Movable],
      Defaults: { classes: 'widget tooltip tooltip-n' },
      renderHtml: function () {
        var self = this, prefix = self.classPrefix;
        return '<div id="' + self._id + '" class="' + self.classes + '" role="presentation">' + '<div class="' + prefix + 'tooltip-arrow"></div>' + '<div class="' + prefix + 'tooltip-inner">' + self.encode(self.state.get('text')) + '</div>' + '</div>';
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:text', function (e) {
          self.getEl().lastChild.innerHTML = self.encode(e.value);
        });
        return self._super();
      },
      repaint: function () {
        var self = this;
        var style, rect;
        style = self.getEl().style;
        rect = self._layoutRect;
        style.left = rect.x + 'px';
        style.top = rect.y + 'px';
        style.zIndex = 65535 + 65535;
      }
    });

    var Widget = Control$1.extend({
      init: function (settings) {
        var self = this;
        self._super(settings);
        settings = self.settings;
        self.canFocus = true;
        if (settings.tooltip && Widget.tooltips !== false) {
          self.on('mouseenter', function (e) {
            var tooltip = self.tooltip().moveTo(-65535);
            if (e.control === self) {
              var rel = tooltip.text(settings.tooltip).show().testMoveRel(self.getEl(), [
                'bc-tc',
                'bc-tl',
                'bc-tr'
              ]);
              tooltip.classes.toggle('tooltip-n', rel === 'bc-tc');
              tooltip.classes.toggle('tooltip-nw', rel === 'bc-tl');
              tooltip.classes.toggle('tooltip-ne', rel === 'bc-tr');
              tooltip.moveRel(self.getEl(), rel);
            } else {
              tooltip.hide();
            }
          });
          self.on('mouseleave mousedown click', function () {
            self.tooltip().remove();
            self._tooltip = null;
          });
        }
        self.aria('label', settings.ariaLabel || settings.tooltip);
      },
      tooltip: function () {
        if (!this._tooltip) {
          this._tooltip = new Tooltip({ type: 'tooltip' });
          UiContainer.inheritUiContainer(this, this._tooltip);
          this._tooltip.renderTo();
        }
        return this._tooltip;
      },
      postRender: function () {
        var self = this, settings = self.settings;
        self._super();
        if (!self.parent() && (settings.width || settings.height)) {
          self.initLayoutRect();
          self.repaint();
        }
        if (settings.autofocus) {
          self.focus();
        }
      },
      bindStates: function () {
        var self = this;
        function disable(state) {
          self.aria('disabled', state);
          self.classes.toggle('disabled', state);
        }
        function active(state) {
          self.aria('pressed', state);
          self.classes.toggle('active', state);
        }
        self.state.on('change:disabled', function (e) {
          disable(e.value);
        });
        self.state.on('change:active', function (e) {
          active(e.value);
        });
        if (self.state.get('disabled')) {
          disable(true);
        }
        if (self.state.get('active')) {
          active(true);
        }
        return self._super();
      },
      remove: function () {
        this._super();
        if (this._tooltip) {
          this._tooltip.remove();
          this._tooltip = null;
        }
      }
    });

    var Progress = Widget.extend({
      Defaults: { value: 0 },
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.classes.add('progress');
        if (!self.settings.filter) {
          self.settings.filter = function (value) {
            return Math.round(value);
          };
        }
      },
      renderHtml: function () {
        var self = this, id = self._id, prefix = this.classPrefix;
        return '<div id="' + id + '" class="' + self.classes + '">' + '<div class="' + prefix + 'bar-container">' + '<div class="' + prefix + 'bar"></div>' + '</div>' + '<div class="' + prefix + 'text">0%</div>' + '</div>';
      },
      postRender: function () {
        var self = this;
        self._super();
        self.value(self.settings.value);
        return self;
      },
      bindStates: function () {
        var self = this;
        function setValue(value) {
          value = self.settings.filter(value);
          self.getEl().lastChild.innerHTML = value + '%';
          self.getEl().firstChild.firstChild.style.width = value + '%';
        }
        self.state.on('change:value', function (e) {
          setValue(e.value);
        });
        setValue(self.state.get('value'));
        return self._super();
      }
    });

    var updateLiveRegion = function (ctx, text) {
      ctx.getEl().lastChild.textContent = text + (ctx.progressBar ? ' ' + ctx.progressBar.value() + '%' : '');
    };
    var Notification = Control$1.extend({
      Mixins: [Movable],
      Defaults: { classes: 'widget notification' },
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.maxWidth = settings.maxWidth;
        if (settings.text) {
          self.text(settings.text);
        }
        if (settings.icon) {
          self.icon = settings.icon;
        }
        if (settings.color) {
          self.color = settings.color;
        }
        if (settings.type) {
          self.classes.add('notification-' + settings.type);
        }
        if (settings.timeout && (settings.timeout < 0 || settings.timeout > 0) && !settings.closeButton) {
          self.closeButton = false;
        } else {
          self.classes.add('has-close');
          self.closeButton = true;
        }
        if (settings.progressBar) {
          self.progressBar = new Progress();
        }
        self.on('click', function (e) {
          if (e.target.className.indexOf(self.classPrefix + 'close') !== -1) {
            self.close();
          }
        });
      },
      renderHtml: function () {
        var self = this;
        var prefix = self.classPrefix;
        var icon = '', closeButton = '', progressBar = '', notificationStyle = '';
        if (self.icon) {
          icon = '<i class="' + prefix + 'ico' + ' ' + prefix + 'i-' + self.icon + '"></i>';
        }
        notificationStyle = ' style="max-width: ' + self.maxWidth + 'px;' + (self.color ? 'background-color: ' + self.color + ';"' : '"');
        if (self.closeButton) {
          closeButton = '<button type="button" class="' + prefix + 'close" aria-hidden="true">\xD7</button>';
        }
        if (self.progressBar) {
          progressBar = self.progressBar.renderHtml();
        }
        return '<div id="' + self._id + '" class="' + self.classes + '"' + notificationStyle + ' role="presentation">' + icon + '<div class="' + prefix + 'notification-inner">' + self.state.get('text') + '</div>' + progressBar + closeButton + '<div style="clip: rect(1px, 1px, 1px, 1px);height: 1px;overflow: hidden;position: absolute;width: 1px;"' + ' aria-live="assertive" aria-relevant="additions" aria-atomic="true"></div>' + '</div>';
      },
      postRender: function () {
        var self = this;
        global$7.setTimeout(function () {
          self.$el.addClass(self.classPrefix + 'in');
          updateLiveRegion(self, self.state.get('text'));
        }, 100);
        return self._super();
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:text', function (e) {
          self.getEl().firstChild.innerHTML = e.value;
          updateLiveRegion(self, e.value);
        });
        if (self.progressBar) {
          self.progressBar.bindStates();
          self.progressBar.state.on('change:value', function (e) {
            updateLiveRegion(self, self.state.get('text'));
          });
        }
        return self._super();
      },
      close: function () {
        var self = this;
        if (!self.fire('close').isDefaultPrevented()) {
          self.remove();
        }
        return self;
      },
      repaint: function () {
        var self = this;
        var style, rect;
        style = self.getEl().style;
        rect = self._layoutRect;
        style.left = rect.x + 'px';
        style.top = rect.y + 'px';
        style.zIndex = 65535 - 1;
      }
    });

    function NotificationManagerImpl (editor) {
      var getEditorContainer = function (editor) {
        return editor.inline ? editor.getElement() : editor.getContentAreaContainer();
      };
      var getContainerWidth = function () {
        var container = getEditorContainer(editor);
        return funcs.getSize(container).width;
      };
      var prePositionNotifications = function (notifications) {
        each(notifications, function (notification) {
          notification.moveTo(0, 0);
        });
      };
      var positionNotifications = function (notifications) {
        if (notifications.length > 0) {
          var firstItem = notifications.slice(0, 1)[0];
          var container = getEditorContainer(editor);
          firstItem.moveRel(container, 'tc-tc');
          each(notifications, function (notification, index) {
            if (index > 0) {
              notification.moveRel(notifications[index - 1].getEl(), 'bc-tc');
            }
          });
        }
      };
      var reposition = function (notifications) {
        prePositionNotifications(notifications);
        positionNotifications(notifications);
      };
      var open = function (args, closeCallback) {
        var extendedArgs = global$2.extend(args, { maxWidth: getContainerWidth() });
        var notif = new Notification(extendedArgs);
        notif.args = extendedArgs;
        if (extendedArgs.timeout > 0) {
          notif.timer = setTimeout(function () {
            notif.close();
            closeCallback();
          }, extendedArgs.timeout);
        }
        notif.on('close', function () {
          closeCallback();
        });
        notif.renderTo();
        return notif;
      };
      var close = function (notification) {
        notification.close();
      };
      var getArgs = function (notification) {
        return notification.args;
      };
      return {
        open: open,
        close: close,
        reposition: reposition,
        getArgs: getArgs
      };
    }

    var windows = [];
    var oldMetaValue = '';
    function toggleFullScreenState(state) {
      var noScaleMetaValue = 'width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0';
      var viewport = global$9('meta[name=viewport]')[0], contentValue;
      if (global$8.overrideViewPort === false) {
        return;
      }
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        document.getElementsByTagName('head')[0].appendChild(viewport);
      }
      contentValue = viewport.getAttribute('content');
      if (contentValue && typeof oldMetaValue !== 'undefined') {
        oldMetaValue = contentValue;
      }
      viewport.setAttribute('content', state ? noScaleMetaValue : oldMetaValue);
    }
    function toggleBodyFullScreenClasses(classPrefix, state) {
      if (checkFullscreenWindows() && state === false) {
        global$9([
          document.documentElement,
          document.body
        ]).removeClass(classPrefix + 'fullscreen');
      }
    }
    function checkFullscreenWindows() {
      for (var i = 0; i < windows.length; i++) {
        if (windows[i]._fullscreen) {
          return true;
        }
      }
      return false;
    }
    function handleWindowResize() {
      if (!global$8.desktop) {
        var lastSize_1 = {
          w: window.innerWidth,
          h: window.innerHeight
        };
        global$7.setInterval(function () {
          var w = window.innerWidth, h = window.innerHeight;
          if (lastSize_1.w !== w || lastSize_1.h !== h) {
            lastSize_1 = {
              w: w,
              h: h
            };
            global$9(window).trigger('resize');
          }
        }, 100);
      }
      function reposition() {
        var i;
        var rect = funcs.getWindowSize();
        var layoutRect;
        for (i = 0; i < windows.length; i++) {
          layoutRect = windows[i].layoutRect();
          windows[i].moveTo(windows[i].settings.x || Math.max(0, rect.w / 2 - layoutRect.w / 2), windows[i].settings.y || Math.max(0, rect.h / 2 - layoutRect.h / 2));
        }
      }
      global$9(window).on('resize', reposition);
    }
    var Window$$1 = FloatPanel.extend({
      modal: true,
      Defaults: {
        border: 1,
        layout: 'flex',
        containerCls: 'panel',
        role: 'dialog',
        callbacks: {
          submit: function () {
            this.fire('submit', { data: this.toJSON() });
          },
          close: function () {
            this.close();
          }
        }
      },
      init: function (settings) {
        var self$$1 = this;
        self$$1._super(settings);
        if (self$$1.isRtl()) {
          self$$1.classes.add('rtl');
        }
        self$$1.classes.add('window');
        self$$1.bodyClasses.add('window-body');
        self$$1.state.set('fixed', true);
        if (settings.buttons) {
          self$$1.statusbar = new Panel({
            layout: 'flex',
            border: '1 0 0 0',
            spacing: 3,
            padding: 10,
            align: 'center',
            pack: self$$1.isRtl() ? 'start' : 'end',
            defaults: { type: 'button' },
            items: settings.buttons
          });
          self$$1.statusbar.classes.add('foot');
          self$$1.statusbar.parent(self$$1);
        }
        self$$1.on('click', function (e) {
          var closeClass = self$$1.classPrefix + 'close';
          if (funcs.hasClass(e.target, closeClass) || funcs.hasClass(e.target.parentNode, closeClass)) {
            self$$1.close();
          }
        });
        self$$1.on('cancel', function () {
          self$$1.close();
        });
        self$$1.on('move', function (e) {
          if (e.control === self$$1) {
            FloatPanel.hideAll();
          }
        });
        self$$1.aria('describedby', self$$1.describedBy || self$$1._id + '-none');
        self$$1.aria('label', settings.title);
        self$$1._fullscreen = false;
      },
      recalc: function () {
        var self$$1 = this;
        var statusbar$$1 = self$$1.statusbar;
        var layoutRect, width, x, needsRecalc;
        if (self$$1._fullscreen) {
          self$$1.layoutRect(funcs.getWindowSize());
          self$$1.layoutRect().contentH = self$$1.layoutRect().innerH;
        }
        self$$1._super();
        layoutRect = self$$1.layoutRect();
        if (self$$1.settings.title && !self$$1._fullscreen) {
          width = layoutRect.headerW;
          if (width > layoutRect.w) {
            x = layoutRect.x - Math.max(0, width / 2);
            self$$1.layoutRect({
              w: width,
              x: x
            });
            needsRecalc = true;
          }
        }
        if (statusbar$$1) {
          statusbar$$1.layoutRect({ w: self$$1.layoutRect().innerW }).recalc();
          width = statusbar$$1.layoutRect().minW + layoutRect.deltaW;
          if (width > layoutRect.w) {
            x = layoutRect.x - Math.max(0, width - layoutRect.w);
            self$$1.layoutRect({
              w: width,
              x: x
            });
            needsRecalc = true;
          }
        }
        if (needsRecalc) {
          self$$1.recalc();
        }
      },
      initLayoutRect: function () {
        var self$$1 = this;
        var layoutRect = self$$1._super();
        var deltaH = 0, headEl;
        if (self$$1.settings.title && !self$$1._fullscreen) {
          headEl = self$$1.getEl('head');
          var size = funcs.getSize(headEl);
          layoutRect.headerW = size.width;
          layoutRect.headerH = size.height;
          deltaH += layoutRect.headerH;
        }
        if (self$$1.statusbar) {
          deltaH += self$$1.statusbar.layoutRect().h;
        }
        layoutRect.deltaH += deltaH;
        layoutRect.minH += deltaH;
        layoutRect.h += deltaH;
        var rect = funcs.getWindowSize();
        layoutRect.x = self$$1.settings.x || Math.max(0, rect.w / 2 - layoutRect.w / 2);
        layoutRect.y = self$$1.settings.y || Math.max(0, rect.h / 2 - layoutRect.h / 2);
        return layoutRect;
      },
      renderHtml: function () {
        var self$$1 = this, layout = self$$1._layout, id = self$$1._id, prefix = self$$1.classPrefix;
        var settings = self$$1.settings;
        var headerHtml = '', footerHtml = '', html = settings.html;
        self$$1.preRender();
        layout.preRender(self$$1);
        if (settings.title) {
          headerHtml = '<div id="' + id + '-head" class="' + prefix + 'window-head">' + '<div id="' + id + '-title" class="' + prefix + 'title">' + self$$1.encode(settings.title) + '</div>' + '<div id="' + id + '-dragh" class="' + prefix + 'dragh"></div>' + '<button type="button" class="' + prefix + 'close" aria-hidden="true">' + '<i class="mce-ico mce-i-remove"></i>' + '</button>' + '</div>';
        }
        if (settings.url) {
          html = '<iframe src="' + settings.url + '" tabindex="-1"></iframe>';
        }
        if (typeof html === 'undefined') {
          html = layout.renderHtml(self$$1);
        }
        if (self$$1.statusbar) {
          footerHtml = self$$1.statusbar.renderHtml();
        }
        return '<div id="' + id + '" class="' + self$$1.classes + '" hidefocus="1">' + '<div class="' + self$$1.classPrefix + 'reset" role="application">' + headerHtml + '<div id="' + id + '-body" class="' + self$$1.bodyClasses + '">' + html + '</div>' + footerHtml + '</div>' + '</div>';
      },
      fullscreen: function (state) {
        var self$$1 = this;
        var documentElement = document.documentElement;
        var slowRendering;
        var prefix = self$$1.classPrefix;
        var layoutRect;
        if (state !== self$$1._fullscreen) {
          global$9(window).on('resize', function () {
            var time;
            if (self$$1._fullscreen) {
              if (!slowRendering) {
                time = new Date().getTime();
                var rect = funcs.getWindowSize();
                self$$1.moveTo(0, 0).resizeTo(rect.w, rect.h);
                if (new Date().getTime() - time > 50) {
                  slowRendering = true;
                }
              } else {
                if (!self$$1._timer) {
                  self$$1._timer = global$7.setTimeout(function () {
                    var rect = funcs.getWindowSize();
                    self$$1.moveTo(0, 0).resizeTo(rect.w, rect.h);
                    self$$1._timer = 0;
                  }, 50);
                }
              }
            }
          });
          layoutRect = self$$1.layoutRect();
          self$$1._fullscreen = state;
          if (!state) {
            self$$1.borderBox = BoxUtils.parseBox(self$$1.settings.border);
            self$$1.getEl('head').style.display = '';
            layoutRect.deltaH += layoutRect.headerH;
            global$9([
              documentElement,
              document.body
            ]).removeClass(prefix + 'fullscreen');
            self$$1.classes.remove('fullscreen');
            self$$1.moveTo(self$$1._initial.x, self$$1._initial.y).resizeTo(self$$1._initial.w, self$$1._initial.h);
          } else {
            self$$1._initial = {
              x: layoutRect.x,
              y: layoutRect.y,
              w: layoutRect.w,
              h: layoutRect.h
            };
            self$$1.borderBox = BoxUtils.parseBox('0');
            self$$1.getEl('head').style.display = 'none';
            layoutRect.deltaH -= layoutRect.headerH + 2;
            global$9([
              documentElement,
              document.body
            ]).addClass(prefix + 'fullscreen');
            self$$1.classes.add('fullscreen');
            var rect = funcs.getWindowSize();
            self$$1.moveTo(0, 0).resizeTo(rect.w, rect.h);
          }
        }
        return self$$1.reflow();
      },
      postRender: function () {
        var self$$1 = this;
        var startPos;
        setTimeout(function () {
          self$$1.classes.add('in');
          self$$1.fire('open');
        }, 0);
        self$$1._super();
        if (self$$1.statusbar) {
          self$$1.statusbar.postRender();
        }
        self$$1.focus();
        this.dragHelper = new DragHelper(self$$1._id + '-dragh', {
          start: function () {
            startPos = {
              x: self$$1.layoutRect().x,
              y: self$$1.layoutRect().y
            };
          },
          drag: function (e) {
            self$$1.moveTo(startPos.x + e.deltaX, startPos.y + e.deltaY);
          }
        });
        self$$1.on('submit', function (e) {
          if (!e.isDefaultPrevented()) {
            self$$1.close();
          }
        });
        windows.push(self$$1);
        toggleFullScreenState(true);
      },
      submit: function () {
        return this.fire('submit', { data: this.toJSON() });
      },
      remove: function () {
        var self$$1 = this;
        var i;
        self$$1.dragHelper.destroy();
        self$$1._super();
        if (self$$1.statusbar) {
          this.statusbar.remove();
        }
        toggleBodyFullScreenClasses(self$$1.classPrefix, false);
        i = windows.length;
        while (i--) {
          if (windows[i] === self$$1) {
            windows.splice(i, 1);
          }
        }
        toggleFullScreenState(windows.length > 0);
      },
      getContentWindow: function () {
        var ifr = this.getEl().getElementsByTagName('iframe')[0];
        return ifr ? ifr.contentWindow : null;
      }
    });
    handleWindowResize();

    var MessageBox = Window$$1.extend({
      init: function (settings) {
        settings = {
          border: 1,
          padding: 20,
          layout: 'flex',
          pack: 'center',
          align: 'center',
          containerCls: 'panel',
          autoScroll: true,
          buttons: {
            type: 'button',
            text: 'Ok',
            action: 'ok'
          },
          items: {
            type: 'label',
            multiline: true,
            maxWidth: 500,
            maxHeight: 200
          }
        };
        this._super(settings);
      },
      Statics: {
        OK: 1,
        OK_CANCEL: 2,
        YES_NO: 3,
        YES_NO_CANCEL: 4,
        msgBox: function (settings) {
          var buttons;
          var callback = settings.callback || function () {
          };
          function createButton(text, status$$1, primary) {
            return {
              type: 'button',
              text: text,
              subtype: primary ? 'primary' : '',
              onClick: function (e) {
                e.control.parents()[1].close();
                callback(status$$1);
              }
            };
          }
          switch (settings.buttons) {
          case MessageBox.OK_CANCEL:
            buttons = [
              createButton('Ok', true, true),
              createButton('Cancel', false)
            ];
            break;
          case MessageBox.YES_NO:
          case MessageBox.YES_NO_CANCEL:
            buttons = [
              createButton('Yes', 1, true),
              createButton('No', 0)
            ];
            if (settings.buttons === MessageBox.YES_NO_CANCEL) {
              buttons.push(createButton('Cancel', -1));
            }
            break;
          default:
            buttons = [createButton('Ok', true, true)];
            break;
          }
          return new Window$$1({
            padding: 20,
            x: settings.x,
            y: settings.y,
            minWidth: 300,
            minHeight: 100,
            layout: 'flex',
            pack: 'center',
            align: 'center',
            buttons: buttons,
            title: settings.title,
            role: 'alertdialog',
            items: {
              type: 'label',
              multiline: true,
              maxWidth: 500,
              maxHeight: 200,
              text: settings.text
            },
            onPostRender: function () {
              this.aria('describedby', this.items()[0]._id);
            },
            onClose: settings.onClose,
            onCancel: function () {
              callback(false);
            }
          }).renderTo(document.body).reflow();
        },
        alert: function (settings, callback) {
          if (typeof settings === 'string') {
            settings = { text: settings };
          }
          settings.callback = callback;
          return MessageBox.msgBox(settings);
        },
        confirm: function (settings, callback) {
          if (typeof settings === 'string') {
            settings = { text: settings };
          }
          settings.callback = callback;
          settings.buttons = MessageBox.OK_CANCEL;
          return MessageBox.msgBox(settings);
        }
      }
    });

    function WindowManagerImpl (editor) {
      var open$$1 = function (args, params, closeCallback) {
        var win;
        args.title = args.title || ' ';
        args.url = args.url || args.file;
        if (args.url) {
          args.width = parseInt(args.width || 320, 10);
          args.height = parseInt(args.height || 240, 10);
        }
        if (args.body) {
          args.items = {
            defaults: args.defaults,
            type: args.bodyType || 'form',
            items: args.body,
            data: args.data,
            callbacks: args.commands
          };
        }
        if (!args.url && !args.buttons) {
          args.buttons = [
            {
              text: 'Ok',
              subtype: 'primary',
              onclick: function () {
                win.find('form')[0].submit();
              }
            },
            {
              text: 'Cancel',
              onclick: function () {
                win.close();
              }
            }
          ];
        }
        win = new Window$$1(args);
        win.on('close', function () {
          closeCallback(win);
        });
        if (args.data) {
          win.on('postRender', function () {
            this.find('*').each(function (ctrl) {
              var name$$1 = ctrl.name();
              if (name$$1 in args.data) {
                ctrl.value(args.data[name$$1]);
              }
            });
          });
        }
        win.features = args || {};
        win.params = params || {};
        win = win.renderTo(document.body).reflow();
        return win;
      };
      var alert$$1 = function (message, choiceCallback, closeCallback) {
        var win;
        win = MessageBox.alert(message, function () {
          choiceCallback();
        });
        win.on('close', function () {
          closeCallback(win);
        });
        return win;
      };
      var confirm$$1 = function (message, choiceCallback, closeCallback) {
        var win;
        win = MessageBox.confirm(message, function (state) {
          choiceCallback(state);
        });
        win.on('close', function () {
          closeCallback(win);
        });
        return win;
      };
      var close$$1 = function (window$$1) {
        window$$1.close();
      };
      var getParams = function (window$$1) {
        return window$$1.params;
      };
      var setParams = function (window$$1, params) {
        window$$1.params = params;
      };
      return {
        open: open$$1,
        alert: alert$$1,
        confirm: confirm$$1,
        close: close$$1,
        getParams: getParams,
        setParams: setParams
      };
    }

    var get = function (editor) {
      var renderUI = function (args) {
        return Render.renderUI(editor, this, args);
      };
      var resizeTo = function (w, h) {
        return Resize.resizeTo(editor, w, h);
      };
      var resizeBy = function (dw, dh) {
        return Resize.resizeBy(editor, dw, dh);
      };
      var getNotificationManagerImpl = function () {
        return NotificationManagerImpl(editor);
      };
      var getWindowManagerImpl = function () {
        return WindowManagerImpl(editor);
      };
      return {
        renderUI: renderUI,
        resizeTo: resizeTo,
        resizeBy: resizeBy,
        getNotificationManagerImpl: getNotificationManagerImpl,
        getWindowManagerImpl: getWindowManagerImpl
      };
    };
    var ThemeApi = { get: get };

    var Layout = global$a.extend({
      Defaults: {
        firstControlClass: 'first',
        lastControlClass: 'last'
      },
      init: function (settings) {
        this.settings = global$2.extend({}, this.Defaults, settings);
      },
      preRender: function (container) {
        container.bodyClasses.add(this.settings.containerClass);
      },
      applyClasses: function (items) {
        var self = this;
        var settings = self.settings;
        var firstClass, lastClass, firstItem, lastItem;
        firstClass = settings.firstControlClass;
        lastClass = settings.lastControlClass;
        items.each(function (item) {
          item.classes.remove(firstClass).remove(lastClass).add(settings.controlClass);
          if (item.visible()) {
            if (!firstItem) {
              firstItem = item;
            }
            lastItem = item;
          }
        });
        if (firstItem) {
          firstItem.classes.add(firstClass);
        }
        if (lastItem) {
          lastItem.classes.add(lastClass);
        }
      },
      renderHtml: function (container) {
        var self = this;
        var html = '';
        self.applyClasses(container.items());
        container.items().each(function (item) {
          html += item.renderHtml();
        });
        return html;
      },
      recalc: function () {
      },
      postRender: function () {
      },
      isNative: function () {
        return false;
      }
    });

    var AbsoluteLayout = Layout.extend({
      Defaults: {
        containerClass: 'abs-layout',
        controlClass: 'abs-layout-item'
      },
      recalc: function (container) {
        container.items().filter(':visible').each(function (ctrl) {
          var settings = ctrl.settings;
          ctrl.layoutRect({
            x: settings.x,
            y: settings.y,
            w: settings.w,
            h: settings.h
          });
          if (ctrl.recalc) {
            ctrl.recalc();
          }
        });
      },
      renderHtml: function (container) {
        return '<div id="' + container._id + '-absend" class="' + container.classPrefix + 'abs-end"></div>' + this._super(container);
      }
    });

    var Button = Widget.extend({
      Defaults: {
        classes: 'widget btn',
        role: 'button'
      },
      init: function (settings) {
        var self$$1 = this;
        var size;
        self$$1._super(settings);
        settings = self$$1.settings;
        size = self$$1.settings.size;
        self$$1.on('click mousedown', function (e) {
          e.preventDefault();
        });
        self$$1.on('touchstart', function (e) {
          self$$1.fire('click', e);
          e.preventDefault();
        });
        if (settings.subtype) {
          self$$1.classes.add(settings.subtype);
        }
        if (size) {
          self$$1.classes.add('btn-' + size);
        }
        if (settings.icon) {
          self$$1.icon(settings.icon);
        }
      },
      icon: function (icon) {
        if (!arguments.length) {
          return this.state.get('icon');
        }
        this.state.set('icon', icon);
        return this;
      },
      repaint: function () {
        var btnElm = this.getEl().firstChild;
        var btnStyle;
        if (btnElm) {
          btnStyle = btnElm.style;
          btnStyle.width = btnStyle.height = '100%';
        }
        this._super();
      },
      renderHtml: function () {
        var self$$1 = this, id = self$$1._id, prefix = self$$1.classPrefix;
        var icon = self$$1.state.get('icon'), image;
        var text = self$$1.state.get('text');
        var textHtml = '';
        var ariaPressed;
        var settings = self$$1.settings;
        image = settings.image;
        if (image) {
          icon = 'none';
          if (typeof image !== 'string') {
            image = window.getSelection ? image[0] : image[1];
          }
          image = ' style="background-image: url(\'' + image + '\')"';
        } else {
          image = '';
        }
        if (text) {
          self$$1.classes.add('btn-has-text');
          textHtml = '<span class="' + prefix + 'txt">' + self$$1.encode(text) + '</span>';
        }
        icon = icon ? prefix + 'ico ' + prefix + 'i-' + icon : '';
        ariaPressed = typeof settings.active === 'boolean' ? ' aria-pressed="' + settings.active + '"' : '';
        return '<div id="' + id + '" class="' + self$$1.classes + '" tabindex="-1"' + ariaPressed + '>' + '<button id="' + id + '-button" role="presentation" type="button" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + textHtml + '</button>' + '</div>';
      },
      bindStates: function () {
        var self$$1 = this, $ = self$$1.$, textCls = self$$1.classPrefix + 'txt';
        function setButtonText(text) {
          var $span = $('span.' + textCls, self$$1.getEl());
          if (text) {
            if (!$span[0]) {
              $('button:first', self$$1.getEl()).append('<span class="' + textCls + '"></span>');
              $span = $('span.' + textCls, self$$1.getEl());
            }
            $span.html(self$$1.encode(text));
          } else {
            $span.remove();
          }
          self$$1.classes.toggle('btn-has-text', !!text);
        }
        self$$1.state.on('change:text', function (e) {
          setButtonText(e.value);
        });
        self$$1.state.on('change:icon', function (e) {
          var icon = e.value;
          var prefix = self$$1.classPrefix;
          self$$1.settings.icon = icon;
          icon = icon ? prefix + 'ico ' + prefix + 'i-' + self$$1.settings.icon : '';
          var btnElm = self$$1.getEl().firstChild;
          var iconElm = btnElm.getElementsByTagName('i')[0];
          if (icon) {
            if (!iconElm || iconElm !== btnElm.firstChild) {
              iconElm = document.createElement('i');
              btnElm.insertBefore(iconElm, btnElm.firstChild);
            }
            iconElm.className = icon;
          } else if (iconElm) {
            btnElm.removeChild(iconElm);
          }
          setButtonText(self$$1.state.get('text'));
        });
        return self$$1._super();
      }
    });

    var BrowseButton = Button.extend({
      init: function (settings) {
        var self = this;
        settings = global$2.extend({
          text: 'Browse...',
          multiple: false,
          accept: null
        }, settings);
        self._super(settings);
        self.classes.add('browsebutton');
        if (settings.multiple) {
          self.classes.add('multiple');
        }
      },
      postRender: function () {
        var self = this;
        var input = funcs.create('input', {
          type: 'file',
          id: self._id + '-browse',
          accept: self.settings.accept
        });
        self._super();
        global$9(input).on('change', function (e) {
          var files = e.target.files;
          self.value = function () {
            if (!files.length) {
              return null;
            } else if (self.settings.multiple) {
              return files;
            } else {
              return files[0];
            }
          };
          e.preventDefault();
          if (files.length) {
            self.fire('change', e);
          }
        });
        global$9(input).on('click', function (e) {
          e.stopPropagation();
        });
        global$9(self.getEl('button')).on('click', function (e) {
          e.stopPropagation();
          input.click();
        });
        self.getEl().appendChild(input);
      },
      remove: function () {
        global$9(this.getEl('button')).off();
        global$9(this.getEl('input')).off();
        this._super();
      }
    });

    var ButtonGroup = Container.extend({
      Defaults: {
        defaultType: 'button',
        role: 'group'
      },
      renderHtml: function () {
        var self = this, layout = self._layout;
        self.classes.add('btn-group');
        self.preRender();
        layout.preRender(self);
        return '<div id="' + self._id + '" class="' + self.classes + '">' + '<div id="' + self._id + '-body">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</div>';
      }
    });

    var Checkbox = Widget.extend({
      Defaults: {
        classes: 'checkbox',
        role: 'checkbox',
        checked: false
      },
      init: function (settings) {
        var self$$1 = this;
        self$$1._super(settings);
        self$$1.on('click mousedown', function (e) {
          e.preventDefault();
        });
        self$$1.on('click', function (e) {
          e.preventDefault();
          if (!self$$1.disabled()) {
            self$$1.checked(!self$$1.checked());
          }
        });
        self$$1.checked(self$$1.settings.checked);
      },
      checked: function (state) {
        if (!arguments.length) {
          return this.state.get('checked');
        }
        this.state.set('checked', state);
        return this;
      },
      value: function (state) {
        if (!arguments.length) {
          return this.checked();
        }
        return this.checked(state);
      },
      renderHtml: function () {
        var self$$1 = this, id = self$$1._id, prefix = self$$1.classPrefix;
        return '<div id="' + id + '" class="' + self$$1.classes + '" unselectable="on" aria-labelledby="' + id + '-al" tabindex="-1">' + '<i class="' + prefix + 'ico ' + prefix + 'i-checkbox"></i>' + '<span id="' + id + '-al" class="' + prefix + 'label">' + self$$1.encode(self$$1.state.get('text')) + '</span>' + '</div>';
      },
      bindStates: function () {
        var self$$1 = this;
        function checked(state) {
          self$$1.classes.toggle('checked', state);
          self$$1.aria('checked', state);
        }
        self$$1.state.on('change:text', function (e) {
          self$$1.getEl('al').firstChild.data = self$$1.translate(e.value);
        });
        self$$1.state.on('change:checked change:value', function (e) {
          self$$1.fire('change');
          checked(e.value);
        });
        self$$1.state.on('change:icon', function (e) {
          var icon = e.value;
          var prefix = self$$1.classPrefix;
          if (typeof icon === 'undefined') {
            return self$$1.settings.icon;
          }
          self$$1.settings.icon = icon;
          icon = icon ? prefix + 'ico ' + prefix + 'i-' + self$$1.settings.icon : '';
          var btnElm = self$$1.getEl().firstChild;
          var iconElm = btnElm.getElementsByTagName('i')[0];
          if (icon) {
            if (!iconElm || iconElm !== btnElm.firstChild) {
              iconElm = document.createElement('i');
              btnElm.insertBefore(iconElm, btnElm.firstChild);
            }
            iconElm.className = icon;
          } else if (iconElm) {
            btnElm.removeChild(iconElm);
          }
        });
        if (self$$1.state.get('checked')) {
          checked(true);
        }
        return self$$1._super();
      }
    });

    var global$d = tinymce.util.Tools.resolve('tinymce.util.VK');

    var ComboBox = Widget.extend({
      init: function (settings) {
        var self$$1 = this;
        self$$1._super(settings);
        settings = self$$1.settings;
        self$$1.classes.add('combobox');
        self$$1.subinput = true;
        self$$1.ariaTarget = 'inp';
        settings.menu = settings.menu || settings.values;
        if (settings.menu) {
          settings.icon = 'caret';
        }
        self$$1.on('click', function (e) {
          var elm = e.target;
          var root = self$$1.getEl();
          if (!global$9.contains(root, elm) && elm !== root) {
            return;
          }
          while (elm && elm !== root) {
            if (elm.id && elm.id.indexOf('-open') !== -1) {
              self$$1.fire('action');
              if (settings.menu) {
                self$$1.showMenu();
                if (e.aria) {
                  self$$1.menu.items()[0].focus();
                }
              }
            }
            elm = elm.parentNode;
          }
        });
        self$$1.on('keydown', function (e) {
          var rootControl;
          if (e.keyCode === 13 && e.target.nodeName === 'INPUT') {
            e.preventDefault();
            self$$1.parents().reverse().each(function (ctrl) {
              if (ctrl.toJSON) {
                rootControl = ctrl;
                return false;
              }
            });
            self$$1.fire('submit', { data: rootControl.toJSON() });
          }
        });
        self$$1.on('keyup', function (e) {
          if (e.target.nodeName === 'INPUT') {
            var oldValue = self$$1.state.get('value');
            var newValue = e.target.value;
            if (newValue !== oldValue) {
              self$$1.state.set('value', newValue);
              self$$1.fire('autocomplete', e);
            }
          }
        });
        self$$1.on('mouseover', function (e) {
          var tooltip = self$$1.tooltip().moveTo(-65535);
          if (self$$1.statusLevel() && e.target.className.indexOf(self$$1.classPrefix + 'status') !== -1) {
            var statusMessage = self$$1.statusMessage() || 'Ok';
            var rel = tooltip.text(statusMessage).show().testMoveRel(e.target, [
              'bc-tc',
              'bc-tl',
              'bc-tr'
            ]);
            tooltip.classes.toggle('tooltip-n', rel === 'bc-tc');
            tooltip.classes.toggle('tooltip-nw', rel === 'bc-tl');
            tooltip.classes.toggle('tooltip-ne', rel === 'bc-tr');
            tooltip.moveRel(e.target, rel);
          }
        });
      },
      statusLevel: function (value) {
        if (arguments.length > 0) {
          this.state.set('statusLevel', value);
        }
        return this.state.get('statusLevel');
      },
      statusMessage: function (value) {
        if (arguments.length > 0) {
          this.state.set('statusMessage', value);
        }
        return this.state.get('statusMessage');
      },
      showMenu: function () {
        var self$$1 = this;
        var settings = self$$1.settings;
        var menu;
        if (!self$$1.menu) {
          menu = settings.menu || [];
          if (menu.length) {
            menu = {
              type: 'menu',
              items: menu
            };
          } else {
            menu.type = menu.type || 'menu';
          }
          self$$1.menu = global$4.create(menu).parent(self$$1).renderTo(self$$1.getContainerElm());
          self$$1.fire('createmenu');
          self$$1.menu.reflow();
          self$$1.menu.on('cancel', function (e) {
            if (e.control === self$$1.menu) {
              self$$1.focus();
            }
          });
          self$$1.menu.on('show hide', function (e) {
            e.control.items().each(function (ctrl) {
              ctrl.active(ctrl.value() === self$$1.value());
            });
          }).fire('show');
          self$$1.menu.on('select', function (e) {
            self$$1.value(e.control.value());
          });
          self$$1.on('focusin', function (e) {
            if (e.target.tagName.toUpperCase() === 'INPUT') {
              self$$1.menu.hide();
            }
          });
          self$$1.aria('expanded', true);
        }
        self$$1.menu.show();
        self$$1.menu.layoutRect({ w: self$$1.layoutRect().w });
        self$$1.menu.moveRel(self$$1.getEl(), self$$1.isRtl() ? [
          'br-tr',
          'tr-br'
        ] : [
          'bl-tl',
          'tl-bl'
        ]);
      },
      focus: function () {
        this.getEl('inp').focus();
      },
      repaint: function () {
        var self$$1 = this, elm = self$$1.getEl(), openElm = self$$1.getEl('open'), rect = self$$1.layoutRect();
        var width, lineHeight, innerPadding = 0;
        var inputElm = elm.firstChild;
        if (self$$1.statusLevel() && self$$1.statusLevel() !== 'none') {
          innerPadding = parseInt(funcs.getRuntimeStyle(inputElm, 'padding-right'), 10) - parseInt(funcs.getRuntimeStyle(inputElm, 'padding-left'), 10);
        }
        if (openElm) {
          width = rect.w - funcs.getSize(openElm).width - 10;
        } else {
          width = rect.w - 10;
        }
        var doc = document;
        if (doc.all && (!doc.documentMode || doc.documentMode <= 8)) {
          lineHeight = self$$1.layoutRect().h - 2 + 'px';
        }
        global$9(inputElm).css({
          width: width - innerPadding,
          lineHeight: lineHeight
        });
        self$$1._super();
        return self$$1;
      },
      postRender: function () {
        var self$$1 = this;
        global$9(this.getEl('inp')).on('change', function (e) {
          self$$1.state.set('value', e.target.value);
          self$$1.fire('change', e);
        });
        return self$$1._super();
      },
      renderHtml: function () {
        var self$$1 = this, id = self$$1._id, settings = self$$1.settings, prefix = self$$1.classPrefix;
        var value = self$$1.state.get('value') || '';
        var icon, text, openBtnHtml = '', extraAttrs = '', statusHtml = '';
        if ('spellcheck' in settings) {
          extraAttrs += ' spellcheck="' + settings.spellcheck + '"';
        }
        if (settings.maxLength) {
          extraAttrs += ' maxlength="' + settings.maxLength + '"';
        }
        if (settings.size) {
          extraAttrs += ' size="' + settings.size + '"';
        }
        if (settings.subtype) {
          extraAttrs += ' type="' + settings.subtype + '"';
        }
        statusHtml = '<i id="' + id + '-status" class="mce-status mce-ico" style="display: none"></i>';
        if (self$$1.disabled()) {
          extraAttrs += ' disabled="disabled"';
        }
        icon = settings.icon;
        if (icon && icon !== 'caret') {
          icon = prefix + 'ico ' + prefix + 'i-' + settings.icon;
        }
        text = self$$1.state.get('text');
        if (icon || text) {
          openBtnHtml = '<div id="' + id + '-open" class="' + prefix + 'btn ' + prefix + 'open" tabIndex="-1" role="button">' + '<button id="' + id + '-action" type="button" hidefocus="1" tabindex="-1">' + (icon !== 'caret' ? '<i class="' + icon + '"></i>' : '<i class="' + prefix + 'caret"></i>') + (text ? (icon ? ' ' : '') + text : '') + '</button>' + '</div>';
          self$$1.classes.add('has-open');
        }
        return '<div id="' + id + '" class="' + self$$1.classes + '">' + '<input id="' + id + '-inp" class="' + prefix + 'textbox" value="' + self$$1.encode(value, false) + '" hidefocus="1"' + extraAttrs + ' placeholder="' + self$$1.encode(settings.placeholder) + '" />' + statusHtml + openBtnHtml + '</div>';
      },
      value: function (value) {
        if (arguments.length) {
          this.state.set('value', value);
          return this;
        }
        if (this.state.get('rendered')) {
          this.state.set('value', this.getEl('inp').value);
        }
        return this.state.get('value');
      },
      showAutoComplete: function (items, term) {
        var self$$1 = this;
        if (items.length === 0) {
          self$$1.hideMenu();
          return;
        }
        var insert = function (value, title) {
          return function () {
            self$$1.fire('selectitem', {
              title: title,
              value: value
            });
          };
        };
        if (self$$1.menu) {
          self$$1.menu.items().remove();
        } else {
          self$$1.menu = global$4.create({
            type: 'menu',
            classes: 'combobox-menu',
            layout: 'flow'
          }).parent(self$$1).renderTo();
        }
        global$2.each(items, function (item) {
          self$$1.menu.add({
            text: item.title,
            url: item.previewUrl,
            match: term,
            classes: 'menu-item-ellipsis',
            onclick: insert(item.value, item.title)
          });
        });
        self$$1.menu.renderNew();
        self$$1.hideMenu();
        self$$1.menu.on('cancel', function (e) {
          if (e.control.parent() === self$$1.menu) {
            e.stopPropagation();
            self$$1.focus();
            self$$1.hideMenu();
          }
        });
        self$$1.menu.on('select', function () {
          self$$1.focus();
        });
        var maxW = self$$1.layoutRect().w;
        self$$1.menu.layoutRect({
          w: maxW,
          minW: 0,
          maxW: maxW
        });
        self$$1.menu.repaint();
        self$$1.menu.reflow();
        self$$1.menu.show();
        self$$1.menu.moveRel(self$$1.getEl(), self$$1.isRtl() ? [
          'br-tr',
          'tr-br'
        ] : [
          'bl-tl',
          'tl-bl'
        ]);
      },
      hideMenu: function () {
        if (this.menu) {
          this.menu.hide();
        }
      },
      bindStates: function () {
        var self$$1 = this;
        self$$1.state.on('change:value', function (e) {
          if (self$$1.getEl('inp').value !== e.value) {
            self$$1.getEl('inp').value = e.value;
          }
        });
        self$$1.state.on('change:disabled', function (e) {
          self$$1.getEl('inp').disabled = e.value;
        });
        self$$1.state.on('change:statusLevel', function (e) {
          var statusIconElm = self$$1.getEl('status');
          var prefix = self$$1.classPrefix, value = e.value;
          funcs.css(statusIconElm, 'display', value === 'none' ? 'none' : '');
          funcs.toggleClass(statusIconElm, prefix + 'i-checkmark', value === 'ok');
          funcs.toggleClass(statusIconElm, prefix + 'i-warning', value === 'warn');
          funcs.toggleClass(statusIconElm, prefix + 'i-error', value === 'error');
          self$$1.classes.toggle('has-status', value !== 'none');
          self$$1.repaint();
        });
        funcs.on(self$$1.getEl('status'), 'mouseleave', function () {
          self$$1.tooltip().hide();
        });
        self$$1.on('cancel', function (e) {
          if (self$$1.menu && self$$1.menu.visible()) {
            e.stopPropagation();
            self$$1.hideMenu();
          }
        });
        var focusIdx = function (idx, menu) {
          if (menu && menu.items().length > 0) {
            menu.items().eq(idx)[0].focus();
          }
        };
        self$$1.on('keydown', function (e) {
          var keyCode = e.keyCode;
          if (e.target.nodeName === 'INPUT') {
            if (keyCode === global$d.DOWN) {
              e.preventDefault();
              self$$1.fire('autocomplete');
              focusIdx(0, self$$1.menu);
            } else if (keyCode === global$d.UP) {
              e.preventDefault();
              focusIdx(-1, self$$1.menu);
            }
          }
        });
        return self$$1._super();
      },
      remove: function () {
        global$9(this.getEl('inp')).off();
        if (this.menu) {
          this.menu.remove();
        }
        this._super();
      }
    });

    var ColorBox = ComboBox.extend({
      init: function (settings) {
        var self = this;
        settings.spellcheck = false;
        if (settings.onaction) {
          settings.icon = 'none';
        }
        self._super(settings);
        self.classes.add('colorbox');
        self.on('change keyup postrender', function () {
          self.repaintColor(self.value());
        });
      },
      repaintColor: function (value) {
        var openElm = this.getEl('open');
        var elm = openElm ? openElm.getElementsByTagName('i')[0] : null;
        if (elm) {
          try {
            elm.style.background = value;
          } catch (ex) {
          }
        }
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:value', function (e) {
          if (self.state.get('rendered')) {
            self.repaintColor(e.value);
          }
        });
        return self._super();
      }
    });

    var PanelButton = Button.extend({
      showPanel: function () {
        var self = this, settings = self.settings;
        self.classes.add('opened');
        if (!self.panel) {
          var panelSettings = settings.panel;
          if (panelSettings.type) {
            panelSettings = {
              layout: 'grid',
              items: panelSettings
            };
          }
          panelSettings.role = panelSettings.role || 'dialog';
          panelSettings.popover = true;
          panelSettings.autohide = true;
          panelSettings.ariaRoot = true;
          self.panel = new FloatPanel(panelSettings).on('hide', function () {
            self.classes.remove('opened');
          }).on('cancel', function (e) {
            e.stopPropagation();
            self.focus();
            self.hidePanel();
          }).parent(self).renderTo(self.getContainerElm());
          self.panel.fire('show');
          self.panel.reflow();
        } else {
          self.panel.show();
        }
        var rtlRels = [
          'bc-tc',
          'bc-tl',
          'bc-tr'
        ];
        var ltrRels = [
          'bc-tc',
          'bc-tr',
          'bc-tl',
          'tc-bc',
          'tc-br',
          'tc-bl'
        ];
        var rel = self.panel.testMoveRel(self.getEl(), settings.popoverAlign || (self.isRtl() ? rtlRels : ltrRels));
        self.panel.classes.toggle('start', rel.substr(-1) === 'l');
        self.panel.classes.toggle('end', rel.substr(-1) === 'r');
        var isTop = rel.substr(0, 1) === 't';
        self.panel.classes.toggle('bottom', !isTop);
        self.panel.classes.toggle('top', isTop);
        self.panel.moveRel(self.getEl(), rel);
      },
      hidePanel: function () {
        var self = this;
        if (self.panel) {
          self.panel.hide();
        }
      },
      postRender: function () {
        var self = this;
        self.aria('haspopup', true);
        self.on('click', function (e) {
          if (e.control === self) {
            if (self.panel && self.panel.visible()) {
              self.hidePanel();
            } else {
              self.showPanel();
              self.panel.focus(!!e.aria);
            }
          }
        });
        return self._super();
      },
      remove: function () {
        if (this.panel) {
          this.panel.remove();
          this.panel = null;
        }
        return this._super();
      }
    });

    var DOM$3 = global$3.DOM;
    var ColorButton = PanelButton.extend({
      init: function (settings) {
        this._super(settings);
        this.classes.add('splitbtn');
        this.classes.add('colorbutton');
      },
      color: function (color) {
        if (color) {
          this._color = color;
          this.getEl('preview').style.backgroundColor = color;
          return this;
        }
        return this._color;
      },
      resetColor: function () {
        this._color = null;
        this.getEl('preview').style.backgroundColor = null;
        return this;
      },
      renderHtml: function () {
        var self = this, id = self._id, prefix = self.classPrefix, text = self.state.get('text');
        var icon = self.settings.icon ? prefix + 'ico ' + prefix + 'i-' + self.settings.icon : '';
        var image = self.settings.image ? ' style="background-image: url(\'' + self.settings.image + '\')"' : '';
        var textHtml = '';
        if (text) {
          self.classes.add('btn-has-text');
          textHtml = '<span class="' + prefix + 'txt">' + self.encode(text) + '</span>';
        }
        return '<div id="' + id + '" class="' + self.classes + '" role="button" tabindex="-1" aria-haspopup="true">' + '<button role="presentation" hidefocus="1" type="button" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + '<span id="' + id + '-preview" class="' + prefix + 'preview"></span>' + textHtml + '</button>' + '<button type="button" class="' + prefix + 'open" hidefocus="1" tabindex="-1">' + ' <i class="' + prefix + 'caret"></i>' + '</button>' + '</div>';
      },
      postRender: function () {
        var self = this, onClickHandler = self.settings.onclick;
        self.on('click', function (e) {
          if (e.aria && e.aria.key === 'down') {
            return;
          }
          if (e.control === self && !DOM$3.getParent(e.target, '.' + self.classPrefix + 'open')) {
            e.stopImmediatePropagation();
            onClickHandler.call(self, e);
          }
        });
        delete self.settings.onclick;
        return self._super();
      }
    });

    var global$e = tinymce.util.Tools.resolve('tinymce.util.Color');

    var ColorPicker = Widget.extend({
      Defaults: { classes: 'widget colorpicker' },
      init: function (settings) {
        this._super(settings);
      },
      postRender: function () {
        var self = this;
        var color = self.color();
        var hsv, hueRootElm, huePointElm, svRootElm, svPointElm;
        hueRootElm = self.getEl('h');
        huePointElm = self.getEl('hp');
        svRootElm = self.getEl('sv');
        svPointElm = self.getEl('svp');
        function getPos(elm, event) {
          var pos = funcs.getPos(elm);
          var x, y;
          x = event.pageX - pos.x;
          y = event.pageY - pos.y;
          x = Math.max(0, Math.min(x / elm.clientWidth, 1));
          y = Math.max(0, Math.min(y / elm.clientHeight, 1));
          return {
            x: x,
            y: y
          };
        }
        function updateColor(hsv, hueUpdate) {
          var hue = (360 - hsv.h) / 360;
          funcs.css(huePointElm, { top: hue * 100 + '%' });
          if (!hueUpdate) {
            funcs.css(svPointElm, {
              left: hsv.s + '%',
              top: 100 - hsv.v + '%'
            });
          }
          svRootElm.style.background = global$e({
            s: 100,
            v: 100,
            h: hsv.h
          }).toHex();
          self.color().parse({
            s: hsv.s,
            v: hsv.v,
            h: hsv.h
          });
        }
        function updateSaturationAndValue(e) {
          var pos;
          pos = getPos(svRootElm, e);
          hsv.s = pos.x * 100;
          hsv.v = (1 - pos.y) * 100;
          updateColor(hsv);
          self.fire('change');
        }
        function updateHue(e) {
          var pos;
          pos = getPos(hueRootElm, e);
          hsv = color.toHsv();
          hsv.h = (1 - pos.y) * 360;
          updateColor(hsv, true);
          self.fire('change');
        }
        self._repaint = function () {
          hsv = color.toHsv();
          updateColor(hsv);
        };
        self._super();
        self._svdraghelper = new DragHelper(self._id + '-sv', {
          start: updateSaturationAndValue,
          drag: updateSaturationAndValue
        });
        self._hdraghelper = new DragHelper(self._id + '-h', {
          start: updateHue,
          drag: updateHue
        });
        self._repaint();
      },
      rgb: function () {
        return this.color().toRgb();
      },
      value: function (value) {
        var self = this;
        if (arguments.length) {
          self.color().parse(value);
          if (self._rendered) {
            self._repaint();
          }
        } else {
          return self.color().toHex();
        }
      },
      color: function () {
        if (!this._color) {
          this._color = global$e();
        }
        return this._color;
      },
      renderHtml: function () {
        var self = this;
        var id = self._id;
        var prefix = self.classPrefix;
        var hueHtml;
        var stops = '#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000';
        function getOldIeFallbackHtml() {
          var i, l, html = '', gradientPrefix, stopsList;
          gradientPrefix = 'filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=';
          stopsList = stops.split(',');
          for (i = 0, l = stopsList.length - 1; i < l; i++) {
            html += '<div class="' + prefix + 'colorpicker-h-chunk" style="' + 'height:' + 100 / l + '%;' + gradientPrefix + stopsList[i] + ',endColorstr=' + stopsList[i + 1] + ');' + '-ms-' + gradientPrefix + stopsList[i] + ',endColorstr=' + stopsList[i + 1] + ')' + '"></div>';
          }
          return html;
        }
        var gradientCssText = 'background: -ms-linear-gradient(top,' + stops + ');' + 'background: linear-gradient(to bottom,' + stops + ');';
        hueHtml = '<div id="' + id + '-h" class="' + prefix + 'colorpicker-h" style="' + gradientCssText + '">' + getOldIeFallbackHtml() + '<div id="' + id + '-hp" class="' + prefix + 'colorpicker-h-marker"></div>' + '</div>';
        return '<div id="' + id + '" class="' + self.classes + '">' + '<div id="' + id + '-sv" class="' + prefix + 'colorpicker-sv">' + '<div class="' + prefix + 'colorpicker-overlay1">' + '<div class="' + prefix + 'colorpicker-overlay2">' + '<div id="' + id + '-svp" class="' + prefix + 'colorpicker-selector1">' + '<div class="' + prefix + 'colorpicker-selector2"></div>' + '</div>' + '</div>' + '</div>' + '</div>' + hueHtml + '</div>';
      }
    });

    var DropZone = Widget.extend({
      init: function (settings) {
        var self = this;
        settings = global$2.extend({
          height: 100,
          text: 'Drop an image here',
          multiple: false,
          accept: null
        }, settings);
        self._super(settings);
        self.classes.add('dropzone');
        if (settings.multiple) {
          self.classes.add('multiple');
        }
      },
      renderHtml: function () {
        var self = this;
        var attrs, elm;
        var cfg = self.settings;
        attrs = {
          id: self._id,
          hidefocus: '1'
        };
        elm = funcs.create('div', attrs, '<span>' + this.translate(cfg.text) + '</span>');
        if (cfg.height) {
          funcs.css(elm, 'height', cfg.height + 'px');
        }
        if (cfg.width) {
          funcs.css(elm, 'width', cfg.width + 'px');
        }
        elm.className = self.classes;
        return elm.outerHTML;
      },
      postRender: function () {
        var self = this;
        var toggleDragClass = function (e) {
          e.preventDefault();
          self.classes.toggle('dragenter');
          self.getEl().className = self.classes;
        };
        var filter = function (files) {
          var accept = self.settings.accept;
          if (typeof accept !== 'string') {
            return files;
          }
          var re = new RegExp('(' + accept.split(/\s*,\s*/).join('|') + ')$', 'i');
          return global$2.grep(files, function (file) {
            return re.test(file.name);
          });
        };
        self._super();
        self.$el.on('dragover', function (e) {
          e.preventDefault();
        });
        self.$el.on('dragenter', toggleDragClass);
        self.$el.on('dragleave', toggleDragClass);
        self.$el.on('drop', function (e) {
          e.preventDefault();
          if (self.state.get('disabled')) {
            return;
          }
          var files = filter(e.dataTransfer.files);
          self.value = function () {
            if (!files.length) {
              return null;
            } else if (self.settings.multiple) {
              return files;
            } else {
              return files[0];
            }
          };
          if (files.length) {
            self.fire('change', e);
          }
        });
      },
      remove: function () {
        this.$el.off();
        this._super();
      }
    });

    var Path = Widget.extend({
      init: function (settings) {
        var self = this;
        if (!settings.delimiter) {
          settings.delimiter = '\xBB';
        }
        self._super(settings);
        self.classes.add('path');
        self.canFocus = true;
        self.on('click', function (e) {
          var index;
          var target = e.target;
          if (index = target.getAttribute('data-index')) {
            self.fire('select', {
              value: self.row()[index],
              index: index
            });
          }
        });
        self.row(self.settings.row);
      },
      focus: function () {
        var self = this;
        self.getEl().firstChild.focus();
        return self;
      },
      row: function (row) {
        if (!arguments.length) {
          return this.state.get('row');
        }
        this.state.set('row', row);
        return this;
      },
      renderHtml: function () {
        var self = this;
        return '<div id="' + self._id + '" class="' + self.classes + '">' + self._getDataPathHtml(self.state.get('row')) + '</div>';
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:row', function (e) {
          self.innerHtml(self._getDataPathHtml(e.value));
        });
        return self._super();
      },
      _getDataPathHtml: function (data) {
        var self = this;
        var parts = data || [];
        var i, l, html = '';
        var prefix = self.classPrefix;
        for (i = 0, l = parts.length; i < l; i++) {
          html += (i > 0 ? '<div class="' + prefix + 'divider" aria-hidden="true"> ' + self.settings.delimiter + ' </div>' : '') + '<div role="button" class="' + prefix + 'path-item' + (i === l - 1 ? ' ' + prefix + 'last' : '') + '" data-index="' + i + '" tabindex="-1" id="' + self._id + '-' + i + '" aria-level="' + (i + 1) + '">' + parts[i].name + '</div>';
        }
        if (!html) {
          html = '<div class="' + prefix + 'path-item">\xA0</div>';
        }
        return html;
      }
    });

    var ElementPath = Path.extend({
      postRender: function () {
        var self = this, editor = self.settings.editor;
        function isHidden(elm) {
          if (elm.nodeType === 1) {
            if (elm.nodeName === 'BR' || !!elm.getAttribute('data-mce-bogus')) {
              return true;
            }
            if (elm.getAttribute('data-mce-type') === 'bookmark') {
              return true;
            }
          }
          return false;
        }
        if (editor.settings.elementpath !== false) {
          self.on('select', function (e) {
            editor.focus();
            editor.selection.select(this.row()[e.index].element);
            editor.nodeChanged();
          });
          editor.on('nodeChange', function (e) {
            var outParents = [];
            var parents = e.parents;
            var i = parents.length;
            while (i--) {
              if (parents[i].nodeType === 1 && !isHidden(parents[i])) {
                var args = editor.fire('ResolveName', {
                  name: parents[i].nodeName.toLowerCase(),
                  target: parents[i]
                });
                if (!args.isDefaultPrevented()) {
                  outParents.push({
                    name: args.name,
                    element: parents[i]
                  });
                }
                if (args.isPropagationStopped()) {
                  break;
                }
              }
            }
            self.row(outParents);
          });
        }
        return self._super();
      }
    });

    var FormItem = Container.extend({
      Defaults: {
        layout: 'flex',
        align: 'center',
        defaults: { flex: 1 }
      },
      renderHtml: function () {
        var self = this, layout = self._layout, prefix = self.classPrefix;
        self.classes.add('formitem');
        layout.preRender(self);
        return '<div id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1">' + (self.settings.title ? '<div id="' + self._id + '-title" class="' + prefix + 'title">' + self.settings.title + '</div>' : '') + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</div>';
      }
    });

    var Form = Container.extend({
      Defaults: {
        containerCls: 'form',
        layout: 'flex',
        direction: 'column',
        align: 'stretch',
        flex: 1,
        padding: 15,
        labelGap: 30,
        spacing: 10,
        callbacks: {
          submit: function () {
            this.submit();
          }
        }
      },
      preRender: function () {
        var self = this, items = self.items();
        if (!self.settings.formItemDefaults) {
          self.settings.formItemDefaults = {
            layout: 'flex',
            autoResize: 'overflow',
            defaults: { flex: 1 }
          };
        }
        items.each(function (ctrl) {
          var formItem;
          var label = ctrl.settings.label;
          if (label) {
            formItem = new FormItem(global$2.extend({
              items: {
                type: 'label',
                id: ctrl._id + '-l',
                text: label,
                flex: 0,
                forId: ctrl._id,
                disabled: ctrl.disabled()
              }
            }, self.settings.formItemDefaults));
            formItem.type = 'formitem';
            ctrl.aria('labelledby', ctrl._id + '-l');
            if (typeof ctrl.settings.flex === 'undefined') {
              ctrl.settings.flex = 1;
            }
            self.replace(ctrl, formItem);
            formItem.add(ctrl);
          }
        });
      },
      submit: function () {
        return this.fire('submit', { data: this.toJSON() });
      },
      postRender: function () {
        var self = this;
        self._super();
        self.fromJSON(self.settings.data);
      },
      bindStates: function () {
        var self = this;
        self._super();
        function recalcLabels() {
          var maxLabelWidth = 0;
          var labels = [];
          var i, labelGap, items;
          if (self.settings.labelGapCalc === false) {
            return;
          }
          if (self.settings.labelGapCalc === 'children') {
            items = self.find('formitem');
          } else {
            items = self.items();
          }
          items.filter('formitem').each(function (item) {
            var labelCtrl = item.items()[0], labelWidth = labelCtrl.getEl().clientWidth;
            maxLabelWidth = labelWidth > maxLabelWidth ? labelWidth : maxLabelWidth;
            labels.push(labelCtrl);
          });
          labelGap = self.settings.labelGap || 0;
          i = labels.length;
          while (i--) {
            labels[i].settings.minWidth = maxLabelWidth + labelGap;
          }
        }
        self.on('show', recalcLabels);
        recalcLabels();
      }
    });

    var FieldSet = Form.extend({
      Defaults: {
        containerCls: 'fieldset',
        layout: 'flex',
        direction: 'column',
        align: 'stretch',
        flex: 1,
        padding: '25 15 5 15',
        labelGap: 30,
        spacing: 10,
        border: 1
      },
      renderHtml: function () {
        var self = this, layout = self._layout, prefix = self.classPrefix;
        self.preRender();
        layout.preRender(self);
        return '<fieldset id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1">' + (self.settings.title ? '<legend id="' + self._id + '-title" class="' + prefix + 'fieldset-title">' + self.settings.title + '</legend>' : '') + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</fieldset>';
      }
    });

    var unique$1 = 0;
    var generate = function (prefix) {
      var date = new Date();
      var time = date.getTime();
      var random = Math.floor(Math.random() * 1000000000);
      unique$1++;
      return prefix + '_' + random + unique$1 + String(time);
    };

    var fromHtml = function (html, scope) {
      var doc = scope || document;
      var div = doc.createElement('div');
      div.innerHTML = html;
      if (!div.hasChildNodes() || div.childNodes.length > 1) {
        console.error('HTML does not have a single root node', html);
        throw 'HTML must have a single root node';
      }
      return fromDom(div.childNodes[0]);
    };
    var fromTag = function (tag, scope) {
      var doc = scope || document;
      var node = doc.createElement(tag);
      return fromDom(node);
    };
    var fromText = function (text, scope) {
      var doc = scope || document;
      var node = doc.createTextNode(text);
      return fromDom(node);
    };
    var fromDom = function (node) {
      if (node === null || node === undefined)
        throw new Error('Node cannot be null or undefined');
      return { dom: constant(node) };
    };
    var fromPoint = function (docElm, x, y) {
      var doc = docElm.dom();
      return Option.from(doc.elementFromPoint(x, y)).map(fromDom);
    };
    var Element$$1 = {
      fromHtml: fromHtml,
      fromTag: fromTag,
      fromText: fromText,
      fromDom: fromDom,
      fromPoint: fromPoint
    };

    var cached = function (f) {
      var called = false;
      var r;
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (!called) {
          called = true;
          r = f.apply(null, args);
        }
        return r;
      };
    };

    var ATTRIBUTE = Node.ATTRIBUTE_NODE;
    var CDATA_SECTION = Node.CDATA_SECTION_NODE;
    var COMMENT = Node.COMMENT_NODE;
    var DOCUMENT = Node.DOCUMENT_NODE;
    var DOCUMENT_TYPE = Node.DOCUMENT_TYPE_NODE;
    var DOCUMENT_FRAGMENT = Node.DOCUMENT_FRAGMENT_NODE;
    var ELEMENT = Node.ELEMENT_NODE;
    var TEXT = Node.TEXT_NODE;
    var PROCESSING_INSTRUCTION = Node.PROCESSING_INSTRUCTION_NODE;
    var ENTITY_REFERENCE = Node.ENTITY_REFERENCE_NODE;
    var ENTITY = Node.ENTITY_NODE;
    var NOTATION = Node.NOTATION_NODE;

    var Immutable = function () {
      var fields = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
      }
      return function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          values[_i] = arguments[_i];
        }
        if (fields.length !== values.length) {
          throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
        }
        var struct = {};
        each(fields, function (name, i) {
          struct[name] = constant(values[i]);
        });
        return struct;
      };
    };

    var Global = typeof window !== 'undefined' ? window : Function('return this;')();

    var path = function (parts, scope) {
      var o = scope !== undefined && scope !== null ? scope : Global;
      for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
        o = o[parts[i]];
      return o;
    };
    var resolve = function (p, scope) {
      var parts = p.split('.');
      return path(parts, scope);
    };

    var unsafe = function (name, scope) {
      return resolve(name, scope);
    };
    var getOrDie = function (name, scope) {
      var actual = unsafe(name, scope);
      if (actual === undefined || actual === null)
        throw name + ' not available on this browser';
      return actual;
    };
    var Global$1 = { getOrDie: getOrDie };

    var node = function () {
      var f = Global$1.getOrDie('Node');
      return f;
    };
    var compareDocumentPosition = function (a, b, match) {
      return (a.compareDocumentPosition(b) & match) !== 0;
    };
    var documentPositionPreceding = function (a, b) {
      return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
    };
    var documentPositionContainedBy = function (a, b) {
      return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
    };
    var Node$1 = {
      documentPositionPreceding: documentPositionPreceding,
      documentPositionContainedBy: documentPositionContainedBy
    };

    var firstMatch = function (regexes, s) {
      for (var i = 0; i < regexes.length; i++) {
        var x = regexes[i];
        if (x.test(s))
          return x;
      }
      return undefined;
    };
    var find$2 = function (regexes, agent) {
      var r = firstMatch(regexes, agent);
      if (!r)
        return {
          major: 0,
          minor: 0
        };
      var group = function (i) {
        return Number(agent.replace(r, '$' + i));
      };
      return nu(group(1), group(2));
    };
    var detect = function (versionRegexes, agent) {
      var cleanedAgent = String(agent).toLowerCase();
      if (versionRegexes.length === 0)
        return unknown();
      return find$2(versionRegexes, cleanedAgent);
    };
    var unknown = function () {
      return nu(0, 0);
    };
    var nu = function (major, minor) {
      return {
        major: major,
        minor: minor
      };
    };
    var Version = {
      nu: nu,
      detect: detect,
      unknown: unknown
    };

    var edge = 'Edge';
    var chrome = 'Chrome';
    var ie = 'IE';
    var opera = 'Opera';
    var firefox = 'Firefox';
    var safari = 'Safari';
    var isBrowser = function (name, current) {
      return function () {
        return current === name;
      };
    };
    var unknown$1 = function () {
      return nu$1({
        current: undefined,
        version: Version.unknown()
      });
    };
    var nu$1 = function (info) {
      var current = info.current;
      var version = info.version;
      return {
        current: current,
        version: version,
        isEdge: isBrowser(edge, current),
        isChrome: isBrowser(chrome, current),
        isIE: isBrowser(ie, current),
        isOpera: isBrowser(opera, current),
        isFirefox: isBrowser(firefox, current),
        isSafari: isBrowser(safari, current)
      };
    };
    var Browser = {
      unknown: unknown$1,
      nu: nu$1,
      edge: constant(edge),
      chrome: constant(chrome),
      ie: constant(ie),
      opera: constant(opera),
      firefox: constant(firefox),
      safari: constant(safari)
    };

    var windows$1 = 'Windows';
    var ios = 'iOS';
    var android = 'Android';
    var linux = 'Linux';
    var osx = 'OSX';
    var solaris = 'Solaris';
    var freebsd = 'FreeBSD';
    var isOS = function (name, current) {
      return function () {
        return current === name;
      };
    };
    var unknown$2 = function () {
      return nu$2({
        current: undefined,
        version: Version.unknown()
      });
    };
    var nu$2 = function (info) {
      var current = info.current;
      var version = info.version;
      return {
        current: current,
        version: version,
        isWindows: isOS(windows$1, current),
        isiOS: isOS(ios, current),
        isAndroid: isOS(android, current),
        isOSX: isOS(osx, current),
        isLinux: isOS(linux, current),
        isSolaris: isOS(solaris, current),
        isFreeBSD: isOS(freebsd, current)
      };
    };
    var OperatingSystem = {
      unknown: unknown$2,
      nu: nu$2,
      windows: constant(windows$1),
      ios: constant(ios),
      android: constant(android),
      linux: constant(linux),
      osx: constant(osx),
      solaris: constant(solaris),
      freebsd: constant(freebsd)
    };

    var DeviceType = function (os, browser, userAgent) {
      var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
      var isiPhone = os.isiOS() && !isiPad;
      var isAndroid3 = os.isAndroid() && os.version.major === 3;
      var isAndroid4 = os.isAndroid() && os.version.major === 4;
      var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
      var isTouch = os.isiOS() || os.isAndroid();
      var isPhone = isTouch && !isTablet;
      var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
      return {
        isiPad: constant(isiPad),
        isiPhone: constant(isiPhone),
        isTablet: constant(isTablet),
        isPhone: constant(isPhone),
        isTouch: constant(isTouch),
        isAndroid: os.isAndroid,
        isiOS: os.isiOS,
        isWebView: constant(iOSwebview)
      };
    };

    var detect$1 = function (candidates, userAgent) {
      var agent = String(userAgent).toLowerCase();
      return find(candidates, function (candidate) {
        return candidate.search(agent);
      });
    };
    var detectBrowser = function (browsers, userAgent) {
      return detect$1(browsers, userAgent).map(function (browser) {
        var version = Version.detect(browser.versionRegexes, userAgent);
        return {
          current: browser.name,
          version: version
        };
      });
    };
    var detectOs = function (oses, userAgent) {
      return detect$1(oses, userAgent).map(function (os) {
        var version = Version.detect(os.versionRegexes, userAgent);
        return {
          current: os.name,
          version: version
        };
      });
    };
    var UaString = {
      detectBrowser: detectBrowser,
      detectOs: detectOs
    };

    var contains$1 = function (str, substr) {
      return str.indexOf(substr) !== -1;
    };

    var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
    var checkContains = function (target) {
      return function (uastring) {
        return contains$1(uastring, target);
      };
    };
    var browsers = [
      {
        name: 'Edge',
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: function (uastring) {
          var monstrosity = contains$1(uastring, 'edge/') && contains$1(uastring, 'chrome') && contains$1(uastring, 'safari') && contains$1(uastring, 'applewebkit');
          return monstrosity;
        }
      },
      {
        name: 'Chrome',
        versionRegexes: [
          /.*?chrome\/([0-9]+)\.([0-9]+).*/,
          normalVersionRegex
        ],
        search: function (uastring) {
          return contains$1(uastring, 'chrome') && !contains$1(uastring, 'chromeframe');
        }
      },
      {
        name: 'IE',
        versionRegexes: [
          /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
          /.*?rv:([0-9]+)\.([0-9]+).*/
        ],
        search: function (uastring) {
          return contains$1(uastring, 'msie') || contains$1(uastring, 'trident');
        }
      },
      {
        name: 'Opera',
        versionRegexes: [
          normalVersionRegex,
          /.*?opera\/([0-9]+)\.([0-9]+).*/
        ],
        search: checkContains('opera')
      },
      {
        name: 'Firefox',
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: checkContains('firefox')
      },
      {
        name: 'Safari',
        versionRegexes: [
          normalVersionRegex,
          /.*?cpu os ([0-9]+)_([0-9]+).*/
        ],
        search: function (uastring) {
          return (contains$1(uastring, 'safari') || contains$1(uastring, 'mobile/')) && contains$1(uastring, 'applewebkit');
        }
      }
    ];
    var oses = [
      {
        name: 'Windows',
        search: checkContains('win'),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: 'iOS',
        search: function (uastring) {
          return contains$1(uastring, 'iphone') || contains$1(uastring, 'ipad');
        },
        versionRegexes: [
          /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
          /.*cpu os ([0-9]+)_([0-9]+).*/,
          /.*cpu iphone os ([0-9]+)_([0-9]+).*/
        ]
      },
      {
        name: 'Android',
        search: checkContains('android'),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: 'OSX',
        search: checkContains('os x'),
        versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
      },
      {
        name: 'Linux',
        search: checkContains('linux'),
        versionRegexes: []
      },
      {
        name: 'Solaris',
        search: checkContains('sunos'),
        versionRegexes: []
      },
      {
        name: 'FreeBSD',
        search: checkContains('freebsd'),
        versionRegexes: []
      }
    ];
    var PlatformInfo = {
      browsers: constant(browsers),
      oses: constant(oses)
    };

    var detect$2 = function (userAgent) {
      var browsers = PlatformInfo.browsers();
      var oses = PlatformInfo.oses();
      var browser = UaString.detectBrowser(browsers, userAgent).fold(Browser.unknown, Browser.nu);
      var os = UaString.detectOs(oses, userAgent).fold(OperatingSystem.unknown, OperatingSystem.nu);
      var deviceType = DeviceType(os, browser, userAgent);
      return {
        browser: browser,
        os: os,
        deviceType: deviceType
      };
    };
    var PlatformDetection = { detect: detect$2 };

    var detect$3 = cached(function () {
      var userAgent = navigator.userAgent;
      return PlatformDetection.detect(userAgent);
    });
    var PlatformDetection$1 = { detect: detect$3 };

    var ELEMENT$1 = ELEMENT;
    var DOCUMENT$1 = DOCUMENT;
    var bypassSelector = function (dom) {
      return dom.nodeType !== ELEMENT$1 && dom.nodeType !== DOCUMENT$1 || dom.childElementCount === 0;
    };
    var all = function (selector, scope) {
      var base = scope === undefined ? document : scope.dom();
      return bypassSelector(base) ? [] : map(base.querySelectorAll(selector), Element$$1.fromDom);
    };
    var one = function (selector, scope) {
      var base = scope === undefined ? document : scope.dom();
      return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map(Element$$1.fromDom);
    };

    var regularContains = function (e1, e2) {
      var d1 = e1.dom(), d2 = e2.dom();
      return d1 === d2 ? false : d1.contains(d2);
    };
    var ieContains = function (e1, e2) {
      return Node$1.documentPositionContainedBy(e1.dom(), e2.dom());
    };
    var browser = PlatformDetection$1.detect().browser;
    var contains$2 = browser.isIE() ? ieContains : regularContains;

    var spot = Immutable('element', 'offset');

    var descendants$1 = function (scope, selector) {
      return all(selector, scope);
    };

    var trim$1 = global$2.trim;
    var hasContentEditableState = function (value) {
      return function (node) {
        if (node && node.nodeType === 1) {
          if (node.contentEditable === value) {
            return true;
          }
          if (node.getAttribute('data-mce-contenteditable') === value) {
            return true;
          }
        }
        return false;
      };
    };
    var isContentEditableTrue = hasContentEditableState('true');
    var isContentEditableFalse = hasContentEditableState('false');
    var create = function (type, title, url, level, attach) {
      return {
        type: type,
        title: title,
        url: url,
        level: level,
        attach: attach
      };
    };
    var isChildOfContentEditableTrue = function (node) {
      while (node = node.parentNode) {
        var value = node.contentEditable;
        if (value && value !== 'inherit') {
          return isContentEditableTrue(node);
        }
      }
      return false;
    };
    var select = function (selector, root) {
      return map(descendants$1(Element$$1.fromDom(root), selector), function (element) {
        return element.dom();
      });
    };
    var getElementText = function (elm) {
      return elm.innerText || elm.textContent;
    };
    var getOrGenerateId = function (elm) {
      return elm.id ? elm.id : generate('h');
    };
    var isAnchor = function (elm) {
      return elm && elm.nodeName === 'A' && (elm.id || elm.name);
    };
    var isValidAnchor = function (elm) {
      return isAnchor(elm) && isEditable(elm);
    };
    var isHeader = function (elm) {
      return elm && /^(H[1-6])$/.test(elm.nodeName);
    };
    var isEditable = function (elm) {
      return isChildOfContentEditableTrue(elm) && !isContentEditableFalse(elm);
    };
    var isValidHeader = function (elm) {
      return isHeader(elm) && isEditable(elm);
    };
    var getLevel = function (elm) {
      return isHeader(elm) ? parseInt(elm.nodeName.substr(1), 10) : 0;
    };
    var headerTarget = function (elm) {
      var headerId = getOrGenerateId(elm);
      var attach = function () {
        elm.id = headerId;
      };
      return create('header', getElementText(elm), '#' + headerId, getLevel(elm), attach);
    };
    var anchorTarget = function (elm) {
      var anchorId = elm.id || elm.name;
      var anchorText = getElementText(elm);
      return create('anchor', anchorText ? anchorText : '#' + anchorId, '#' + anchorId, 0, noop);
    };
    var getHeaderTargets = function (elms) {
      return map(filter(elms, isValidHeader), headerTarget);
    };
    var getAnchorTargets = function (elms) {
      return map(filter(elms, isValidAnchor), anchorTarget);
    };
    var getTargetElements = function (elm) {
      var elms = select('h1,h2,h3,h4,h5,h6,a:not([href])', elm);
      return elms;
    };
    var hasTitle = function (target) {
      return trim$1(target.title).length > 0;
    };
    var find$3 = function (elm) {
      var elms = getTargetElements(elm);
      return filter(getHeaderTargets(elms).concat(getAnchorTargets(elms)), hasTitle);
    };
    var LinkTargets = { find: find$3 };

    var getActiveEditor = function () {
      return window.tinymce ? window.tinymce.activeEditor : global$1.activeEditor;
    };
    var history = {};
    var HISTORY_LENGTH = 5;
    var clearHistory = function () {
      history = {};
    };
    var toMenuItem = function (target) {
      return {
        title: target.title,
        value: {
          title: { raw: target.title },
          url: target.url,
          attach: target.attach
        }
      };
    };
    var toMenuItems = function (targets) {
      return global$2.map(targets, toMenuItem);
    };
    var staticMenuItem = function (title, url) {
      return {
        title: title,
        value: {
          title: title,
          url: url,
          attach: noop
        }
      };
    };
    var isUniqueUrl = function (url, targets) {
      var foundTarget = exists(targets, function (target) {
        return target.url === url;
      });
      return !foundTarget;
    };
    var getSetting = function (editorSettings, name, defaultValue) {
      var value = name in editorSettings ? editorSettings[name] : defaultValue;
      return value === false ? null : value;
    };
    var createMenuItems = function (term, targets, fileType, editorSettings) {
      var separator = { title: '-' };
      var fromHistoryMenuItems = function (history) {
        var historyItems = history.hasOwnProperty(fileType) ? history[fileType] : [];
        var uniqueHistory = filter(historyItems, function (url) {
          return isUniqueUrl(url, targets);
        });
        return global$2.map(uniqueHistory, function (url) {
          return {
            title: url,
            value: {
              title: url,
              url: url,
              attach: noop
            }
          };
        });
      };
      var fromMenuItems = function (type) {
        var filteredTargets = filter(targets, function (target) {
          return target.type === type;
        });
        return toMenuItems(filteredTargets);
      };
      var anchorMenuItems = function () {
        var anchorMenuItems = fromMenuItems('anchor');
        var topAnchor = getSetting(editorSettings, 'anchor_top', '#top');
        var bottomAchor = getSetting(editorSettings, 'anchor_bottom', '#bottom');
        if (topAnchor !== null) {
          anchorMenuItems.unshift(staticMenuItem('<top>', topAnchor));
        }
        if (bottomAchor !== null) {
          anchorMenuItems.push(staticMenuItem('<bottom>', bottomAchor));
        }
        return anchorMenuItems;
      };
      var join = function (items) {
        return foldl(items, function (a, b) {
          var bothEmpty = a.length === 0 || b.length === 0;
          return bothEmpty ? a.concat(b) : a.concat(separator, b);
        }, []);
      };
      if (editorSettings.typeahead_urls === false) {
        return [];
      }
      return fileType === 'file' ? join([
        filterByQuery(term, fromHistoryMenuItems(history)),
        filterByQuery(term, fromMenuItems('header')),
        filterByQuery(term, anchorMenuItems())
      ]) : filterByQuery(term, fromHistoryMenuItems(history));
    };
    var addToHistory = function (url, fileType) {
      var items = history[fileType];
      if (!/^https?/.test(url)) {
        return;
      }
      if (items) {
        if (indexOf(items, url).isNone()) {
          history[fileType] = items.slice(0, HISTORY_LENGTH).concat(url);
        }
      } else {
        history[fileType] = [url];
      }
    };
    var filterByQuery = function (term, menuItems) {
      var lowerCaseTerm = term.toLowerCase();
      var result = global$2.grep(menuItems, function (item) {
        return item.title.toLowerCase().indexOf(lowerCaseTerm) !== -1;
      });
      return result.length === 1 && result[0].title === term ? [] : result;
    };
    var getTitle = function (linkDetails) {
      var title = linkDetails.title;
      return title.raw ? title.raw : title;
    };
    var setupAutoCompleteHandler = function (ctrl, editorSettings, bodyElm, fileType) {
      var autocomplete = function (term) {
        var linkTargets = LinkTargets.find(bodyElm);
        var menuItems = createMenuItems(term, linkTargets, fileType, editorSettings);
        ctrl.showAutoComplete(menuItems, term);
      };
      ctrl.on('autocomplete', function () {
        autocomplete(ctrl.value());
      });
      ctrl.on('selectitem', function (e) {
        var linkDetails = e.value;
        ctrl.value(linkDetails.url);
        var title = getTitle(linkDetails);
        if (fileType === 'image') {
          ctrl.fire('change', {
            meta: {
              alt: title,
              attach: linkDetails.attach
            }
          });
        } else {
          ctrl.fire('change', {
            meta: {
              text: title,
              attach: linkDetails.attach
            }
          });
        }
        ctrl.focus();
      });
      ctrl.on('click', function (e) {
        if (ctrl.value().length === 0 && e.target.nodeName === 'INPUT') {
          autocomplete('');
        }
      });
      ctrl.on('PostRender', function () {
        ctrl.getRoot().on('submit', function (e) {
          if (!e.isDefaultPrevented()) {
            addToHistory(ctrl.value(), fileType);
          }
        });
      });
    };
    var statusToUiState = function (result) {
      var status = result.status, message = result.message;
      if (status === 'valid') {
        return {
          status: 'ok',
          message: message
        };
      } else if (status === 'unknown') {
        return {
          status: 'warn',
          message: message
        };
      } else if (status === 'invalid') {
        return {
          status: 'warn',
          message: message
        };
      } else {
        return {
          status: 'none',
          message: ''
        };
      }
    };
    var setupLinkValidatorHandler = function (ctrl, editorSettings, fileType) {
      var validatorHandler = editorSettings.filepicker_validator_handler;
      if (validatorHandler) {
        var validateUrl_1 = function (url) {
          if (url.length === 0) {
            ctrl.statusLevel('none');
            return;
          }
          validatorHandler({
            url: url,
            type: fileType
          }, function (result) {
            var uiState = statusToUiState(result);
            ctrl.statusMessage(uiState.message);
            ctrl.statusLevel(uiState.status);
          });
        };
        ctrl.state.on('change:value', function (e) {
          validateUrl_1(e.value);
        });
      }
    };
    var FilePicker = ComboBox.extend({
      Statics: { clearHistory: clearHistory },
      init: function (settings) {
        var self = this, editor = getActiveEditor(), editorSettings = editor.settings;
        var actionCallback, fileBrowserCallback, fileBrowserCallbackTypes;
        var fileType = settings.filetype;
        settings.spellcheck = false;
        fileBrowserCallbackTypes = editorSettings.file_picker_types || editorSettings.file_browser_callback_types;
        if (fileBrowserCallbackTypes) {
          fileBrowserCallbackTypes = global$2.makeMap(fileBrowserCallbackTypes, /[, ]/);
        }
        if (!fileBrowserCallbackTypes || fileBrowserCallbackTypes[fileType]) {
          fileBrowserCallback = editorSettings.file_picker_callback;
          if (fileBrowserCallback && (!fileBrowserCallbackTypes || fileBrowserCallbackTypes[fileType])) {
            actionCallback = function () {
              var meta = self.fire('beforecall').meta;
              meta = global$2.extend({ filetype: fileType }, meta);
              fileBrowserCallback.call(editor, function (value, meta) {
                self.value(value).fire('change', { meta: meta });
              }, self.value(), meta);
            };
          } else {
            fileBrowserCallback = editorSettings.file_browser_callback;
            if (fileBrowserCallback && (!fileBrowserCallbackTypes || fileBrowserCallbackTypes[fileType])) {
              actionCallback = function () {
                fileBrowserCallback(self.getEl('inp').id, self.value(), fileType, window);
              };
            }
          }
        }
        if (actionCallback) {
          settings.icon = 'browse';
          settings.onaction = actionCallback;
        }
        self._super(settings);
        self.classes.add('filepicker');
        setupAutoCompleteHandler(self, editorSettings, editor.getBody(), fileType);
        setupLinkValidatorHandler(self, editorSettings, fileType);
      }
    });

    var FitLayout = AbsoluteLayout.extend({
      recalc: function (container) {
        var contLayoutRect = container.layoutRect(), paddingBox = container.paddingBox;
        container.items().filter(':visible').each(function (ctrl) {
          ctrl.layoutRect({
            x: paddingBox.left,
            y: paddingBox.top,
            w: contLayoutRect.innerW - paddingBox.right - paddingBox.left,
            h: contLayoutRect.innerH - paddingBox.top - paddingBox.bottom
          });
          if (ctrl.recalc) {
            ctrl.recalc();
          }
        });
      }
    });

    var FlexLayout = AbsoluteLayout.extend({
      recalc: function (container) {
        var i, l, items, contLayoutRect, contPaddingBox, contSettings, align, pack, spacing, totalFlex, availableSpace, direction;
        var ctrl, ctrlLayoutRect, ctrlSettings, flex;
        var maxSizeItems = [];
        var size, maxSize, ratio, rect, pos, maxAlignEndPos;
        var sizeName, minSizeName, posName, maxSizeName, beforeName, innerSizeName, deltaSizeName, contentSizeName;
        var alignAxisName, alignInnerSizeName, alignSizeName, alignMinSizeName, alignBeforeName, alignAfterName;
        var alignDeltaSizeName, alignContentSizeName;
        var max = Math.max, min = Math.min;
        items = container.items().filter(':visible');
        contLayoutRect = container.layoutRect();
        contPaddingBox = container.paddingBox;
        contSettings = container.settings;
        direction = container.isRtl() ? contSettings.direction || 'row-reversed' : contSettings.direction;
        align = contSettings.align;
        pack = container.isRtl() ? contSettings.pack || 'end' : contSettings.pack;
        spacing = contSettings.spacing || 0;
        if (direction === 'row-reversed' || direction === 'column-reverse') {
          items = items.set(items.toArray().reverse());
          direction = direction.split('-')[0];
        }
        if (direction === 'column') {
          posName = 'y';
          sizeName = 'h';
          minSizeName = 'minH';
          maxSizeName = 'maxH';
          innerSizeName = 'innerH';
          beforeName = 'top';
          deltaSizeName = 'deltaH';
          contentSizeName = 'contentH';
          alignBeforeName = 'left';
          alignSizeName = 'w';
          alignAxisName = 'x';
          alignInnerSizeName = 'innerW';
          alignMinSizeName = 'minW';
          alignAfterName = 'right';
          alignDeltaSizeName = 'deltaW';
          alignContentSizeName = 'contentW';
        } else {
          posName = 'x';
          sizeName = 'w';
          minSizeName = 'minW';
          maxSizeName = 'maxW';
          innerSizeName = 'innerW';
          beforeName = 'left';
          deltaSizeName = 'deltaW';
          contentSizeName = 'contentW';
          alignBeforeName = 'top';
          alignSizeName = 'h';
          alignAxisName = 'y';
          alignInnerSizeName = 'innerH';
          alignMinSizeName = 'minH';
          alignAfterName = 'bottom';
          alignDeltaSizeName = 'deltaH';
          alignContentSizeName = 'contentH';
        }
        availableSpace = contLayoutRect[innerSizeName] - contPaddingBox[beforeName] - contPaddingBox[beforeName];
        maxAlignEndPos = totalFlex = 0;
        for (i = 0, l = items.length; i < l; i++) {
          ctrl = items[i];
          ctrlLayoutRect = ctrl.layoutRect();
          ctrlSettings = ctrl.settings;
          flex = ctrlSettings.flex;
          availableSpace -= i < l - 1 ? spacing : 0;
          if (flex > 0) {
            totalFlex += flex;
            if (ctrlLayoutRect[maxSizeName]) {
              maxSizeItems.push(ctrl);
            }
            ctrlLayoutRect.flex = flex;
          }
          availableSpace -= ctrlLayoutRect[minSizeName];
          size = contPaddingBox[alignBeforeName] + ctrlLayoutRect[alignMinSizeName] + contPaddingBox[alignAfterName];
          if (size > maxAlignEndPos) {
            maxAlignEndPos = size;
          }
        }
        rect = {};
        if (availableSpace < 0) {
          rect[minSizeName] = contLayoutRect[minSizeName] - availableSpace + contLayoutRect[deltaSizeName];
        } else {
          rect[minSizeName] = contLayoutRect[innerSizeName] - availableSpace + contLayoutRect[deltaSizeName];
        }
        rect[alignMinSizeName] = maxAlignEndPos + contLayoutRect[alignDeltaSizeName];
        rect[contentSizeName] = contLayoutRect[innerSizeName] - availableSpace;
        rect[alignContentSizeName] = maxAlignEndPos;
        rect.minW = min(rect.minW, contLayoutRect.maxW);
        rect.minH = min(rect.minH, contLayoutRect.maxH);
        rect.minW = max(rect.minW, contLayoutRect.startMinWidth);
        rect.minH = max(rect.minH, contLayoutRect.startMinHeight);
        if (contLayoutRect.autoResize && (rect.minW !== contLayoutRect.minW || rect.minH !== contLayoutRect.minH)) {
          rect.w = rect.minW;
          rect.h = rect.minH;
          container.layoutRect(rect);
          this.recalc(container);
          if (container._lastRect === null) {
            var parentCtrl = container.parent();
            if (parentCtrl) {
              parentCtrl._lastRect = null;
              parentCtrl.recalc();
            }
          }
          return;
        }
        ratio = availableSpace / totalFlex;
        for (i = 0, l = maxSizeItems.length; i < l; i++) {
          ctrl = maxSizeItems[i];
          ctrlLayoutRect = ctrl.layoutRect();
          maxSize = ctrlLayoutRect[maxSizeName];
          size = ctrlLayoutRect[minSizeName] + ctrlLayoutRect.flex * ratio;
          if (size > maxSize) {
            availableSpace -= ctrlLayoutRect[maxSizeName] - ctrlLayoutRect[minSizeName];
            totalFlex -= ctrlLayoutRect.flex;
            ctrlLayoutRect.flex = 0;
            ctrlLayoutRect.maxFlexSize = maxSize;
          } else {
            ctrlLayoutRect.maxFlexSize = 0;
          }
        }
        ratio = availableSpace / totalFlex;
        pos = contPaddingBox[beforeName];
        rect = {};
        if (totalFlex === 0) {
          if (pack === 'end') {
            pos = availableSpace + contPaddingBox[beforeName];
          } else if (pack === 'center') {
            pos = Math.round(contLayoutRect[innerSizeName] / 2 - (contLayoutRect[innerSizeName] - availableSpace) / 2) + contPaddingBox[beforeName];
            if (pos < 0) {
              pos = contPaddingBox[beforeName];
            }
          } else if (pack === 'justify') {
            pos = contPaddingBox[beforeName];
            spacing = Math.floor(availableSpace / (items.length - 1));
          }
        }
        rect[alignAxisName] = contPaddingBox[alignBeforeName];
        for (i = 0, l = items.length; i < l; i++) {
          ctrl = items[i];
          ctrlLayoutRect = ctrl.layoutRect();
          size = ctrlLayoutRect.maxFlexSize || ctrlLayoutRect[minSizeName];
          if (align === 'center') {
            rect[alignAxisName] = Math.round(contLayoutRect[alignInnerSizeName] / 2 - ctrlLayoutRect[alignSizeName] / 2);
          } else if (align === 'stretch') {
            rect[alignSizeName] = max(ctrlLayoutRect[alignMinSizeName] || 0, contLayoutRect[alignInnerSizeName] - contPaddingBox[alignBeforeName] - contPaddingBox[alignAfterName]);
            rect[alignAxisName] = contPaddingBox[alignBeforeName];
          } else if (align === 'end') {
            rect[alignAxisName] = contLayoutRect[alignInnerSizeName] - ctrlLayoutRect[alignSizeName] - contPaddingBox.top;
          }
          if (ctrlLayoutRect.flex > 0) {
            size += ctrlLayoutRect.flex * ratio;
          }
          rect[sizeName] = size;
          rect[posName] = pos;
          ctrl.layoutRect(rect);
          if (ctrl.recalc) {
            ctrl.recalc();
          }
          pos += size + spacing;
        }
      }
    });

    var FlowLayout = Layout.extend({
      Defaults: {
        containerClass: 'flow-layout',
        controlClass: 'flow-layout-item',
        endClass: 'break'
      },
      recalc: function (container) {
        container.items().filter(':visible').each(function (ctrl) {
          if (ctrl.recalc) {
            ctrl.recalc();
          }
        });
      },
      isNative: function () {
        return true;
      }
    });

    var descendant$1 = function (scope, selector) {
      return one(selector, scope);
    };

    var toggleFormat = function (editor, fmt) {
      return function () {
        editor.execCommand('mceToggleFormat', false, fmt);
      };
    };
    var addFormatChangedListener = function (editor, name, changed) {
      var handler = function (state) {
        changed(state, name);
      };
      if (editor.formatter) {
        editor.formatter.formatChanged(name, handler);
      } else {
        editor.on('init', function () {
          editor.formatter.formatChanged(name, handler);
        });
      }
    };
    var postRenderFormatToggle = function (editor, name) {
      return function (e) {
        addFormatChangedListener(editor, name, function (state) {
          e.control.active(state);
        });
      };
    };

    var register = function (editor) {
      var alignFormats = [
        'alignleft',
        'aligncenter',
        'alignright',
        'alignjustify'
      ];
      var defaultAlign = 'alignleft';
      var alignMenuItems = [
        {
          text: 'Left',
          icon: 'alignleft',
          onclick: toggleFormat(editor, 'alignleft')
        },
        {
          text: 'Center',
          icon: 'aligncenter',
          onclick: toggleFormat(editor, 'aligncenter')
        },
        {
          text: 'Right',
          icon: 'alignright',
          onclick: toggleFormat(editor, 'alignright')
        },
        {
          text: 'Justify',
          icon: 'alignjustify',
          onclick: toggleFormat(editor, 'alignjustify')
        }
      ];
      editor.addMenuItem('align', {
        text: 'Align',
        menu: alignMenuItems
      });
      editor.addButton('align', {
        type: 'menubutton',
        icon: defaultAlign,
        menu: alignMenuItems,
        onShowMenu: function (e) {
          var menu = e.control.menu;
          global$2.each(alignFormats, function (formatName, idx) {
            menu.items().eq(idx).each(function (item) {
              return item.active(editor.formatter.match(formatName));
            });
          });
        },
        onPostRender: function (e) {
          var ctrl = e.control;
          global$2.each(alignFormats, function (formatName, idx) {
            addFormatChangedListener(editor, formatName, function (state) {
              ctrl.icon(defaultAlign);
              if (state) {
                ctrl.icon(formatName);
              }
            });
          });
        }
      });
      global$2.each({
        alignleft: [
          'Align left',
          'JustifyLeft'
        ],
        aligncenter: [
          'Align center',
          'JustifyCenter'
        ],
        alignright: [
          'Align right',
          'JustifyRight'
        ],
        alignjustify: [
          'Justify',
          'JustifyFull'
        ],
        alignnone: [
          'No alignment',
          'JustifyNone'
        ]
      }, function (item, name) {
        editor.addButton(name, {
          active: false,
          tooltip: item[0],
          cmd: item[1],
          onPostRender: postRenderFormatToggle(editor, name)
        });
      });
    };
    var Align = { register: register };

    var getFirstFont = function (fontFamily) {
      return fontFamily ? fontFamily.split(',')[0] : '';
    };
    var findMatchingValue = function (items, fontFamily) {
      var font = fontFamily ? fontFamily.toLowerCase() : '';
      var value;
      global$2.each(items, function (item) {
        if (item.value.toLowerCase() === font) {
          value = item.value;
        }
      });
      global$2.each(items, function (item) {
        if (!value && getFirstFont(item.value).toLowerCase() === getFirstFont(font).toLowerCase()) {
          value = item.value;
        }
      });
      return value;
    };
    var createFontNameListBoxChangeHandler = function (editor, items) {
      return function () {
        var self = this;
        self.state.set('value', null);
        editor.on('init nodeChange', function (e) {
          var fontFamily = editor.queryCommandValue('FontName');
          var match = findMatchingValue(items, fontFamily);
          self.value(match ? match : null);
          if (!match && fontFamily) {
            self.text(getFirstFont(fontFamily));
          }
        });
      };
    };
    var createFormats = function (formats) {
      formats = formats.replace(/;$/, '').split(';');
      var i = formats.length;
      while (i--) {
        formats[i] = formats[i].split('=');
      }
      return formats;
    };
    var getFontItems = function (editor) {
      var defaultFontsFormats = 'Andale Mono=andale mono,monospace;' + 'Arial=arial,helvetica,sans-serif;' + 'Arial Black=arial black,sans-serif;' + 'Book Antiqua=book antiqua,palatino,serif;' + 'Comic Sans MS=comic sans ms,sans-serif;' + 'Courier New=courier new,courier,monospace;' + 'Georgia=georgia,palatino,serif;' + 'Helvetica=helvetica,arial,sans-serif;' + 'Impact=impact,sans-serif;' + 'Symbol=symbol;' + 'Tahoma=tahoma,arial,helvetica,sans-serif;' + 'Terminal=terminal,monaco,monospace;' + 'Times New Roman=times new roman,times,serif;' + 'Trebuchet MS=trebuchet ms,geneva,sans-serif;' + 'Verdana=verdana,geneva,sans-serif;' + 'Webdings=webdings;' + 'Wingdings=wingdings,zapf dingbats';
      var fonts = createFormats(editor.settings.font_formats || defaultFontsFormats);
      return global$2.map(fonts, function (font) {
        return {
          text: { raw: font[0] },
          value: font[1],
          textStyle: font[1].indexOf('dings') === -1 ? 'font-family:' + font[1] : ''
        };
      });
    };
    var registerButtons = function (editor) {
      editor.addButton('fontselect', function () {
        var items = getFontItems(editor);
        return {
          type: 'listbox',
          text: 'Font Family',
          tooltip: 'Font Family',
          values: items,
          fixedWidth: true,
          onPostRender: createFontNameListBoxChangeHandler(editor, items),
          onselect: function (e) {
            if (e.control.settings.value) {
              editor.execCommand('FontName', false, e.control.settings.value);
            }
          }
        };
      });
    };
    var register$1 = function (editor) {
      registerButtons(editor);
    };
    var FontSelect = { register: register$1 };

    var round = function (number, precision) {
      var factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    };
    var toPt = function (fontSize, precision) {
      if (/[0-9.]+px$/.test(fontSize)) {
        return round(parseInt(fontSize, 10) * 72 / 96, precision || 0) + 'pt';
      }
      return fontSize;
    };
    var findMatchingValue$1 = function (items, pt, px) {
      var value;
      global$2.each(items, function (item) {
        if (item.value === px) {
          value = px;
        } else if (item.value === pt) {
          value = pt;
        }
      });
      return value;
    };
    var createFontSizeListBoxChangeHandler = function (editor, items) {
      return function () {
        var self = this;
        editor.on('init nodeChange', function (e) {
          var px, pt, precision, match;
          px = editor.queryCommandValue('FontSize');
          if (px) {
            for (precision = 3; !match && precision >= 0; precision--) {
              pt = toPt(px, precision);
              match = findMatchingValue$1(items, pt, px);
            }
          }
          self.value(match ? match : null);
          if (!match) {
            self.text(pt);
          }
        });
      };
    };
    var getFontSizeItems = function (editor) {
      var defaultFontsizeFormats = '8pt 10pt 12pt 14pt 18pt 24pt 36pt';
      var fontsizeFormats = editor.settings.fontsize_formats || defaultFontsizeFormats;
      return global$2.map(fontsizeFormats.split(' '), function (item) {
        var text = item, value = item;
        var values = item.split('=');
        if (values.length > 1) {
          text = values[0];
          value = values[1];
        }
        return {
          text: text,
          value: value
        };
      });
    };
    var registerButtons$1 = function (editor) {
      editor.addButton('fontsizeselect', function () {
        var items = getFontSizeItems(editor);
        return {
          type: 'listbox',
          text: 'Font Sizes',
          tooltip: 'Font Sizes',
          values: items,
          fixedWidth: true,
          onPostRender: createFontSizeListBoxChangeHandler(editor, items),
          onclick: function (e) {
            if (e.control.settings.value) {
              editor.execCommand('FontSize', false, e.control.settings.value);
            }
          }
        };
      });
    };
    var register$2 = function (editor) {
      registerButtons$1(editor);
    };
    var FontSizeSelect = { register: register$2 };

    var hideMenuObjects = function (editor, menu) {
      var count = menu.length;
      global$2.each(menu, function (item) {
        if (item.menu) {
          item.hidden = hideMenuObjects(editor, item.menu) === 0;
        }
        var formatName = item.format;
        if (formatName) {
          item.hidden = !editor.formatter.canApply(formatName);
        }
        if (item.hidden) {
          count--;
        }
      });
      return count;
    };
    var hideFormatMenuItems = function (editor, menu) {
      var count = menu.items().length;
      menu.items().each(function (item) {
        if (item.menu) {
          item.visible(hideFormatMenuItems(editor, item.menu) > 0);
        }
        if (!item.menu && item.settings.menu) {
          item.visible(hideMenuObjects(editor, item.settings.menu) > 0);
        }
        var formatName = item.settings.format;
        if (formatName) {
          item.visible(editor.formatter.canApply(formatName));
        }
        if (!item.visible()) {
          count--;
        }
      });
      return count;
    };
    var createFormatMenu = function (editor) {
      var count = 0;
      var newFormats = [];
      var defaultStyleFormats = [
        {
          title: 'Headings',
          items: [
            {
              title: 'Heading 1',
              format: 'h1'
            },
            {
              title: 'Heading 2',
              format: 'h2'
            },
            {
              title: 'Heading 3',
              format: 'h3'
            },
            {
              title: 'Heading 4',
              format: 'h4'
            },
            {
              title: 'Heading 5',
              format: 'h5'
            },
            {
              title: 'Heading 6',
              format: 'h6'
            }
          ]
        },
        {
          title: 'Inline',
          items: [
            {
              title: 'Bold',
              icon: 'bold',
              format: 'bold'
            },
            {
              title: 'Italic',
              icon: 'italic',
              format: 'italic'
            },
            {
              title: 'Underline',
              icon: 'underline',
              format: 'underline'
            },
            {
              title: 'Strikethrough',
              icon: 'strikethrough',
              format: 'strikethrough'
            },
            {
              title: 'Superscript',
              icon: 'superscript',
              format: 'superscript'
            },
            {
              title: 'Subscript',
              icon: 'subscript',
              format: 'subscript'
            },
            {
              title: 'Code',
              icon: 'code',
              format: 'code'
            }
          ]
        },
        {
          title: 'Blocks',
          items: [
            {
              title: 'Paragraph',
              format: 'p'
            },
            {
              title: 'Blockquote',
              format: 'blockquote'
            },
            {
              title: 'Div',
              format: 'div'
            },
            {
              title: 'Pre',
              format: 'pre'
            }
          ]
        },
        {
          title: 'Alignment',
          items: [
            {
              title: 'Left',
              icon: 'alignleft',
              format: 'alignleft'
            },
            {
              title: 'Center',
              icon: 'aligncenter',
              format: 'aligncenter'
            },
            {
              title: 'Right',
              icon: 'alignright',
              format: 'alignright'
            },
            {
              title: 'Justify',
              icon: 'alignjustify',
              format: 'alignjustify'
            }
          ]
        }
      ];
      var createMenu = function (formats) {
        var menu = [];
        if (!formats) {
          return;
        }
        global$2.each(formats, function (format) {
          var menuItem = {
            text: format.title,
            icon: format.icon
          };
          if (format.items) {
            menuItem.menu = createMenu(format.items);
          } else {
            var formatName = format.format || 'custom' + count++;
            if (!format.format) {
              format.name = formatName;
              newFormats.push(format);
            }
            menuItem.format = formatName;
            menuItem.cmd = format.cmd;
          }
          menu.push(menuItem);
        });
        return menu;
      };
      var createStylesMenu = function () {
        var menu;
        if (editor.settings.style_formats_merge) {
          if (editor.settings.style_formats) {
            menu = createMenu(defaultStyleFormats.concat(editor.settings.style_formats));
          } else {
            menu = createMenu(defaultStyleFormats);
          }
        } else {
          menu = createMenu(editor.settings.style_formats || defaultStyleFormats);
        }
        return menu;
      };
      editor.on('init', function () {
        global$2.each(newFormats, function (format) {
          editor.formatter.register(format.name, format);
        });
      });
      return {
        type: 'menu',
        items: createStylesMenu(),
        onPostRender: function (e) {
          editor.fire('renderFormatsMenu', { control: e.control });
        },
        itemDefaults: {
          preview: true,
          textStyle: function () {
            if (this.settings.format) {
              return editor.formatter.getCssText(this.settings.format);
            }
          },
          onPostRender: function () {
            var self = this;
            self.parent().on('show', function () {
              var formatName, command;
              formatName = self.settings.format;
              if (formatName) {
                self.disabled(!editor.formatter.canApply(formatName));
                self.active(editor.formatter.match(formatName));
              }
              command = self.settings.cmd;
              if (command) {
                self.active(editor.queryCommandState(command));
              }
            });
          },
          onclick: function () {
            if (this.settings.format) {
              toggleFormat(editor, this.settings.format)();
            }
            if (this.settings.cmd) {
              editor.execCommand(this.settings.cmd);
            }
          }
        }
      };
    };
    var registerMenuItems = function (editor, formatMenu) {
      editor.addMenuItem('formats', {
        text: 'Formats',
        menu: formatMenu
      });
    };
    var registerButtons$2 = function (editor, formatMenu) {
      editor.addButton('styleselect', {
        type: 'menubutton',
        text: 'Formats',
        menu: formatMenu,
        onShowMenu: function () {
          if (editor.settings.style_formats_autohide) {
            hideFormatMenuItems(editor, this.menu);
          }
        }
      });
    };
    var register$3 = function (editor) {
      var formatMenu = createFormatMenu(editor);
      registerMenuItems(editor, formatMenu);
      registerButtons$2(editor, formatMenu);
    };
    var Formats = { register: register$3 };

    var defaultBlocks = 'Paragraph=p;' + 'Heading 1=h1;' + 'Heading 2=h2;' + 'Heading 3=h3;' + 'Heading 4=h4;' + 'Heading 5=h5;' + 'Heading 6=h6;' + 'Preformatted=pre';
    var createFormats$1 = function (formats) {
      formats = formats.replace(/;$/, '').split(';');
      var i = formats.length;
      while (i--) {
        formats[i] = formats[i].split('=');
      }
      return formats;
    };
    var createListBoxChangeHandler = function (editor, items, formatName) {
      return function () {
        var self = this;
        editor.on('nodeChange', function (e) {
          var formatter = editor.formatter;
          var value = null;
          global$2.each(e.parents, function (node) {
            global$2.each(items, function (item) {
              if (formatName) {
                if (formatter.matchNode(node, formatName, { value: item.value })) {
                  value = item.value;
                }
              } else {
                if (formatter.matchNode(node, item.value)) {
                  value = item.value;
                }
              }
              if (value) {
                return false;
              }
            });
            if (value) {
              return false;
            }
          });
          self.value(value);
        });
      };
    };
    var lazyFormatSelectBoxItems = function (editor, blocks) {
      return function () {
        var items = [];
        global$2.each(blocks, function (block) {
          items.push({
            text: block[0],
            value: block[1],
            textStyle: function () {
              return editor.formatter.getCssText(block[1]);
            }
          });
        });
        return {
          type: 'listbox',
          text: blocks[0][0],
          values: items,
          fixedWidth: true,
          onselect: function (e) {
            if (e.control) {
              var fmt = e.control.value();
              toggleFormat(editor, fmt)();
            }
          },
          onPostRender: createListBoxChangeHandler(editor, items)
        };
      };
    };
    var buildMenuItems = function (editor, blocks) {
      return global$2.map(blocks, function (block) {
        return {
          text: block[0],
          onclick: toggleFormat(editor, block[1]),
          textStyle: function () {
            return editor.formatter.getCssText(block[1]);
          }
        };
      });
    };
    var register$4 = function (editor) {
      var blocks = createFormats$1(editor.settings.block_formats || defaultBlocks);
      editor.addMenuItem('blockformats', {
        text: 'Blocks',
        menu: buildMenuItems(editor, blocks)
      });
      editor.addButton('formatselect', lazyFormatSelectBoxItems(editor, blocks));
    };
    var FormatSelect = { register: register$4 };

    var createCustomMenuItems = function (editor, names) {
      var items, nameList;
      if (typeof names === 'string') {
        nameList = names.split(' ');
      } else if (global$2.isArray(names)) {
        return flatten(global$2.map(names, function (names) {
          return createCustomMenuItems(editor, names);
        }));
      }
      items = global$2.grep(nameList, function (name) {
        return name === '|' || name in editor.menuItems;
      });
      return global$2.map(items, function (name) {
        return name === '|' ? { text: '-' } : editor.menuItems[name];
      });
    };
    var isSeparator$1 = function (menuItem) {
      return menuItem && menuItem.text === '-';
    };
    var trimMenuItems = function (menuItems) {
      var menuItems2 = filter(menuItems, function (menuItem, i, menuItems) {
        return !isSeparator$1(menuItem) || !isSeparator$1(menuItems[i - 1]);
      });
      return filter(menuItems2, function (menuItem, i, menuItems) {
        return !isSeparator$1(menuItem) || i > 0 && i < menuItems.length - 1;
      });
    };
    var createContextMenuItems = function (editor, context) {
      var outputMenuItems = [{ text: '-' }];
      var menuItems = global$2.grep(editor.menuItems, function (menuItem) {
        return menuItem.context === context;
      });
      global$2.each(menuItems, function (menuItem) {
        if (menuItem.separator === 'before') {
          outputMenuItems.push({ text: '|' });
        }
        if (menuItem.prependToContext) {
          outputMenuItems.unshift(menuItem);
        } else {
          outputMenuItems.push(menuItem);
        }
        if (menuItem.separator === 'after') {
          outputMenuItems.push({ text: '|' });
        }
      });
      return outputMenuItems;
    };
    var createInsertMenu = function (editor) {
      var insertButtonItems = editor.settings.insert_button_items;
      if (insertButtonItems) {
        return trimMenuItems(createCustomMenuItems(editor, insertButtonItems));
      } else {
        return trimMenuItems(createContextMenuItems(editor, 'insert'));
      }
    };
    var registerButtons$3 = function (editor) {
      editor.addButton('insert', {
        type: 'menubutton',
        icon: 'insert',
        menu: [],
        oncreatemenu: function () {
          this.menu.add(createInsertMenu(editor));
          this.menu.renderNew();
        }
      });
    };
    var register$5 = function (editor) {
      registerButtons$3(editor);
    };
    var InsertButton = { register: register$5 };

    var registerFormatButtons = function (editor) {
      global$2.each({
        bold: 'Bold',
        italic: 'Italic',
        underline: 'Underline',
        strikethrough: 'Strikethrough',
        subscript: 'Subscript',
        superscript: 'Superscript'
      }, function (text, name) {
        editor.addButton(name, {
          active: false,
          tooltip: text,
          onPostRender: postRenderFormatToggle(editor, name),
          onclick: toggleFormat(editor, name)
        });
      });
    };
    var registerCommandButtons = function (editor) {
      global$2.each({
        outdent: [
          'Decrease indent',
          'Outdent'
        ],
        indent: [
          'Increase indent',
          'Indent'
        ],
        cut: [
          'Cut',
          'Cut'
        ],
        copy: [
          'Copy',
          'Copy'
        ],
        paste: [
          'Paste',
          'Paste'
        ],
        help: [
          'Help',
          'mceHelp'
        ],
        selectall: [
          'Select all',
          'SelectAll'
        ],
        visualaid: [
          'Visual aids',
          'mceToggleVisualAid'
        ],
        newdocument: [
          'New document',
          'mceNewDocument'
        ],
        removeformat: [
          'Clear formatting',
          'RemoveFormat'
        ],
        remove: [
          'Remove',
          'Delete'
        ]
      }, function (item, name) {
        editor.addButton(name, {
          tooltip: item[0],
          cmd: item[1]
        });
      });
    };
    var registerCommandToggleButtons = function (editor) {
      global$2.each({
        blockquote: [
          'Blockquote',
          'mceBlockQuote'
        ],
        subscript: [
          'Subscript',
          'Subscript'
        ],
        superscript: [
          'Superscript',
          'Superscript'
        ]
      }, function (item, name) {
        editor.addButton(name, {
          active: false,
          tooltip: item[0],
          cmd: item[1],
          onPostRender: postRenderFormatToggle(editor, name)
        });
      });
    };
    var registerButtons$4 = function (editor) {
      registerFormatButtons(editor);
      registerCommandButtons(editor);
      registerCommandToggleButtons(editor);
    };
    var registerMenuItems$1 = function (editor) {
      global$2.each({
        bold: [
          'Bold',
          'Bold',
          'Meta+B'
        ],
        italic: [
          'Italic',
          'Italic',
          'Meta+I'
        ],
        underline: [
          'Underline',
          'Underline',
          'Meta+U'
        ],
        strikethrough: [
          'Strikethrough',
          'Strikethrough'
        ],
        subscript: [
          'Subscript',
          'Subscript'
        ],
        superscript: [
          'Superscript',
          'Superscript'
        ],
        removeformat: [
          'Clear formatting',
          'RemoveFormat'
        ],
        newdocument: [
          'New document',
          'mceNewDocument'
        ],
        cut: [
          'Cut',
          'Cut',
          'Meta+X'
        ],
        copy: [
          'Copy',
          'Copy',
          'Meta+C'
        ],
        paste: [
          'Paste',
          'Paste',
          'Meta+V'
        ],
        selectall: [
          'Select all',
          'SelectAll',
          'Meta+A'
        ]
      }, function (item, name) {
        editor.addMenuItem(name, {
          text: item[0],
          icon: name,
          shortcut: item[2],
          cmd: item[1]
        });
      });
      editor.addMenuItem('codeformat', {
        text: 'Code',
        icon: 'code',
        onclick: toggleFormat(editor, 'code')
      });
    };
    var register$6 = function (editor) {
      registerButtons$4(editor);
      registerMenuItems$1(editor);
    };
    var SimpleControls = { register: register$6 };

    var toggleUndoRedoState = function (editor, type) {
      return function () {
        var self = this;
        var checkState = function () {
          var typeFn = type === 'redo' ? 'hasRedo' : 'hasUndo';
          return editor.undoManager ? editor.undoManager[typeFn]() : false;
        };
        self.disabled(!checkState());
        editor.on('Undo Redo AddUndo TypingUndo ClearUndos SwitchMode', function () {
          self.disabled(editor.readonly || !checkState());
        });
      };
    };
    var registerMenuItems$2 = function (editor) {
      editor.addMenuItem('undo', {
        text: 'Undo',
        icon: 'undo',
        shortcut: 'Meta+Z',
        onPostRender: toggleUndoRedoState(editor, 'undo'),
        cmd: 'undo'
      });
      editor.addMenuItem('redo', {
        text: 'Redo',
        icon: 'redo',
        shortcut: 'Meta+Y',
        onPostRender: toggleUndoRedoState(editor, 'redo'),
        cmd: 'redo'
      });
    };
    var registerButtons$5 = function (editor) {
      editor.addButton('undo', {
        tooltip: 'Undo',
        onPostRender: toggleUndoRedoState(editor, 'undo'),
        cmd: 'undo'
      });
      editor.addButton('redo', {
        tooltip: 'Redo',
        onPostRender: toggleUndoRedoState(editor, 'redo'),
        cmd: 'redo'
      });
    };
    var register$7 = function (editor) {
      registerMenuItems$2(editor);
      registerButtons$5(editor);
    };
    var UndoRedo = { register: register$7 };

    var toggleVisualAidState = function (editor) {
      return function () {
        var self = this;
        editor.on('VisualAid', function (e) {
          self.active(e.hasVisual);
        });
        self.active(editor.hasVisual);
      };
    };
    var registerMenuItems$3 = function (editor) {
      editor.addMenuItem('visualaid', {
        text: 'Visual aids',
        selectable: true,
        onPostRender: toggleVisualAidState(editor),
        cmd: 'mceToggleVisualAid'
      });
    };
    var register$8 = function (editor) {
      registerMenuItems$3(editor);
    };
    var VisualAid = { register: register$8 };

    var setupEnvironment = function () {
      Widget.tooltips = !global$8.iOS;
      Control$1.translate = function (text) {
        return global$1.translate(text);
      };
    };
    var setupUiContainer = function (editor) {
      if (editor.settings.ui_container) {
        global$8.container = descendant$1(Element$$1.fromDom(document.body), editor.settings.ui_container).fold(constant(null), function (elm) {
          return elm.dom();
        });
      }
    };
    var setupRtlMode = function (editor) {
      if (editor.rtl) {
        Control$1.rtl = true;
      }
    };
    var setupHideFloatPanels = function (editor) {
      editor.on('mousedown progressstate', function () {
        FloatPanel.hideAll();
      });
    };
    var setup$1 = function (editor) {
      setupRtlMode(editor);
      setupHideFloatPanels(editor);
      setupUiContainer(editor);
      setupEnvironment();
      FormatSelect.register(editor);
      Align.register(editor);
      SimpleControls.register(editor);
      UndoRedo.register(editor);
      FontSizeSelect.register(editor);
      FontSelect.register(editor);
      Formats.register(editor);
      VisualAid.register(editor);
      InsertButton.register(editor);
    };
    var FormatControls = { setup: setup$1 };

    var GridLayout = AbsoluteLayout.extend({
      recalc: function (container) {
        var settings, rows, cols, items, contLayoutRect, width, height, rect, ctrlLayoutRect, ctrl, x, y, posX, posY, ctrlSettings, contPaddingBox, align, spacingH, spacingV, alignH, alignV, maxX, maxY;
        var colWidths = [];
        var rowHeights = [];
        var ctrlMinWidth, ctrlMinHeight, availableWidth, availableHeight, reverseRows, idx;
        settings = container.settings;
        items = container.items().filter(':visible');
        contLayoutRect = container.layoutRect();
        cols = settings.columns || Math.ceil(Math.sqrt(items.length));
        rows = Math.ceil(items.length / cols);
        spacingH = settings.spacingH || settings.spacing || 0;
        spacingV = settings.spacingV || settings.spacing || 0;
        alignH = settings.alignH || settings.align;
        alignV = settings.alignV || settings.align;
        contPaddingBox = container.paddingBox;
        reverseRows = 'reverseRows' in settings ? settings.reverseRows : container.isRtl();
        if (alignH && typeof alignH === 'string') {
          alignH = [alignH];
        }
        if (alignV && typeof alignV === 'string') {
          alignV = [alignV];
        }
        for (x = 0; x < cols; x++) {
          colWidths.push(0);
        }
        for (y = 0; y < rows; y++) {
          rowHeights.push(0);
        }
        for (y = 0; y < rows; y++) {
          for (x = 0; x < cols; x++) {
            ctrl = items[y * cols + x];
            if (!ctrl) {
              break;
            }
            ctrlLayoutRect = ctrl.layoutRect();
            ctrlMinWidth = ctrlLayoutRect.minW;
            ctrlMinHeight = ctrlLayoutRect.minH;
            colWidths[x] = ctrlMinWidth > colWidths[x] ? ctrlMinWidth : colWidths[x];
            rowHeights[y] = ctrlMinHeight > rowHeights[y] ? ctrlMinHeight : rowHeights[y];
          }
        }
        availableWidth = contLayoutRect.innerW - contPaddingBox.left - contPaddingBox.right;
        for (maxX = 0, x = 0; x < cols; x++) {
          maxX += colWidths[x] + (x > 0 ? spacingH : 0);
          availableWidth -= (x > 0 ? spacingH : 0) + colWidths[x];
        }
        availableHeight = contLayoutRect.innerH - contPaddingBox.top - contPaddingBox.bottom;
        for (maxY = 0, y = 0; y < rows; y++) {
          maxY += rowHeights[y] + (y > 0 ? spacingV : 0);
          availableHeight -= (y > 0 ? spacingV : 0) + rowHeights[y];
        }
        maxX += contPaddingBox.left + contPaddingBox.right;
        maxY += contPaddingBox.top + contPaddingBox.bottom;
        rect = {};
        rect.minW = maxX + (contLayoutRect.w - contLayoutRect.innerW);
        rect.minH = maxY + (contLayoutRect.h - contLayoutRect.innerH);
        rect.contentW = rect.minW - contLayoutRect.deltaW;
        rect.contentH = rect.minH - contLayoutRect.deltaH;
        rect.minW = Math.min(rect.minW, contLayoutRect.maxW);
        rect.minH = Math.min(rect.minH, contLayoutRect.maxH);
        rect.minW = Math.max(rect.minW, contLayoutRect.startMinWidth);
        rect.minH = Math.max(rect.minH, contLayoutRect.startMinHeight);
        if (contLayoutRect.autoResize && (rect.minW !== contLayoutRect.minW || rect.minH !== contLayoutRect.minH)) {
          rect.w = rect.minW;
          rect.h = rect.minH;
          container.layoutRect(rect);
          this.recalc(container);
          if (container._lastRect === null) {
            var parentCtrl = container.parent();
            if (parentCtrl) {
              parentCtrl._lastRect = null;
              parentCtrl.recalc();
            }
          }
          return;
        }
        if (contLayoutRect.autoResize) {
          rect = container.layoutRect(rect);
          rect.contentW = rect.minW - contLayoutRect.deltaW;
          rect.contentH = rect.minH - contLayoutRect.deltaH;
        }
        var flexV;
        if (settings.packV === 'start') {
          flexV = 0;
        } else {
          flexV = availableHeight > 0 ? Math.floor(availableHeight / rows) : 0;
        }
        var totalFlex = 0;
        var flexWidths = settings.flexWidths;
        if (flexWidths) {
          for (x = 0; x < flexWidths.length; x++) {
            totalFlex += flexWidths[x];
          }
        } else {
          totalFlex = cols;
        }
        var ratio = availableWidth / totalFlex;
        for (x = 0; x < cols; x++) {
          colWidths[x] += flexWidths ? flexWidths[x] * ratio : ratio;
        }
        posY = contPaddingBox.top;
        for (y = 0; y < rows; y++) {
          posX = contPaddingBox.left;
          height = rowHeights[y] + flexV;
          for (x = 0; x < cols; x++) {
            if (reverseRows) {
              idx = y * cols + cols - 1 - x;
            } else {
              idx = y * cols + x;
            }
            ctrl = items[idx];
            if (!ctrl) {
              break;
            }
            ctrlSettings = ctrl.settings;
            ctrlLayoutRect = ctrl.layoutRect();
            width = Math.max(colWidths[x], ctrlLayoutRect.startMinWidth);
            ctrlLayoutRect.x = posX;
            ctrlLayoutRect.y = posY;
            align = ctrlSettings.alignH || (alignH ? alignH[x] || alignH[0] : null);
            if (align === 'center') {
              ctrlLayoutRect.x = posX + width / 2 - ctrlLayoutRect.w / 2;
            } else if (align === 'right') {
              ctrlLayoutRect.x = posX + width - ctrlLayoutRect.w;
            } else if (align === 'stretch') {
              ctrlLayoutRect.w = width;
            }
            align = ctrlSettings.alignV || (alignV ? alignV[x] || alignV[0] : null);
            if (align === 'center') {
              ctrlLayoutRect.y = posY + height / 2 - ctrlLayoutRect.h / 2;
            } else if (align === 'bottom') {
              ctrlLayoutRect.y = posY + height - ctrlLayoutRect.h;
            } else if (align === 'stretch') {
              ctrlLayoutRect.h = height;
            }
            ctrl.layoutRect(ctrlLayoutRect);
            posX += width + spacingH;
            if (ctrl.recalc) {
              ctrl.recalc();
            }
          }
          posY += height + spacingV;
        }
      }
    });

    var Iframe$1 = Widget.extend({
      renderHtml: function () {
        var self = this;
        self.classes.add('iframe');
        self.canFocus = false;
        return '<iframe id="' + self._id + '" class="' + self.classes + '" tabindex="-1" src="' + (self.settings.url || 'javascript:\'\'') + '" frameborder="0"></iframe>';
      },
      src: function (src) {
        this.getEl().src = src;
      },
      html: function (html, callback) {
        var self = this, body = this.getEl().contentWindow.document.body;
        if (!body) {
          global$7.setTimeout(function () {
            self.html(html);
          });
        } else {
          body.innerHTML = html;
          if (callback) {
            callback();
          }
        }
        return this;
      }
    });

    var InfoBox = Widget.extend({
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.classes.add('widget').add('infobox');
        self.canFocus = false;
      },
      severity: function (level) {
        this.classes.remove('error');
        this.classes.remove('warning');
        this.classes.remove('success');
        this.classes.add(level);
      },
      help: function (state) {
        this.state.set('help', state);
      },
      renderHtml: function () {
        var self = this, prefix = self.classPrefix;
        return '<div id="' + self._id + '" class="' + self.classes + '">' + '<div id="' + self._id + '-body">' + self.encode(self.state.get('text')) + '<button role="button" tabindex="-1">' + '<i class="' + prefix + 'ico ' + prefix + 'i-help"></i>' + '</button>' + '</div>' + '</div>';
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:text', function (e) {
          self.getEl('body').firstChild.data = self.encode(e.value);
          if (self.state.get('rendered')) {
            self.updateLayoutRect();
          }
        });
        self.state.on('change:help', function (e) {
          self.classes.toggle('has-help', e.value);
          if (self.state.get('rendered')) {
            self.updateLayoutRect();
          }
        });
        return self._super();
      }
    });

    var Label = Widget.extend({
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.classes.add('widget').add('label');
        self.canFocus = false;
        if (settings.multiline) {
          self.classes.add('autoscroll');
        }
        if (settings.strong) {
          self.classes.add('strong');
        }
      },
      initLayoutRect: function () {
        var self = this, layoutRect = self._super();
        if (self.settings.multiline) {
          var size = funcs.getSize(self.getEl());
          if (size.width > layoutRect.maxW) {
            layoutRect.minW = layoutRect.maxW;
            self.classes.add('multiline');
          }
          self.getEl().style.width = layoutRect.minW + 'px';
          layoutRect.startMinH = layoutRect.h = layoutRect.minH = Math.min(layoutRect.maxH, funcs.getSize(self.getEl()).height);
        }
        return layoutRect;
      },
      repaint: function () {
        var self = this;
        if (!self.settings.multiline) {
          self.getEl().style.lineHeight = self.layoutRect().h + 'px';
        }
        return self._super();
      },
      severity: function (level) {
        this.classes.remove('error');
        this.classes.remove('warning');
        this.classes.remove('success');
        this.classes.add(level);
      },
      renderHtml: function () {
        var self = this;
        var targetCtrl, forName, forId = self.settings.forId;
        var text = self.settings.html ? self.settings.html : self.encode(self.state.get('text'));
        if (!forId && (forName = self.settings.forName)) {
          targetCtrl = self.getRoot().find('#' + forName)[0];
          if (targetCtrl) {
            forId = targetCtrl._id;
          }
        }
        if (forId) {
          return '<label id="' + self._id + '" class="' + self.classes + '"' + (forId ? ' for="' + forId + '"' : '') + '>' + text + '</label>';
        }
        return '<span id="' + self._id + '" class="' + self.classes + '">' + text + '</span>';
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:text', function (e) {
          self.innerHtml(self.encode(e.value));
          if (self.state.get('rendered')) {
            self.updateLayoutRect();
          }
        });
        return self._super();
      }
    });

    var Toolbar$1 = Container.extend({
      Defaults: {
        role: 'toolbar',
        layout: 'flow'
      },
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.classes.add('toolbar');
      },
      postRender: function () {
        var self = this;
        self.items().each(function (ctrl) {
          ctrl.classes.add('toolbar-item');
        });
        return self._super();
      }
    });

    var MenuBar = Toolbar$1.extend({
      Defaults: {
        role: 'menubar',
        containerCls: 'menubar',
        ariaRoot: true,
        defaults: { type: 'menubutton' }
      }
    });

    function isChildOf$1(node, parent$$1) {
      while (node) {
        if (parent$$1 === node) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }
    var MenuButton = Button.extend({
      init: function (settings) {
        var self$$1 = this;
        self$$1._renderOpen = true;
        self$$1._super(settings);
        settings = self$$1.settings;
        self$$1.classes.add('menubtn');
        if (settings.fixedWidth) {
          self$$1.classes.add('fixed-width');
        }
        self$$1.aria('haspopup', true);
        self$$1.state.set('menu', settings.menu || self$$1.render());
      },
      showMenu: function (toggle) {
        var self$$1 = this;
        var menu;
        if (self$$1.menu && self$$1.menu.visible() && toggle !== false) {
          return self$$1.hideMenu();
        }
        if (!self$$1.menu) {
          menu = self$$1.state.get('menu') || [];
          self$$1.classes.add('opened');
          if (menu.length) {
            menu = {
              type: 'menu',
              animate: true,
              items: menu
            };
          } else {
            menu.type = menu.type || 'menu';
            menu.animate = true;
          }
          if (!menu.renderTo) {
            self$$1.menu = global$4.create(menu).parent(self$$1).renderTo();
          } else {
            self$$1.menu = menu.parent(self$$1).show().renderTo();
          }
          self$$1.fire('createmenu');
          self$$1.menu.reflow();
          self$$1.menu.on('cancel', function (e) {
            if (e.control.parent() === self$$1.menu) {
              e.stopPropagation();
              self$$1.focus();
              self$$1.hideMenu();
            }
          });
          self$$1.menu.on('select', function () {
            self$$1.focus();
          });
          self$$1.menu.on('show hide', function (e) {
            if (e.type === 'hide' && e.control.parent() === self$$1) {
              self$$1.classes.remove('opened-under');
            }
            if (e.control === self$$1.menu) {
              self$$1.activeMenu(e.type === 'show');
              self$$1.classes.toggle('opened', e.type === 'show');
            }
            self$$1.aria('expanded', e.type === 'show');
          }).fire('show');
        }
        self$$1.menu.show();
        self$$1.menu.layoutRect({ w: self$$1.layoutRect().w });
        self$$1.menu.repaint();
        self$$1.menu.moveRel(self$$1.getEl(), self$$1.isRtl() ? [
          'br-tr',
          'tr-br'
        ] : [
          'bl-tl',
          'tl-bl'
        ]);
        var menuLayoutRect = self$$1.menu.layoutRect();
        var selfBottom = self$$1.$el.offset().top + self$$1.layoutRect().h;
        if (selfBottom > menuLayoutRect.y && selfBottom < menuLayoutRect.y + menuLayoutRect.h) {
          self$$1.classes.add('opened-under');
        }
        self$$1.fire('showmenu');
      },
      hideMenu: function () {
        var self$$1 = this;
        if (self$$1.menu) {
          self$$1.menu.items().each(function (item) {
            if (item.hideMenu) {
              item.hideMenu();
            }
          });
          self$$1.menu.hide();
        }
      },
      activeMenu: function (state) {
        this.classes.toggle('active', state);
      },
      renderHtml: function () {
        var self$$1 = this, id = self$$1._id, prefix = self$$1.classPrefix;
        var icon = self$$1.settings.icon, image;
        var text = self$$1.state.get('text');
        var textHtml = '';
        image = self$$1.settings.image;
        if (image) {
          icon = 'none';
          if (typeof image !== 'string') {
            image = window.getSelection ? image[0] : image[1];
          }
          image = ' style="background-image: url(\'' + image + '\')"';
        } else {
          image = '';
        }
        if (text) {
          self$$1.classes.add('btn-has-text');
          textHtml = '<span class="' + prefix + 'txt">' + self$$1.encode(text) + '</span>';
        }
        icon = self$$1.settings.icon ? prefix + 'ico ' + prefix + 'i-' + icon : '';
        self$$1.aria('role', self$$1.parent() instanceof MenuBar ? 'menuitem' : 'button');
        return '<div id="' + id + '" class="' + self$$1.classes + '" tabindex="-1" aria-labelledby="' + id + '">' + '<button id="' + id + '-open" role="presentation" type="button" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + textHtml + ' <i class="' + prefix + 'caret"></i>' + '</button>' + '</div>';
      },
      postRender: function () {
        var self$$1 = this;
        self$$1.on('click', function (e) {
          if (e.control === self$$1 && isChildOf$1(e.target, self$$1.getEl())) {
            self$$1.focus();
            self$$1.showMenu(!e.aria);
            if (e.aria) {
              self$$1.menu.items().filter(':visible')[0].focus();
            }
          }
        });
        self$$1.on('mouseenter', function (e) {
          var overCtrl = e.control;
          var parent$$1 = self$$1.parent();
          var hasVisibleSiblingMenu;
          if (overCtrl && parent$$1 && overCtrl instanceof MenuButton && overCtrl.parent() === parent$$1) {
            parent$$1.items().filter('MenuButton').each(function (ctrl) {
              if (ctrl.hideMenu && ctrl !== overCtrl) {
                if (ctrl.menu && ctrl.menu.visible()) {
                  hasVisibleSiblingMenu = true;
                }
                ctrl.hideMenu();
              }
            });
            if (hasVisibleSiblingMenu) {
              overCtrl.focus();
              overCtrl.showMenu();
            }
          }
        });
        return self$$1._super();
      },
      bindStates: function () {
        var self$$1 = this;
        self$$1.state.on('change:menu', function () {
          if (self$$1.menu) {
            self$$1.menu.remove();
          }
          self$$1.menu = null;
        });
        return self$$1._super();
      },
      remove: function () {
        this._super();
        if (this.menu) {
          this.menu.remove();
        }
      }
    });

    var Menu = FloatPanel.extend({
      Defaults: {
        defaultType: 'menuitem',
        border: 1,
        layout: 'stack',
        role: 'application',
        bodyRole: 'menu',
        ariaRoot: true
      },
      init: function (settings) {
        var self = this;
        settings.autohide = true;
        settings.constrainToViewport = true;
        if (typeof settings.items === 'function') {
          settings.itemsFactory = settings.items;
          settings.items = [];
        }
        if (settings.itemDefaults) {
          var items = settings.items;
          var i = items.length;
          while (i--) {
            items[i] = global$2.extend({}, settings.itemDefaults, items[i]);
          }
        }
        self._super(settings);
        self.classes.add('menu');
        if (settings.animate && global$8.ie !== 11) {
          self.classes.add('animate');
        }
      },
      repaint: function () {
        this.classes.toggle('menu-align', true);
        this._super();
        this.getEl().style.height = '';
        this.getEl('body').style.height = '';
        return this;
      },
      cancel: function () {
        var self = this;
        self.hideAll();
        self.fire('select');
      },
      load: function () {
        var self = this;
        var time, factory;
        function hideThrobber() {
          if (self.throbber) {
            self.throbber.hide();
            self.throbber = null;
          }
        }
        factory = self.settings.itemsFactory;
        if (!factory) {
          return;
        }
        if (!self.throbber) {
          self.throbber = new Throbber(self.getEl('body'), true);
          if (self.items().length === 0) {
            self.throbber.show();
            self.fire('loading');
          } else {
            self.throbber.show(100, function () {
              self.items().remove();
              self.fire('loading');
            });
          }
          self.on('hide close', hideThrobber);
        }
        self.requestTime = time = new Date().getTime();
        self.settings.itemsFactory(function (items) {
          if (items.length === 0) {
            self.hide();
            return;
          }
          if (self.requestTime !== time) {
            return;
          }
          self.getEl().style.width = '';
          self.getEl('body').style.width = '';
          hideThrobber();
          self.items().remove();
          self.getEl('body').innerHTML = '';
          self.add(items);
          self.renderNew();
          self.fire('loaded');
        });
      },
      hideAll: function () {
        var self = this;
        this.find('menuitem').exec('hideMenu');
        return self._super();
      },
      preRender: function () {
        var self = this;
        self.items().each(function (ctrl) {
          var settings = ctrl.settings;
          if (settings.icon || settings.image || settings.selectable) {
            self._hasIcons = true;
            return false;
          }
        });
        if (self.settings.itemsFactory) {
          self.on('postrender', function () {
            if (self.settings.itemsFactory) {
              self.load();
            }
          });
        }
        self.on('show hide', function (e) {
          if (e.control === self) {
            if (e.type === 'show') {
              global$7.setTimeout(function () {
                self.classes.add('in');
              }, 0);
            } else {
              self.classes.remove('in');
            }
          }
        });
        return self._super();
      }
    });

    var ListBox = MenuButton.extend({
      init: function (settings) {
        var self = this;
        var values, selected, selectedText, lastItemCtrl;
        function setSelected(menuValues) {
          for (var i = 0; i < menuValues.length; i++) {
            selected = menuValues[i].selected || settings.value === menuValues[i].value;
            if (selected) {
              selectedText = selectedText || menuValues[i].text;
              self.state.set('value', menuValues[i].value);
              return true;
            }
            if (menuValues[i].menu) {
              if (setSelected(menuValues[i].menu)) {
                return true;
              }
            }
          }
        }
        self._super(settings);
        settings = self.settings;
        self._values = values = settings.values;
        if (values) {
          if (typeof settings.value !== 'undefined') {
            setSelected(values);
          }
          if (!selected && values.length > 0) {
            selectedText = values[0].text;
            self.state.set('value', values[0].value);
          }
          self.state.set('menu', values);
        }
        self.state.set('text', settings.text || selectedText);
        self.classes.add('listbox');
        self.on('select', function (e) {
          var ctrl = e.control;
          if (lastItemCtrl) {
            e.lastControl = lastItemCtrl;
          }
          if (settings.multiple) {
            ctrl.active(!ctrl.active());
          } else {
            self.value(e.control.value());
          }
          lastItemCtrl = ctrl;
        });
      },
      value: function (value) {
        if (arguments.length === 0) {
          return this.state.get('value');
        }
        if (typeof value === 'undefined') {
          return this;
        }
        function valueExists(values) {
          return exists(values, function (a) {
            return a.menu ? valueExists(a.menu) : a.value === value;
          });
        }
        if (this.settings.values) {
          if (valueExists(this.settings.values)) {
            this.state.set('value', value);
          } else if (value === null) {
            this.state.set('value', null);
          }
        } else {
          this.state.set('value', value);
        }
        return this;
      },
      bindStates: function () {
        var self = this;
        function activateMenuItemsByValue(menu, value) {
          if (menu instanceof Menu) {
            menu.items().each(function (ctrl) {
              if (!ctrl.hasMenus()) {
                ctrl.active(ctrl.value() === value);
              }
            });
          }
        }
        function getSelectedItem(menuValues, value) {
          var selectedItem;
          if (!menuValues) {
            return;
          }
          for (var i = 0; i < menuValues.length; i++) {
            if (menuValues[i].value === value) {
              return menuValues[i];
            }
            if (menuValues[i].menu) {
              selectedItem = getSelectedItem(menuValues[i].menu, value);
              if (selectedItem) {
                return selectedItem;
              }
            }
          }
        }
        self.on('show', function (e) {
          activateMenuItemsByValue(e.control, self.value());
        });
        self.state.on('change:value', function (e) {
          var selectedItem = getSelectedItem(self.state.get('menu'), e.value);
          if (selectedItem) {
            self.text(selectedItem.text);
          } else {
            self.text(self.settings.text);
          }
        });
        return self._super();
      }
    });

    var toggleTextStyle = function (ctrl, state) {
      var textStyle = ctrl._textStyle;
      if (textStyle) {
        var textElm = ctrl.getEl('text');
        textElm.setAttribute('style', textStyle);
        if (state) {
          textElm.style.color = '';
          textElm.style.backgroundColor = '';
        }
      }
    };
    var MenuItem = Widget.extend({
      Defaults: {
        border: 0,
        role: 'menuitem'
      },
      init: function (settings) {
        var self = this;
        var text;
        self._super(settings);
        settings = self.settings;
        self.classes.add('menu-item');
        if (settings.menu) {
          self.classes.add('menu-item-expand');
        }
        if (settings.preview) {
          self.classes.add('menu-item-preview');
        }
        text = self.state.get('text');
        if (text === '-' || text === '|') {
          self.classes.add('menu-item-sep');
          self.aria('role', 'separator');
          self.state.set('text', '-');
        }
        if (settings.selectable) {
          self.aria('role', 'menuitemcheckbox');
          self.classes.add('menu-item-checkbox');
          settings.icon = 'selected';
        }
        if (!settings.preview && !settings.selectable) {
          self.classes.add('menu-item-normal');
        }
        self.on('mousedown', function (e) {
          e.preventDefault();
        });
        if (settings.menu && !settings.ariaHideMenu) {
          self.aria('haspopup', true);
        }
      },
      hasMenus: function () {
        return !!this.settings.menu;
      },
      showMenu: function () {
        var self = this;
        var settings = self.settings;
        var menu;
        var parent = self.parent();
        parent.items().each(function (ctrl) {
          if (ctrl !== self) {
            ctrl.hideMenu();
          }
        });
        if (settings.menu) {
          menu = self.menu;
          if (!menu) {
            menu = settings.menu;
            if (menu.length) {
              menu = {
                type: 'menu',
                items: menu
              };
            } else {
              menu.type = menu.type || 'menu';
            }
            if (parent.settings.itemDefaults) {
              menu.itemDefaults = parent.settings.itemDefaults;
            }
            menu = self.menu = global$4.create(menu).parent(self).renderTo();
            menu.reflow();
            menu.on('cancel', function (e) {
              e.stopPropagation();
              self.focus();
              menu.hide();
            });
            menu.on('show hide', function (e) {
              if (e.control.items) {
                e.control.items().each(function (ctrl) {
                  ctrl.active(ctrl.settings.selected);
                });
              }
            }).fire('show');
            menu.on('hide', function (e) {
              if (e.control === menu) {
                self.classes.remove('selected');
              }
            });
            menu.submenu = true;
          } else {
            menu.show();
          }
          menu._parentMenu = parent;
          menu.classes.add('menu-sub');
          var rel = menu.testMoveRel(self.getEl(), self.isRtl() ? [
            'tl-tr',
            'bl-br',
            'tr-tl',
            'br-bl'
          ] : [
            'tr-tl',
            'br-bl',
            'tl-tr',
            'bl-br'
          ]);
          menu.moveRel(self.getEl(), rel);
          menu.rel = rel;
          rel = 'menu-sub-' + rel;
          menu.classes.remove(menu._lastRel).add(rel);
          menu._lastRel = rel;
          self.classes.add('selected');
          self.aria('expanded', true);
        }
      },
      hideMenu: function () {
        var self = this;
        if (self.menu) {
          self.menu.items().each(function (item) {
            if (item.hideMenu) {
              item.hideMenu();
            }
          });
          self.menu.hide();
          self.aria('expanded', false);
        }
        return self;
      },
      renderHtml: function () {
        var self = this;
        var id = self._id;
        var settings = self.settings;
        var prefix = self.classPrefix;
        var text = self.state.get('text');
        var icon = self.settings.icon, image = '', shortcut = settings.shortcut;
        var url = self.encode(settings.url), iconHtml = '';
        function convertShortcut(shortcut) {
          var i, value, replace = {};
          if (global$8.mac) {
            replace = {
              alt: '&#x2325;',
              ctrl: '&#x2318;',
              shift: '&#x21E7;',
              meta: '&#x2318;'
            };
          } else {
            replace = { meta: 'Ctrl' };
          }
          shortcut = shortcut.split('+');
          for (i = 0; i < shortcut.length; i++) {
            value = replace[shortcut[i].toLowerCase()];
            if (value) {
              shortcut[i] = value;
            }
          }
          return shortcut.join('+');
        }
        function escapeRegExp(str) {
          return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        function markMatches(text) {
          var match = settings.match || '';
          return match ? text.replace(new RegExp(escapeRegExp(match), 'gi'), function (match) {
            return '!mce~match[' + match + ']mce~match!';
          }) : text;
        }
        function boldMatches(text) {
          return text.replace(new RegExp(escapeRegExp('!mce~match['), 'g'), '<b>').replace(new RegExp(escapeRegExp(']mce~match!'), 'g'), '</b>');
        }
        if (icon) {
          self.parent().classes.add('menu-has-icons');
        }
        if (settings.image) {
          image = ' style="background-image: url(\'' + settings.image + '\')"';
        }
        if (shortcut) {
          shortcut = convertShortcut(shortcut);
        }
        icon = prefix + 'ico ' + prefix + 'i-' + (self.settings.icon || 'none');
        iconHtml = text !== '-' ? '<i class="' + icon + '"' + image + '></i>\xA0' : '';
        text = boldMatches(self.encode(markMatches(text)));
        url = boldMatches(self.encode(markMatches(url)));
        return '<div id="' + id + '" class="' + self.classes + '" tabindex="-1">' + iconHtml + (text !== '-' ? '<span id="' + id + '-text" class="' + prefix + 'text">' + text + '</span>' : '') + (shortcut ? '<div id="' + id + '-shortcut" class="' + prefix + 'menu-shortcut">' + shortcut + '</div>' : '') + (settings.menu ? '<div class="' + prefix + 'caret"></div>' : '') + (url ? '<div class="' + prefix + 'menu-item-link">' + url + '</div>' : '') + '</div>';
      },
      postRender: function () {
        var self = this, settings = self.settings;
        var textStyle = settings.textStyle;
        if (typeof textStyle === 'function') {
          textStyle = textStyle.call(this);
        }
        if (textStyle) {
          var textElm = self.getEl('text');
          if (textElm) {
            textElm.setAttribute('style', textStyle);
            self._textStyle = textStyle;
          }
        }
        self.on('mouseenter click', function (e) {
          if (e.control === self) {
            if (!settings.menu && e.type === 'click') {
              self.fire('select');
              global$7.requestAnimationFrame(function () {
                self.parent().hideAll();
              });
            } else {
              self.showMenu();
              if (e.aria) {
                self.menu.focus(true);
              }
            }
          }
        });
        self._super();
        return self;
      },
      hover: function () {
        var self = this;
        self.parent().items().each(function (ctrl) {
          ctrl.classes.remove('selected');
        });
        self.classes.toggle('selected', true);
        return self;
      },
      active: function (state) {
        toggleTextStyle(this, state);
        if (typeof state !== 'undefined') {
          this.aria('checked', state);
        }
        return this._super(state);
      },
      remove: function () {
        this._super();
        if (this.menu) {
          this.menu.remove();
        }
      }
    });

    var Radio = Checkbox.extend({
      Defaults: {
        classes: 'radio',
        role: 'radio'
      }
    });

    var ResizeHandle = Widget.extend({
      renderHtml: function () {
        var self = this, prefix = self.classPrefix;
        self.classes.add('resizehandle');
        if (self.settings.direction === 'both') {
          self.classes.add('resizehandle-both');
        }
        self.canFocus = false;
        return '<div id="' + self._id + '" class="' + self.classes + '">' + '<i class="' + prefix + 'ico ' + prefix + 'i-resize"></i>' + '</div>';
      },
      postRender: function () {
        var self = this;
        self._super();
        self.resizeDragHelper = new DragHelper(this._id, {
          start: function () {
            self.fire('ResizeStart');
          },
          drag: function (e) {
            if (self.settings.direction !== 'both') {
              e.deltaX = 0;
            }
            self.fire('Resize', e);
          },
          stop: function () {
            self.fire('ResizeEnd');
          }
        });
      },
      remove: function () {
        if (this.resizeDragHelper) {
          this.resizeDragHelper.destroy();
        }
        return this._super();
      }
    });

    function createOptions(options) {
      var strOptions = '';
      if (options) {
        for (var i = 0; i < options.length; i++) {
          strOptions += '<option value="' + options[i] + '">' + options[i] + '</option>';
        }
      }
      return strOptions;
    }
    var SelectBox = Widget.extend({
      Defaults: {
        classes: 'selectbox',
        role: 'selectbox',
        options: []
      },
      init: function (settings) {
        var self = this;
        self._super(settings);
        if (self.settings.size) {
          self.size = self.settings.size;
        }
        if (self.settings.options) {
          self._options = self.settings.options;
        }
        self.on('keydown', function (e) {
          var rootControl;
          if (e.keyCode === 13) {
            e.preventDefault();
            self.parents().reverse().each(function (ctrl) {
              if (ctrl.toJSON) {
                rootControl = ctrl;
                return false;
              }
            });
            self.fire('submit', { data: rootControl.toJSON() });
          }
        });
      },
      options: function (state) {
        if (!arguments.length) {
          return this.state.get('options');
        }
        this.state.set('options', state);
        return this;
      },
      renderHtml: function () {
        var self = this;
        var options, size = '';
        options = createOptions(self._options);
        if (self.size) {
          size = ' size = "' + self.size + '"';
        }
        return '<select id="' + self._id + '" class="' + self.classes + '"' + size + '>' + options + '</select>';
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:options', function (e) {
          self.getEl().innerHTML = createOptions(e.value);
        });
        return self._super();
      }
    });

    function constrain(value, minVal, maxVal) {
      if (value < minVal) {
        value = minVal;
      }
      if (value > maxVal) {
        value = maxVal;
      }
      return value;
    }
    function setAriaProp(el, name, value) {
      el.setAttribute('aria-' + name, value);
    }
    function updateSliderHandle(ctrl, value) {
      var maxHandlePos, shortSizeName, sizeName, stylePosName, styleValue, handleEl;
      if (ctrl.settings.orientation === 'v') {
        stylePosName = 'top';
        sizeName = 'height';
        shortSizeName = 'h';
      } else {
        stylePosName = 'left';
        sizeName = 'width';
        shortSizeName = 'w';
      }
      handleEl = ctrl.getEl('handle');
      maxHandlePos = (ctrl.layoutRect()[shortSizeName] || 100) - funcs.getSize(handleEl)[sizeName];
      styleValue = maxHandlePos * ((value - ctrl._minValue) / (ctrl._maxValue - ctrl._minValue)) + 'px';
      handleEl.style[stylePosName] = styleValue;
      handleEl.style.height = ctrl.layoutRect().h + 'px';
      setAriaProp(handleEl, 'valuenow', value);
      setAriaProp(handleEl, 'valuetext', '' + ctrl.settings.previewFilter(value));
      setAriaProp(handleEl, 'valuemin', ctrl._minValue);
      setAriaProp(handleEl, 'valuemax', ctrl._maxValue);
    }
    var Slider = Widget.extend({
      init: function (settings) {
        var self = this;
        if (!settings.previewFilter) {
          settings.previewFilter = function (value) {
            return Math.round(value * 100) / 100;
          };
        }
        self._super(settings);
        self.classes.add('slider');
        if (settings.orientation === 'v') {
          self.classes.add('vertical');
        }
        self._minValue = isNumber(settings.minValue) ? settings.minValue : 0;
        self._maxValue = isNumber(settings.maxValue) ? settings.maxValue : 100;
        self._initValue = self.state.get('value');
      },
      renderHtml: function () {
        var self = this, id = self._id, prefix = self.classPrefix;
        return '<div id="' + id + '" class="' + self.classes + '">' + '<div id="' + id + '-handle" class="' + prefix + 'slider-handle" role="slider" tabindex="-1"></div>' + '</div>';
      },
      reset: function () {
        this.value(this._initValue).repaint();
      },
      postRender: function () {
        var self = this;
        var minValue, maxValue, screenCordName, stylePosName, sizeName, shortSizeName;
        function toFraction(min, max, val) {
          return (val + min) / (max - min);
        }
        function fromFraction(min, max, val) {
          return val * (max - min) - min;
        }
        function handleKeyboard(minValue, maxValue) {
          function alter(delta) {
            var value;
            value = self.value();
            value = fromFraction(minValue, maxValue, toFraction(minValue, maxValue, value) + delta * 0.05);
            value = constrain(value, minValue, maxValue);
            self.value(value);
            self.fire('dragstart', { value: value });
            self.fire('drag', { value: value });
            self.fire('dragend', { value: value });
          }
          self.on('keydown', function (e) {
            switch (e.keyCode) {
            case 37:
            case 38:
              alter(-1);
              break;
            case 39:
            case 40:
              alter(1);
              break;
            }
          });
        }
        function handleDrag(minValue, maxValue, handleEl) {
          var startPos, startHandlePos, maxHandlePos, handlePos, value;
          self._dragHelper = new DragHelper(self._id, {
            handle: self._id + '-handle',
            start: function (e) {
              startPos = e[screenCordName];
              startHandlePos = parseInt(self.getEl('handle').style[stylePosName], 10);
              maxHandlePos = (self.layoutRect()[shortSizeName] || 100) - funcs.getSize(handleEl)[sizeName];
              self.fire('dragstart', { value: value });
            },
            drag: function (e) {
              var delta = e[screenCordName] - startPos;
              handlePos = constrain(startHandlePos + delta, 0, maxHandlePos);
              handleEl.style[stylePosName] = handlePos + 'px';
              value = minValue + handlePos / maxHandlePos * (maxValue - minValue);
              self.value(value);
              self.tooltip().text('' + self.settings.previewFilter(value)).show().moveRel(handleEl, 'bc tc');
              self.fire('drag', { value: value });
            },
            stop: function () {
              self.tooltip().hide();
              self.fire('dragend', { value: value });
            }
          });
        }
        minValue = self._minValue;
        maxValue = self._maxValue;
        if (self.settings.orientation === 'v') {
          screenCordName = 'screenY';
          stylePosName = 'top';
          sizeName = 'height';
          shortSizeName = 'h';
        } else {
          screenCordName = 'screenX';
          stylePosName = 'left';
          sizeName = 'width';
          shortSizeName = 'w';
        }
        self._super();
        handleKeyboard(minValue, maxValue);
        handleDrag(minValue, maxValue, self.getEl('handle'));
      },
      repaint: function () {
        this._super();
        updateSliderHandle(this, this.value());
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:value', function (e) {
          updateSliderHandle(self, e.value);
        });
        return self._super();
      }
    });

    var Spacer = Widget.extend({
      renderHtml: function () {
        var self = this;
        self.classes.add('spacer');
        self.canFocus = false;
        return '<div id="' + self._id + '" class="' + self.classes + '"></div>';
      }
    });

    var SplitButton = MenuButton.extend({
      Defaults: {
        classes: 'widget btn splitbtn',
        role: 'button'
      },
      repaint: function () {
        var self$$1 = this;
        var elm = self$$1.getEl();
        var rect = self$$1.layoutRect();
        var mainButtonElm, menuButtonElm;
        self$$1._super();
        mainButtonElm = elm.firstChild;
        menuButtonElm = elm.lastChild;
        global$9(mainButtonElm).css({
          width: rect.w - funcs.getSize(menuButtonElm).width,
          height: rect.h - 2
        });
        global$9(menuButtonElm).css({ height: rect.h - 2 });
        return self$$1;
      },
      activeMenu: function (state) {
        var self$$1 = this;
        global$9(self$$1.getEl().lastChild).toggleClass(self$$1.classPrefix + 'active', state);
      },
      renderHtml: function () {
        var self$$1 = this;
        var id = self$$1._id;
        var prefix = self$$1.classPrefix;
        var image;
        var icon = self$$1.state.get('icon');
        var text = self$$1.state.get('text');
        var settings = self$$1.settings;
        var textHtml = '', ariaPressed;
        image = settings.image;
        if (image) {
          icon = 'none';
          if (typeof image !== 'string') {
            image = window.getSelection ? image[0] : image[1];
          }
          image = ' style="background-image: url(\'' + image + '\')"';
        } else {
          image = '';
        }
        icon = settings.icon ? prefix + 'ico ' + prefix + 'i-' + icon : '';
        if (text) {
          self$$1.classes.add('btn-has-text');
          textHtml = '<span class="' + prefix + 'txt">' + self$$1.encode(text) + '</span>';
        }
        ariaPressed = typeof settings.active === 'boolean' ? ' aria-pressed="' + settings.active + '"' : '';
        return '<div id="' + id + '" class="' + self$$1.classes + '" role="button"' + ariaPressed + ' tabindex="-1">' + '<button type="button" hidefocus="1" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + textHtml + '</button>' + '<button type="button" class="' + prefix + 'open" hidefocus="1" tabindex="-1">' + (self$$1._menuBtnText ? (icon ? '\xA0' : '') + self$$1._menuBtnText : '') + ' <i class="' + prefix + 'caret"></i>' + '</button>' + '</div>';
      },
      postRender: function () {
        var self$$1 = this, onClickHandler = self$$1.settings.onclick;
        self$$1.on('click', function (e) {
          var node = e.target;
          if (e.control === this) {
            while (node) {
              if (e.aria && e.aria.key !== 'down' || node.nodeName === 'BUTTON' && node.className.indexOf('open') === -1) {
                e.stopImmediatePropagation();
                if (onClickHandler) {
                  onClickHandler.call(this, e);
                }
                return;
              }
              node = node.parentNode;
            }
          }
        });
        delete self$$1.settings.onclick;
        return self$$1._super();
      }
    });

    var StackLayout = FlowLayout.extend({
      Defaults: {
        containerClass: 'stack-layout',
        controlClass: 'stack-layout-item',
        endClass: 'break'
      },
      isNative: function () {
        return true;
      }
    });

    var TabPanel = Panel.extend({
      Defaults: {
        layout: 'absolute',
        defaults: { type: 'panel' }
      },
      activateTab: function (idx) {
        var activeTabElm;
        if (this.activeTabId) {
          activeTabElm = this.getEl(this.activeTabId);
          global$9(activeTabElm).removeClass(this.classPrefix + 'active');
          activeTabElm.setAttribute('aria-selected', 'false');
        }
        this.activeTabId = 't' + idx;
        activeTabElm = this.getEl('t' + idx);
        activeTabElm.setAttribute('aria-selected', 'true');
        global$9(activeTabElm).addClass(this.classPrefix + 'active');
        this.items()[idx].show().fire('showtab');
        this.reflow();
        this.items().each(function (item, i) {
          if (idx !== i) {
            item.hide();
          }
        });
      },
      renderHtml: function () {
        var self = this;
        var layout = self._layout;
        var tabsHtml = '';
        var prefix = self.classPrefix;
        self.preRender();
        layout.preRender(self);
        self.items().each(function (ctrl, i) {
          var id = self._id + '-t' + i;
          ctrl.aria('role', 'tabpanel');
          ctrl.aria('labelledby', id);
          tabsHtml += '<div id="' + id + '" class="' + prefix + 'tab" ' + 'unselectable="on" role="tab" aria-controls="' + ctrl._id + '" aria-selected="false" tabIndex="-1">' + self.encode(ctrl.settings.title) + '</div>';
        });
        return '<div id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1">' + '<div id="' + self._id + '-head" class="' + prefix + 'tabs" role="tablist">' + tabsHtml + '</div>' + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + layout.renderHtml(self) + '</div>' + '</div>';
      },
      postRender: function () {
        var self = this;
        self._super();
        self.settings.activeTab = self.settings.activeTab || 0;
        self.activateTab(self.settings.activeTab);
        this.on('click', function (e) {
          var targetParent = e.target.parentNode;
          if (targetParent && targetParent.id === self._id + '-head') {
            var i = targetParent.childNodes.length;
            while (i--) {
              if (targetParent.childNodes[i] === e.target) {
                self.activateTab(i);
              }
            }
          }
        });
      },
      initLayoutRect: function () {
        var self = this;
        var rect, minW, minH;
        minW = funcs.getSize(self.getEl('head')).width;
        minW = minW < 0 ? 0 : minW;
        minH = 0;
        self.items().each(function (item) {
          minW = Math.max(minW, item.layoutRect().minW);
          minH = Math.max(minH, item.layoutRect().minH);
        });
        self.items().each(function (ctrl) {
          ctrl.settings.x = 0;
          ctrl.settings.y = 0;
          ctrl.settings.w = minW;
          ctrl.settings.h = minH;
          ctrl.layoutRect({
            x: 0,
            y: 0,
            w: minW,
            h: minH
          });
        });
        var headH = funcs.getSize(self.getEl('head')).height;
        self.settings.minWidth = minW;
        self.settings.minHeight = minH + headH;
        rect = self._super();
        rect.deltaH += headH;
        rect.innerH = rect.h - rect.deltaH;
        return rect;
      }
    });

    var TextBox = Widget.extend({
      init: function (settings) {
        var self$$1 = this;
        self$$1._super(settings);
        self$$1.classes.add('textbox');
        if (settings.multiline) {
          self$$1.classes.add('multiline');
        } else {
          self$$1.on('keydown', function (e) {
            var rootControl;
            if (e.keyCode === 13) {
              e.preventDefault();
              self$$1.parents().reverse().each(function (ctrl) {
                if (ctrl.toJSON) {
                  rootControl = ctrl;
                  return false;
                }
              });
              self$$1.fire('submit', { data: rootControl.toJSON() });
            }
          });
          self$$1.on('keyup', function (e) {
            self$$1.state.set('value', e.target.value);
          });
        }
      },
      repaint: function () {
        var self$$1 = this;
        var style, rect, borderBox, borderW, borderH = 0, lastRepaintRect;
        style = self$$1.getEl().style;
        rect = self$$1._layoutRect;
        lastRepaintRect = self$$1._lastRepaintRect || {};
        var doc = document;
        if (!self$$1.settings.multiline && doc.all && (!doc.documentMode || doc.documentMode <= 8)) {
          style.lineHeight = rect.h - borderH + 'px';
        }
        borderBox = self$$1.borderBox;
        borderW = borderBox.left + borderBox.right + 8;
        borderH = borderBox.top + borderBox.bottom + (self$$1.settings.multiline ? 8 : 0);
        if (rect.x !== lastRepaintRect.x) {
          style.left = rect.x + 'px';
          lastRepaintRect.x = rect.x;
        }
        if (rect.y !== lastRepaintRect.y) {
          style.top = rect.y + 'px';
          lastRepaintRect.y = rect.y;
        }
        if (rect.w !== lastRepaintRect.w) {
          style.width = rect.w - borderW + 'px';
          lastRepaintRect.w = rect.w;
        }
        if (rect.h !== lastRepaintRect.h) {
          style.height = rect.h - borderH + 'px';
          lastRepaintRect.h = rect.h;
        }
        self$$1._lastRepaintRect = lastRepaintRect;
        self$$1.fire('repaint', {}, false);
        return self$$1;
      },
      renderHtml: function () {
        var self$$1 = this;
        var settings = self$$1.settings;
        var attrs, elm;
        attrs = {
          id: self$$1._id,
          hidefocus: '1'
        };
        global$2.each([
          'rows',
          'spellcheck',
          'maxLength',
          'size',
          'readonly',
          'min',
          'max',
          'step',
          'list',
          'pattern',
          'placeholder',
          'required',
          'multiple'
        ], function (name$$1) {
          attrs[name$$1] = settings[name$$1];
        });
        if (self$$1.disabled()) {
          attrs.disabled = 'disabled';
        }
        if (settings.subtype) {
          attrs.type = settings.subtype;
        }
        elm = funcs.create(settings.multiline ? 'textarea' : 'input', attrs);
        elm.value = self$$1.state.get('value');
        elm.className = self$$1.classes.toString();
        return elm.outerHTML;
      },
      value: function (value) {
        if (arguments.length) {
          this.state.set('value', value);
          return this;
        }
        if (this.state.get('rendered')) {
          this.state.set('value', this.getEl().value);
        }
        return this.state.get('value');
      },
      postRender: function () {
        var self$$1 = this;
        self$$1.getEl().value = self$$1.state.get('value');
        self$$1._super();
        self$$1.$el.on('change', function (e) {
          self$$1.state.set('value', e.target.value);
          self$$1.fire('change', e);
        });
      },
      bindStates: function () {
        var self$$1 = this;
        self$$1.state.on('change:value', function (e) {
          if (self$$1.getEl().value !== e.value) {
            self$$1.getEl().value = e.value;
          }
        });
        self$$1.state.on('change:disabled', function (e) {
          self$$1.getEl().disabled = e.value;
        });
        return self$$1._super();
      },
      remove: function () {
        this.$el.off();
        this._super();
      }
    });

    var getApi = function () {
      return {
        Selector: Selector,
        Collection: Collection$2,
        ReflowQueue: ReflowQueue,
        Control: Control$1,
        Factory: global$4,
        KeyboardNavigation: KeyboardNavigation,
        Container: Container,
        DragHelper: DragHelper,
        Scrollable: Scrollable,
        Panel: Panel,
        Movable: Movable,
        Resizable: Resizable,
        FloatPanel: FloatPanel,
        Window: Window$$1,
        MessageBox: MessageBox,
        Tooltip: Tooltip,
        Widget: Widget,
        Progress: Progress,
        Notification: Notification,
        Layout: Layout,
        AbsoluteLayout: AbsoluteLayout,
        Button: Button,
        ButtonGroup: ButtonGroup,
        Checkbox: Checkbox,
        ComboBox: ComboBox,
        ColorBox: ColorBox,
        PanelButton: PanelButton,
        ColorButton: ColorButton,
        ColorPicker: ColorPicker,
        Path: Path,
        ElementPath: ElementPath,
        FormItem: FormItem,
        Form: Form,
        FieldSet: FieldSet,
        FilePicker: FilePicker,
        FitLayout: FitLayout,
        FlexLayout: FlexLayout,
        FlowLayout: FlowLayout,
        FormatControls: FormatControls,
        GridLayout: GridLayout,
        Iframe: Iframe$1,
        InfoBox: InfoBox,
        Label: Label,
        Toolbar: Toolbar$1,
        MenuBar: MenuBar,
        MenuButton: MenuButton,
        MenuItem: MenuItem,
        Throbber: Throbber,
        Menu: Menu,
        ListBox: ListBox,
        Radio: Radio,
        ResizeHandle: ResizeHandle,
        SelectBox: SelectBox,
        Slider: Slider,
        Spacer: Spacer,
        SplitButton: SplitButton,
        StackLayout: StackLayout,
        TabPanel: TabPanel,
        TextBox: TextBox,
        DropZone: DropZone,
        BrowseButton: BrowseButton
      };
    };
    var appendTo = function (target) {
      if (target.ui) {
        global$2.each(getApi(), function (ref, key) {
          target.ui[key] = ref;
        });
      } else {
        target.ui = getApi();
      }
    };
    var registerToFactory = function () {
      global$2.each(getApi(), function (ref, key) {
        global$4.add(key, ref);
      });
    };
    var Api = {
      appendTo: appendTo,
      registerToFactory: registerToFactory
    };

    Api.registerToFactory();
    Api.appendTo(window.tinymce ? window.tinymce : {});
    global.add('modern', function (editor) {
      FormatControls.setup(editor);
      return ThemeApi.get(editor);
    });
    function Theme () {
    }

    return Theme;

}());
})();


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "52c4":
/***/ (function(module, exports) {

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),o=function(t){return t.getParam("code_dialog_width",600)},i=function(t){return t.getParam("code_dialog_height",Math.min(n.DOM.getViewPort().h-200,500))},c=function(t,n){t.focus(),t.undoManager.transact(function(){t.setContent(n)}),t.selection.setCursorLocation(),t.nodeChanged()},d=function(t){return t.getContent({source_view:!0})},e=function(n){var t=o(n),e=i(n);n.windowManager.open({title:"Source code",body:{type:"textbox",name:"code",multiline:!0,minWidth:t,minHeight:e,spellcheck:!1,style:"direction: ltr; text-align: left"},onSubmit:function(t){c(n,t.data.code)}}).find("#code").value(d(n))},u=function(t){t.addCommand("mceCodeEditor",function(){e(t)})},a=function(t){t.addButton("code",{icon:"code",tooltip:"Source code",onclick:function(){e(t)}}),t.addMenuItem("code",{icon:"code",text:"Source code",onclick:function(){e(t)}})};t.add("code",function(t){return u(t),a(t),{}})}();

/***/ }),

/***/ "5373":
/***/ (function(module, exports) {

!function(){"use strict";var r=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return r(n())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=function(e){return e.getParam("insertdatetime_timeformat",e.translate("%H:%M:%S"))},a=function(e){return e.getParam("insertdatetime_formats",["%H:%M:%S","%Y-%m-%d","%I:%M:%S %p","%D"])},t=function(e){return e.getParam("insertdatetime_dateformat",e.translate("%Y-%m-%d"))},i=n,o=a,u=function(e){var t=a(e);return 0<t.length?t[0]:n(e)},m=function(e){return e.getParam("insertdatetime_element",!1)},c="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),l="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),s="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),d="January February March April May June July August September October November December".split(" "),p=function(e,t){if((e=""+e).length<t)for(var n=0;n<t-e.length;n++)e="0"+e;return e},f=function(e,t,n){return n=n||new Date,t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace("%D","%m/%d/%Y")).replace("%r","%I:%M:%S %p")).replace("%Y",""+n.getFullYear())).replace("%y",""+n.getYear())).replace("%m",p(n.getMonth()+1,2))).replace("%d",p(n.getDate(),2))).replace("%H",""+p(n.getHours(),2))).replace("%M",""+p(n.getMinutes(),2))).replace("%S",""+p(n.getSeconds(),2))).replace("%I",""+((n.getHours()+11)%12+1))).replace("%p",n.getHours()<12?"AM":"PM")).replace("%B",""+e.translate(d[n.getMonth()]))).replace("%b",""+e.translate(s[n.getMonth()]))).replace("%A",""+e.translate(l[n.getDay()]))).replace("%a",""+e.translate(c[n.getDay()]))).replace("%%","%")},g=function(e,t){if(m(e)){var n=f(e,t),r=void 0;r=/%[HMSIp]/.test(t)?f(e,"%Y-%m-%dT%H:%M"):f(e,"%Y-%m-%d");var a=e.dom.getParent(e.selection.getStart(),"time");a?(o=a,u=r,c=n,l=(i=e).dom.create("time",{datetime:u},c),o.parentNode.insertBefore(l,o),i.dom.remove(o),i.selection.select(l,!0),i.selection.collapse(!1)):e.insertContent('<time datetime="'+r+'">'+n+"</time>")}else e.insertContent(f(e,t));var i,o,u,c,l},y=f,M=function(e){e.addCommand("mceInsertDate",function(){g(e,t(e))}),e.addCommand("mceInsertTime",function(){g(e,i(e))})},v=tinymce.util.Tools.resolve("tinymce.util.Tools"),S=function(t,n){var r,a,e,i=(a=n,e=o(r=t),v.map(e,function(e){return{text:y(r,e),onclick:function(){a.set(e),g(r,e)}}}));t.addButton("insertdatetime",{type:"splitbutton",title:"Insert date/time",menu:i,onclick:function(){var e=n.get();g(t,e||u(t))}}),t.addMenuItem("insertdatetime",{icon:"date",text:"Date/time",menu:i,context:"insert"})};e.add("insertdatetime",function(e){var t=r(null);M(e),S(e,t)})}();

/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "66bf":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=tinymce.util.Tools.resolve("tinymce.Env"),m=function(e){return e.getParam("autolink_pattern",/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@)(.+)$/i)},y=function(e){return e.getParam("default_link_target","")},o=function(e,t){if(t<0&&(t=0),3===e.nodeType){var n=e.data.length;n<t&&(t=n)}return t},k=function(e,t,n){1!==t.nodeType||t.hasChildNodes()?e.setStart(t,o(t,n)):e.setStartBefore(t)},p=function(e,t,n){1!==t.nodeType||t.hasChildNodes()?e.setEnd(t,o(t,n)):e.setEndAfter(t)},r=function(e,t,n){var i,o,r,a,f,s,d,l,c,u,g=m(e),h=y(e);if("A"!==e.selection.getNode().tagName){if((i=e.selection.getRng(!0).cloneRange()).startOffset<5){if(!(l=i.endContainer.previousSibling)){if(!i.endContainer.firstChild||!i.endContainer.firstChild.nextSibling)return;l=i.endContainer.firstChild.nextSibling}if(c=l.length,k(i,l,c),p(i,l,c),i.endOffset<5)return;o=i.endOffset,a=l}else{if(3!==(a=i.endContainer).nodeType&&a.firstChild){for(;3!==a.nodeType&&a.firstChild;)a=a.firstChild;3===a.nodeType&&(k(i,a,0),p(i,a,a.nodeValue.length))}o=1===i.endOffset?2:i.endOffset-1-t}for(r=o;k(i,a,2<=o?o-2:0),p(i,a,1<=o?o-1:0),o-=1," "!==(u=i.toString())&&""!==u&&160!==u.charCodeAt(0)&&0<=o-2&&u!==n;);var C;(C=i.toString())===n||" "===C||160===C.charCodeAt(0)?(k(i,a,o),p(i,a,r),o+=1):(0===i.startOffset?k(i,a,0):k(i,a,o),p(i,a,r)),"."===(s=i.toString()).charAt(s.length-1)&&p(i,a,r-1),(d=(s=i.toString().trim()).match(g))&&("www."===d[1]?d[1]="http://www.":/@$/.test(d[1])&&!/^mailto:/.test(d[1])&&(d[1]="mailto:"+d[1]),f=e.selection.getBookmark(),e.selection.setRng(i),e.execCommand("createlink",!1,d[1]+d[2]),h&&e.dom.setAttrib(e.selection.getNode(),"target",h),e.selection.moveToBookmark(f),e.nodeChanged())}},t=function(t){var n;t.on("keydown",function(e){13!==e.keyCode||r(t,-1,"")}),i.ie?t.on("focus",function(){if(!n){n=!0;try{t.execCommand("AutoUrlDetect",!1,!0)}catch(e){}}}):(t.on("keypress",function(e){41!==e.keyCode||r(t,-1,"(")}),t.on("keyup",function(e){32!==e.keyCode||r(t,0,"")}))};e.add("autolink",function(e){t(e)})}();

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "68e1":
/***/ (function(module, exports) {

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=tinymce.util.Tools.resolve("tinymce.util.Tools"),s=function(t,e,n){var r="UL"===e?"InsertUnorderedList":"InsertOrderedList";t.execCommand(r,!1,!1===n?null:{"list-style-type":n})},o=function(n){n.addCommand("ApplyUnorderedListStyle",function(t,e){s(n,"UL",e["list-style-type"])}),n.addCommand("ApplyOrderedListStyle",function(t,e){s(n,"OL",e["list-style-type"])})},e=function(t){var e=t.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman");return e?e.split(/[ ,]/):[]},n=function(t){var e=t.getParam("advlist_bullet_styles","default,circle,disc,square");return e?e.split(/[ ,]/):[]},u=function(t){return t&&/^(TH|TD)$/.test(t.nodeName)},c=function(r){return function(t){return t&&/^(OL|UL|DL)$/.test(t.nodeName)&&(n=t,(e=r).$.contains(e.getBody(),n));var e,n}},d=function(t){var e=t.dom.getParent(t.selection.getNode(),"ol,ul");return t.dom.getStyle(e,"listStyleType")||""},p=function(t){return a.map(t,function(t){return{text:t.replace(/\-/g," ").replace(/\b\w/g,function(t){return t.toUpperCase()}),data:"default"===t?"":t}})},f=function(i,l){return function(t){var o=t.control;i.on("NodeChange",function(t){var e=function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1}(t.parents,u),n=-1!==e?t.parents.slice(0,e):t.parents,r=a.grep(n,c(i));o.active(0<r.length&&r[0].nodeName===l)})}},m=function(e,t,n,r,o,i){var l;e.addButton(t,{active:!1,type:"splitbutton",tooltip:n,menu:p(i),onPostRender:f(e,o),onshow:(l=e,function(t){var e=d(l);t.control.items().each(function(t){t.active(t.settings.data===e)})}),onselect:function(t){s(e,o,t.control.settings.data)},onclick:function(){e.execCommand(r)}})},r=function(t,e,n,r,o,i){var l,a,s,u,c;0<i.length?m(t,e,n,r,o,i):(a=e,s=n,u=r,c=o,(l=t).addButton(a,{active:!1,type:"button",tooltip:s,onPostRender:f(l,c),onclick:function(){l.execCommand(u)}}))},i=function(t){r(t,"numlist","Numbered list","InsertOrderedList","OL",e(t)),r(t,"bullist","Bullet list","InsertUnorderedList","UL",n(t))};t.add("advlist",function(t){var e,n,r;n="lists",r=(e=t).settings.plugins?e.settings.plugins:"",-1!==a.inArray(r.split(/[ ,]/),n)&&(i(t),o(t))})}();

/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7297":
/***/ (function(module, exports) {

!function(){"use strict";var e,n,t=tinymce.util.Tools.resolve("tinymce.PluginManager"),s=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),f=tinymce.util.Tools.resolve("tinymce.util.I18n"),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=function(t){return t.getParam("toc_class","mce-toc")},m=function(t){var e=t.getParam("toc_header","h2");return/^h[1-6]$/.test(e)?e:"h2"},c=function(t){var e=parseInt(t.getParam("toc_depth","3"),10);return 1<=e&&e<=9?e:3},a=(e="mcetoc_",n=0,function(){var t=(new Date).getTime().toString(32);return e+t+(n++).toString(32)}),v=function(n){var o=l(n),t=m(n),e=function(t){var e,n=[];for(e=1;e<=t;e++)n.push("h"+e);return n.join(",")}(c(n)),r=n.$(e);return r.length&&/^h[1-9]$/i.test(t)&&(r=r.filter(function(t,e){return!n.dom.hasClass(e.parentNode,o)})),i.map(r,function(t){return{id:t.id?t.id:a(),level:parseInt(t.nodeName.replace(/^H/i,""),10),title:n.$.text(t),element:t}})},d=function(t){var e,n,o,r,i,c,l,a="",d=v(t),u=function(t){var e,n=9;for(e=0;e<t.length;e++)if(t[e].level<n&&(n=t[e].level),1===n)return n;return n}(d)-1;if(!d.length)return"";for(a+=(i=m(t),c=f.translate("Table of Contents"),l="</"+i+">","<"+i+' contenteditable="true">'+s.DOM.encode(c)+l),e=0;e<d.length;e++){if((o=d[e]).element.id=o.id,r=d[e+1]&&d[e+1].level,u===o.level)a+="<li>";else for(n=u;n<o.level;n++)a+="<ul><li>";if(a+='<a href="#'+o.id+'">'+o.title+"</a>",r!==o.level&&r)for(n=o.level;r<n;n--)a+="</li></ul><li>";else a+="</li>",r||(a+="</ul>");u=o.level}return a},u=function(t){var e=l(t),n=t.$("."+e);n.length&&t.undoManager.transact(function(){n.html(d(t))})},o={hasHeaders:function(t){return 0<v(t).length},insertToc:function(t){var e,n,o,r,i=l(t),c=t.$("."+i);o=t,!(r=c).length||0<o.dom.getParents(r[0],".mce-offscreen-selection").length?t.insertContent((n=d(e=t),'<div class="'+e.dom.encode(l(e))+'" contenteditable="false">'+n+"</div>")):u(t)},updateToc:u},r=function(t){t.addCommand("mceInsertToc",function(){o.insertToc(t)}),t.addCommand("mceUpdateToc",function(){o.updateToc(t)})},h=function(t){var n=t.$,o=l(t);t.on("PreProcess",function(t){var e=n("."+o,t.node);e.length&&(e.removeAttr("contentEditable"),e.find("[contenteditable]").removeAttr("contentEditable"))}),t.on("SetContent",function(){var t=n("."+o);t.length&&(t.attr("contentEditable",!1),t.children(":first-child").attr("contentEditable",!0))})},g=function(n){return function(t){var e=t.control;n.on("LoadContent SetContent change",function(){e.disabled(n.readonly||!o.hasHeaders(n))})}},T=function(t){var e;t.addButton("toc",{tooltip:"Table of Contents",cmd:"mceInsertToc",icon:"toc",onPostRender:g(t)}),t.addButton("tocupdate",{tooltip:"Update",cmd:"mceUpdateToc",icon:"reload"}),t.addMenuItem("toc",{text:"Table of Contents",context:"insert",cmd:"mceInsertToc",onPostRender:g(t)}),t.addContextToolbar((e=t,function(t){return t&&e.dom.is(t,"."+l(e))&&e.getBody().contains(t)}),"tocupdate")};t.add("toc",function(t){r(t),T(t),h(t)})}();

/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7496":
/***/ (function(module, exports) {

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(t){return/^[A-Za-z][A-Za-z0-9\-:._]*$/.test(t)},e=function(t){var e=t.selection.getNode();return"A"===e.tagName&&""===t.dom.getAttrib(e,"href")?e.id||e.name:""},i=function(t,e){var n=t.selection.getNode();"A"===n.tagName&&""===t.dom.getAttrib(n,"href")?(n.removeAttribute("name"),n.id=e,t.undoManager.add()):(t.focus(),t.selection.collapse(!0),t.execCommand("mceInsertContent",!1,t.dom.createHTML("a",{id:e})))},n=function(r){var t=e(r);r.windowManager.open({title:"Anchor",body:{type:"textbox",name:"id",size:40,label:"Id",value:t},onsubmit:function(t){var e,n,o=t.data.id;e=r,(a(n=o)?(i(e,n),0):(e.windowManager.alert("Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."),1))&&t.preventDefault()}})},o=function(t){t.addCommand("mceAnchor",function(){n(t)})},r=function(o){return function(t){for(var e=0;e<t.length;e++)(n=t[e]).attr("href")||!n.attr("id")&&!n.attr("name")||n.firstChild||t[e].attr("contenteditable",o);var n}},c=function(t){t.on("PreInit",function(){t.parser.addNodeFilter("a",r("false")),t.serializer.addNodeFilter("a",r(null))})},d=function(t){t.addButton("anchor",{icon:"anchor",tooltip:"Anchor",cmd:"mceAnchor",stateSelector:"a:not([href])"}),t.addMenuItem("anchor",{icon:"anchor",text:"Anchor",context:"insert",cmd:"mceAnchor"})};t.add("anchor",function(t){c(t),o(t),d(t)})}();

/***/ }),

/***/ "74ca":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),l=tinymce.util.Tools.resolve("tinymce.util.Color"),a=function(e,n){e.find("#preview")[0].getEl().style.background=n},o=function(e,n){var i=l(n),t=i.toRgb();e.fromJSON({r:t.r,g:t.g,b:t.b,hex:i.toHex().substr(1)}),a(e,i.toHex())},t=function(e,n,i){var t=e.windowManager.open({title:"Color",items:{type:"container",layout:"flex",direction:"row",align:"stretch",padding:5,spacing:10,items:[{type:"colorpicker",value:i,onchange:function(){var e=this.rgb();t&&(t.find("#r").value(e.r),t.find("#g").value(e.g),t.find("#b").value(e.b),t.find("#hex").value(this.value().substr(1)),a(t,this.value()))}},{type:"form",padding:0,labelGap:5,defaults:{type:"textbox",size:7,value:"0",flex:1,spellcheck:!1,onchange:function(){var e,n,i=t.find("colorpicker")[0];if(e=this.name(),n=this.value(),"hex"===e)return o(t,n="#"+n),void i.value(n);n={r:t.find("#r").value(),g:t.find("#g").value(),b:t.find("#b").value()},i.value(n),o(t,n)}},items:[{name:"r",label:"R",autofocus:1},{name:"g",label:"G"},{name:"b",label:"B"},{name:"hex",label:"#",value:"000000"},{name:"preview",type:"container",border:1}]}]},onSubmit:function(){n("#"+t.toJSON().hex)}});o(t,i)};e.add("colorpicker",function(i){i.settings.color_picker_callback||(i.settings.color_picker_callback=function(e,n){t(i,e,n)})})}();

/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a20":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=tinymce.util.Tools.resolve("tinymce.util.Tools"),t=function(a){a.settings.inline_styles=!1,a.on("init",function(){var e,t,n,i;e=a,t="p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",n=o.explode(e.settings.font_size_style_values),i=e.schema,e.formatter.register({alignleft:{selector:t,attributes:{align:"left"}},aligncenter:{selector:t,attributes:{align:"center"}},alignright:{selector:t,attributes:{align:"right"}},alignjustify:{selector:t,attributes:{align:"justify"}},bold:[{inline:"b",remove:"all"},{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}}],italic:[{inline:"i",remove:"all"},{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}}],underline:[{inline:"u",remove:"all"},{inline:"span",styles:{textDecoration:"underline"},exact:!0}],strikethrough:[{inline:"strike",remove:"all"},{inline:"span",styles:{textDecoration:"line-through"},exact:!0}],fontname:{inline:"font",attributes:{face:"%value"}},fontsize:{inline:"font",attributes:{size:function(e){return o.inArray(n,e.value)+1}}},forecolor:{inline:"font",attributes:{color:"%value"}},hilitecolor:{inline:"font",styles:{backgroundColor:"%value"}}}),o.each("b,i,u,strike".split(","),function(e){i.addValidElements(e+"[*]")}),i.getElementRule("font")||i.addValidElements("font[face|size|color|style]"),o.each(t.split(","),function(e){var t=i.getElementRule(e);t&&(t.attributes.align||(t.attributes.align={},t.attributesOrder.push("align")))})})},n=function(i){i.addButton("fontsizeselect",function(){var o=[],e=i.settings.fontsizeFormats||"8pt=1 10pt=2 12pt=3 14pt=4 18pt=5 24pt=6 36pt=7";return i.$.each(e.split(" "),function(e,t){var n=t,i=t,a=t.split("=");1<a.length&&(n=a[0],i=a[1]),o.push({text:n,value:i})}),{type:"listbox",text:"Font Sizes",tooltip:"Font Sizes",values:o,fixedWidth:!0,onPostRender:function(){var t=this;i.on("NodeChange",function(){var e;(e=i.dom.getParent(i.selection.getNode(),"font"))?t.value(e.size):t.value("")})},onclick:function(e){e.control.settings.value&&i.execCommand("FontSize",!1,e.control.settings.value)}}}),i.addButton("fontselect",function(){var n=[],e=function(e){for(var t=(e=e.replace(/;$/,"").split(";")).length;t--;)e[t]=e[t].split("=");return e}(i.settings.font_formats||"Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats");return i.$.each(e,function(e,t){n.push({text:{raw:t[0]},value:t[1],textStyle:-1===t[1].indexOf("dings")?"font-family:"+t[1]:""})}),{type:"listbox",text:"Font Family",tooltip:"Font Family",values:n,fixedWidth:!0,onPostRender:function(){var t=this;i.on("NodeChange",function(){var e;(e=i.dom.getParent(i.selection.getNode(),"font"))?t.value(e.face):t.value("")})},onselect:function(e){e.control.settings.value&&i.execCommand("FontName",!1,e.control.settings.value)}}})};e.add("legacyoutput",function(e){t(e),n(e)})}();

/***/ }),

/***/ "8102":
/***/ (function(module, exports) {

!function(){"use strict";var c=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return c(n())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(e){return!(!/(^|[ ,])tinymcespellchecker([, ]|$)/.test(e.settings.plugins)||!t.get("tinymcespellchecker")||("undefined"!=typeof window.console&&window.console.log&&window.console.log("Spell Checker Pro is incompatible with Spell Checker plugin! Remove 'spellchecker' from the 'plugins' option."),0))},g=function(e){return e.getParam("spellchecker_languages","English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv")},l=function(e){var t=e.getParam("language","en");return e.getParam("spellchecker_language",t)},d=function(e){return e.getParam("spellchecker_rpc_url")},f=function(e){return e.getParam("spellchecker_callback")},s=function(e){var t=new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e\xa0\u2002\u2003\u2009]+',"g");return e.getParam("spellchecker_wordchar_pattern",t)},h=tinymce.util.Tools.resolve("tinymce.util.Tools"),m=tinymce.util.Tools.resolve("tinymce.util.URI"),p=tinymce.util.Tools.resolve("tinymce.util.XHR"),u=function(e){return e.fire("SpellcheckStart")},o=function(e){return e.fire("SpellcheckEnd")};function x(e){return e&&1===e.nodeType&&"false"===e.contentEditable}var v,r=function(c,r){var n,o,f,g,h,i=[],v=r.dom;function a(e,t){if(!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");return{start:e.index,end:e.index+e[0].length,text:e[0],data:t}}function l(e){var t=c.getElementsByTagName("*"),n=[];e="number"==typeof e?""+e:null;for(var r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-mce-index");null!==i&&i.length&&-1!==o.className.indexOf("mce-spellchecker-word")&&(i!==e&&null!==e||n.push(o))}return n}function s(e){for(var t=i.length;t--;)if(i[t]===e)return t;return-1}function t(e){for(var t=0,n=i.length;t<n&&!1!==e(i[t],t);t++);return this}function u(e){var t,n,r=l(e?s(e):null);for(t=r.length;t--;)(n=r[t]).parentNode.insertBefore(n.firstChild,n),n.parentNode.removeChild(n);return this}function d(e){var t=l(s(e)),n=r.dom.createRng();return n.setStartBefore(t[0]),n.setEndAfter(t[t.length-1]),n}return f=r.schema.getBlockElements(),g=r.schema.getWhiteSpaceElements(),h=r.schema.getShortEndedElements(),{text:o=function e(t){var n;if(3===t.nodeType)return t.data;if(g[t.nodeName]&&!f[t.nodeName])return"";if(x(t))return"\n";if(n="",(f[t.nodeName]||h[t.nodeName])&&(n+="\n"),t=t.firstChild)for(;n+=e(t),t=t.nextSibling;);return n}(c),matches:i,each:t,filter:function(n){var r=[];return t(function(e,t){n(e,t)&&r.push(e)}),i=r,this},reset:function(){return i.splice(0,i.length),u(),this},matchFromElement:function(e){return i[e.getAttribute("data-mce-index")]},elementFromMatch:function(e){return l(s(e))[0]},find:function(e,t){if(o&&e.global)for(;n=e.exec(o);)i.push(a(n,t));return this},add:function(e,t,n){return i.push({start:e,end:e+t,text:o.substr(e,t),data:n}),this},wrap:function(e){return i.length&&function(e,t,n){var r,o,i,c,a,l=[],s=0,u=e,d=0;(t=t.slice(0)).sort(function(e,t){return e.start-t.start}),a=t.shift();e:for(;;){if((f[u.nodeName]||h[u.nodeName]||x(u))&&s++,3===u.nodeType&&(!o&&u.length+s>=a.end?(o=u,c=a.end-s):r&&l.push(u),!r&&u.length+s>a.start&&(r=u,i=a.start-s),s+=u.length),r&&o){if(u=n({startNode:r,startNodeIndex:i,endNode:o,endNodeIndex:c,innerNodes:l,match:a.text,matchIndex:d}),s-=o.length-c,o=r=null,l=[],d++,!(a=t.shift()))break}else if(g[u.nodeName]&&!f[u.nodeName]||!u.firstChild){if(u.nextSibling){u=u.nextSibling;continue}}else if(!x(u)){u=u.firstChild;continue}for(;;){if(u.nextSibling){u=u.nextSibling;break}if(u.parentNode===e)break e;u=u.parentNode}}}(c,i,function(o){function p(e,t){var n=i[t];n.stencil||(n.stencil=o(n));var r=n.stencil.cloneNode(!1);return r.setAttribute("data-mce-index",t),e&&r.appendChild(v.doc.createTextNode(e)),r}return function(e){var t,n,r,o=e.startNode,i=e.endNode,c=e.matchIndex,a=v.doc;if(o===i){var l=o;r=l.parentNode,0<e.startNodeIndex&&(t=a.createTextNode(l.data.substring(0,e.startNodeIndex)),r.insertBefore(t,l));var s=p(e.match,c);return r.insertBefore(s,l),e.endNodeIndex<l.length&&(n=a.createTextNode(l.data.substring(e.endNodeIndex)),r.insertBefore(n,l)),l.parentNode.removeChild(l),s}t=a.createTextNode(o.data.substring(0,e.startNodeIndex)),n=a.createTextNode(i.data.substring(e.endNodeIndex));for(var u=p(o.data.substring(e.startNodeIndex),c),d=0,f=e.innerNodes.length;d<f;++d){var g=e.innerNodes[d],h=p(g.data,c);g.parentNode.replaceChild(h,g)}var m=p(i.data.substring(0,e.endNodeIndex),c);return(r=o.parentNode).insertBefore(t,o),r.insertBefore(u,o),r.removeChild(o),(r=i.parentNode).insertBefore(m,i),r.insertBefore(n,i),r.removeChild(i),m}}(e)),this},unwrap:u,replace:function(e,t){var n=d(e);return n.deleteContents(),0<t.length&&n.insertNode(r.dom.doc.createTextNode(t)),n},rangeFromMatch:d,indexOf:s}},k=function(e,t){if(!t.get()){var n=r(e.getBody(),e);t.set(n)}return t.get()},N=function(e,t,n,r,o,i,c){var a,l,s,u=f(e);(u||(a=e,l=t,s=n,function(e,t,n,r){var o={method:e,lang:s.get()},i="";o["addToDictionary"===e?"word":"text"]=t,h.each(o,function(e,t){i&&(i+="&"),i+=t+"="+encodeURIComponent(e)}),p.send({url:new m(l).toAbsolute(d(a)),type:"post",content_type:"application/x-www-form-urlencoded",data:i,success:function(e){if(e=JSON.parse(e))e.error?r(e.error):n(e);else{var t=a.translate("Server response wasn't proper JSON.");r(t)}},error:function(){var e=a.translate("The spelling service was not found: (")+d(a)+a.translate(")");r(e)}})})).call(e.plugins.spellchecker,r,o,i,c)},y=function(e,t,n){e.dom.select("span.mce-spellchecker-word").length||S(e,t,n)},S=function(e,t,n){var r=e.selection.getBookmark();if(k(e,n).reset(),e.selection.moveToBookmark(r),n.set(null),t.get())return t.set(!1),o(e),!0},w=function(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t},b=function(t,e,n,r,o){var i,c;if("string"!=typeof o&&o.words?(c=!!o.dictionary,i=o.words):i=o,t.setProgressState(!1),function(e){for(var t in e)return!1;return!0}(i)){var a=t.translate("No misspellings found.");return t.notificationManager.open({text:a,type:"info"}),void e.set(!1)}r.set({suggestions:i,hasDictionarySupport:c});var l=t.selection.getBookmark();k(t,n).find(s(t)).filter(function(e){return!!i[e.text]}).wrap(function(e){return t.dom.create("span",{"class":"mce-spellchecker-word","data-mce-bogus":1,"data-mce-word":e.text})}),t.selection.moveToBookmark(l),e.set(!0),u(t)},T={spellcheck:function(t,e,n,r,o,i){S(t,n,r)||(t.setProgressState(!0),N(t,e,i,"spellcheck",k(t,r).text,function(e){b(t,n,r,o,e)},function(e){t.notificationManager.open({text:e,type:"error"}),t.setProgressState(!1),S(t,n,r)}),t.focus())},checkIfFinished:y,addToDictionary:function(t,e,n,r,o,i,c){t.setProgressState(!0),N(t,e,o,"addToDictionary",i,function(){t.setProgressState(!1),t.dom.remove(c,!0),y(t,n,r)},function(e){t.notificationManager.open({text:e,type:"error"}),t.setProgressState(!1)})},ignoreWord:function(t,e,n,r,o,i){t.selection.collapse(),i?h.each(t.dom.select("span.mce-spellchecker-word"),function(e){e.getAttribute("data-mce-word")===r&&t.dom.remove(e,!0)}):t.dom.remove(o,!0),y(t,e,n)},findSpansByIndex:function(e,t){var n,r=[];if((n=h.toArray(e.getBody().getElementsByTagName("span"))).length)for(var o=0;o<n.length;o++){var i=w(n[o]);null!==i&&i.length&&i===t.toString()&&r.push(n[o])}return r},getElmIndex:w,markErrors:b},B=function(t,n,r,o,e,i){return{getTextMatcher:function(){return o.get()},getWordCharPattern:function(){return s(t)},markErrors:function(e){T.markErrors(t,n,o,r,e)},getLanguage:function(){return e.get()}}},I=function(e,t,n,r,o,i){e.addCommand("mceSpellCheck",function(){T.spellcheck(e,t,n,r,o,i)})},E=function(n,e,r,t,o,i){var c,a,l,s,u=(l=n,c=h.map(g(l).split(","),function(e){return{name:(e=e.split("="))[0],value:e[1]}}),a=[],h.each(c,function(e){a.push({selectable:!0,text:e.name,data:e.value})}),a),d=function(){T.spellcheck(n,e,r,t,i,o)},f={tooltip:"Spellcheck",onclick:d,onPostRender:function(e){var t=e.control;n.on("SpellcheckStart SpellcheckEnd",function(){t.active(r.get())})}};1<u.length&&(f.type="splitbutton",f.menu=u,f.onshow=(s=o,function(e){var t=s.get();e.control.items().each(function(e){e.active(e.settings.data===t)})}),f.onselect=function(e){o.set(e.control.settings.data)}),n.addButton("spellchecker",f),n.addMenuItem("spellchecker",{text:"Spellcheck",context:"tools",onclick:d,selectable:!0,onPostRender:function(){var e=this;e.active(r.get()),n.on("SpellcheckStart SpellcheckEnd",function(){e.active(r.get())})}})},P=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),C=tinymce.util.Tools.resolve("tinymce.ui.Factory"),D=function(o,i,c,a,l,s){o.on("click",function(e){var t=e.target;if("mce-spellchecker-word"===t.className){e.preventDefault();var n=T.findSpansByIndex(o,T.getElmIndex(t));if(0<n.length){var r=o.dom.createRng();r.setStartBefore(n[0]),r.setEndAfter(n[n.length-1]),o.selection.setRng(r),function(t,e,n,r,o,i,c,a){var l=[],s=n.get().suggestions[c];h.each(s,function(e){l.push({text:e,onclick:function(){t.insertContent(t.dom.encode(e)),t.dom.remove(a),T.checkIfFinished(t,r,o)}})}),l.push({text:"-"}),n.get().hasDictionarySupport&&l.push({text:"Add to Dictionary",onclick:function(){T.addToDictionary(t,e,r,o,i,c,a)}}),l.push.apply(l,[{text:"Ignore",onclick:function(){T.ignoreWord(t,r,o,c,a)}},{text:"Ignore all",onclick:function(){T.ignoreWord(t,r,o,c,a,!0)}}]),(v=C.create("menu",{items:l,context:"contextmenu",onautohide:function(e){-1!==e.target.className.indexOf("spellchecker")&&e.preventDefault()},onhide:function(){v.remove(),v=null}})).renderTo(document.body);var u=P.DOM.getPos(t.getContentAreaContainer()),d=t.dom.getPos(a[0]),f=t.dom.getRoot();"BODY"===f.nodeName?(d.x-=f.ownerDocument.documentElement.scrollLeft||f.scrollLeft,d.y-=f.ownerDocument.documentElement.scrollTop||f.scrollTop):(d.x-=f.scrollLeft,d.y-=f.scrollTop),u.x+=d.x,u.y+=d.y,v.moveTo(u.x,u.y+a[0].offsetHeight)}(o,i,c,a,l,s,t.getAttribute("data-mce-word"),n)}}})};t.add("spellchecker",function(e,t){if(!1===a(e)){var n=c(!1),r=c(l(e)),o=c(null),i=c(null);return E(e,t,n,o,r,i),D(e,t,i,n,o,r),I(e,t,n,o,i,r),B(e,n,i,o,r,t)}})}();

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "837f":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=tinymce.util.Tools.resolve("tinymce.Env"),c=function(e){return parseInt(e.getParam("plugin_preview_width","650"),10)},a=function(e){return parseInt(e.getParam("plugin_preview_height","500"),10)},s=function(e){return e.getParam("content_style","")},d=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=function(t){var n="",i=t.dom.encode,e=s(t);n+='<base href="'+i(t.documentBaseURI.getURI())+'">',e&&(n+='<style type="text/css">'+e+"</style>"),d.each(t.contentCSS,function(e){n+='<link type="text/css" rel="stylesheet" href="'+i(t.documentBaseURI.toAbsolute(e))+'">'});var o=t.settings.body_id||"tinymce";-1!==o.indexOf("=")&&(o=(o=t.getParam("body_id","","hash"))[t.id]||o);var r=t.settings.body_class||"";-1!==r.indexOf("=")&&(r=(r=t.getParam("body_class","","hash"))[t.id]||"");var c=t.settings.directionality?' dir="'+t.settings.directionality+'"':"";return"<!DOCTYPE html><html><head>"+n+'</head><body id="'+i(o)+'" class="mce-content-body '+i(r)+'"'+i(c)+">"+t.getContent()+'<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A") {e.preventDefault();}}}, false);<\/script> </body></html>'},m=function(e,t,n){var i=l(e);if(n)t.src="data:text/html;charset=utf-8,"+encodeURIComponent(i);else{var o=t.contentWindow.document;o.open(),o.write(i),o.close()}},t=function(n){var i=!r.ie,e='<iframe src="" frameborder="0"'+(i?' sandbox="allow-scripts"':"")+"></iframe>",t=c(n),o=a(n);n.windowManager.open({title:"Preview",width:t,height:o,html:e,buttons:{text:"Close",onclick:function(e){e.control.parent().parent().close()}},onPostRender:function(e){var t=e.control.getEl("body").firstChild;m(n,t,i)}})},n=function(e){e.addCommand("mcePreview",function(){t(e)})},i=function(e){e.addButton("preview",{title:"Preview",cmd:"mcePreview"}),e.addMenuItem("preview",{text:"Preview",cmd:"mcePreview",context:"view"})};e.add("preview",function(e){n(e),i(e)})}();

/***/ }),

/***/ "85e6":
/***/ (function(module, exports) {

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=function(t){t.addCommand("mcePrint",function(){t.getWin().print()})},i=function(t){t.addButton("print",{title:"Print",cmd:"mcePrint"}),t.addMenuItem("print",{text:"Print",cmd:"mcePrint",icon:"print"})};t.add("print",function(t){n(t),i(t),t.addShortcut("Meta+P","","mcePrint")})}();

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8c15":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=tinymce.util.Tools.resolve("tinymce.Env"),n=function(e){return e.getParam("pagebreak_separator","\x3c!-- pagebreak --\x3e")},i=function(e){return e.getParam("pagebreak_split_block",!1)},t=function(){return"mce-pagebreak"},r=function(){return'<img src="'+a.transparentSrc+'" class="mce-pagebreak" data-mce-resize="false" data-mce-placeholder />'},c=function(c){var o=n(c),a=new RegExp(o.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g,function(e){return"\\"+e}),"gi");c.on("BeforeSetContent",function(e){e.content=e.content.replace(a,r())}),c.on("PreInit",function(){c.serializer.addNodeFilter("img",function(e){for(var a,n,t=e.length;t--;)if((n=(a=e[t]).attr("class"))&&-1!==n.indexOf("mce-pagebreak")){var r=a.parent;if(c.schema.getBlockElements()[r.name]&&i(c)){r.type=3,r.value=o,r.raw=!0,a.remove();continue}a.type=3,a.value=o,a.raw=!0}})})},o=r,g=t,u=function(e){e.addCommand("mcePageBreak",function(){e.settings.pagebreak_split_block?e.insertContent("<p>"+o()+"</p>"):e.insertContent(o())})},m=function(a){a.on("ResolveName",function(e){"IMG"===e.target.nodeName&&a.dom.hasClass(e.target,g())&&(e.name="pagebreak")})},s=function(e){e.addButton("pagebreak",{title:"Page break",cmd:"mcePageBreak"}),e.addMenuItem("pagebreak",{text:"Page break",icon:"pagebreak",cmd:"mcePageBreak",context:"insert"})};e.add("pagebreak",function(e){u(e),s(e),c(e),m(e)})}();

/***/ }),

/***/ "8c57":
/***/ (function(module, exports) {

!function(){"use strict";var r=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return r(n())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),p=tinymce.util.Tools.resolve("tinymce.util.Tools");function h(e){return e&&1===e.nodeType&&"false"===e.contentEditable}var u={findAndReplaceDOMText:function(t,n,r,a,i){var o,d,m,f,p,g,c=[],l=0;function s(e,t){if(t=t||0,!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");var n=e.index;if(0<t){var r=e[t];if(!r)throw new Error("Invalid capture group");n+=e[0].indexOf(r),e[0]=r}return[n,n+e[0].length,[e[0]]]}if(m=n.ownerDocument,f=i.getBlockElements(),p=i.getWhiteSpaceElements(),g=i.getShortEndedElements(),d=function e(t){var n;if(3===t.nodeType)return t.data;if(p[t.nodeName]&&!f[t.nodeName])return"";if(n="",h(t))return"\n";if((f[t.nodeName]||g[t.nodeName])&&(n+="\n"),t=t.firstChild)for(;n+=e(t),t=t.nextSibling;);return n}(n)){if(t.global)for(;o=t.exec(d);)c.push(s(o,a));else o=d.match(t),c.push(s(o,a));return c.length&&(l=c.length,function(e,t,n){var r,a,i,o,d=[],c=0,l=e,s=t.shift(),u=0;e:for(;;){if((f[l.nodeName]||g[l.nodeName]||h(l))&&c++,3===l.nodeType&&(!a&&l.length+c>=s[1]?(a=l,o=s[1]-c):r&&d.push(l),!r&&l.length+c>s[0]&&(r=l,i=s[0]-c),c+=l.length),r&&a){if(l=n({startNode:r,startNodeIndex:i,endNode:a,endNodeIndex:o,innerNodes:d,match:s[2],matchIndex:u}),c-=a.length-o,a=r=null,d=[],u++,!(s=t.shift()))break}else if(p[l.nodeName]&&!f[l.nodeName]||!l.firstChild){if(l.nextSibling){l=l.nextSibling;continue}}else if(!h(l)){l=l.firstChild;continue}for(;;){if(l.nextSibling){l=l.nextSibling;break}if(l.parentNode===e)break e;l=l.parentNode}}}(n,c,function(e){var h;if("function"!=typeof e){var r=e.nodeType?e:m.createElement(e);h=function(e,t){var n=r.cloneNode(!1);return n.setAttribute("data-mce-index",t),e&&n.appendChild(m.createTextNode(e)),n}}else h=e;return function(e){var t,n,r,a=e.startNode,i=e.endNode,o=e.matchIndex;if(a===i){var d=a;r=d.parentNode,0<e.startNodeIndex&&(t=m.createTextNode(d.data.substring(0,e.startNodeIndex)),r.insertBefore(t,d));var c=h(e.match[0],o);return r.insertBefore(c,d),e.endNodeIndex<d.length&&(n=m.createTextNode(d.data.substring(e.endNodeIndex)),r.insertBefore(n,d)),d.parentNode.removeChild(d),c}t=m.createTextNode(a.data.substring(0,e.startNodeIndex)),n=m.createTextNode(i.data.substring(e.endNodeIndex));for(var l=h(a.data.substring(e.startNodeIndex),o),s=0,u=e.innerNodes.length;s<u;++s){var f=e.innerNodes[s],p=h(f.data,o);f.parentNode.replaceChild(p,f)}var g=h(i.data.substring(0,e.endNodeIndex),o);return(r=a.parentNode).insertBefore(t,a),r.insertBefore(l,a),r.removeChild(a),(r=i.parentNode).insertBefore(g,i),r.insertBefore(n,i),r.removeChild(i),g}}(r))),l}}},g=function(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t},m=function(e){var t=e.parentNode;e.firstChild&&t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)},o=function(e,t){var n,r=[];if((n=p.toArray(e.getBody().getElementsByTagName("span"))).length)for(var a=0;a<n.length;a++){var i=g(n[a]);null!==i&&i.length&&i===t.toString()&&r.push(n[a])}return r},f=function(e,t,n){var r=t.get(),a=e.dom;(n=!1!==n)?r++:r--,a.removeClass(o(e,t.get()),"mce-match-marker-selected");var i=o(e,r);return i.length?(a.addClass(o(e,r),"mce-match-marker-selected"),e.selection.scrollIntoView(i[0]),r):-1},v=function(e,t){var n=t.parentNode;e.remove(t),e.isEmpty(n)&&e.remove(n)},x=function(e,t){var n=f(e,t,!0);-1!==n&&t.set(n)},b=function(e,t){var n=f(e,t,!1);-1!==n&&t.set(n)},N=function(e){var t=g(e);return null!==t&&0<t.length},y=function(e,t,n){var r,a,i,o;for(a=p.toArray(e.getBody().getElementsByTagName("span")),r=0;r<a.length;r++){var d=g(a[r]);null!==d&&d.length&&(d===t.get().toString()&&(i||(i=a[r].firstChild),o=a[r].firstChild),m(a[r]))}if(i&&o){var c=e.dom.createRng();return c.setStart(i,0),c.setEnd(o,o.data.length),!1!==n&&e.selection.setRng(c),c}},k=function(e,t){return 0<o(e,t.get()+1).length},C=function(e,t){return 0<o(e,t.get()-1).length},T={done:y,find:function(e,t,n,r,a){n=(n=n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).replace(/\s/g,"[^\\S\\r\\n]"),n=a?"\\b"+n+"\\b":n;var i,o,d,c,l,s=(i=e,o=t,d=new RegExp(n,r?"g":"gi"),(l=i.dom.create("span",{"data-mce-bogus":1})).className="mce-match-marker",c=i.getBody(),y(i,o,!1),u.findAndReplaceDOMText(d,c,l,!1,i.schema));return s&&(t.set(-1),t.set(f(e,t,!0))),s},next:x,prev:b,replace:function(e,t,n,r,a){var i,o,d,c,l,s,u=t.get();for(r=!1!==r,d=e.getBody(),o=p.grep(p.toArray(d.getElementsByTagName("span")),N),i=0;i<o.length;i++){var f=g(o[i]);if(c=l=parseInt(f,10),a||c===t.get()){for(n.length?(o[i].firstChild.nodeValue=n,m(o[i])):v(e.dom,o[i]);o[++i];){if((c=parseInt(g(o[i]),10))!==l){i--;break}v(e.dom,o[i])}r&&u--}else l>t.get()&&o[i].setAttribute("data-mce-index",l-1)}return t.set(u),r?(s=k(e,t),x(e,t)):(s=C(e,t),b(e,t)),!a&&s},hasNext:k,hasPrev:C},n=function(r,a){return{done:function(e){return T.done(r,a,e)},find:function(e,t,n){return T.find(r,a,e,t,n)},next:function(){return T.next(r,a)},prev:function(){return T.prev(r,a)},replace:function(e,t,n){return T.replace(r,a,e,t,n)}}},a=function(i,o){var e,d={};function c(){s.statusbar.find("#next").disabled(!1===T.hasNext(i,o)),s.statusbar.find("#prev").disabled(!1===T.hasPrev(i,o))}function l(){i.windowManager.alert("Could not find the specified string.",function(){s.find("#find")[0].focus()})}i.undoManager.add(),e=p.trim(i.selection.getContent({format:"text"}));var s=i.windowManager.open({layout:"flex",pack:"center",align:"center",onClose:function(){i.focus(),T.done(i,o),i.undoManager.add()},onSubmit:function(e){var t,n,r,a;return e.preventDefault(),n=s.find("#case").checked(),a=s.find("#words").checked(),(r=s.find("#find").value()).length?d.text===r&&d.caseState===n&&d.wholeWord===a?T.hasNext(i,o)?(T.next(i,o),void c()):void l():((t=T.find(i,o,r,n,a))||l(),s.statusbar.items().slice(1).disabled(0===t),c(),void(d={text:r,caseState:n,wholeWord:a})):(T.done(i,o,!1),void s.statusbar.items().slice(1).disabled(!0))},buttons:[{text:"Find",subtype:"primary",onclick:function(){s.submit()}},{text:"Replace",disabled:!0,onclick:function(){T.replace(i,o,s.find("#replace").value())||(s.statusbar.items().slice(1).disabled(!0),o.set(-1),d={})}},{text:"Replace all",disabled:!0,onclick:function(){T.replace(i,o,s.find("#replace").value(),!0,!0),s.statusbar.items().slice(1).disabled(!0),d={}}},{type:"spacer",flex:1},{text:"Prev",name:"prev",disabled:!0,onclick:function(){T.prev(i,o),c()}},{text:"Next",name:"next",disabled:!0,onclick:function(){T.next(i,o),c()}}],title:"Find and replace",items:{type:"form",padding:20,labelGap:30,spacing:10,items:[{type:"textbox",name:"find",size:40,label:"Find",value:e},{type:"textbox",name:"replace",size:40,label:"Replace with"},{type:"checkbox",name:"case",text:"Match case",label:" "},{type:"checkbox",name:"words",text:"Whole words",label:" "}]}})},i=function(e,t){e.addCommand("SearchReplace",function(){a(e,t)})},d=function(e,t){return function(){a(e,t)}},c=function(e,t){e.addMenuItem("searchreplace",{text:"Find and replace",shortcut:"Meta+F",onclick:d(e,t),separator:"before",context:"edit"}),e.addButton("searchreplace",{tooltip:"Find and replace",onclick:d(e,t)}),e.shortcuts.add("Meta+F","",d(e,t))};e.add("searchreplace",function(e){var t=r(-1);return i(e,t),c(e,t),n(e,t)})}();

/***/ }),

/***/ "919f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "97eb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9ac0":
/***/ (function(module, exports) {

!function(){"use strict";var o=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.util.Tools"),e=function(e){e=t.trim(e);var o=function(o,t){e=e.replace(o,t)};return o(/<a.*?href=\"(.*?)\".*?>(.*?)<\/a>/gi,"[url=$1]$2[/url]"),o(/<font.*?color=\"(.*?)\".*?class=\"codeStyle\".*?>(.*?)<\/font>/gi,"[code][color=$1]$2[/color][/code]"),o(/<font.*?color=\"(.*?)\".*?class=\"quoteStyle\".*?>(.*?)<\/font>/gi,"[quote][color=$1]$2[/color][/quote]"),o(/<font.*?class=\"codeStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[code][color=$1]$2[/color][/code]"),o(/<font.*?class=\"quoteStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[quote][color=$1]$2[/color][/quote]"),o(/<span style=\"color: ?(.*?);\">(.*?)<\/span>/gi,"[color=$1]$2[/color]"),o(/<font.*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[color=$1]$2[/color]"),o(/<span style=\"font-size:(.*?);\">(.*?)<\/span>/gi,"[size=$1]$2[/size]"),o(/<font>(.*?)<\/font>/gi,"$1"),o(/<img.*?src=\"(.*?)\".*?\/>/gi,"[img]$1[/img]"),o(/<span class=\"codeStyle\">(.*?)<\/span>/gi,"[code]$1[/code]"),o(/<span class=\"quoteStyle\">(.*?)<\/span>/gi,"[quote]$1[/quote]"),o(/<strong class=\"codeStyle\">(.*?)<\/strong>/gi,"[code][b]$1[/b][/code]"),o(/<strong class=\"quoteStyle\">(.*?)<\/strong>/gi,"[quote][b]$1[/b][/quote]"),o(/<em class=\"codeStyle\">(.*?)<\/em>/gi,"[code][i]$1[/i][/code]"),o(/<em class=\"quoteStyle\">(.*?)<\/em>/gi,"[quote][i]$1[/i][/quote]"),o(/<u class=\"codeStyle\">(.*?)<\/u>/gi,"[code][u]$1[/u][/code]"),o(/<u class=\"quoteStyle\">(.*?)<\/u>/gi,"[quote][u]$1[/u][/quote]"),o(/<\/(strong|b)>/gi,"[/b]"),o(/<(strong|b)>/gi,"[b]"),o(/<\/(em|i)>/gi,"[/i]"),o(/<(em|i)>/gi,"[i]"),o(/<\/u>/gi,"[/u]"),o(/<span style=\"text-decoration: ?underline;\">(.*?)<\/span>/gi,"[u]$1[/u]"),o(/<u>/gi,"[u]"),o(/<blockquote[^>]*>/gi,"[quote]"),o(/<\/blockquote>/gi,"[/quote]"),o(/<br \/>/gi,"\n"),o(/<br\/>/gi,"\n"),o(/<br>/gi,"\n"),o(/<p>/gi,""),o(/<\/p>/gi,"\n"),o(/&nbsp;|\u00a0/gi," "),o(/&quot;/gi,'"'),o(/&lt;/gi,"<"),o(/&gt;/gi,">"),o(/&amp;/gi,"&"),e},i=function(e){e=t.trim(e);var o=function(o,t){e=e.replace(o,t)};return o(/\n/gi,"<br />"),o(/\[b\]/gi,"<strong>"),o(/\[\/b\]/gi,"</strong>"),o(/\[i\]/gi,"<em>"),o(/\[\/i\]/gi,"</em>"),o(/\[u\]/gi,"<u>"),o(/\[\/u\]/gi,"</u>"),o(/\[url=([^\]]+)\](.*?)\[\/url\]/gi,'<a href="$1">$2</a>'),o(/\[url\](.*?)\[\/url\]/gi,'<a href="$1">$1</a>'),o(/\[img\](.*?)\[\/img\]/gi,'<img src="$1" />'),o(/\[color=(.*?)\](.*?)\[\/color\]/gi,'<font color="$1">$2</font>'),o(/\[code\](.*?)\[\/code\]/gi,'<span class="codeStyle">$1</span>&nbsp;'),o(/\[quote.*?\](.*?)\[\/quote\]/gi,'<span class="quoteStyle">$1</span>&nbsp;'),e};o.add("bbcode",function(){return{init:function(o){o.on("beforeSetContent",function(o){o.content=i(o.content)}),o.on("postProcess",function(o){o.set&&(o.content=i(o.content)),o.get&&(o.content=e(o.content))})}}})}();

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ac75":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=tinymce.util.Tools.resolve("tinymce.util.Tools"),c=tinymce.util.Tools.resolve("tinymce.util.XHR"),t=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),i=function(e){return e.getParam("template_cdate_classes","cdate")},s=function(e){return e.getParam("template_mdate_classes","mdate")},u=function(e){return e.getParam("template_selected_content_classes","selcontent")},p=function(e){return e.getParam("template_preview_replace_values")},m=function(e){return e.getParam("template_replace_values")},a=function(e){return e.templates},d=function(e){return e.getParam("template_cdate_format",e.getLang("template.cdate_format"))},f=function(e){return e.getParam("template_mdate_format",e.getLang("template.mdate_format"))},g=function(e){return e.getParam("template_popup_width",600)},h=function(e){return Math.min(t.DOM.getViewPort().h,e.getParam("template_popup_height",500))},y=function(e,t){if((e=""+e).length<t)for(var n=0;n<t-e.length;n++)e="0"+e;return e},v=function(e,t,n){var a="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),r="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),l="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),c="January February March April May June July August September October November December".split(" ");return n=n||new Date,t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace("%D","%m/%d/%Y")).replace("%r","%I:%M:%S %p")).replace("%Y",""+n.getFullYear())).replace("%y",""+n.getYear())).replace("%m",y(n.getMonth()+1,2))).replace("%d",y(n.getDate(),2))).replace("%H",""+y(n.getHours(),2))).replace("%M",""+y(n.getMinutes(),2))).replace("%S",""+y(n.getSeconds(),2))).replace("%I",""+((n.getHours()+11)%12+1))).replace("%p",n.getHours()<12?"AM":"PM")).replace("%B",""+e.translate(c[n.getMonth()]))).replace("%b",""+e.translate(l[n.getMonth()]))).replace("%A",""+e.translate(r[n.getDay()]))).replace("%a",""+e.translate(a[n.getDay()]))).replace("%%","%")},M=function(e,n,t){return o.each(t,function(e,t){"function"==typeof e&&(e=e(t)),n=n.replace(new RegExp("\\{\\$"+t+"\\}","g"),e)}),n},_=function(e,t){var a=e.dom,r=m(e);o.each(a.select("*",t),function(n){o.each(r,function(e,t){a.hasClass(n,t)&&"function"==typeof r[t]&&r[t](n)})})},b=function(e,t){return new RegExp("\\b"+t+"\\b","g").test(e.className)},n=function(t,n){return function(){var e=a(t);"function"!=typeof e?"string"==typeof e?c.send({url:e,success:function(e){n(JSON.parse(e))}}):n(e):e(n)}},T=M,r=_,x=function(t,e,n){var a,r,l=t.dom,c=t.selection.getContent();n=M(0,n,m(t)),a=l.create("div",null,n),(r=l.select(".mceTmpl",a))&&0<r.length&&(a=l.create("div",null)).appendChild(r[0].cloneNode(!0)),o.each(l.select("*",a),function(e){b(e,i(t).replace(/\s+/g,"|"))&&(e.innerHTML=v(t,d(t))),b(e,s(t).replace(/\s+/g,"|"))&&(e.innerHTML=v(t,f(t))),b(e,u(t).replace(/\s+/g,"|"))&&(e.innerHTML=c)}),_(t,a),t.execCommand("mceInsertContent",!1,a.innerHTML),t.addVisual()},l=function(e){e.addCommand("mceInsertTemplate",function(a){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.concat(e);return a.apply(null,n)}}(x,e))},P=function(a){a.on("PreProcess",function(e){var t=a.dom,n=f(a);o.each(t.select("div",e.node),function(e){t.hasClass(e,"mceTmpl")&&(o.each(t.select("*",e),function(e){t.hasClass(e,a.getParam("template_mdate_classes","mdate").replace(/\s+/g,"|"))&&(e.innerHTML=v(a,n))}),r(a,e))})})},S=function(t,e,n){if(-1===n.indexOf("<html>")){var a="";o.each(t.contentCSS,function(e){a+='<link type="text/css" rel="stylesheet" href="'+t.documentBaseURI.toAbsolute(e)+'">'});var r=t.settings.body_class||"";-1!==r.indexOf("=")&&(r=(r=t.getParam("body_class","","hash"))[t.id]||""),n="<!DOCTYPE html><html><head>"+a+'</head><body class="'+r+'">'+n+"</body></html>"}n=T(t,n,p(t));var l=e.find("iframe")[0].getEl().contentWindow.document;l.open(),l.write(n),l.close()},D=function(n,e){var a,r,t=[];if(e&&0!==e.length)o.each(e,function(e){t.push({selected:!t.length,text:e.title,value:{url:e.url,content:e.content,description:e.description}})}),(a=n.windowManager.open({title:"Insert template",layout:"flex",direction:"column",align:"stretch",padding:15,spacing:10,items:[{type:"form",flex:0,padding:0,items:[{type:"container",label:"Templates",items:{type:"listbox",label:"Templates",name:"template",values:t,onselect:function(e){var t=e.control.value();t.url?c.send({url:t.url,success:function(e){S(n,a,r=e)}}):(r=t.content,S(n,a,r)),a.find("#description")[0].text(e.control.value().description)}}}]},{type:"label",name:"description",label:"Description",text:"\xa0"},{type:"iframe",flex:1,border:1}],onsubmit:function(){x(n,!1,r)},minWidth:g(n),minHeight:h(n)})).find("listbox")[0].fire("select");else{var l=n.translate("No templates defined.");n.notificationManager.open({text:l,type:"info"})}},H=function(t){return function(e){D(t,e)}},w=function(e){e.addButton("template",{title:"Insert template",onclick:n(e.settings,H(e))}),e.addMenuItem("template",{text:"Template",onclick:n(e.settings,H(e)),icon:"template",context:"insert"})};e.add("template",function(e){w(e),l(e),P(e)})}();

/***/ }),

/***/ "bba3":
/***/ (function(module, exports) {

!function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(n,e){var t,i=(t=n).plugins.visualchars&&t.plugins.visualchars.isEnabled()?'<span class="mce-nbsp">&nbsp;</span>':"&nbsp;";n.insertContent(function(n,e){for(var t="",i=0;i<e;i++)t+=n;return t}(i,e)),n.dom.setAttrib(n.dom.select("span.mce-nbsp"),"data-mce-bogus","1")},e=function(n){n.addCommand("mceNonBreaking",function(){i(n,1)})},o=tinymce.util.Tools.resolve("tinymce.util.VK"),a=function(n){var e=n.getParam("nonbreaking_force_tab",0);return"boolean"==typeof e?!0===e?3:0:e},t=function(e){var t=a(e);0<t&&e.on("keydown",function(n){if(n.keyCode===o.TAB&&!n.isDefaultPrevented()){if(n.shiftKey)return;n.preventDefault(),n.stopImmediatePropagation(),i(e,t)}})},r=function(n){n.addButton("nonbreaking",{title:"Nonbreaking space",cmd:"mceNonBreaking"}),n.addMenuItem("nonbreaking",{icon:"nonbreaking",text:"Nonbreaking space",cmd:"mceNonBreaking",context:"insert"})};n.add("nonbreaking",function(n){e(n),r(n),t(n)})}();

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bf1c":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),y=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},x=function(n,r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n(r.apply(null,e))}},C=function(e){return function(){return e}},o=function(e){return e};function b(r){for(var o=[],e=1;e<arguments.length;e++)o[e-1]=arguments[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=o.concat(e);return r.apply(null,n)}}var t,n,r,i,u,m=function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return!n.apply(null,e)}},c=function(e){return e()},a=C(!1),l=C(!0),f=a,s=l,d=function(){return g},g=(i={fold:function(e,t){return e()},is:f,isSome:f,isNone:s,getOr:r=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:r,orThunk:n,map:d,ap:d,each:function(){},bind:d,flatten:d,exists:f,forall:s,filter:d,equals:t=function(e){return e.isNone()},equals_:t,toArray:function(){return[]},toString:C("none()")},Object.freeze&&Object.freeze(i),i),h=function(n){var e=function(){return n},t=function(){return o},r=function(e){return e(n)},o={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:s,isNone:f,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return h(e(n))},ap:function(e){return e.fold(d,function(e){return h(e(n))})},each:function(e){e(n)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(n)?o:g},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(f,function(e){return t(n,e)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},R={some:h,none:d,from:function(e){return null===e||e===undefined?g:h(e)}},p=function(t){return function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&Array.prototype.isPrototypeOf(e)?"array":"object"===t&&String.prototype.isPrototypeOf(e)?"string":t}(e)===t}},v=p("string"),w=p("array"),S=p("boolean"),T=p("function"),D=p("number"),O=(u=Array.prototype.indexOf)===undefined?function(e,t){return _(e,t)}:function(e,t){return u.call(e,t)},k=function(e,t){return-1<O(e,t)},N=function(e,t){return M(e,t).isSome()},E=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o];r[o]=t(i,o,e)}return r},A=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n,e)},P=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r];t(i,r,e)&&n.push(i)}return n},I=function(e,t,n){return function(e,t){for(var n=e.length-1;0<=n;n--)t(e[n],n,e)}(e,function(e){n=t(n,e)}),n},B=function(e,t,n){return A(e,function(e){n=t(n,e)}),n},W=function(e,t){for(var n=0,r=e.length;n<r;n++){var o=e[n];if(t(o,n,e))return R.some(o)}return R.none()},M=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n,e))return R.some(n);return R.none()},_=function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return n;return-1},L=Array.prototype.push,j=function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!Array.prototype.isPrototypeOf(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);L.apply(t,e[n])}return t},F=function(e,t){var n=E(e,t);return j(n)},z=function(e,t){for(var n=0,r=e.length;n<r;++n)if(!0!==t(e[n],n,e))return!1;return!0},H=Array.prototype.slice,U=function(e){var t=H.call(e,0);return t.reverse(),t},q=(T(Array.from)&&Array.from,Object.keys),V=function(e,t){for(var n=q(e),r=0,o=n.length;r<o;r++){var i=n[r];t(e[i],i,e)}},G=function(e,r){return Y(e,function(e,t,n){return{k:t,v:r(e,t,n)}})},Y=function(r,o){var i={};return V(r,function(e,t){var n=o(e,t,r);i[n.k]=n.v}),i},X=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(t.length!==n.length)throw new Error('Wrong number of arguments to struct. Expected "['+t.length+']", got '+n.length+" arguments");var r={};return A(t,function(e,t){r[e]=C(n[t])}),r}},K=function(e){return e.slice(0).sort()},J=function(e,t){throw new Error("All required keys ("+K(e).join(", ")+") were not specified. Specified keys were: "+K(t).join(", ")+".")},$=function(e){throw new Error("Unsupported keys for object: "+K(e).join(", "))},Q=function(t,e){if(!w(e))throw new Error("The "+t+" fields must be an array. Was: "+e+".");A(e,function(e){if(!v(e))throw new Error("The value "+e+" in the "+t+" fields was not a string.")})},Z=function(e){var n=K(e);W(n,function(e,t){return t<n.length-1&&e===n[t+1]}).each(function(e){throw new Error("The field: "+e+" occurs more than once in the combined fields: ["+n.join(", ")+"].")})},ee=function(o,i){var u=o.concat(i);if(0===u.length)throw new Error("You must specify at least one required or optional field.");return Q("required",o),Q("optional",i),Z(u),function(t){var n=q(t);z(o,function(e){return k(n,e)})||J(o,n);var e=P(n,function(e){return!k(u,e)});0<e.length&&$(e);var r={};return A(o,function(e){r[e]=C(t[e])}),A(i,function(e){r[e]=C(Object.prototype.hasOwnProperty.call(t,e)?R.some(t[e]):R.none())}),r}},te=X("width","height"),ne=X("rows","columns"),re=X("row","column"),oe=X("x","y"),ie=X("element","rowspan","colspan"),ue=X("element","rowspan","colspan","isNew"),ae={dimensions:te,grid:ne,address:re,coords:oe,extended:X("element","rowspan","colspan","row","column"),detail:ie,detailnew:ue,rowdata:X("element","cells","section"),elementnew:X("element","isNew"),rowdatanew:X("element","cells","section","isNew"),rowcells:X("cells","section"),rowdetails:X("details","section"),bounds:X("startRow","startCol","finishRow","finishCol")},ce=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:C(e)}},le={fromHtml:function(e,t){var n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),"HTML must have a single root node";return ce(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e);return ce(n)},fromText:function(e,t){var n=(t||document).createTextNode(e);return ce(n)},fromDom:ce,fromPoint:function(e,t,n){var r=e.dom();return R.from(r.elementFromPoint(t,n)).map(ce)}},fe=(Node.ATTRIBUTE_NODE,Node.CDATA_SECTION_NODE,Node.COMMENT_NODE),se=Node.DOCUMENT_NODE,de=(Node.DOCUMENT_TYPE_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE),me=Node.TEXT_NODE,ge=(Node.PROCESSING_INSTRUCTION_NODE,Node.ENTITY_REFERENCE_NODE,Node.ENTITY_NODE,Node.NOTATION_NODE,de),he=se,pe=function(e,t){var n=e.dom();if(n.nodeType!==ge)return!1;if(n.matches!==undefined)return n.matches(t);if(n.msMatchesSelector!==undefined)return n.msMatchesSelector(t);if(n.webkitMatchesSelector!==undefined)return n.webkitMatchesSelector(t);if(n.mozMatchesSelector!==undefined)return n.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")},ve=function(e){return e.nodeType!==ge&&e.nodeType!==he||0===e.childElementCount},be="undefined"!=typeof window?window:Function("return this;")(),we=function(e,t){return function(e,t){for(var n=t!==undefined&&null!==t?t:be,r=0;r<e.length&&n!==undefined&&null!==n;++r)n=n[e[r]];return n}(e.split("."),t)},ye=function(e,t){var n=we(e,t);if(n===undefined||null===n)throw e+" not available on this browser";return n},xe=function(){return ye("Node")},Ce=function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)},Re=function(e,t){return Ce(e,t,xe().DOCUMENT_POSITION_CONTAINED_BY)},Se=function(n){var r,o=!1;return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o||(o=!0,r=n.apply(null,e)),r}},Te=function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.test(t))return r}return undefined}(e,t);if(!n)return{major:0,minor:0};var r=function(e){return Number(t.replace(n,"$"+e))};return Oe(r(1),r(2))},De=function(){return Oe(0,0)},Oe=function(e,t){return{major:e,minor:t}},ke={nu:Oe,detect:function(e,t){var n=String(t).toLowerCase();return 0===e.length?De():Te(e,n)},unknown:De},Ne="Firefox",Ee=function(e,t){return function(){return t===e}},Ae=function(e){var t=e.current;return{current:t,version:e.version,isEdge:Ee("Edge",t),isChrome:Ee("Chrome",t),isIE:Ee("IE",t),isOpera:Ee("Opera",t),isFirefox:Ee(Ne,t),isSafari:Ee("Safari",t)}},Pe={unknown:function(){return Ae({current:undefined,version:ke.unknown()})},nu:Ae,edge:C("Edge"),chrome:C("Chrome"),ie:C("IE"),opera:C("Opera"),firefox:C(Ne),safari:C("Safari")},Ie="Windows",Be="Android",We="Solaris",Me="FreeBSD",_e=function(e,t){return function(){return t===e}},Le=function(e){var t=e.current;return{current:t,version:e.version,isWindows:_e(Ie,t),isiOS:_e("iOS",t),isAndroid:_e(Be,t),isOSX:_e("OSX",t),isLinux:_e("Linux",t),isSolaris:_e(We,t),isFreeBSD:_e(Me,t)}},je={unknown:function(){return Le({current:undefined,version:ke.unknown()})},nu:Le,windows:C(Ie),ios:C("iOS"),android:C(Be),linux:C("Linux"),osx:C("OSX"),solaris:C(We),freebsd:C(Me)},Fe=function(e,t){var n=String(t).toLowerCase();return W(e,function(e){return e.search(n)})},ze=function(e,n){return Fe(e,n).map(function(e){var t=ke.detect(e.versionRegexes,n);return{current:e.name,version:t}})},He=function(e,n){return Fe(e,n).map(function(e){var t=ke.detect(e.versionRegexes,n);return{current:e.name,version:t}})},Ue=function(e,t){return-1!==e.indexOf(t)},qe=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Ve=function(t){return function(e){return Ue(e,t)}},Ge=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Ue(e,"edge/")&&Ue(e,"chrome")&&Ue(e,"safari")&&Ue(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,qe],search:function(e){return Ue(e,"chrome")&&!Ue(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Ue(e,"msie")||Ue(e,"trident")}},{name:"Opera",versionRegexes:[qe,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Ve("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Ve("firefox")},{name:"Safari",versionRegexes:[qe,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Ue(e,"safari")||Ue(e,"mobile/"))&&Ue(e,"applewebkit")}}],Ye=[{name:"Windows",search:Ve("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Ue(e,"iphone")||Ue(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Ve("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Ve("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Ve("linux"),versionRegexes:[]},{name:"Solaris",search:Ve("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Ve("freebsd"),versionRegexes:[]}],Xe={browsers:C(Ge),oses:C(Ye)},Ke=function(e){var t,n,r,o,i,u,a,c,l,f,s,d=Xe.browsers(),m=Xe.oses(),g=ze(d,e).fold(Pe.unknown,Pe.nu),h=He(m,e).fold(je.unknown,je.nu);return{browser:g,os:h,deviceType:(n=g,r=e,o=(t=h).isiOS()&&!0===/ipad/i.test(r),i=t.isiOS()&&!o,u=t.isAndroid()&&3===t.version.major,a=t.isAndroid()&&4===t.version.major,c=o||u||a&&!0===/mobile/i.test(r),l=t.isiOS()||t.isAndroid(),f=l&&!c,s=n.isSafari()&&t.isiOS()&&!1===/safari/i.test(r),{isiPad:C(o),isiPhone:C(i),isTablet:C(c),isPhone:C(f),isTouch:C(l),isAndroid:t.isAndroid,isiOS:t.isiOS,isWebView:C(s)})}},Je={detect:Se(function(){var e=navigator.userAgent;return Ke(e)})},$e=function(e,t){return e.dom()===t.dom()},Qe=Je.detect().browser.isIE()?function(e,t){return Re(e.dom(),t.dom())}:function(e,t){var n=e.dom(),r=t.dom();return n!==r&&n.contains(r)},Ze=pe,et=function(e){return le.fromDom(e.dom().ownerDocument)},tt=function(e){var t=e.dom();return R.from(t.parentNode).map(le.fromDom)},nt=function(e,t){for(var n=T(t)?t:C(!1),r=e.dom(),o=[];null!==r.parentNode&&r.parentNode!==undefined;){var i=r.parentNode,u=le.fromDom(i);if(o.push(u),!0===n(u))break;r=i}return o},rt=function(e){var t=e.dom();return R.from(t.previousSibling).map(le.fromDom)},ot=function(e){var t=e.dom();return R.from(t.nextSibling).map(le.fromDom)},it=function(e){var t=e.dom();return E(t.childNodes,le.fromDom)},ut=function(e,t){var n=e.dom().childNodes;return R.from(n[t]).map(le.fromDom)},at=(X("element","offset"),function(e,t,n){return F(it(e),function(e){return pe(e,t)?n(e)?[e]:[]:at(e,t,n)})}),ct={firstLayer:function(e,t){return at(e,t,C(!0))},filterFirstLayer:at},lt=function(e){return e.dom().nodeName.toLowerCase()},ft=function(e){return e.dom().nodeType},st=function(t){return function(e){return ft(e)===t}},dt=function(e){return ft(e)===fe||"#comment"===lt(e)},mt=st(de),gt=st(me),ht=st(se),pt=function(e,t,n){if(!(v(n)||S(n)||D(n)))throw console.error("Invalid call to Attr.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")},vt=function(e,t,n){pt(e.dom(),t,n)},bt=function(e,t){var n=e.dom();V(t,function(e,t){pt(n,t,e)})},wt=function(e,t){var n=e.dom().getAttribute(t);return null===n?undefined:n},yt=function(e,t){var n=e.dom();return!(!n||!n.hasAttribute)&&n.hasAttribute(t)},xt=function(e,t){e.dom().removeAttribute(t)},Ct=function(e){return B(e.dom().attributes,function(e,t){return e[t.name]=t.value,e},{})},Rt=function(e){var t=gt(e)?e.dom().parentNode:e.dom();return t!==undefined&&null!==t&&t.ownerDocument.body.contains(t)},St=Se(function(){return Tt(le.fromDom(document))}),Tt=function(e){var t=e.dom().body;if(null===t||t===undefined)throw"Body is not available yet";return le.fromDom(t)},Dt=function(e,t){var n=[];return A(it(e),function(e){t(e)&&(n=n.concat([e])),n=n.concat(Dt(e,t))}),n},Ot=function(e,t,n){return r=function(e){return pe(e,t)},P(nt(e,n),r);var r},kt=function(e,t){return n=function(e){return pe(e,t)},P(it(e),n);var n},Nt=function(e,t){return n=t,o=(r=e)===undefined?document:r.dom(),ve(o)?[]:E(o.querySelectorAll(n),le.fromDom);var n,r,o};function Et(e,t,n,r,o){return e(n,r)?R.some(n):T(o)&&o(n)?R.none():t(n,r,o)}var At,Pt,It,Bt,Wt,Mt=function(e,t,n){for(var r=e.dom(),o=T(n)?n:C(!1);r.parentNode;){r=r.parentNode;var i=le.fromDom(r);if(t(i))return R.some(i);if(o(i))break}return R.none()},_t=function(e,t,n){return Mt(e,function(e){return pe(e,t)},n)},Lt=function(e,t){return n=function(e){return pe(e,t)},W(e.dom().childNodes,x(n,le.fromDom)).map(le.fromDom);var n},jt=function(e,t){return n=t,o=(r=e)===undefined?document:r.dom(),ve(o)?R.none():R.from(o.querySelector(n)).map(le.fromDom);var n,r,o},Ft=function(e,t,n){return Et(pe,_t,e,t,n)},zt=function(e,t,n){var r=n!==undefined?n:C(!1);return r(t)?R.none():k(e,lt(t))?R.some(t):_t(t,e.join(","),function(e){return pe(e,"table")||r(e)})},Ht=function(t,e){return tt(e).map(function(e){return kt(e,t)})},Ut=b(Ht,"th,td"),qt=b(Ht,"tr"),Vt=function(e,t){return parseInt(wt(e,t),10)},Gt={cell:function(e,t){return zt(["td","th"],e,t)},firstCell:function(e){return jt(e,"th,td")},cells:function(e){return ct.firstLayer(e,"th,td")},neighbourCells:Ut,table:function(e,t){return Ft(e,"table",t)},row:function(e,t){return zt(["tr"],e,t)},rows:function(e){return ct.firstLayer(e,"tr")},notCell:function(e,t){return zt(["caption","tr","tbody","tfoot","thead"],e,t)},neighbourRows:qt,attr:Vt,grid:function(e,t,n){var r=Vt(e,t),o=Vt(e,n);return ae.grid(r,o)}},Yt=function(e){var t=Gt.rows(e);return E(t,function(e){var t=e,n=tt(t).map(function(e){var t=lt(e);return"tfoot"===t||"thead"===t||"tbody"===t?t:"tbody"}).getOr("tbody"),r=E(Gt.cells(e),function(e){var t=yt(e,"rowspan")?parseInt(wt(e,"rowspan"),10):1,n=yt(e,"colspan")?parseInt(wt(e,"colspan"),10):1;return ae.detail(e,t,n)});return ae.rowdata(t,r,n)})},Xt=function(e,n){return E(e,function(e){var t=E(Gt.cells(e),function(e){var t=yt(e,"rowspan")?parseInt(wt(e,"rowspan"),10):1,n=yt(e,"colspan")?parseInt(wt(e,"colspan"),10):1;return ae.detail(e,t,n)});return ae.rowdata(e,t,n.section())})},Kt=function(e,t){return e+","+t},Jt=function(e,t){var n=F(e.all(),function(e){return e.cells()});return P(n,t)},$t={generate:function(e){var f={},t=[],n=e.length,s=0;A(e,function(e,c){var l=[];A(e.cells(),function(e,t){for(var n=0;f[Kt(c,n)]!==undefined;)n++;for(var r=ae.extended(e.element(),e.rowspan(),e.colspan(),c,n),o=0;o<e.colspan();o++)for(var i=0;i<e.rowspan();i++){var u=n+o,a=Kt(c+i,u);f[a]=r,s=Math.max(s,u+1)}l.push(r)}),t.push(ae.rowdata(e.element(),l,e.section()))});var r=ae.grid(n,s);return{grid:C(r),access:C(f),all:C(t)}},getAt:function(e,t,n){var r=e.access()[Kt(t,n)];return r!==undefined?R.some(r):R.none()},findItem:function(e,t,n){var r=Jt(e,function(e){return n(t,e.element())});return 0<r.length?R.some(r[0]):R.none()},filterItems:Jt,justCells:function(e){var t=E(e.all(),function(e){return e.cells()});return j(t)}},Qt=function(e){return e.style!==undefined},Zt=function(e,t,n){if(!v(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n);Qt(e)&&e.style.setProperty(t,n)},en=function(e,t,n){var r=e.dom();Zt(r,t,n)},tn=function(e,t){var n=e.dom();V(t,function(e,t){Zt(n,t,e)})},nn=function(e,t){var n=e.dom(),r=window.getComputedStyle(n).getPropertyValue(t),o=""!==r||Rt(e)?r:rn(n,t);return null===o?undefined:o},rn=function(e,t){return Qt(e)?e.style.getPropertyValue(t):""},on=function(e,t){var n=e.dom(),r=rn(n,t);return R.from(r).filter(function(e){return 0<e.length})},un=function(e,t){var n,r,o=e.dom();r=t,Qt(n=o)&&n.style.removeProperty(r),yt(e,"style")&&""===wt(e,"style").replace(/^\s+|\s+$/g,"")&&xt(e,"style")},an=function(t,n){tt(t).each(function(e){e.dom().insertBefore(n.dom(),t.dom())})},cn=function(e,t){ot(e).fold(function(){tt(e).each(function(e){fn(e,t)})},function(e){an(e,t)})},ln=function(t,n){ut(t,0).fold(function(){fn(t,n)},function(e){t.dom().insertBefore(n.dom(),e.dom())})},fn=function(e,t){e.dom().appendChild(t.dom())},sn=function(e,t){an(e,t),fn(t,e)},dn=function(r,o){A(o,function(e,t){var n=0===t?r:o[t-1];cn(n,e)})},mn=function(t,e){A(e,function(e){fn(t,e)})},gn=function(e){e.dom().textContent="",A(it(e),function(e){hn(e)})},hn=function(e){var t=e.dom();null!==t.parentNode&&t.parentNode.removeChild(t)},pn=function(e){var t,n=it(e);0<n.length&&(t=e,A(n,function(e){an(t,e)})),hn(e)},vn=X("minRow","minCol","maxRow","maxCol"),bn=function(e,t){var n,i,r,u,a,c,l,o,f,s,d=function(e){return pe(e.element(),t)},m=Yt(e),g=$t.generate(m),h=(i=d,r=(n=g).grid().columns(),u=n.grid().rows(),a=r,l=c=0,V(n.access(),function(e){if(i(e)){var t=e.row(),n=t+e.rowspan()-1,r=e.column(),o=r+e.colspan()-1;t<u?u=t:c<n&&(c=n),r<a?a=r:l<o&&(l=o)}}),vn(u,a,c,l)),p="th:not("+t+"),td:not("+t+")",v=ct.filterFirstLayer(e,"th,td",function(e){return pe(e,p)});return A(v,hn),function(e,t,n,r){for(var o,i,u,a=t.grid().columns(),c=t.grid().rows(),l=0;l<c;l++)for(var f=!1,s=0;s<a;s++)l<n.minRow()||l>n.maxRow()||s<n.minCol()||s>n.maxCol()||($t.getAt(t,l,s).filter(r).isNone()?(o=f,i=e[l].element(),u=le.fromTag("td"),fn(u,le.fromTag("br")),(o?fn:ln)(i,u)):f=!0)}(m,g,h,d),o=e,f=h,s=P(ct.firstLayer(o,"tr"),function(e){return 0===e.dom().childElementCount}),A(s,hn),f.minCol()!==f.maxCol()&&f.minRow()!==f.maxRow()||A(ct.firstLayer(o,"th,td"),function(e){xt(e,"rowspan"),xt(e,"colspan")}),xt(o,"width"),xt(o,"height"),un(o,"width"),un(o,"height"),e},wn=function(e,t){return le.fromDom(e.dom().cloneNode(t))},yn=function(e){return wn(e,!1)},xn=function(e){return wn(e,!0)},Cn=function(e,t){var n,r,o,i,u=(n=e,r=t,o=le.fromTag(r),i=Ct(n),bt(o,i),o),a=it(xn(e));return mn(u,a),u},Rn=(At=gt,Pt="text",It=function(e){return At(e)?R.from(e.dom().nodeValue):R.none()},Bt=Je.detect().browser,{get:function(e){if(!At(e))throw new Error("Can only get "+Pt+" value of a "+Pt+" node");return Wt(e).getOr("")},getOption:Wt=Bt.isIE()&&10===Bt.version.major?function(e){try{return It(e)}catch(t){return R.none()}}:It,set:function(e,t){if(!At(e))throw new Error("Can only set raw "+Pt+" value of a "+Pt+" node");e.dom().nodeValue=t}}),Sn=function(e){return Rn.get(e)},Tn=function(e){return Rn.getOption(e)},Dn=function(e,t){Rn.set(e,t)},On=function(e){return"img"===lt(e)?1:Tn(e).fold(function(){return it(e).length},function(e){return e.length})},kn=["img","br"],Nn=function(e){return Tn(e).filter(function(e){return 0!==e.trim().length||-1<e.indexOf("\xa0")}).isSome()||k(kn,lt(e))},En=function(e){return r=Nn,(o=function(e){for(var t=0;t<e.childNodes.length;t++){if(r(le.fromDom(e.childNodes[t])))return R.some(le.fromDom(e.childNodes[t]));var n=o(e.childNodes[t]);if(n.isSome())return n}return R.none()})(e.dom());var r,o},An=function(e){return Pn(e,Nn)},Pn=function(e,i){var u=function(e){for(var t=it(e),n=t.length-1;0<=n;n--){var r=t[n];if(i(r))return R.some(r);var o=u(r);if(o.isSome())return o}return R.none()};return u(e)},In=function(){var e=le.fromTag("td");return fn(e,le.fromTag("br")),e},Bn=function(e,t,n){var r=Cn(e,t);return V(n,function(e,t){null===e?xt(r,t):vt(r,t,e)}),r},Wn=function(e){return e},Mn=function(e){return function(){return le.fromTag("tr",e.dom())}},_n=function(d,e,m){return{row:Mn(e),cell:function(e){var r,o,i,t,n,u,a,c=et(e.element()),l=le.fromTag(lt(e.element()),c.dom()),f=m.getOr(["strong","em","b","i","span","font","h1","h2","h3","h4","h5","h6","p","div"]),s=0<f.length?(r=e.element(),o=l,i=f,En(r).map(function(e){var t=i.join(","),n=Ot(e,t,function(e){return $e(e,r)});return I(n,function(e,t){var n=yn(t);return xt(n,"contenteditable"),fn(e,n),n},o)}).getOr(o)):l;return fn(s,le.fromTag("br")),t=e.element(),n=l,u=t.dom(),a=n.dom(),Qt(u)&&Qt(a)&&(a.style.cssText=u.style.cssText),un(l,"height"),1!==e.colspan()&&un(e.element(),"width"),d(e.element(),l),l},replace:Bn,gap:In}},Ln=function(e){return{row:Mn(e),cell:In,replace:Wn,gap:In}},jn=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"];function Fn(){return{up:C({selector:_t,closest:Ft,predicate:Mt,all:nt}),down:C({selector:Nt,predicate:Dt}),styles:C({get:nn,getRaw:on,set:en,remove:un}),attrs:C({get:wt,set:vt,remove:xt,copyTo:function(e,t){var n=Ct(e);bt(t,n)}}),insert:C({before:an,after:cn,afterAll:dn,append:fn,appendAll:mn,prepend:ln,wrap:sn}),remove:C({unwrap:pn,remove:hn}),create:C({nu:le.fromTag,clone:function(e){return le.fromDom(e.dom().cloneNode(!1))},text:le.fromText}),query:C({comparePosition:function(e,t){return e.dom().compareDocumentPosition(t.dom())},prevSibling:rt,nextSibling:ot}),property:C({children:it,name:lt,parent:tt,isText:gt,isComment:dt,isElement:mt,getText:Sn,setText:Dn,isBoundary:function(e){return!!mt(e)&&("body"===lt(e)||k(jn,lt(e)))},isEmptyTag:function(e){return!!mt(e)&&k(["br","img","hr","input"],lt(e))}}),eq:$e,is:Ze}}var zn=X("left","right"),Hn=function(e,t,n){var r=e.property().children(t);return M(r,b(e.eq,n)).map(function(e){return{before:C(r.slice(0,e)),after:C(r.slice(e+1))}})},Un=function(n,r,o){return Hn(n,r,o).map(function(e){var t=n.create().clone(r);return n.insert().appendAll(t,e.before().concat([o])),n.insert().appendAll(r,e.after()),n.insert().before(r,t),zn(t,r)})},qn=function(n,r,e){return Hn(n,r,e).map(function(e){var t=n.create().clone(r);return n.insert().appendAll(t,e.after()),n.insert().after(r,t),zn(r,t)})},Vn=function(i,e,u,a){var r=X("first","second","splits"),c=function(e,t,o){var n=r(e,R.none(),o);return u(e)?r(e,t,o):i.property().parent(e).bind(function(r){return a(i,r,e).map(function(e){var t=[{first:e.left,second:e.right}],n=u(r)?r:e.left();return c(n,R.some(e.right()),o.concat(t))}).getOr(n)})};return c(e,R.none(),[])},Gn=function(r,o,e,t){var n=o(r,e);return I(t,function(e,t){var n=o(r,t);return Yn(r,e,n)},n)},Yn=function(t,e,n){return e.bind(function(e){return n.filter(b(t.eq,e))})},Xn=function(e,t,n){return 0<n.length?Gn(e,t,(r=n)[0],r.slice(1)):R.none();var r},Kn=function(e,t){return b(e.eq,t)},Jn=function(t,e,n,r){var o=r!==undefined?r:C(!1),i=[e].concat(t.up().all(e)),u=[n].concat(t.up().all(n)),a=function(t){return M(t,o).fold(function(){return t},function(e){return t.slice(0,e+1)})},c=a(i),l=a(u),f=W(c,function(e){return N(l,Kn(t,e))});return{firstpath:C(c),secondpath:C(l),shared:C(f)}},$n=function(t,e,n){var r=Jn(t,e,n);return r.shared().bind(function(e){return function(o,i,e,t){var u=o.property().children(i);if(o.eq(i,e[0]))return R.some([e[0]]);if(o.eq(i,t[0]))return R.some([t[0]]);var n=function(e){var t=U(e),n=M(t,Kn(o,i)).getOr(-1),r=n<t.length-1?t[n+1]:t[n];return M(u,Kn(o,r))},r=n(e),a=n(t);return r.bind(function(r){return a.map(function(e){var t=Math.min(r,e),n=Math.max(r,e);return u.slice(t,n+1)})})}(t,e,r.firstpath(),r.secondpath())})},Qn=Jn,Zn=function(e,t,n){return Xn(e,t,n)},er=function(e,t,n){return $n(e,t,n)},tr=function(e,t,n,r){return Qn(e,t,n,r)},nr=function(e,t,n){return Un(e,t,n)},rr=function(e,t,n){return qn(e,t,n)},or=function(e,t,n,r){return Vn(e,t,n,r)},ir=Fn(),ur={sharedOne:function(n,e){return Zn(ir,function(e,t){return n(t)},e)},subset:function(e,t){return er(ir,e,t)},ancestors:function(e,t,n){return tr(ir,e,t,n)},breakToLeft:function(e,t){return nr(ir,e,t)},breakToRight:function(e,t){return rr(ir,e,t)},breakPath:function(e,t,r){return or(ir,e,t,function(e,t,n){return r(t,n)})}},ar=function(e,t){return t.column()>=e.startCol()&&t.column()+t.colspan()-1<=e.finishCol()&&t.row()>=e.startRow()&&t.row()+t.rowspan()-1<=e.finishRow()},cr=function(e,t){var n=t.column(),r=t.column()+t.colspan()-1,o=t.row(),i=t.row()+t.rowspan()-1;return n<=e.finishCol()&&r>=e.startCol()&&o<=e.finishRow()&&i>=e.startRow()},lr=function(e,t){for(var n=!0,r=b(ar,t),o=t.startRow();o<=t.finishRow();o++)for(var i=t.startCol();i<=t.finishCol();i++)n=n&&$t.getAt(e,o,i).exists(r);return n?R.some(t):R.none()},fr=function(e,t,n){var r=$t.findItem(e,t,$e),o=$t.findItem(e,n,$e);return r.bind(function(r){return o.map(function(e){return t=r,n=e,ae.bounds(Math.min(t.row(),n.row()),Math.min(t.column(),n.column()),Math.max(t.row()+t.rowspan()-1,n.row()+n.rowspan()-1),Math.max(t.column()+t.colspan()-1,n.column()+n.colspan()-1));var t,n})})},sr=fr,dr=function(t,e,n){return fr(t,e,n).bind(function(e){return lr(t,e)})},mr=function(r,e,o,i){return $t.findItem(r,e,$e).bind(function(e){var t=0<o?e.row()+e.rowspan()-1:e.row(),n=0<i?e.column()+e.colspan()-1:e.column();return $t.getAt(r,t+o,n+i).map(function(e){return e.element()})})},gr=function(n,e,t){return sr(n,e,t).map(function(e){var t=$t.filterItems(n,b(cr,e));return E(t,function(e){return e.element()})})},hr=function(e,t){return $t.findItem(e,t,function(e,t){return Qe(t,e)}).bind(function(e){return e.element()})},pr=function(e){var t=Yt(e);return $t.generate(t)},vr=function(n,r,o){return Gt.table(n).bind(function(e){var t=pr(e);return mr(t,n,r,o)})},br=function(e,t,n){var r=pr(e);return gr(r,t,n)},wr=function(e,t,n,r,o){var i=pr(e),u=$e(e,n)?t:hr(i,t),a=$e(e,o)?r:hr(i,r);return gr(i,u,a)},yr=function(e,t,n){var r=pr(e);return dr(r,t,n)},xr=function(e,t){return _t(e,"table")},Cr=ee(["boxes","start","finish"],[]),Rr=function(a,c,r){var l=function(t){return function(e){return r(e)||$e(e,t)}};return $e(a,c)?R.some(Cr({boxes:R.some([a]),start:a,finish:c})):xr(a).bind(function(u){return xr(c).bind(function(i){if($e(u,i))return R.some(Cr({boxes:br(u,a,c),start:a,finish:c}));if(Qe(u,i)){var e=0<(t=Ot(c,"td,th",l(u))).length?t[t.length-1]:c;return R.some(Cr({boxes:wr(u,a,u,c,i),start:a,finish:e}))}if(Qe(i,u)){var t,n=0<(t=Ot(a,"td,th",l(i))).length?t[t.length-1]:a;return R.some(Cr({boxes:wr(i,a,u,c,i),start:a,finish:n}))}return ur.ancestors(a,c).shared().bind(function(e){return Ft(e,"table",r).bind(function(e){var t=Ot(c,"td,th",l(e)),n=0<t.length?t[t.length-1]:c,r=Ot(a,"td,th",l(e)),o=0<r.length?r[r.length-1]:a;return R.some(Cr({boxes:wr(e,a,u,c,i),start:o,finish:n}))})})})})},Sr=Rr,Tr=function(e,t){var n=Nt(e,t);return 0<n.length?R.some(n):R.none()},Dr=function(e,t,n,r,o){return(i=e,u=o,W(i,function(e){return pe(e,u)})).bind(function(e){return vr(e,t,n).bind(function(e){return n=r,_t(t=e,"table").bind(function(e){return jt(e,n).bind(function(e){return Rr(e,t).bind(function(t){return t.boxes().map(function(e){return{boxes:C(e),start:C(t.start()),finish:C(t.finish())}})})})});var t,n})});var i,u},Or=function(e,t,r){return jt(e,t).bind(function(n){return jt(e,r).bind(function(t){return ur.sharedOne(xr,[n,t]).map(function(e){return{first:C(n),last:C(t),table:C(e)}})})})},kr=function(e,t){return Tr(e,t)},Nr=function(o,e,t){return Or(o,e,t).bind(function(n){var e=function(e){return $e(o,e)},t=_t(n.first(),"thead,tfoot,tbody,table",e),r=_t(n.last(),"thead,tfoot,tbody,table",e);return t.bind(function(t){return r.bind(function(e){return $e(t,e)?yr(n.table(),n.first(),n.last()):R.none()})})})},Er="data-mce-selected",Ar="data-mce-first-selected",Pr="data-mce-last-selected",Ir={selected:C(Er),selectedSelector:C("td[data-mce-selected],th[data-mce-selected]"),attributeSelector:C("[data-mce-selected]"),firstSelected:C(Ar),firstSelectedSelector:C("td[data-mce-first-selected],th[data-mce-first-selected]"),lastSelected:C(Pr),lastSelectedSelector:C("td[data-mce-last-selected],th[data-mce-last-selected]")},Br=function(u){if(!w(u))throw new Error("cases must be an array");if(0===u.length)throw new Error("there must be at least one case");var a=[],n={};return A(u,function(e,r){var t=q(e);if(1!==t.length)throw new Error("one and only one name per case");var o=t[0],i=e[o];if(n[o]!==undefined)throw new Error("duplicate key detected:"+o);if("cata"===o)throw new Error("cannot have a case named cata (sorry)");if(!w(i))throw new Error("case arguments must be an array");a.push(o),n[o]=function(){var e=arguments.length;if(e!==i.length)throw new Error("Wrong number of arguments to case "+o+". Expected "+i.length+" ("+i+"), got "+e);for(var n=new Array(e),t=0;t<n.length;t++)n[t]=arguments[t];return{fold:function(){if(arguments.length!==u.length)throw new Error("Wrong number of arguments to fold. Expected "+u.length+", got "+arguments.length);return arguments[r].apply(null,n)},match:function(e){var t=q(e);if(a.length!==t.length)throw new Error("Wrong number of arguments to match. Expected: "+a.join(",")+"\nActual: "+t.join(","));if(!z(a,function(e){return k(t,e)}))throw new Error("Not all branches were specified when using match. Specified: "+t.join(", ")+"\nRequired: "+a.join(", "));return e[o].apply(null,n)},log:function(e){console.log(e,{constructors:a,constructor:o,params:n})}}}}),n},Wr=Br([{none:[]},{multiple:["elements"]},{single:["selection"]}]),Mr={cata:function(e,t,n,r){return e.fold(t,n,r)},none:Wr.none,multiple:Wr.multiple,single:Wr.single},_r=function(e,t){return Mr.cata(t.get(),C([]),o,C([e]))},Lr=function(n,e){return Mr.cata(e.get(),R.none,function(t,e){return 0===t.length?R.none():Nr(n,Ir.firstSelectedSelector(),Ir.lastSelectedSelector()).bind(function(e){return 1<t.length?R.some({bounds:C(e),cells:C(t)}):R.none()})},R.none)},jr=function(e,t){var n=_r(e,t);return 0<n.length&&z(n,function(e){return yt(e,"rowspan")&&1<parseInt(wt(e,"rowspan"),10)||yt(e,"colspan")&&1<parseInt(wt(e,"colspan"),10)})?R.some(n):R.none()},Fr=_r,zr=function(e){return{element:C(e),mergable:R.none,unmergable:R.none,selection:C([e])}},Hr=X("element","clipboard","generators"),Ur={noMenu:zr,forMenu:function(e,t,n){return{element:C(n),mergable:C(Lr(t,e)),unmergable:C(jr(n,e)),selection:C(Fr(n,e))}},notCell:function(e){return zr(e)},paste:Hr,pasteRows:function(e,t,n,r,o){return{element:C(n),mergable:R.none,unmergable:R.none,selection:C(Fr(n,e)),clipboard:C(r),generators:C(o)}}},qr=function(f,e,s,d){f.on("BeforeGetContent",function(n){!0===n.selection&&Mr.cata(e.get(),y,function(e){var t;n.preventDefault(),(t=e,Gt.table(t[0]).map(xn).map(function(e){return[bn(e,Ir.attributeSelector())]})).each(function(e){var t;n.content="text"===n.format?E(e,function(e){return e.dom().innerText}).join(""):(t=f,E(e,function(e){return t.selection.serializer.serialize(e.dom(),{})}).join(""))})},y)}),f.on("BeforeSetContent",function(l){!0===l.selection&&!0===l.paste&&R.from(f.dom.getParent(f.selection.getStart(),"th,td")).each(function(e){var c=le.fromDom(e);Gt.table(c).bind(function(t){var e,n,r,o=P((e=l.content,(r=(n||document).createElement("div")).innerHTML=e,it(le.fromDom(r))),function(e){return"meta"!==lt(e)});if(1===o.length&&"table"===lt(o[0])){l.preventDefault();var i=le.fromDom(f.getDoc()),u=Ln(i),a=Ur.paste(c,o[0],u);s.pasteCells(t,a).each(function(e){f.selection.setRng(e),f.focus(),d.clear(t)})}})})})};function Vr(r,o){var e=function(e){var t=o(e);if(t<=0||null===t){var n=nn(e,r);return parseFloat(n)||0}return t},i=function(o,e){return B(e,function(e,t){var n=nn(o,t),r=n===undefined?0:parseInt(n,10);return isNaN(r)?e:e+r},0)};return{set:function(e,t){if(!D(t)&&!t.match(/^[0-9]+$/))throw r+".set accepts only positive integer values. Value was "+t;var n=e.dom();Qt(n)&&(n.style[r]=t+"px")},get:e,getOuter:e,aggregate:i,max:function(e,t,n){var r=i(e,n);return r<t?t-r:0}}}var Gr=Vr("height",function(e){var t=e.dom();return Rt(e)?t.getBoundingClientRect().height:t.offsetHeight}),Yr=function(e){return Gr.get(e)},Xr=function(e){return Gr.getOuter(e)},Kr=Vr("width",function(e){return e.dom().offsetWidth}),Jr=function(e){return Kr.get(e)},$r=function(e){return Kr.getOuter(e)},Qr=Je.detect(),Zr=function(e,t,n){return r=nn(e,t),o=n,i=parseFloat(r),isNaN(i)?o:i;var r,o,i},eo=function(e){return Qr.browser.isIE()||Qr.browser.isEdge()?(n=Zr(t=e,"padding-top",0),r=Zr(t,"padding-bottom",0),o=Zr(t,"border-top-width",0),i=Zr(t,"border-bottom-width",0),u=t.dom().getBoundingClientRect().height,"border-box"===nn(t,"box-sizing")?u:u-n-r-(o+i)):Zr(e,"height",Yr(e));var t,n,r,o,i,u},to=/(\d+(\.\d+)?)(\w|%)*/,no=/(\d+(\.\d+)?)%/,ro=/(\d+(\.\d+)?)px|em/,oo=function(e,t){en(e,"height",t+"px")},io=function(e,t,n,r){var o,i,u,a,c,l,f,s,d,m=parseInt(e,10);return s=l="%",d=(f=e).length-l.length,""!==s&&(f.length<s.length||f.substr(d,d+s.length)!==s)||"table"===lt(t)?m:(o=t,i=m,u=n,a=r,c=Gt.table(o).map(function(e){var t=u(e);return Math.floor(i/100*t)}).getOr(i),a(o,c),c)},uo=function(e){var t,n=on(t=e,"height").getOrThunk(function(){return eo(t)+"px"});return n?io(n,e,Yr,oo):Yr(e)},ao=function(e,t){return yt(e,t)?parseInt(wt(e,t),10):1},co=function(e){return on(e,"width").fold(function(){return R.from(wt(e,"width"))},function(e){return R.some(e)})},lo=function(e,t){return e/t.pixelWidth()*100},fo={percentageBasedSizeRegex:C(no),pixelBasedSizeRegex:C(ro),setPixelWidth:function(e,t){en(e,"width",t+"px")},setPercentageWidth:function(e,t){en(e,"width",t+"%")},setHeight:oo,getPixelWidth:function(t,n){return co(t).fold(function(){return Jr(t)},function(e){return function(e,t,n){if(ro.test(t)){var r=ro.exec(t);return parseInt(r[1],10)}if(no.test(t)){var o=no.exec(t),i=parseFloat(o[1]);return i/100*n.pixelWidth()}return Jr(e)}(t,e,n)})},getPercentageWidth:function(t,n){return co(t).fold(function(){var e=Jr(t);return lo(e,n)},function(e){return function(e,t,n){if(no.test(t)){var r=no.exec(t);return parseFloat(r[1])}var o=Jr(e);return lo(o,n)}(t,e,n)})},getGenericWidth:function(e){return co(e).bind(function(e){if(to.test(e)){var t=to.exec(e);return R.some({width:C(t[1]),unit:C(t[3])})}return R.none()})},setGenericWidth:function(e,t,n){en(e,"width",t+n)},getHeight:function(e){return n="rowspan",uo(t=e)/ao(t,n);var t,n},getRawWidth:co},so=function(n,r){fo.getGenericWidth(n).each(function(e){var t=e.width()/2;fo.setGenericWidth(n,t,e.unit()),fo.setGenericWidth(r,t,e.unit())})},mo=function(n,r){return{left:C(n),top:C(r),translate:function(e,t){return mo(n+e,r+t)}}},go=mo,ho=function(e,t){return e!==undefined?e:t!==undefined?t:0},po=function(e){var t,n,r=e.dom().ownerDocument,o=r.body,i=(t=le.fromDom(r),(n=t.dom())===n.window&&t instanceof Window?t:ht(t)?n.defaultView||n.parentWindow:null),u=r.documentElement,a=ho(i.pageYOffset,u.scrollTop),c=ho(i.pageXOffset,u.scrollLeft),l=ho(u.clientTop,o.clientTop),f=ho(u.clientLeft,o.clientLeft);return vo(e).translate(c-f,a-l)},vo=function(e){var t,n,r,o=e.dom(),i=o.ownerDocument,u=i.body,a=le.fromDom(i.documentElement);return u===o?go(u.offsetLeft,u.offsetTop):(t=e,n=a||le.fromDom(document.documentElement),Mt(t,b($e,n)).isSome()?(r=o.getBoundingClientRect(),go(r.left,r.top)):go(0,0))},bo=X("row","y"),wo=X("col","x"),yo=function(e){return po(e).left()+$r(e)},xo=function(e){return po(e).left()},Co=function(e,t){return wo(e,xo(t))},Ro=function(e,t){return wo(e,yo(t))},So=function(e){return po(e).top()},To=function(n,t,r){if(0===r.length)return[];var e=E(r.slice(1),function(e,t){return e.map(function(e){return n(t,e)})}),o=r[r.length-1].map(function(e){return t(r.length-1,e)});return e.concat([o])},Do={delta:o,positions:b(To,function(e,t){return bo(e,So(t))},function(e,t){return bo(e,So(t)+Xr(t))}),edge:So},Oo={delta:o,edge:xo,positions:b(To,Co,Ro)},ko={height:Do,rtl:{delta:function(e,t){return-e},edge:yo,positions:b(To,Ro,Co)},ltr:Oo},No={ltr:ko.ltr,rtl:ko.rtl};function Eo(t){var n=function(e){return t(e).isRtl()?No.rtl:No.ltr};return{delta:function(e,t){return n(t).delta(e,t)},edge:function(e){return n(e).edge(e)},positions:function(e,t){return n(t).positions(e,t)}}}var Ao,Po=function(e){var t=Yt(e);return $t.generate(t).grid()},Io=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return Io(n())}}},Bo=function(r,o,i){if(0===o.length)throw new Error("You must specify at least one required field.");return Q("required",o),Z(o),function(t){var n=q(t);z(o,function(e){return k(n,e)})||J(o,n),r(o,n);var e=P(o,function(e){return!i.validate(t[e],e)});return 0<e.length&&function(e,t){throw new Error("All values need to be of type: "+t+". Keys ("+K(e).join(", ")+") were not.")}(e,i.label),t}},Wo=function(t,e){var n=P(e,function(e){return!k(t,e)});0<n.length&&$(n)},Mo=function(e){return Bo(Wo,e,{validate:T,label:"function"})},_o=function(e){var t=yt(e,"colspan")?parseInt(wt(e,"colspan"),10):1,n=yt(e,"rowspan")?parseInt(wt(e,"rowspan"),10):1;return{element:C(e),colspan:C(t),rowspan:C(n)}},Lo=Mo(["cell","row","replace","gap"]),jo=function(r,e){Lo(r);var n=Io(R.none()),o=e!==undefined?e:_o,i=function(e){var t,n=o(e);return t=n,r.cell(t)},u=function(e){var t=i(e);return n.get().isNone()&&n.set(R.some(t)),a=R.some({item:e,replacement:t}),t},a=R.none();return{getOrInit:function(t,n){return a.fold(function(){return u(t)},function(e){return n(t,e.item)?e.replacement:u(t)})},cursor:n.get}},Fo=function(o,a){return function(n){var r=Io(R.none());Lo(n);var i=[],u=function(e){var t=n.replace(e,a,{scope:o});return i.push({item:e,sub:t}),r.get().isNone()&&r.set(R.some(t)),t};return{replaceOrInit:function(t,n){return(r=t,o=n,W(i,function(e){return o(e.item,r)})).fold(function(){return u(t)},function(e){return n(t,e.item)?e.sub:u(t)});var r,o},cursor:r.get}}},zo=function(n){Lo(n);var e=Io(R.none());return{combine:function(t){return e.get().isNone()&&e.set(R.some(t)),function(){var e=n.cell({element:C(t),colspan:C(1),rowspan:C(1)});return un(e,"width"),un(t,"width"),e}},cursor:e.get}},Ho=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","table","thead","tfoot","tbody","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"],Uo=function(e,t){var n=e.property().name(t);return k(Ho,n)},qo=function(e,t){return k(["br","img","hr","input"],e.property().name(t))},Vo=Uo,Go=function(e,t){var n=e.property().name(t);return k(["ol","ul"],n)},Yo=qo,Xo=Fn(),Ko=function(e){return Vo(Xo,e)},Jo=function(e){return Go(Xo,e)},$o=function(e){return Yo(Xo,e)},Qo=function(e){var t,i=function(e){return"br"===lt(e)},n=function(o){return An(o).bind(function(n){var r=ot(n).map(function(e){return!!Ko(e)||($o(e)?"img"!==lt(e):void 0)}).getOr(!1);return tt(n).map(function(e){return!0===r||"li"===lt(t=e)||Mt(t,Jo).isSome()||i(n)||Ko(e)&&!$e(o,e)?[]:[le.fromTag("br")];var t})}).getOr([])},r=0===(t=F(e,function(e){var t=it(e);return z(t,function(e){return i(e)||gt(e)&&0===Sn(e).trim().length})?[]:t.concat(n(e))})).length?[le.fromTag("br")]:t;gn(e[0]),mn(e[0],r)},Zo=Object.prototype.hasOwnProperty,ei=(Ao=function(e,t){return t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var o=e[r];for(var i in o)Zo.call(o,i)&&(n[i]=Ao(n[i],o[i]))}return n}),ti=function(e){for(var t=[],n=function(e){t.push(e)},r=0;r<e.length;r++)e[r].each(n);return t},ni=function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n],n);if(r.isSome())return r}return R.none()},ri=function(e,t){return ae.rowcells(t,e.section())},oi=function(e,t){return e.cells()[t]},ii={addCell:function(e,t,n){var r=e.cells(),o=r.slice(0,t),i=r.slice(t),u=o.concat([n]).concat(i);return ri(e,u)},setCells:ri,mutateCell:function(e,t,n){e.cells()[t]=n},getCell:oi,getCellElement:function(e,t){return oi(e,t).element()},mapCells:function(e,t){var n=e.cells(),r=E(n,t);return ae.rowcells(r,e.section())},cellLength:function(e){return e.cells().length}},ui=function(e,t){if(0===e.length)return 0;var n=e[0];return M(e,function(e){return!t(n.element(),e.element())}).fold(function(){return e.length},function(e){return e})},ai=function(e,t,n,r){var o,i,u,a,c=(o=e,i=t,o[i]).cells().slice(n),l=ui(c,r),f=(u=e,a=n,E(u,function(e){return ii.getCell(e,a)})).slice(t),s=ui(f,r);return{colspan:C(l),rowspan:C(s)}},ci=function(o,i){var u=E(o,function(e,t){return E(e.cells(),function(e,t){return!1})});return E(o,function(e,r){var t=F(e.cells(),function(e,t){if(!1===u[r][t]){var n=ai(o,r,t,i);return function(e,t,n,r){for(var o=e;o<e+n;o++)for(var i=t;i<t+r;i++)u[o][i]=!0}(r,t,n.rowspan(),n.colspan()),[ae.detailnew(e.element(),n.rowspan(),n.colspan(),e.isNew())]}return[]});return ae.rowdetails(t,e.section())})},li=function(e,t,n){for(var r=[],o=0;o<e.grid().rows();o++){for(var i=[],u=0;u<e.grid().columns();u++){var a=$t.getAt(e,o,u).map(function(e){return ae.elementnew(e.element(),n)}).getOrThunk(function(){return ae.elementnew(t.gap(),!0)});i.push(a)}var c=ae.rowcells(i,e.all()[o].section());r.push(c)}return r},fi=function(e,t,n,r){n===r?xt(e,t):vt(e,t,n)},si=function(o,e){var i=[],u=[],t=function(e,t){0<e.length?function(e,t){var n=Lt(o,t).getOrThunk(function(){var e=le.fromTag(t,et(o).dom());return fn(o,e),e});gn(n);var r=E(e,function(e){e.isNew()&&i.push(e.element());var t=e.element();return gn(t),A(e.cells(),function(e){e.isNew()&&u.push(e.element()),fi(e.element(),"colspan",e.colspan(),1),fi(e.element(),"rowspan",e.rowspan(),1),fn(t,e.element())}),t});mn(n,r)}(e,t):Lt(o,t).each(hn)},n=[],r=[],a=[];return A(e,function(e){switch(e.section()){case"thead":n.push(e);break;case"tbody":r.push(e);break;case"tfoot":a.push(e)}}),t(n,"thead"),t(r,"tbody"),t(a,"tfoot"),{newRows:C(i),newCells:C(u)}},di=function(e){return E(e,function(e){var n=yn(e.element());return A(e.cells(),function(e){var t=xn(e.element());fi(t,"colspan",e.colspan(),1),fi(t,"rowspan",e.rowspan(),1),fn(n,t)}),n})},mi=function(e,t){for(var n=[],r=0;r<e;r++)n.push(t(r));return n},gi=function(e,t){for(var n=[],r=e;r<t;r++)n.push(r);return n},hi=function(t,n){if(n<0||n>=t.length-1)return R.none();var e=t[n].fold(function(){var e=U(t.slice(0,n));return ni(e,function(e,t){return e.map(function(e){return{value:e,delta:t+1}})})},function(e){return R.some({value:e,delta:0})}),r=t[n+1].fold(function(){var e=t.slice(n+1);return ni(e,function(e,t){return e.map(function(e){return{value:e,delta:t+1}})})},function(e){return R.some({value:e,delta:1})});return e.bind(function(n){return r.map(function(e){var t=e.delta+n.delta;return Math.abs(e.value-n.value)/t})})},pi=function(e,t,n){var r=e();return W(r,t).orThunk(function(){return R.from(r[0]).orThunk(n)}).map(function(e){return e.element()})},vi=function(n){var e=n.grid(),t=gi(0,e.columns()),r=gi(0,e.rows());return E(t,function(t){return pi(function(){return F(r,function(e){return $t.getAt(n,e,t).filter(function(e){return e.column()===t}).fold(C([]),function(e){return[e]})})},function(e){return 1===e.colspan()},function(){return $t.getAt(n,0,t)})})},bi=function(n){var e=n.grid(),t=gi(0,e.rows()),r=gi(0,e.columns());return E(t,function(t){return pi(function(){return F(r,function(e){return $t.getAt(n,t,e).filter(function(e){return e.row()===t}).fold(C([]),function(e){return[e]})})},function(e){return 1===e.rowspan()},function(){return $t.getAt(n,t,0)})})},wi=function(e,t,n,r,o){var i=le.fromTag("div");return tn(i,{position:"absolute",left:t-r/2+"px",top:n+"px",height:o+"px",width:r+"px"}),bt(i,{"data-column":e,role:"presentation"}),i},yi=function(e,t,n,r,o){var i=le.fromTag("div");return tn(i,{position:"absolute",left:t+"px",top:n-o/2+"px",height:o+"px",width:r+"px"}),bt(i,{"data-row":e,role:"presentation"}),i},xi=function(e){var t=e.replace(/\./g,"-");return{resolve:function(e){return t+"-"+e}}},Ci={resolve:xi("ephox-snooker").resolve},Ri=function(e,t){var n=wt(e,t);return n===undefined||""===n?[]:n.split(" ")},Si=function(e){return e.dom().classList!==undefined},Ti=function(e,t){return o=t,i=Ri(n=e,r="class").concat([o]),vt(n,r,i.join(" ")),!0;var n,r,o,i},Di=function(e,t){return o=t,0<(i=P(Ri(n=e,r="class"),function(e){return e!==o})).length?vt(n,r,i.join(" ")):xt(n,r),!1;var n,r,o,i},Oi=function(e,t){Si(e)?e.dom().classList.add(t):Ti(e,t)},ki=function(e){0===(Si(e)?e.dom().classList:Ri(e,"class")).length&&xt(e,"class")},Ni=function(e,t){return Si(e)&&e.dom().classList.contains(t)},Ei=Ci.resolve("resizer-bar"),Ai=Ci.resolve("resizer-rows"),Pi=Ci.resolve("resizer-cols"),Ii=function(e){var t=Nt(e.parent(),"."+Ei);A(t,hn)},Bi=function(n,e,r){var o=n.origin();A(e,function(e,t){e.each(function(e){var t=r(o,e);Oi(t,Ei),fn(n.parent(),t)})})},Wi=function(e,t,n,r,o,i){var u,a,c,l,f=po(t),s=0<n.length?o.positions(n,t):[];u=e,a=s,c=f,l=$r(t),Bi(u,a,function(e,t){var n=yi(t.row(),c.left()-e.left(),t.y()-e.top(),l,7);return Oi(n,Ai),n});var d,m,g,h,p=0<r.length?i.positions(r,t):[];d=e,m=p,g=f,h=Xr(t),Bi(d,m,function(e,t){var n=wi(t.col(),t.x()-e.left(),g.top()-e.top(),7,h);return Oi(n,Pi),n})},Mi=function(e,t){var n=Nt(e.parent(),"."+Ei);A(n,t)},_i={refresh:function(e,t,n,r){Ii(e);var o=Yt(t),i=$t.generate(o),u=bi(i),a=vi(i);Wi(e,t,u,a,n,r)},hide:function(e){Mi(e,function(e){en(e,"display","none")})},show:function(e){Mi(e,function(e){en(e,"display","block")})},destroy:Ii,isRowBar:function(e){return Ni(e,Ai)},isColBar:function(e){return Ni(e,Pi)}},Li=function(e,r){return E(e,function(e){var t,n=(t=e.details(),ni(t,function(e){return tt(e.element()).map(function(e){var t=tt(e).isNone();return ae.elementnew(e,t)})}).getOrThunk(function(){return ae.elementnew(r.row(),!0)}));return ae.rowdatanew(n.element(),e.details(),e.section(),n.isNew())})},ji=function(e,t){var n=ci(e,$e);return Li(n,t)},Fi=function(e,t){var n=j(E(e.all(),function(e){return e.cells()}));return W(n,function(e){return $e(t,e.element())})},zi=function(a,c,l,f,s){return function(n,r,e,o,i){var t=Yt(r),u=$t.generate(t);return c(u,e).map(function(e){var t=li(u,o,!1),n=a(t,e,$e,s(o)),r=ji(n.grid(),o);return{grid:C(r),cursor:n.cursor}}).fold(function(){return R.none()},function(e){var t=si(r,e.grid());return l(r,e.grid(),i),f(r),_i.refresh(n,r,ko.height,i),R.some({cursor:e.cursor,newRows:t.newRows,newCells:t.newCells})})}},Hi=ji,Ui=function(t,e){return Gt.cell(e.element()).bind(function(e){return Fi(t,e)})},qi=function(t,e){var n=E(e.selection(),function(e){return Gt.cell(e).bind(function(e){return Fi(t,e)})}),r=ti(n);return 0<r.length?R.some(r):R.none()},Vi=function(t,n){return Gt.cell(n.element()).bind(function(e){return Fi(t,e).map(function(e){return ei(e,{generators:n.generators,clipboard:n.clipboard})})})},Gi=function(t,e){var n=E(e.selection(),function(e){return Gt.cell(e).bind(function(e){return Fi(t,e)})}),r=ti(n);return 0<r.length?R.some(ei({cells:r},{generators:e.generators,clipboard:e.clipboard})):R.none()},Yi=function(e,t){return t.mergable()},Xi=function(e,t){return t.unmergable()},Ki=function(n){return{is:function(e){return n===e},isValue:l,isError:a,getOr:C(n),getOrThunk:C(n),getOrDie:C(n),or:function(e){return Ki(n)},orThunk:function(e){return Ki(n)},fold:function(e,t){return t(n)},map:function(e){return Ki(e(n))},mapError:function(e){return Ki(n)},each:function(e){e(n)},bind:function(e){return e(n)},exists:function(e){return e(n)},forall:function(e){return e(n)},toOption:function(){return R.some(n)}}},Ji=function(n){return{is:a,isValue:a,isError:l,getOr:o,getOrThunk:function(e){return e()},getOrDie:function(){return e=String(n),function(){throw new Error(e)}();var e},or:function(e){return e},orThunk:function(e){return e()},fold:function(e,t){return e(n)},map:function(e){return Ji(n)},mapError:function(e){return Ji(e(n))},each:y,bind:function(e){return Ji(n)},exists:a,forall:l,toOption:R.none}},$i={value:Ki,error:Ji},Qi=function(e,t){return E(e,function(){return ae.elementnew(t.cell(),!0)})},Zi=function(t,e,n){return t.concat(mi(e,function(e){return ii.setCells(t[t.length-1],Qi(t[t.length-1].cells(),n))}))},eu=function(e,t,n){return E(e,function(e){return ii.setCells(e,e.cells().concat(Qi(gi(0,t),n)))})},tu=function(e,t,n){if(e.row()>=t.length||e.column()>ii.cellLength(t[0]))return $i.error("invalid start address out of table bounds, row: "+e.row()+", column: "+e.column());var r=t.slice(e.row()),o=r[0].cells().slice(e.column()),i=ii.cellLength(n[0]),u=n.length;return $i.value({rowDelta:C(r.length-u),colDelta:C(o.length-i)})},nu=function(e,t){var n=ii.cellLength(e[0]),r=ii.cellLength(t[0]);return{rowDelta:C(0),colDelta:C(n-r)}},ru=function(e,t,n){var r=t.colDelta()<0?eu:o;return(t.rowDelta()<0?Zi:o)(r(e,Math.abs(t.colDelta()),n),Math.abs(t.rowDelta()),n)},ou=function(e,t,n,r){if(0===e.length)return e;for(var o=t.startRow();o<=t.finishRow();o++)for(var i=t.startCol();i<=t.finishCol();i++)ii.mutateCell(e[o],i,ae.elementnew(r(),!1));return e},iu=function(e,t,n,r){for(var o=!0,i=0;i<e.length;i++)for(var u=0;u<ii.cellLength(e[0]);u++){var a=n(ii.getCellElement(e[i],u),t);!0===a&&!1===o?ii.mutateCell(e[i],u,ae.elementnew(r(),!0)):!0===a&&(o=!1)}return e},uu=function(i,u,a,c){if(0<u&&u<i.length){var e=i[u-1].cells(),t=(n=a,B(e,function(e,t){return N(e,function(e){return n(e.element(),t.element())})?e:e.concat([t])},[]));A(t,function(e){for(var t=R.none(),n=u;n<i.length;n++)for(var r=0;r<ii.cellLength(i[0]);r++){var o=i[n].cells()[r];a(o.element(),e.element())&&(t.isNone()&&(t=R.some(c())),t.each(function(e){ii.mutateCell(i[n],r,ae.elementnew(e,!0))}))}})}var n;return i},au=function(n,r,o,i,u){return tu(n,r,o).map(function(e){var t=ru(r,e,i);return function(e,t,n,r,o){for(var i,u,a,c,l,f=e.row(),s=e.column(),d=f+n.length,m=s+ii.cellLength(n[0]),g=f;g<d;g++)for(var h=s;h<m;h++){i=t,u=g,a=h,c=void 0,c=b(o,ii.getCell(i[u],a).element()),l=i[u],1<i.length&&1<ii.cellLength(l)&&(0<a&&c(ii.getCellElement(l,a-1))||a<l.length-1&&c(ii.getCellElement(l,a+1))||0<u&&c(ii.getCellElement(i[u-1],a))||u<i.length-1&&c(ii.getCellElement(i[u+1],a)))&&iu(t,ii.getCellElement(t[g],h),o,r.cell);var p=ii.getCellElement(n[g-f],h-s),v=r.replace(p);ii.mutateCell(t[g],h,ae.elementnew(v,!0))}return t}(n,t,o,i,u)})},cu=function(e,t,n,r,o){uu(t,e,o,r.cell);var i=nu(n,t),u=ru(n,i,r),a=nu(t,u),c=ru(t,a,r);return c.slice(0,e).concat(u).concat(c.slice(e,c.length))},lu=function(n,r,e,o,i){var t=n.slice(0,r),u=n.slice(r),a=ii.mapCells(n[e],function(e,t){return 0<r&&r<n.length&&o(ii.getCellElement(n[r-1],t),ii.getCellElement(n[r],t))?ii.getCell(n[r],t):ae.elementnew(i(e.element(),o),!0)});return t.concat([a]).concat(u)},fu=function(e,n,r,o,i){return E(e,function(e){var t=0<n&&n<ii.cellLength(e)&&o(ii.getCellElement(e,n-1),ii.getCellElement(e,n))?ii.getCell(e,n):ae.elementnew(i(ii.getCellElement(e,r),o),!0);return ii.addCell(e,n,t)})},su=function(e,r,o,i,u){var a=o+1;return E(e,function(e,t){var n=t===r?ae.elementnew(u(ii.getCellElement(e,o),i),!0):ii.getCell(e,o);return ii.addCell(e,a,n)})},du=function(e,t,n,r,o){var i=t+1,u=e.slice(0,i),a=e.slice(i),c=ii.mapCells(e[t],function(e,t){return t===n?ae.elementnew(o(e.element(),r),!0):e});return u.concat([c]).concat(a)},mu=function(e,t,n){return e.slice(0,t).concat(e.slice(n+1))},gu=function(e,n,r){var t=E(e,function(e){var t=e.cells().slice(0,n).concat(e.cells().slice(r+1));return ae.rowcells(t,e.section())});return P(t,function(e){return 0<e.cells().length})},hu=function(e,n,r,o){return E(e,function(e){return ii.mapCells(e,function(e){return t=e,N(n,function(e){return r(t.element(),e.element())})?ae.elementnew(o(e.element(),r),!0):e;var t})})},pu=function(e,t,n,r){return ii.getCellElement(e[t],n)!==undefined&&0<t&&r(ii.getCellElement(e[t-1],n),ii.getCellElement(e[t],n))},vu=function(e,t,n){return 0<t&&n(ii.getCellElement(e,t-1),ii.getCellElement(e,t))},bu=function(n,r,o,e){var t=F(n,function(e,t){return pu(n,t,r,o)||vu(e,r,o)?[]:[ii.getCell(e,r)]});return hu(n,t,o,e)},wu=function(n,r,o,e){var i=n[r],t=F(i.cells(),function(e,t){return pu(n,r,t,o)||vu(i,t,o)?[]:[e]});return hu(n,t,o,e)},yu=function(e){return{fold:e}},xu=function(){return yu(function(e,t,n,r,o){return e()})},Cu=function(i){return yu(function(e,t,n,r,o){return t(i)})},Ru=function(i,u){return yu(function(e,t,n,r,o){return n(i,u)})},Su=function(i,u,a){return yu(function(e,t,n,r,o){return r(i,u,a)})},Tu=function(i,u){return yu(function(e,t,n,r,o){return o(i,u)})},Du=function(e,t,i,u){var n,r,a=e.slice(0),o=(r=t,0===(n=e).length?xu():1===n.length?Cu(0):0===r?Ru(0,1):r===n.length-1?Tu(r-1,r):0<r&&r<n.length-1?Su(r-1,r,r+1):xu()),c=function(e){return E(e,C(0))},l=C(c(a)),f=function(e,t){if(0<=i){var n=Math.max(u.minCellWidth(),a[t]-i);return c(a.slice(0,e)).concat([i,n-a[t]]).concat(c(a.slice(t+1)))}var r=Math.max(u.minCellWidth(),a[e]+i),o=a[e]-r;return c(a.slice(0,e)).concat([r-a[e],o]).concat(c(a.slice(t+1)))},s=f;return o.fold(l,function(e){return u.singleColumnWidth(a[e],i)},s,function(e,t,n){return f(t,n)},function(e,t){if(0<=i)return c(a.slice(0,t)).concat([i]);var n=Math.max(u.minCellWidth(),a[t]+i);return c(a.slice(0,t)).concat([n-a[t]])})},Ou=function(e,t){return yt(e,t)&&1<parseInt(wt(e,t),10)},ku={hasColspan:function(e){return Ou(e,"colspan")},hasRowspan:function(e){return Ou(e,"rowspan")},minWidth:C(10),minHeight:C(10),getInt:function(e,t){return parseInt(nn(e,t),10)}},Nu=function(e,t,n){return on(e,t).fold(function(){return n(e)+"px"},function(e){return e})},Eu=function(e){return Nu(e,"width",fo.getPixelWidth)},Au=function(e){return Nu(e,"height",fo.getHeight)},Pu=function(e,t,n,r,o){var i=vi(e),u=E(i,function(e){return e.map(t.edge)});return E(i,function(e,t){return e.filter(m(ku.hasColspan)).fold(function(){var e=hi(u,t);return r(e)},function(e){return n(e,o)})})},Iu=function(e){return e.map(function(e){return e+"px"}).getOr("")},Bu=function(e,t,n,r){var o=bi(e),i=E(o,function(e){return e.map(t.edge)});return E(o,function(e,t){return e.filter(m(ku.hasRowspan)).fold(function(){var e=hi(i,t);return r(e)},function(e){return n(e)})})},Wu={getRawWidths:function(e,t){return Pu(e,t,Eu,Iu)},getPixelWidths:function(e,t,n){return Pu(e,t,fo.getPixelWidth,function(e){return e.getOrThunk(n.minCellWidth)},n)},getPercentageWidths:function(e,t,n){return Pu(e,t,fo.getPercentageWidth,function(e){return e.fold(function(){return n.minCellWidth()},function(e){return e/n.pixelWidth()*100})},n)},getPixelHeights:function(e,t){return Bu(e,t,fo.getHeight,function(e){return e.getOrThunk(ku.minHeight)})},getRawHeights:function(e,t){return Bu(e,t,Au,Iu)}},Mu=function(e,t,n){for(var r=0,o=e;o<t;o++)r+=n[o]!==undefined?n[o]:0;return r},_u=function(e,n){var t=$t.justCells(e);return E(t,function(e){var t=Mu(e.column(),e.column()+e.colspan(),n);return{element:e.element,width:C(t),colspan:e.colspan}})},Lu=function(e,n){var t=$t.justCells(e);return E(t,function(e){var t=Mu(e.row(),e.row()+e.rowspan(),n);return{element:e.element,height:C(t),rowspan:e.rowspan}})},ju=function(e,n){return E(e.all(),function(e,t){return{element:e.element,height:C(n[t])}})},Fu=function(e){var t=parseInt(e,10),n=o;return{width:C(t),pixelWidth:C(t),getWidths:Wu.getPixelWidths,getCellDelta:n,singleColumnWidth:function(e,t){return[Math.max(ku.minWidth(),e+t)-e]},minCellWidth:ku.minWidth,setElementWidth:fo.setPixelWidth,setTableWidth:function(e,t,n){var r=I(t,function(e,t){return e+t},0);fo.setPixelWidth(e,r)}}},zu=function(e,t){if(fo.percentageBasedSizeRegex().test(t)){var n=fo.percentageBasedSizeRegex().exec(t);return o=n[1],i=e,u=parseFloat(o),a=Jr(i),{width:C(u),pixelWidth:C(a),getWidths:Wu.getPercentageWidths,getCellDelta:function(e){return e/a*100},singleColumnWidth:function(e,t){return[100-e]},minCellWidth:function(){return ku.minWidth()/a*100},setElementWidth:fo.setPercentageWidth,setTableWidth:function(e,t,n){var r=u+n;fo.setPercentageWidth(e,r)}}}if(fo.pixelBasedSizeRegex().test(t)){var r=fo.pixelBasedSizeRegex().exec(t);return Fu(r[1])}var o,i,u,a,c=Jr(e);return Fu(c)},Hu=function(t){return fo.getRawWidth(t).fold(function(){var e=Jr(t);return Fu(e)},function(e){return zu(t,e)})},Uu=function(e){return $t.generate(e)},qu=function(e){var t=Yt(e);return Uu(t)},Vu=function(e,t,n,r){var o=Hu(e),i=o.getCellDelta(t),u=qu(e),a=o.getWidths(u,r,o),c=Du(a,n,i,o),l=E(c,function(e,t){return e+a[t]}),f=_u(u,l);A(f,function(e){o.setElementWidth(e.element(),e.width())}),n===u.grid().columns()-1&&o.setTableWidth(e,l,i)},Gu=function(e,n,r,t){var o=qu(e),i=Wu.getPixelHeights(o,t),u=E(i,function(e,t){return r===t?Math.max(n+e,ku.minHeight()):e}),a=Lu(o,u),c=ju(o,u);A(c,function(e){fo.setHeight(e.element(),e.height())}),A(a,function(e){fo.setHeight(e.element(),e.height())});var l=I(u,function(e,t){return e+t},0);fo.setHeight(e,l)},Yu=function(e,t,n){var r=Hu(e),o=Uu(t),i=r.getWidths(o,n,r),u=_u(o,i);A(u,function(e){r.setElementWidth(e.element(),e.width())});var a=I(i,function(e,t){return t+e},0);0<u.length&&r.setElementWidth(e,a)},Xu=function(e){0===Gt.cells(e).length&&hn(e)},Ku=X("grid","cursor"),Ju=function(e,t,n){return $u(e,t,n).orThunk(function(){return $u(e,0,0)})},$u=function(e,t,n){return R.from(e[t]).bind(function(e){return R.from(e.cells()[n]).bind(function(e){return R.from(e.element())})})},Qu=function(e,t,n){return Ku(e,$u(e,t,n))},Zu=function(e){return B(e,function(e,t){return N(e,function(e){return e.row()===t.row()})?e:e.concat([t])},[]).sort(function(e,t){return e.row()-t.row()})},ea=function(e){return B(e,function(e,t){return N(e,function(e){return e.column()===t.column()})?e:e.concat([t])},[]).sort(function(e,t){return e.column()-t.column()})},ta=function(e,t,n){var r=Xt(e,n),o=$t.generate(r);return li(o,t,!0)},na=Yu,ra={insertRowBefore:zi(function(e,t,n,r){var o=t.row(),i=t.row(),u=lu(e,i,o,n,r.getOrInit);return Qu(u,i,t.column())},Ui,y,y,jo),insertRowsBefore:zi(function(e,t,n,r){var o=t[0].row(),i=t[0].row(),u=Zu(t),a=B(u,function(e,t){return lu(e,i,o,n,r.getOrInit)},e);return Qu(a,i,t[0].column())},qi,y,y,jo),insertRowAfter:zi(function(e,t,n,r){var o=t.row(),i=t.row()+t.rowspan(),u=lu(e,i,o,n,r.getOrInit);return Qu(u,i,t.column())},Ui,y,y,jo),insertRowsAfter:zi(function(e,t,n,r){var o=Zu(t),i=o[o.length-1].row(),u=o[o.length-1].row()+o[o.length-1].rowspan(),a=B(o,function(e,t){return lu(e,u,i,n,r.getOrInit)},e);return Qu(a,u,t[0].column())},qi,y,y,jo),insertColumnBefore:zi(function(e,t,n,r){var o=t.column(),i=t.column(),u=fu(e,i,o,n,r.getOrInit);return Qu(u,t.row(),i)},Ui,na,y,jo),insertColumnsBefore:zi(function(e,t,n,r){var o=ea(t),i=o[0].column(),u=o[0].column(),a=B(o,function(e,t){return fu(e,u,i,n,r.getOrInit)},e);return Qu(a,t[0].row(),u)},qi,na,y,jo),insertColumnAfter:zi(function(e,t,n,r){var o=t.column(),i=t.column()+t.colspan(),u=fu(e,i,o,n,r.getOrInit);return Qu(u,t.row(),i)},Ui,na,y,jo),insertColumnsAfter:zi(function(e,t,n,r){var o=t[t.length-1].column(),i=t[t.length-1].column()+t[t.length-1].colspan(),u=ea(t),a=B(u,function(e,t){return fu(e,i,o,n,r.getOrInit)},e);return Qu(a,t[0].row(),i)},qi,na,y,jo),splitCellIntoColumns:zi(function(e,t,n,r){var o=su(e,t.row(),t.column(),n,r.getOrInit);return Qu(o,t.row(),t.column())},Ui,y,y,jo),splitCellIntoRows:zi(function(e,t,n,r){var o=du(e,t.row(),t.column(),n,r.getOrInit);return Qu(o,t.row(),t.column())},Ui,y,y,jo),eraseColumns:zi(function(e,t,n,r){var o=ea(t),i=gu(e,o[0].column(),o[o.length-1].column()),u=Ju(i,t[0].row(),t[0].column());return Ku(i,u)},qi,na,Xu,jo),eraseRows:zi(function(e,t,n,r){var o=Zu(t),i=mu(e,o[0].row(),o[o.length-1].row()),u=Ju(i,t[0].row(),t[0].column());return Ku(i,u)},qi,y,Xu,jo),makeColumnHeader:zi(function(e,t,n,r){var o=bu(e,t.column(),n,r.replaceOrInit);return Qu(o,t.row(),t.column())},Ui,y,y,Fo("row","th")),unmakeColumnHeader:zi(function(e,t,n,r){var o=bu(e,t.column(),n,r.replaceOrInit);return Qu(o,t.row(),t.column())},Ui,y,y,Fo(null,"td")),makeRowHeader:zi(function(e,t,n,r){var o=wu(e,t.row(),n,r.replaceOrInit);return Qu(o,t.row(),t.column())},Ui,y,y,Fo("col","th")),unmakeRowHeader:zi(function(e,t,n,r){var o=wu(e,t.row(),n,r.replaceOrInit);return Qu(o,t.row(),t.column())},Ui,y,y,Fo(null,"td")),mergeCells:zi(function(e,t,n,r){var o=t.cells();Qo(o);var i=ou(e,t.bounds(),n,C(o[0]));return Ku(i,R.from(o[0]))},Yi,y,y,zo),unmergeCells:zi(function(e,t,n,r){var o=I(t,function(e,t){return iu(e,t,n,r.combine(t))},e);return Ku(o,R.from(t[0]))},Xi,y,y,zo),pasteCells:zi(function(e,n,t,r){var o,i,u,a,c=(o=n.clipboard(),i=n.generators(),u=Yt(o),a=$t.generate(u),li(a,i,!0)),l=ae.address(n.row(),n.column());return au(l,e,c,n.generators(),t).fold(function(){return Ku(e,R.some(n.element()))},function(e){var t=Ju(e,n.row(),n.column());return Ku(e,t)})},Vi,na,y,jo),pasteRowsBefore:zi(function(e,t,n,r){var o=e[t.cells[0].row()],i=t.cells[0].row(),u=ta(t.clipboard(),t.generators(),o),a=cu(i,e,u,t.generators(),n),c=Ju(a,t.cells[0].row(),t.cells[0].column());return Ku(a,c)},Gi,y,y,jo),pasteRowsAfter:zi(function(e,t,n,r){var o=e[t.cells[0].row()],i=t.cells[t.cells.length-1].row()+t.cells[t.cells.length-1].rowspan(),u=ta(t.clipboard(),t.generators(),o),a=cu(i,e,u,t.generators(),n),c=Ju(a,t.cells[0].row(),t.cells[0].column());return Ku(a,c)},Gi,y,y,jo)},oa=function(e){return le.fromDom(e.getBody())},ia=function(e){return e.getBoundingClientRect().width},ua=function(e){return e.getBoundingClientRect().height},aa=function(t){return function(e){return $e(e,oa(t))}},ca=function(e){return/^[0-9]+$/.test(e)&&(e+="px"),e},la=function(e){var t=Nt(e,"td[data-mce-style],th[data-mce-style]");xt(e,"data-mce-style"),A(t,function(e){xt(e,"data-mce-style")})},fa={isRtl:C(!1)},sa={isRtl:C(!0)},da={directionAt:function(e){return"rtl"==("rtl"===nn(e,"direction")?"rtl":"ltr")?sa:fa}},ma=["tableprops","tabledelete","|","tableinsertrowbefore","tableinsertrowafter","tabledeleterow","|","tableinsertcolbefore","tableinsertcolafter","tabledeletecol"],ga={"border-collapse":"collapse",width:"100%"},ha={border:"1"},pa=function(e){return e.getParam("table_cell_advtab",!0,"boolean")},va=function(e){return e.getParam("table_row_advtab",!0,"boolean")},ba=function(e){return e.getParam("table_advtab",!0,"boolean")},wa=function(e){return e.getParam("table_style_by_css",!1,"boolean")},ya=function(e){return e.getParam("table_cell_class_list",[],"array")},xa=function(e){return e.getParam("table_row_class_list",[],"array")},Ca=function(e){return e.getParam("table_class_list",[],"array")},Ra=function(e){return!1===e.getParam("table_responsive_width")},Sa=function(e,t){return e.fire("newrow",{node:t})},Ta=function(e,t){return e.fire("newcell",{node:t})},Da=function(e,t,n,r){e.fire("ObjectResizeStart",{target:t,width:n,height:r})},Oa=function(e,t,n,r){e.fire("ObjectResized",{target:t,width:n,height:r})},ka=function(f,e){var t,n=function(e){return"table"===lt(oa(e))},s=(t=f.getParam("table_clone_elements"),v(t)?R.some(t.split(/[ ,]/)):Array.isArray(t)?R.some(t):R.none()),r=function(u,a,c,l){return function(e,t){la(e);var n=l(),r=le.fromDom(f.getDoc()),o=Eo(da.directionAt),i=_n(c,r,s);return a(e)?u(n,e,t,i,o).bind(function(e){return A(e.newRows(),function(e){Sa(f,e.dom())}),A(e.newCells(),function(e){Ta(f,e.dom())}),e.cursor().map(function(e){var t=f.dom.createRng();return t.setStart(e.dom(),0),t.setEnd(e.dom(),0),t})}):R.none()}};return{deleteRow:r(ra.eraseRows,function(e){var t=Po(e);return!1===n(f)||1<t.rows()},y,e),deleteColumn:r(ra.eraseColumns,function(e){var t=Po(e);return!1===n(f)||1<t.columns()},y,e),insertRowsBefore:r(ra.insertRowsBefore,l,y,e),insertRowsAfter:r(ra.insertRowsAfter,l,y,e),insertColumnsBefore:r(ra.insertColumnsBefore,l,so,e),insertColumnsAfter:r(ra.insertColumnsAfter,l,so,e),mergeCells:r(ra.mergeCells,l,y,e),unmergeCells:r(ra.unmergeCells,l,y,e),pasteRowsBefore:r(ra.pasteRowsBefore,l,y,e),pasteRowsAfter:r(ra.pasteRowsAfter,l,y,e),pasteCells:r(ra.pasteCells,l,y,e)}},Na=function(e,t,r){var n=Yt(e),o=$t.generate(n);return qi(o,t).map(function(e){var t=li(o,r,!1).slice(e[0].row(),e[e.length-1].row()+e[e.length-1].rowspan()),n=Hi(t,r);return di(n)})},Ea=tinymce.util.Tools.resolve("tinymce.util.Tools"),Aa=function(e,t,n){n&&e.formatter.apply("align"+n,{},t)},Pa=function(e,t,n){n&&e.formatter.apply("valign"+n,{},t)},Ia=function(t,n){Ea.each("left center right".split(" "),function(e){t.formatter.remove("align"+e,{},n)})},Ba=function(t,n){Ea.each("top middle bottom".split(" "),function(e){t.formatter.remove("valign"+e,{},n)})},Wa=function(o,e,i){var t;return t=function(e,t){for(var n=0;n<t.length;n++){var r=o.getStyle(t[n],i);if(void 0===e&&(e=r),e!==r)return""}return e}(t,o.select("td,th",e))},Ma=function(e,t){var n=e.dom,r=t.control.rootControl,o=r.toJSON(),i=n.parseStyle(o.style);i["border-style"]=o.borderStyle,i["border-color"]=o.borderColor,i["background-color"]=o.backgroundColor,i.width=o.width?ca(o.width):"",i.height=o.height?ca(o.height):"",r.find("#style").value(n.serializeStyle(n.parseStyle(n.serializeStyle(i))))},_a=function(e,t){var n=e.dom,r=t.control.rootControl,o=r.toJSON(),i=n.parseStyle(o.style);r.find("#borderStyle").value(i["border-style"]||""),r.find("#borderColor").value(i["border-color"]||""),r.find("#backgroundColor").value(i["background-color"]||""),r.find("#width").value(i.width||""),r.find("#height").value(i.height||"")},La={createStyleForm:function(n){var e=function(){var e=n.getParam("color_picker_callback");if(e)return function(t){return e.call(n,function(e){t.control.value(e).fire("change")},t.control.value())}};return{title:"Advanced",type:"form",defaults:{onchange:b(Ma,n)},items:[{label:"Style",name:"style",type:"textbox",onchange:b(_a,n)},{type:"form",padding:0,formItemDefaults:{layout:"grid",alignH:["start","right"]},defaults:{size:7},items:[{label:"Border style",type:"listbox",name:"borderStyle",width:90,onselect:b(Ma,n),values:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]},{label:"Border color",type:"colorbox",name:"borderColor",onaction:e()},{label:"Background color",type:"colorbox",name:"backgroundColor",onaction:e()}]}]}},buildListItems:function(e,r,t){var o=function(e,n){return n=n||[],Ea.each(e,function(e){var t={text:e.text||e.title};e.menu?t.menu=o(e.menu):(t.value=e.value,r&&r(t)),n.push(t)}),n};return o(e,t||[])},updateStyleField:Ma,extractAdvancedStyles:function(e,t){var n=e.parseStyle(e.getAttrib(t,"style")),r={};return n["border-style"]&&(r.borderStyle=n["border-style"]),n["border-color"]&&(r.borderColor=n["border-color"]),n["background-color"]&&(r.backgroundColor=n["background-color"]),r.style=e.serializeStyle(n),r},updateAdvancedFields:_a,syncAdvancedStyleFields:function(e,t){t.control.rootControl.find("#style")[0].getEl().isEqualNode(document.activeElement)?_a(e,t):Ma(e,t)}},ja=function(r,o,e){var i,u=r.dom;function a(e,t,n){(1===o.length||n)&&u.setAttrib(e,t,n)}function c(e,t,n){(1===o.length||n)&&u.setStyle(e,t,n)}pa(r)&&La.syncAdvancedStyleFields(r,e),i=e.control.rootControl.toJSON(),r.undoManager.transact(function(){Ea.each(o,function(e){var t,n;a(e,"scope",i.scope),1===o.length?a(e,"style",i.style):(t=e,n=i.style,delete t.dataset.mceStyle,t.style.cssText+=";"+n),a(e,"class",i["class"]),c(e,"width",ca(i.width)),c(e,"height",ca(i.height)),i.type&&e.nodeName.toLowerCase()!==i.type&&(e=u.rename(e,i.type)),1===o.length&&(Ia(r,e),Ba(r,e)),i.align&&Aa(r,e,i.align),i.valign&&Pa(r,e,i.valign)}),r.focus()})},Fa=function(t){var e,n,r,o=[];if(o=t.dom.select("td[data-mce-selected],th[data-mce-selected]"),e=t.dom.getParent(t.selection.getStart(),"td,th"),!o.length&&e&&o.push(e),e=e||o[0]){var i,u,a,c;1<o.length?n={width:"",height:"",scope:"","class":"",align:"",valign:"",style:"",type:e.nodeName.toLowerCase()}:(u=e,a=(i=t).dom,c={width:a.getStyle(u,"width")||a.getAttrib(u,"width"),height:a.getStyle(u,"height")||a.getAttrib(u,"height"),scope:a.getAttrib(u,"scope"),"class":a.getAttrib(u,"class"),type:u.nodeName.toLowerCase(),style:"",align:"",valign:""},Ea.each("left center right".split(" "),function(e){i.formatter.matchNode(u,"align"+e)&&(c.align=e)}),Ea.each("top middle bottom".split(" "),function(e){i.formatter.matchNode(u,"valign"+e)&&(c.valign=e)}),pa(i)&&Ea.extend(c,La.extractAdvancedStyles(a,u)),n=c),0<ya(t).length&&(r={name:"class",type:"listbox",label:"Class",values:La.buildListItems(ya(t),function(e){e.value&&(e.textStyle=function(){return t.formatter.getCssText({block:"td",classes:[e.value]})})})});var l={type:"form",layout:"flex",direction:"column",labelGapCalc:"children",padding:0,items:[{type:"form",layout:"grid",columns:2,labelGapCalc:!1,padding:0,defaults:{type:"textbox",maxWidth:50},items:[{label:"Width",name:"width",onchange:b(La.updateStyleField,t)},{label:"Height",name:"height",onchange:b(La.updateStyleField,t)},{label:"Cell type",name:"type",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{label:"Scope",name:"scope",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{label:"H Align",name:"align",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"V Align",name:"valign",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}]}]},r]};pa(t)?t.windowManager.open({title:"Cell properties",bodyType:"tabpanel",data:n,body:[{title:"General",type:"form",items:l},La.createStyleForm(t)],onsubmit:b(ja,t,o)}):t.windowManager.open({title:"Cell properties",data:n,body:l,onsubmit:b(ja,t,o)})}};function za(f,s,d,e){var m=f.dom;function g(e,t,n){(1===s.length||n)&&m.setAttrib(e,t,n)}va(f)&&La.syncAdvancedStyleFields(f,e);var h=e.control.rootControl.toJSON();f.undoManager.transact(function(){Ea.each(s,function(e){var t,n,r,o,i,u,a,c,l;g(e,"scope",h.scope),g(e,"style",h.style),g(e,"class",h["class"]),t=e,n="height",r=ca(h.height),(1===s.length||r)&&m.setStyle(t,n,r),h.type!==e.parentNode.nodeName.toLowerCase()&&(o=f.dom,i=e,u=h.type,a=o.getParent(i,"table"),c=i.parentNode,(l=o.select(u,a)[0])||(l=o.create(u),a.firstChild?"CAPTION"===a.firstChild.nodeName?o.insertAfter(l,a.firstChild):a.insertBefore(l,a.firstChild):a.appendChild(l)),l.appendChild(i),c.hasChildNodes()||o.remove(c)),h.align!==d.align&&(Ia(f,e),Aa(f,e,h.align))}),f.focus()})}var Ha=function(t){var e,n,r,o,i,u,a,c,l,f,s=t.dom,d=[];e=s.getParent(t.selection.getStart(),"table"),n=s.getParent(t.selection.getStart(),"td,th"),Ea.each(e.rows,function(t){Ea.each(t.cells,function(e){if(s.getAttrib(e,"data-mce-selected")||e===n)return d.push(t),!1})}),(r=d[0])&&(1<d.length?i={height:"",scope:"",style:"","class":"",align:"",type:r.parentNode.nodeName.toLowerCase()}:(c=r,l=(a=t).dom,f={height:l.getStyle(c,"height")||l.getAttrib(c,"height"),scope:l.getAttrib(c,"scope"),"class":l.getAttrib(c,"class"),align:"",style:"",type:c.parentNode.nodeName.toLowerCase()},Ea.each("left center right".split(" "),function(e){a.formatter.matchNode(c,"align"+e)&&(f.align=e)}),va(a)&&Ea.extend(f,La.extractAdvancedStyles(l,c)),i=f),0<xa(t).length&&(o={name:"class",type:"listbox",label:"Class",values:La.buildListItems(xa(t),function(e){e.value&&(e.textStyle=function(){return t.formatter.getCssText({block:"tr",classes:[e.value]})})})}),u={type:"form",columns:2,padding:0,defaults:{type:"textbox"},items:[{type:"listbox",name:"type",label:"Row type",text:"Header",maxWidth:null,values:[{text:"Header",value:"thead"},{text:"Body",value:"tbody"},{text:"Footer",value:"tfoot"}]},{type:"listbox",name:"align",label:"Alignment",text:"None",maxWidth:null,values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height"},o]},va(t)?t.windowManager.open({title:"Row properties",data:i,bodyType:"tabpanel",body:[{title:"General",type:"form",items:u},La.createStyleForm(t)],onsubmit:b(za,t,d,i)}):t.windowManager.open({title:"Row properties",data:i,body:u,onsubmit:b(za,t,d,i)}))},Ua=tinymce.util.Tools.resolve("tinymce.Env"),qa={styles:{"border-collapse":"collapse",width:"100%"},attributes:{border:"1"},percentages:!0},Va=function(e,t,n,r,o){void 0===o&&(o=qa);var i=le.fromTag("table");tn(i,o.styles),bt(i,o.attributes);var u=le.fromTag("tbody");fn(i,u);for(var a=[],c=0;c<e;c++){for(var l=le.fromTag("tr"),f=0;f<t;f++){var s=c<n||f<r?le.fromTag("th"):le.fromTag("td");f<r&&vt(s,"scope","row"),c<n&&vt(s,"scope","col"),fn(s,le.fromTag("br")),o.percentages&&en(s,"width",100/t+"%"),fn(l,s)}a.push(l)}return mn(u,a),i},Ga=function(e,t){e.selection.select(t.dom(),!0),e.selection.collapse(!0)},Ya=function(r,e,t){var n,o,i=r.getParam("table_default_styles",ga,"object"),u={styles:i,attributes:(o=r,o.getParam("table_default_attributes",ha,"object")),percentages:(n=i.width,v(n)&&-1!==n.indexOf("%")&&!Ra(r))},a=Va(t,e,0,0,u);vt(a,"data-mce-id","__mce");var c,l,f,s=(c=a,l=le.fromTag("div"),f=le.fromDom(c.dom().cloneNode(!0)),fn(l,f),l.dom().innerHTML);return r.insertContent(s),jt(oa(r),'table[data-mce-id="__mce"]').map(function(e){var t,n;return Ra(r)&&en(e,"width",nn(e,"width")),xt(e,"data-mce-id"),t=r,A(Nt(e,"tr"),function(e){Sa(t,e.dom()),A(Nt(e,"th,td"),function(e){Ta(t,e.dom())})}),n=r,jt(e,"td,th").each(b(Ga,n)),e.dom()}).getOr(null)};function Xa(e,t,n,r){if("TD"===t.tagName||"TH"===t.tagName)e.setStyle(t,n,r);else if(t.children)for(var o=0;o<t.children.length;o++)Xa(e,t.children[o],n,r)}var Ka=function(e,t,n){var r,o,i=e.dom;ba(e)&&La.syncAdvancedStyleFields(e,n),!1===(o=n.control.rootControl.toJSON())["class"]&&delete o["class"],e.undoManager.transact(function(){t||(t=Ya(e,o.cols||1,o.rows||1)),function(e,t,n){var r,o=e.dom,i={},u={};if(i["class"]=n["class"],u.height=ca(n.height),o.getAttrib(t,"width")&&!wa(e)?i.width=(r=n.width)?r.replace(/px$/,""):"":u.width=ca(n.width),wa(e)?(u["border-width"]=ca(n.border),u["border-spacing"]=ca(n.cellspacing),Ea.extend(i,{"data-mce-border-color":n.borderColor,"data-mce-cell-padding":n.cellpadding,"data-mce-border":n.border})):Ea.extend(i,{border:n.border,cellpadding:n.cellpadding,cellspacing:n.cellspacing}),wa(e)&&t.children)for(var a=0;a<t.children.length;a++)Xa(o,t.children[a],{"border-width":ca(n.border),"border-color":n.borderColor,padding:ca(n.cellpadding)});n.style?Ea.extend(u,o.parseStyle(n.style)):u=Ea.extend({},o.parseStyle(o.getAttrib(t,"style")),u),i.style=o.serializeStyle(u),o.setAttribs(t,i)}(e,t,o),(r=i.select("caption",t)[0])&&!o.caption&&i.remove(r),!r&&o.caption&&((r=i.create("caption")).innerHTML=Ua.ie?"\xa0":'<br data-mce-bogus="1"/>',t.insertBefore(r,t.firstChild)),Ia(e,t),o.align&&Aa(e,t,o.align),e.focus(),e.addVisual()})},Ja=function(t,e){var n,r,o,i,u,a,c,l,f,s,d=t.dom,m={};!0===e?(n=d.getParent(t.selection.getStart(),"table"))&&(c=n,l=(a=t).dom,f={width:l.getStyle(c,"width")||l.getAttrib(c,"width"),height:l.getStyle(c,"height")||l.getAttrib(c,"height"),cellspacing:l.getStyle(c,"border-spacing")||l.getAttrib(c,"cellspacing"),cellpadding:l.getAttrib(c,"data-mce-cell-padding")||l.getAttrib(c,"cellpadding")||Wa(a.dom,c,"padding"),border:l.getAttrib(c,"data-mce-border")||l.getAttrib(c,"border")||Wa(a.dom,c,"border"),borderColor:l.getAttrib(c,"data-mce-border-color"),caption:!!l.select("caption",c)[0],"class":l.getAttrib(c,"class")},Ea.each("left center right".split(" "),function(e){a.formatter.matchNode(c,"align"+e)&&(f.align=e)}),ba(a)&&Ea.extend(f,La.extractAdvancedStyles(l,c)),m=f):(r={label:"Cols",name:"cols"},o={label:"Rows",name:"rows"}),0<Ca(t).length&&(m["class"]&&(m["class"]=m["class"].replace(/\s*mce\-item\-table\s*/g,"")),i={name:"class",type:"listbox",label:"Class",values:La.buildListItems(Ca(t),function(e){e.value&&(e.textStyle=function(){return t.formatter.getCssText({block:"table",classes:[e.value]})})})}),u={type:"form",layout:"flex",direction:"column",labelGapCalc:"children",padding:0,items:[{type:"form",labelGapCalc:!1,padding:0,layout:"grid",columns:2,defaults:{type:"textbox",maxWidth:50},items:(s=t,s.getParam("table_appearance_options",!0,"boolean")?[r,o,{label:"Width",name:"width",onchange:b(La.updateStyleField,t)},{label:"Height",name:"height",onchange:b(La.updateStyleField,t)},{label:"Cell spacing",name:"cellspacing"},{label:"Cell padding",name:"cellpadding"},{label:"Border",name:"border"},{label:"Caption",name:"caption",type:"checkbox"}]:[r,o,{label:"Width",name:"width",onchange:b(La.updateStyleField,t)},{label:"Height",name:"height",onchange:b(La.updateStyleField,t)}])},{label:"Alignment",name:"align",type:"listbox",text:"None",values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},i]},ba(t)?t.windowManager.open({title:"Table properties",data:m,bodyType:"tabpanel",body:[{title:"General",type:"form",items:u},La.createStyleForm(t)],onsubmit:b(Ka,t,n)}):t.windowManager.open({title:"Table properties",data:m,body:u,onsubmit:b(Ka,t,n)})},$a=Ea.each,Qa=function(a,t,c,l,n){var r=aa(a),f=function(){return le.fromDom(a.dom.getParent(a.selection.getStart(),"th,td"))},s=function(e){return Gt.table(e,r)},d=function(e){return{width:ia(e.dom()),height:ia(e.dom())}},o=function(t){var n=f();s(n).each(function(i){var e=Ur.forMenu(l,i,n),u=d(i);t(i,e).each(function(e){var t,n,r,o;t=a,n=u,o=d(r=i),n.width===o.width&&n.height===o.height||(Da(t,r.dom(),n.width,n.height),Oa(t,r.dom(),o.width,o.height)),a.selection.setRng(e),a.focus(),c.clear(i),la(i)})})},i=function(e){var o=f();return s(o).bind(function(e){var t=le.fromDom(a.getDoc()),n=Ur.forMenu(l,e,o),r=_n(y,t,R.none());return Na(e,n,r)})},u=function(u){n.get().each(function(e){var o=E(e,function(e){return xn(e)}),i=f();s(i).bind(function(t){var e=le.fromDom(a.getDoc()),n=Ln(e),r=Ur.pasteRows(l,t,i,o,n);u(t,r).each(function(e){a.selection.setRng(e),a.focus(),c.clear(t)})})})};$a({mceTableSplitCells:function(){o(t.unmergeCells)},mceTableMergeCells:function(){o(t.mergeCells)},mceTableInsertRowBefore:function(){o(t.insertRowsBefore)},mceTableInsertRowAfter:function(){o(t.insertRowsAfter)},mceTableInsertColBefore:function(){o(t.insertColumnsBefore)},mceTableInsertColAfter:function(){o(t.insertColumnsAfter)},mceTableDeleteCol:function(){o(t.deleteColumn)},mceTableDeleteRow:function(){o(t.deleteRow)},mceTableCutRow:function(e){n.set(i()),o(t.deleteRow)},mceTableCopyRow:function(e){n.set(i())},mceTablePasteRowBefore:function(e){u(t.pasteRowsBefore)},mceTablePasteRowAfter:function(e){u(t.pasteRowsAfter)},mceTableDelete:function(){var e=le.fromDom(a.dom.getParent(a.selection.getStart(),"th,td"));Gt.table(e,r).filter(m(r)).each(function(e){var t=le.fromText("");cn(e,t),hn(e);var n=a.dom.createRng();n.setStart(t.dom(),0),n.setEnd(t.dom(),0),a.selection.setRng(n)})}},function(e,t){a.addCommand(t,e)}),$a({mceInsertTable:b(Ja,a),mceTableProps:b(Ja,a,!0),mceTableRowProps:b(Ha,a),mceTableCellProps:b(Fa,a)},function(n,e){a.addCommand(e,function(e,t){n(t)})})},Za=function(e){var t=R.from(e.dom().documentElement).map(le.fromDom).getOr(e);return{parent:C(t),view:C(e),origin:C(go(0,0))}},ec=function(e,t){return{parent:C(t),view:C(e),origin:C(go(0,0))}};function tc(e){var n=X.apply(null,e),r=[];return{bind:function(e){if(e===undefined)throw"Event bind error: undefined handler";r.push(e)},unbind:function(t){r=P(r,function(e){return e!==t})},trigger:function(){var t=n.apply(null,arguments);A(r,function(e){e(t)})}}}var nc={create:function(e){return{registry:G(e,function(e){return{bind:e.bind,unbind:e.unbind}}),trigger:G(e,function(e){return e.trigger})}}},rc={mode:Mo(["compare","extract","mutate","sink"]),sink:Mo(["element","start","stop","destroy"]),api:Mo(["forceDrop","drop","move","delayDrop"])},oc={resolve:xi("ephox-dragster").resolve},ic=function(m,g){return function(e){if(m(e)){var t,n,r,o,i,u,a,c=le.fromDom(e.target),l=function(){e.stopPropagation()},f=function(){e.preventDefault()},s=x(f,l),d=(t=c,n=e.clientX,r=e.clientY,o=l,i=f,u=s,a=e,{target:C(t),x:C(n),y:C(r),stop:o,prevent:i,kill:u,raw:C(a)});g(d)}}},uc=function(e,t,n,r){return o=e,i=t,u=!1,a=ic(n,r),o.dom().addEventListener(i,a,u),{unbind:b(ac,o,i,a,u)};var o,i,u,a},ac=function(e,t,n,r){e.dom().removeEventListener(t,n,r)},cc=C(!0),lc=function(e,t,n){return uc(e,t,cc,n)},fc=rc.mode({compare:function(e,t){return go(t.left()-e.left(),t.top()-e.top())},extract:function(e){return R.some(go(e.x(),e.y()))},sink:function(e,t){var n,r,o,i=(n=t,r=ei({layerClass:oc.resolve("blocker")},n),o=le.fromTag("div"),vt(o,"role","presentation"),tn(o,{position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),Oi(o,oc.resolve("blocker")),Oi(o,r.layerClass),{element:function(){return o},destroy:function(){hn(o)}}),u=lc(i.element(),"mousedown",e.forceDrop),a=lc(i.element(),"mouseup",e.drop),c=lc(i.element(),"mousemove",e.move),l=lc(i.element(),"mouseout",e.delayDrop);return rc.sink({element:i.element,start:function(e){fn(e,i.element())},stop:function(){hn(i.element())},destroy:function(){i.destroy(),a.unbind(),c.unbind(),l.unbind(),u.unbind()}})},mutate:function(e,t){e.mutate(t.left(),t.top())}});function sc(){var i=R.none(),u=nc.create({move:tc(["info"])});return{onEvent:function(e,o){o.extract(e).each(function(e){var t,n,r;(t=o,n=e,r=i.map(function(e){return t.compare(e,n)}),i=R.some(n),r).each(function(e){u.trigger.move(e)})})},reset:function(){i=R.none()},events:u.registry}}function dc(){var e={onEvent:function(e,t){},reset:y},t=sc(),n=e;return{on:function(){n.reset(),n=t},off:function(){n.reset(),n=e},isOn:function(){return n===t},onEvent:function(e,t){n.onEvent(e,t)},events:t.events}}var mc=function(t,n,e){var r,o,i,u=!1,a=nc.create({start:tc([]),stop:tc([])}),c=dc(),l=function(){d.stop(),c.isOn()&&(c.off(),a.trigger.stop())},f=(r=l,o=200,i=null,{cancel:function(){null!==i&&(clearTimeout(i),i=null)},throttle:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];null!==i&&clearTimeout(i),i=setTimeout(function(){r.apply(null,e),i=null},o)}});c.events.move.bind(function(e){n.mutate(t,e.info())});var s=function(t){return function(){var e=Array.prototype.slice.call(arguments,0);if(u)return t.apply(null,e)}},d=n.sink(rc.api({forceDrop:l,drop:s(l),move:s(function(e,t){f.cancel(),c.onEvent(e,n)}),delayDrop:s(f.throttle)}),e);return{element:d.element,go:function(e){d.start(e),c.on(),a.trigger.start()},on:function(){u=!0},off:function(){u=!1},destroy:function(){d.destroy()},events:a.registry}},gc={transform:function(e,t){var n=t!==undefined?t:{},r=n.mode!==undefined?n.mode:fc;return mc(e,r,t)}};function hc(){var n,r=nc.create({drag:tc(["xDelta","yDelta","target"])}),o=R.none(),e={mutate:function(e,t){n.trigger.drag(e,t)},events:(n=nc.create({drag:tc(["xDelta","yDelta"])})).registry};return e.events.drag.bind(function(t){o.each(function(e){r.trigger.drag(t.xDelta(),t.yDelta(),e)})}),{assign:function(e){o=R.some(e)},get:function(){return o},mutate:e.mutate,events:r.registry}}var pc=function(e,t,n){return Ft(e,t,n).isSome()},vc=Ci.resolve("resizer-bar-dragging");function bc(e,n){var r=ko.height,t=function(o,t,i){var n=hc(),r=gc.transform(n,{}),u=R.none(),e=function(e,t){return R.from(wt(e,t))};n.events.drag.bind(function(n){e(n.target(),"data-row").each(function(e){var t=ku.getInt(n.target(),"top");en(n.target(),"top",t+n.yDelta()+"px")}),e(n.target(),"data-column").each(function(e){var t=ku.getInt(n.target(),"left");en(n.target(),"left",t+n.xDelta()+"px")})});var a=function(e,t){return ku.getInt(e,t)-parseInt(wt(e,"data-initial-"+t),10)};r.events.stop.bind(function(){n.get().each(function(r){u.each(function(n){e(r,"data-row").each(function(e){var t=a(r,"top");xt(r,"data-initial-top"),d.trigger.adjustHeight(n,t,parseInt(e,10))}),e(r,"data-column").each(function(e){var t=a(r,"left");xt(r,"data-initial-left"),d.trigger.adjustWidth(n,t,parseInt(e,10))}),_i.refresh(o,n,i,t)})})});var c=function(e,t){d.trigger.startAdjust(),n.assign(e),vt(e,"data-initial-"+t,parseInt(nn(e,t),10)),Oi(e,vc),en(e,"opacity","0.2"),r.go(o.parent())},l=lc(o.parent(),"mousedown",function(e){_i.isRowBar(e.target())&&c(e.target(),"top"),_i.isColBar(e.target())&&c(e.target(),"left")}),f=function(e){return $e(e,o.view())},s=lc(o.view(),"mouseover",function(e){"table"===lt(e.target())||pc(e.target(),"table",f)?(u="table"===lt(e.target())?R.some(e.target()):_t(e.target(),"table",f)).each(function(e){_i.refresh(o,e,i,t)}):Rt(e.target())&&_i.destroy(o)}),d=nc.create({adjustHeight:tc(["table","delta","row"]),adjustWidth:tc(["table","delta","column"]),startAdjust:tc([])});return{destroy:function(){l.unbind(),s.unbind(),r.destroy(),_i.destroy(o)},refresh:function(e){_i.refresh(o,e,i,t)},on:r.on,off:r.off,hideBars:b(_i.hide,o),showBars:b(_i.show,o),events:d.registry}}(e,n,r),o=nc.create({beforeResize:tc(["table"]),afterResize:tc(["table"]),startDrag:tc([])});return t.events.adjustHeight.bind(function(e){o.trigger.beforeResize(e.table());var t=r.delta(e.delta(),e.table());Gu(e.table(),t,e.row(),r),o.trigger.afterResize(e.table())}),t.events.startAdjust.bind(function(e){o.trigger.startDrag()}),t.events.adjustWidth.bind(function(e){o.trigger.beforeResize(e.table());var t=n.delta(e.delta(),e.table());Vu(e.table(),t,e.column(),n),o.trigger.afterResize(e.table())}),{on:t.on,off:t.off,hideBars:t.hideBars,showBars:t.showBars,destroy:t.destroy,events:o.registry}}var wc=function(e,t){return e.inline?ec(oa(e),(n=le.fromTag("div"),tn(n,{position:"static",height:"0",width:"0",padding:"0",margin:"0",border:"0"}),fn(St(),n),n)):Za(le.fromDom(e.getDoc()));var n},yc=function(e,t){e.inline&&hn(t.parent())},xc=function(u){var a,c,o=R.none(),i=R.none(),l=R.none(),f=/(\d+(\.\d+)?)%/,s=function(e){return"TABLE"===e.nodeName};return u.on("init",function(){var e,t=Eo(da.directionAt),n=wc(u);if(l=R.some(n),("table"===(e=u.getParam("object_resizing",!0))||e)&&u.getParam("table_resize_bars",!0,"boolean")){var r=bc(n,t);r.on(),r.events.startDrag.bind(function(e){o=R.some(u.selection.getRng())}),r.events.beforeResize.bind(function(e){var t=e.table().dom();Da(u,t,ia(t),ua(t))}),r.events.afterResize.bind(function(e){var t=e.table(),n=t.dom();la(t),o.each(function(e){u.selection.setRng(e),u.focus()}),Oa(u,n,ia(n),ua(n)),u.undoManager.add()}),i=R.some(r)}}),u.on("ObjectResizeStart",function(e){var t,n=e.target;s(n)&&(a=e.width,t=n,c=u.dom.getStyle(t,"width")||u.dom.getAttrib(t,"width"))}),u.on("ObjectResized",function(e){var t=e.target;if(s(t)){var n=t;if(f.test(c)){var r=parseFloat(f.exec(c)[1]),o=e.width*r/a;u.dom.setStyle(n,"width",o+"%")}else{var i=[];Ea.each(n.rows,function(e){Ea.each(e.cells,function(e){var t=u.dom.getStyle(e,"width",!0);i.push({cell:e,width:t})})}),Ea.each(i,function(e){u.dom.setStyle(e.cell,"width",e.width),u.dom.setAttrib(e.cell,"width",null)})}}}),{lazyResize:function(){return i},lazyWire:function(){return l.getOr(Za(le.fromDom(u.getBody())))},destroy:function(){i.each(function(e){e.destroy()}),l.each(function(e){yc(u,e)})}}},Cc=function(e){return{fold:e}},Rc=function(o){return Cc(function(e,t,n,r){return e(o)})},Sc=function(o){return Cc(function(e,t,n,r){return t(o)})},Tc=function(o,i){return Cc(function(e,t,n,r){return n(o,i)})},Dc=function(o){return Cc(function(e,t,n,r){return r(o)})},Oc=function(n,e){return Gt.table(n,e).bind(function(e){var t=Gt.cells(e);return M(t,function(e){return $e(n,e)}).map(function(e){return{index:C(e),all:C(t)}})})},kc=function(t,e){return Oc(t,e).fold(function(){return Rc(t)},function(e){return e.index()+1<e.all().length?Tc(t,e.all()[e.index()+1]):Dc(t)})},Nc=function(t,e){return Oc(t,e).fold(function(){return Rc()},function(e){return 0<=e.index()-1?Tc(t,e.all()[e.index()-1]):Sc(t)})},Ec=Br([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),Ac={before:Ec.before,on:Ec.on,after:Ec.after,cata:function(e,t,n,r){return e.fold(t,n,r)},getStart:function(e){return e.fold(o,o,o)}},Pc=Br([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),Ic=X("start","soffset","finish","foffset"),Bc=function(e){var t,n=e.match({domRange:function(e){return le.fromDom(e.startContainer)},relative:function(e,t){return Ac.getStart(e)},exact:function(e,t,n,r){return e}});return t=n.dom().ownerDocument.defaultView,le.fromDom(t)},Wc=(Pc.domRange,Pc.relative),Mc=Pc.exact,_c=function(e,t,n,r){var o,i,u,a,c,l=(i=t,u=n,a=r,(c=et(o=e).dom().createRange()).setStart(o.dom(),i),c.setEnd(u.dom(),a),c),f=$e(e,n)&&t===r;return l.collapsed&&!f},Lc=function(e,t){e.selectNodeContents(t.dom())},jc=function(e,t,n){var r,o,i=e.document.createRange();return r=i,t.fold(function(e){r.setStartBefore(e.dom())},function(e,t){r.setStart(e.dom(),t)},function(e){r.setStartAfter(e.dom())}),o=i,n.fold(function(e){o.setEndBefore(e.dom())},function(e,t){o.setEnd(e.dom(),t)},function(e){o.setEndAfter(e.dom())}),i},Fc=function(e,t,n,r,o){var i=e.document.createRange();return i.setStart(t.dom(),n),i.setEnd(r.dom(),o),i},zc=function(e){return{left:C(e.left),top:C(e.top),right:C(e.right),bottom:C(e.bottom),width:C(e.width),height:C(e.height)}},Hc=Br([{ltr:["start","soffset","finish","foffset"]},{rtl:["start","soffset","finish","foffset"]}]),Uc=function(e,t,n){return t(le.fromDom(n.startContainer),n.startOffset,le.fromDom(n.endContainer),n.endOffset)},qc=function(e,t){var o,n,r,i=(o=e,t.match({domRange:function(e){return{ltr:C(e),rtl:R.none}},relative:function(e,t){return{ltr:Se(function(){return jc(o,e,t)}),rtl:Se(function(){return R.some(jc(o,t,e))})}},exact:function(e,t,n,r){return{ltr:Se(function(){return Fc(o,e,t,n,r)}),rtl:Se(function(){return R.some(Fc(o,n,r,e,t))})}}}));return(r=(n=i).ltr()).collapsed?n.rtl().filter(function(e){return!1===e.collapsed}).map(function(e){return Hc.rtl(le.fromDom(e.endContainer),e.endOffset,le.fromDom(e.startContainer),e.startOffset)}).getOrThunk(function(){return Uc(0,Hc.ltr,r)}):Uc(0,Hc.ltr,r)},Vc=function(i,e){return qc(i,e).match({ltr:function(e,t,n,r){var o=i.document.createRange();return o.setStart(e.dom(),t),o.setEnd(n.dom(),r),o},rtl:function(e,t,n,r){var o=i.document.createRange();return o.setStart(n.dom(),r),o.setEnd(e.dom(),t),o}})},Gc=(Hc.ltr,Hc.rtl,function(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom}),Yc=function(n,r,e,t,o){var i=function(e){var t=n.dom().createRange();return t.setStart(r.dom(),e),t.collapse(!0),t},u=Sn(r).length,a=function(e,t,n,r,o){if(0===o)return 0;if(t===r)return o-1;for(var i=r,u=1;u<o;u++){var a=e(u),c=Math.abs(t-a.left);if(n<=a.bottom){if(n<a.top||i<c)return u-1;i=c}}return 0}(function(e){return i(e).getBoundingClientRect()},e,t,o.right,u);return i(a)},Xc=function(t,n,r,o){var e=t.dom().createRange();e.selectNode(n.dom());var i=e.getClientRects();return ni(i,function(e){return Gc(e,r,o)?R.some(e):R.none()}).map(function(e){return Yc(t,n,r,o,e)})},Kc=function(t,e,n,r){var o=t.dom().createRange(),i=it(e);return ni(i,function(e){return o.selectNode(e.dom()),Gc(o.getBoundingClientRect(),n,r)?Jc(t,e,n,r):R.none()})},Jc=function(e,t,n,r){return(gt(t)?Xc:Kc)(e,t,n,r)},$c=function(e,t){return t-e.left<e.right-t},Qc=function(e,t,n){var r=e.dom().createRange();return r.selectNode(t.dom()),r.collapse(n),r},Zc=function(t,e,n){var r=t.dom().createRange();r.selectNode(e.dom());var o=r.getBoundingClientRect(),i=$c(o,n);return(!0===i?En:An)(e).map(function(e){return Qc(t,e,i)})},el=function(e,t,n){var r=t.dom().getBoundingClientRect(),o=$c(r,n);return R.some(Qc(e,t,o))},tl=function(e,t,n,r){var o=e.dom().createRange();o.selectNode(t.dom());var i=o.getBoundingClientRect();return function(e,t,n,r){var o=e.dom().createRange();o.selectNode(t.dom());var i=o.getBoundingClientRect(),u=Math.max(i.left,Math.min(i.right,n)),a=Math.max(i.top,Math.min(i.bottom,r));return Jc(e,t,u,a)}(e,t,Math.max(i.left,Math.min(i.right,n)),Math.max(i.top,Math.min(i.bottom,r)))},nl=document.caretPositionFromPoint?function(n,e,t){return R.from(n.dom().caretPositionFromPoint(e,t)).bind(function(e){if(null===e.offsetNode)return R.none();var t=n.dom().createRange();return t.setStart(e.offsetNode,e.offset),t.collapse(),R.some(t)})}:document.caretRangeFromPoint?function(e,t,n){return R.from(e.dom().caretRangeFromPoint(t,n))}:function(o,i,t){return le.fromPoint(o,i,t).bind(function(r){var e=function(){return e=o,n=i,(0===it(t=r).length?el:Zc)(e,t,n);var e,t,n};return 0===it(r).length?e():tl(o,r,i,t).orThunk(e)})},rl=function(e,t){var n=lt(e);return"input"===n?Ac.after(e):k(["br","img"],n)?0===t?Ac.before(e):Ac.after(e):Ac.on(e,t)},ol=function(e,t){var n=e.fold(Ac.before,rl,Ac.after),r=t.fold(Ac.before,rl,Ac.after);return Wc(n,r)},il=function(e,t,n,r){var o=rl(e,t),i=rl(n,r);return Wc(o,i)},ul=function(e,t){R.from(e.getSelection()).each(function(e){e.removeAllRanges(),e.addRange(t)})},al=function(e,t,n,r,o){var i=Fc(e,t,n,r,o);ul(e,i)},cl=function(s,e){return qc(s,e).match({ltr:function(e,t,n,r){al(s,e,t,n,r)},rtl:function(e,t,n,r){var o,i,u,a,c,l=s.getSelection();if(l.setBaseAndExtent)l.setBaseAndExtent(e.dom(),t,n.dom(),r);else if(l.extend)try{i=e,u=t,a=n,c=r,(o=l).collapse(i.dom(),u),o.extend(a.dom(),c)}catch(f){al(s,n,r,e,t)}else al(s,n,r,e,t)}})},ll=function(e){var o=Bc(e).dom(),t=function(e,t,n,r){return Fc(o,e,t,n,r)},n=e.match({domRange:function(e){var t=le.fromDom(e.startContainer),n=le.fromDom(e.endContainer);return il(t,e.startOffset,n,e.endOffset)},relative:ol,exact:il});return qc(o,n).match({ltr:t,rtl:t})},fl=function(e){var t=le.fromDom(e.anchorNode),n=le.fromDom(e.focusNode);return _c(t,e.anchorOffset,n,e.focusOffset)?R.some(Ic(le.fromDom(e.anchorNode),e.anchorOffset,le.fromDom(e.focusNode),e.focusOffset)):function(e){if(0<e.rangeCount){var t=e.getRangeAt(0),n=e.getRangeAt(e.rangeCount-1);return R.some(Ic(le.fromDom(t.startContainer),t.startOffset,le.fromDom(n.endContainer),n.endOffset))}return R.none()}(e)},sl=function(e,t){var n,r,o=(n=t,r=e.document.createRange(),Lc(r,n),r);ul(e,o)},dl=function(e){return(t=e,R.from(t.getSelection()).filter(function(e){return 0<e.rangeCount}).bind(fl)).map(function(e){return Mc(e.start(),e.soffset(),e.finish(),e.foffset())});var t},ml=function(e,t){var n,r,o,i=Vc(e,t);return r=(n=i).getClientRects(),0<(o=0<r.length?r[0]:n.getBoundingClientRect()).width||0<o.height?R.some(o).map(zc):R.none()},gl=function(e,t,n){return r=e,o=t,i=n,u=le.fromDom(r.document),nl(u,o,i).map(function(e){return Ic(le.fromDom(e.startContainer),e.startOffset,le.fromDom(e.endContainer),e.endOffset)});var r,o,i,u},hl=tinymce.util.Tools.resolve("tinymce.util.VK"),pl=function(e,t,n,r){return yl(e,t,kc(n),r)},vl=function(e,t,n,r){return yl(e,t,Nc(n),r)},bl=function(e,t){var n=Mc(t,0,t,0);return ll(n)},wl=function(e,t){var n,r=Nt(t,"tr");return(n=r,0===n.length?R.none():R.some(n[n.length-1])).bind(function(e){return jt(e,"td,th").map(function(e){return bl(0,e)})})},yl=function(r,e,t,o,n){return t.fold(R.none,R.none,function(e,t){return En(t).map(function(e){return bl(0,e)})},function(n){return Gt.table(n,e).bind(function(e){var t=Ur.noMenu(n);return r.undoManager.transact(function(){o.insertRowsAfter(e,t)}),wl(0,e)})})},xl=["table","li","dl"],Cl=function(t,n,r,o){if(t.keyCode===hl.TAB){var i=oa(n),u=function(e){var t=lt(e);return $e(e,i)||k(xl,t)},e=n.selection.getRng();if(e.collapsed){var a=le.fromDom(e.startContainer);Gt.cell(a,u).each(function(e){t.preventDefault(),(t.shiftKey?vl:pl)(n,u,e,r,o).each(function(e){n.selection.setRng(e)})})}}},Rl={response:X("selection","kill")},Sl=function(t){return function(e){return e===t}},Tl=Sl(38),Dl=Sl(40),Ol={ltr:{isBackward:Sl(37),isForward:Sl(39)},rtl:{isBackward:Sl(39),isForward:Sl(37)},isUp:Tl,isDown:Dl,isNavigation:function(e){return 37<=e&&e<=40}},kl=function(e,t){var n=Vc(e,t);return{start:C(le.fromDom(n.startContainer)),soffset:C(n.startOffset),finish:C(le.fromDom(n.endContainer)),foffset:C(n.endOffset)}},Nl=function(e,t,n,r){return{start:C(Ac.on(e,t)),finish:C(Ac.on(n,r))}};function El(a){return{elementFromPoint:function(e,t){return le.fromPoint(le.fromDom(a.document),e,t)},getRect:function(e){return e.dom().getBoundingClientRect()},getRangedRect:function(e,t,n,r){var o=Mc(e,t,n,r);return ml(a,o).map(function(e){return G(e,c)})},getSelection:function(){return dl(a).map(function(e){return kl(a,e)})},fromSitus:function(e){var t=Wc(e.start(),e.finish());return kl(a,t)},situsFromPoint:function(e,t){return gl(a,e,t).map(function(e){return{start:C(Ac.on(e.start(),e.soffset())),finish:C(Ac.on(e.finish(),e.foffset()))}})},clearSelection:function(){a.getSelection().removeAllRanges()},setSelection:function(e){var t,n,r,o,i,u;t=a,n=e.start(),r=e.soffset(),o=e.finish(),i=e.foffset(),u=il(n,r,o,i),cl(t,u)},setRelativeSelection:function(e,t){var n,r;n=a,r=ol(e,t),cl(n,r)},selectContents:function(e){sl(a,e)},getInnerHeight:function(){return a.innerHeight},getScrollY:function(){var e,t,n,r;return(e=le.fromDom(a.document),t=e!==undefined?e.dom():document,n=t.body.scrollLeft||t.documentElement.scrollLeft,r=t.body.scrollTop||t.documentElement.scrollTop,go(n,r)).top()},scrollBy:function(e,t){var n,r,o;n=e,r=t,((o=le.fromDom(a.document))!==undefined?o.dom():document).defaultView.scrollBy(n,r)}}}Je.detect().browser.isSafari();var Al=function(n,e,r,t,o){return $e(r,t)?R.none():Sr(r,t,e).bind(function(e){var t=e.boxes().getOr([]);return 0<t.length?(o(n,t,e.start(),e.finish()),R.some(Rl.response(R.some(Nl(r,0,r,On(r))),!0))):R.none()})},Pl={sync:function(n,r,e,t,o,i,u){return $e(e,o)&&t===i?R.none():Ft(e,"td,th",r).bind(function(t){return Ft(o,"td,th",r).bind(function(e){return Al(n,r,t,e,u)})})},detect:Al,update:function(e,t,n,r,o){return Dr(r,e,t,o.firstSelectedSelector(),o.lastSelectedSelector()).map(function(e){return o.clear(n),o.selectRange(n,e.boxes(),e.start(),e.finish()),e.boxes()})}},Il=ee(["left","top","right","bottom"],[]),Bl={nu:Il,moveUp:function(e,t){return Il({left:e.left(),top:e.top()-t,right:e.right(),bottom:e.bottom()-t})},moveDown:function(e,t){return Il({left:e.left(),top:e.top()+t,right:e.right(),bottom:e.bottom()+t})},moveBottomTo:function(e,t){var n=e.bottom()-e.top();return Il({left:e.left(),top:t-n,right:e.right(),bottom:t})},moveTopTo:function(e,t){var n=e.bottom()-e.top();return Il({left:e.left(),top:t,right:e.right(),bottom:t+n})},getTop:function(e){return e.top()},getBottom:function(e){return e.bottom()},translate:function(e,t,n){return Il({left:e.left()+t,top:e.top()+n,right:e.right()+t,bottom:e.bottom()+n})},toString:function(e){return"("+e.left()+", "+e.top()+") -> ("+e.right()+", "+e.bottom()+")"}},Wl=function(e){return Bl.nu({left:e.left,top:e.top,right:e.right,bottom:e.bottom})},Ml=function(e,t){return R.some(e.getRect(t))},_l=function(e,t,n){return mt(t)?Ml(e,t).map(Wl):gt(t)?(r=e,o=t,i=n,0<=i&&i<On(o)?r.getRangedRect(o,i,o,i+1):0<i?r.getRangedRect(o,i-1,o,i):R.none()).map(Wl):R.none();var r,o,i},Ll=function(e,t){return mt(t)?Ml(e,t).map(Wl):gt(t)?e.getRangedRect(t,0,t,On(t)).map(Wl):R.none()},jl=X("item","mode"),Fl=function(e,t,n,r){var o=r!==undefined?r:zl;return e.property().parent(t).map(function(e){return jl(e,o)})},zl=function(e,t,n,r){var o=r!==undefined?r:Hl;return n.sibling(e,t).map(function(e){return jl(e,o)})},Hl=function(e,t,n,r){var o=r!==undefined?r:Hl,i=e.property().children(t);return n.first(i).map(function(e){return jl(e,o)})},Ul=[{current:Fl,next:zl,fallback:R.none()},{current:zl,next:Hl,fallback:R.some(Fl)},{current:Hl,next:Hl,fallback:R.some(zl)}],ql=function(t,n,r,o,e){return e=e!==undefined?e:Ul,W(e,function(e){return e.current===r}).bind(function(e){return e.current(t,n,o,e.next).orThunk(function(){return e.fallback.bind(function(e){return ql(t,n,e,o)})})})},Vl={backtrack:Fl,sidestep:zl,advance:Hl,go:ql},Gl={left:function(){return{sibling:function(e,t){return e.query().prevSibling(t)},first:function(e){return 0<e.length?R.some(e[e.length-1]):R.none()}}},right:function(){return{sibling:function(e,t){return e.query().nextSibling(t)},first:function(e){return 0<e.length?R.some(e[0]):R.none()}}}},Yl=function(t,e,n,r,o,i){return Vl.go(t,e,r,o).bind(function(e){return i(e.item())?R.none():n(e.item())?R.some(e.item()):Yl(t,e.item(),n,e.mode(),o,i)})},Xl=function(e,t,n,r){return Yl(e,t,n,Vl.sidestep,Gl.left(),r)},Kl=function(e,t,n,r){return Yl(e,t,n,Vl.sidestep,Gl.right(),r)},Jl=function(e,t){return 0===e.property().children(t).length},$l=function(e,t,n,r){return Xl(e,t,n,r)},Ql=function(e,t,n,r){return Kl(e,t,n,r)},Zl={before:function(e,t,n){return $l(e,t,b(Jl,e),n)},after:function(e,t,n){return Ql(e,t,b(Jl,e),n)},seekLeft:$l,seekRight:Ql,walkers:function(){return{left:Gl.left,right:Gl.right}},walk:function(e,t,n,r,o){return Vl.go(e,t,n,r,o)},backtrack:Vl.backtrack,sidestep:Vl.sidestep,advance:Vl.advance},ef=Fn(),tf={gather:function(e,t,n){return Zl.gather(ef,e,t,n)},before:function(e,t){return Zl.before(ef,e,t)},after:function(e,t){return Zl.after(ef,e,t)},seekLeft:function(e,t,n){return Zl.seekLeft(ef,e,t,n)},seekRight:function(e,t,n){return Zl.seekRight(ef,e,t,n)},walkers:function(){return Zl.walkers()},walk:function(e,t,n,r){return Zl.walk(ef,e,t,n,r)}},nf=Br([{none:[]},{retry:["caret"]}]),rf=function(t,e,r){return(n=e,o=Ko,Et(function(e){return o(e)},Mt,n,o,i)).fold(C(!1),function(e){return Ll(t,e).exists(function(e){return n=e,(t=r).left()<n.left()||Math.abs(n.right()-t.left())<1||t.left()>n.right();var t,n})});var n,o,i},of={point:Bl.getTop,adjuster:function(e,t,n,r,o){var i=Bl.moveUp(o,5);return Math.abs(n.top()-r.top())<1?nf.retry(i):n.bottom()<o.top()?nf.retry(i):n.bottom()===o.top()?nf.retry(Bl.moveUp(o,1)):rf(e,t,o)?nf.retry(Bl.translate(i,5,0)):nf.none()},move:Bl.moveUp,gather:tf.before},uf={point:Bl.getBottom,adjuster:function(e,t,n,r,o){var i=Bl.moveDown(o,5);return Math.abs(n.bottom()-r.bottom())<1?nf.retry(i):n.top()>o.bottom()?nf.retry(i):n.top()===o.bottom()?nf.retry(Bl.moveDown(o,1)):rf(e,t,o)?nf.retry(Bl.translate(i,5,0)):nf.none()},move:Bl.moveDown,gather:tf.after},af=function(n,r,o,i,u){return 0===u?R.some(i):(c=n,l=i.left(),f=r.point(i),c.elementFromPoint(l,f).filter(function(e){return"table"===lt(e)}).isSome()?(t=i,a=u-1,af(n,e=r,o,e.move(t,5),a)):n.situsFromPoint(i.left(),r.point(i)).bind(function(e){return e.start().fold(R.none,function(t,e){return Ll(n,t,e).bind(function(e){return r.adjuster(n,t,e,o,i).fold(R.none,function(e){return af(n,r,o,e,u-1)})}).orThunk(function(){return R.some(i)})},R.none)}));var e,t,a,c,l,f},cf=function(t,n,e){var r,o,i,u=t.move(e,5),a=af(n,t,e,u,100).getOr(u);return(r=t,o=a,i=n,r.point(o)>i.getInnerHeight()?R.some(r.point(o)-i.getInnerHeight()):r.point(o)<0?R.some(-r.point(o)):R.none()).fold(function(){return n.situsFromPoint(a.left(),t.point(a))},function(e){return n.scrollBy(0,e),n.situsFromPoint(a.left(),t.point(a)-e)})},lf={tryUp:b(cf,of),tryDown:b(cf,uf),ieTryUp:function(e,t){return e.situsFromPoint(t.left(),t.top()-5)},ieTryDown:function(e,t){return e.situsFromPoint(t.left(),t.bottom()+5)},getJumpSize:C(5)},ff=Br([{none:["message"]},{success:[]},{failedUp:["cell"]},{failedDown:["cell"]}]),sf=function(e){return Ft(e,"tr")},df={verify:function(a,e,t,n,r,c,o){return Ft(n,"td,th",o).bind(function(u){return Ft(e,"td,th",o).map(function(i){return $e(u,i)?$e(n,u)&&On(u)===r?c(i):ff.none("in same cell"):ur.sharedOne(sf,[u,i]).fold(function(){return t=i,n=u,r=(e=a).getRect(t),(o=e.getRect(n)).right>r.left&&o.left<r.right?ff.success():c(i);var e,t,n,r,o},function(e){return c(i)})})}).getOr(ff.none("default"))},cata:function(e,t,n,r,o){return e.fold(t,n,r,o)},adt:ff},mf={point:X("element","offset"),delta:X("element","deltaOffset"),range:X("element","start","finish"),points:X("begin","end"),text:X("element","text")},gf=(X("ancestor","descendants","element","index"),X("parent","children","element","index")),hf=function(e,t){return M(e,b($e,t))},pf=function(e){return"br"===lt(e)},vf=function(e,t,n){return t(e,n).bind(function(e){return gt(e)&&0===Sn(e).trim().length?vf(e,t,n):R.some(e)})},bf=function(t,e,n,r){return(o=e,i=n,ut(o,i).filter(pf).orThunk(function(){return ut(o,i-1).filter(pf)})).bind(function(e){return r.traverse(e).fold(function(){return vf(e,r.gather,t).map(r.relative)},function(e){return(r=e,tt(r).bind(function(t){var n=it(t);return hf(n,r).map(function(e){return gf(t,n,r,e)})})).map(function(e){return Ac.on(e.parent(),e.index())});var r})});var o,i},wf=function(e,t,n,r){var o,i,u;return(pf(t)?(o=e,i=t,(u=r).traverse(i).orThunk(function(){return vf(i,u.gather,o)}).map(u.relative)):bf(e,t,n,r)).map(function(e){return{start:C(e),finish:C(e)}})},yf=function(e){return df.cata(e,function(e){return R.none()},function(){return R.none()},function(e){return R.some(mf.point(e,0))},function(e){return R.some(mf.point(e,On(e)))})},xf=Je.detect(),Cf=function(r,o,i,u,a,c){return 0===c?R.none():Tf(r,o,i,u,a).bind(function(e){var t=r.fromSitus(e),n=df.verify(r,i,u,t.finish(),t.foffset(),a.failure,o);return df.cata(n,function(){return R.none()},function(){return R.some(e)},function(e){return $e(i,e)&&0===u?Rf(r,i,u,Bl.moveUp,a):Cf(r,o,e,0,a,c-1)},function(e){return $e(i,e)&&u===On(e)?Rf(r,i,u,Bl.moveDown,a):Cf(r,o,e,On(e),a,c-1)})})},Rf=function(t,e,n,r,o){return _l(t,e,n).bind(function(e){return Sf(t,o,r(e,lf.getJumpSize()))})},Sf=function(e,t,n){return xf.browser.isChrome()||xf.browser.isSafari()||xf.browser.isFirefox()||xf.browser.isEdge()?t.otherRetry(e,n):xf.browser.isIE()?t.ieRetry(e,n):R.none()},Tf=function(t,e,n,r,o){return _l(t,n,r).bind(function(e){return Sf(t,o,e)})},Df=function(t,n,r){return(o=t,i=n,u=r,o.getSelection().bind(function(r){return wf(i,r.finish(),r.foffset(),u).fold(function(){return R.some(mf.point(r.finish(),r.foffset()))},function(e){var t=o.fromSitus(e),n=df.verify(o,r.finish(),r.foffset(),t.finish(),t.foffset(),u.failure,i);return yf(n)})})).bind(function(e){return Cf(t,n,e.element(),e.offset(),r,20).map(t.fromSitus)});var o,i,u},Of=Je.detect(),kf=function(e,t){return Mt(e,function(e){return tt(e).exists(function(e){return $e(e,t)})},n).isSome();var n},Nf=function(t,r,o,e,i){return Ft(e,"td,th",r).bind(function(n){return Ft(n,"table",r).bind(function(e){return kf(i,e)?Df(t,r,o).bind(function(t){return Ft(t.finish(),"td,th",r).map(function(e){return{start:C(n),finish:C(e),range:C(t)}})}):R.none()})})},Ef=function(e,t,n,r,o,i){return Of.browser.isIE()?R.none():i(r,t).orThunk(function(){return Nf(e,t,n,r,o).map(function(e){var t=e.range();return Rl.response(R.some(Nl(t.start(),t.soffset(),t.finish(),t.foffset())),!0)})})},Af=function(e,t,n,r,o,i,u){return Nf(e,n,r,o,i).bind(function(e){return Pl.detect(t,n,e.start(),e.finish(),u)})},Pf=function(e,r){return Ft(e,"tr",r).bind(function(n){return Ft(n,"table",r).bind(function(e){var t=Nt(e,"tr");return $e(n,t[0])?tf.seekLeft(e,function(e){return An(e).isSome()},r).map(function(e){var t=On(e);return Rl.response(R.some(Nl(e,t,e,t)),!0)}):R.none()})})},If=function(e,r){return Ft(e,"tr",r).bind(function(n){return Ft(n,"table",r).bind(function(e){var t=Nt(e,"tr");return $e(n,t[t.length-1])?tf.seekRight(e,function(e){return En(e).isSome()},r).map(function(e){return Rl.response(R.some(Nl(e,0,e,0)),!0)}):R.none()})})},Bf=function(e,t){return Ft(e,"td,th",t)},Wf={down:{traverse:ot,gather:tf.after,relative:Ac.before,otherRetry:lf.tryDown,ieRetry:lf.ieTryDown,failure:df.adt.failedDown},up:{traverse:rt,gather:tf.before,relative:Ac.before,otherRetry:lf.tryUp,ieRetry:lf.ieTryUp,failure:df.adt.failedUp}},Mf=X("rows","cols"),_f={mouse:function(e,t,n,r){var o,i,u,a,c,l,f=El(e),s=(o=f,i=t,u=n,a=r,c=R.none(),l=function(){c=R.none()},{mousedown:function(e){a.clear(i),c=Bf(e.target(),u)},mouseover:function(e){c.each(function(r){a.clear(i),Bf(e.target(),u).each(function(n){Sr(r,n,u).each(function(e){var t=e.boxes().getOr([]);(1<t.length||1===t.length&&!$e(r,n))&&(a.selectRange(i,t,e.start(),e.finish()),o.selectContents(n))})})})},mouseup:function(){c.each(l)}});return{mousedown:s.mousedown,mouseover:s.mouseover,mouseup:s.mouseup}},keyboard:function(e,c,l,f){var s=El(e),d=function(){return f.clear(c),R.none()};return{keydown:function(e,t,n,r,o,i){var u=e.raw().which,a=!0===e.raw().shiftKey;return Tr(c,f.selectedSelector()).fold(function(){return Ol.isDown(u)&&a?b(Af,s,c,l,Wf.down,r,t,f.selectRange):Ol.isUp(u)&&a?b(Af,s,c,l,Wf.up,r,t,f.selectRange):Ol.isDown(u)?b(Ef,s,l,Wf.down,r,t,If):Ol.isUp(u)?b(Ef,s,l,Wf.up,r,t,Pf):R.none},function(t){var e=function(e){return function(){return ni(e,function(e){return Pl.update(e.rows(),e.cols(),c,t,f)}).fold(function(){return Or(c,f.firstSelectedSelector(),f.lastSelectedSelector()).map(function(e){var t=Ol.isDown(u)||i.isForward(u)?Ac.after:Ac.before;return s.setRelativeSelection(Ac.on(e.first(),0),t(e.table())),f.clear(c),Rl.response(R.none(),!0)})},function(e){return R.some(Rl.response(R.none(),!0))})}};return Ol.isDown(u)&&a?e([Mf(1,0)]):Ol.isUp(u)&&a?e([Mf(-1,0)]):i.isBackward(u)&&a?e([Mf(0,-1),Mf(-1,0)]):i.isForward(u)&&a?e([Mf(0,1),Mf(1,0)]):Ol.isNavigation(u)&&!1===a?d:R.none})()},keyup:function(t,n,r,o,i){return Tr(c,f.selectedSelector()).fold(function(){var e=t.raw().which;return 0==(!0===t.raw().shiftKey)?R.none():Ol.isNavigation(e)?Pl.sync(c,l,n,r,o,i,f.selectRange):R.none()},R.none)}}}},Lf=function(r,e){A(e,function(e){var t,n;n=e,Si(t=r)?t.dom().classList.remove(n):Di(t,n),ki(t)})},jf={byClass:function(o){var t,n,i=(t=o.selected(),function(e){Oi(e,t)}),r=(n=[o.selected(),o.lastSelected(),o.firstSelected()],function(e){Lf(e,n)}),u=function(e){var t=Nt(e,o.selectedSelector());A(t,r)};return{clear:u,selectRange:function(e,t,n,r){u(e),A(t,i),Oi(n,o.firstSelected()),Oi(r,o.lastSelected())},selectedSelector:o.selectedSelector,firstSelectedSelector:o.firstSelectedSelector,lastSelectedSelector:o.lastSelectedSelector}},byAttr:function(o){var n=function(e){xt(e,o.selected()),xt(e,o.firstSelected()),xt(e,o.lastSelected())},i=function(e){vt(e,o.selected(),"1")},u=function(e){var t=Nt(e,o.selectedSelector());A(t,n)};return{clear:u,selectRange:function(e,t,n,r){u(e),A(t,i),vt(n,o.firstSelected(),"1"),vt(r,o.lastSelected(),"1")},selectedSelector:o.selectedSelector,firstSelectedSelector:o.firstSelectedSelector,lastSelectedSelector:o.lastSelectedSelector}}},Ff=function(e){return!1===Ni(le.fromDom(e.target),"ephox-snooker-resizer-bar")};function zf(h,p){var v=ee(["mousedown","mouseover","mouseup","keyup","keydown"],[]),b=R.none(),w=jf.byAttr(Ir);return h.on("init",function(e){var r=h.getWin(),o=oa(h),t=aa(h),n=_f.mouse(r,o,t,w),a=_f.keyboard(r,o,t,w),c=function(e,t){!0===e.raw().shiftKey&&(t.kill()&&e.kill(),t.selection().each(function(e){var t=Wc(e.start(),e.finish()),n=Vc(r,t);h.selection.setRng(n)}))},i=function(e){var t=f(e);if(t.raw().shiftKey&&Ol.isNavigation(t.raw().which)){var n=h.selection.getRng(),r=le.fromDom(n.startContainer),o=le.fromDom(n.endContainer);a.keyup(t,r,n.startOffset,o,n.endOffset).each(function(e){c(t,e)})}},u=function(e){var t=f(e);p().each(function(e){e.hideBars()});var n=h.selection.getRng(),r=le.fromDom(h.selection.getStart()),o=le.fromDom(n.startContainer),i=le.fromDom(n.endContainer),u=da.directionAt(r).isRtl()?Ol.rtl:Ol.ltr;a.keydown(t,o,n.startOffset,i,n.endOffset,u).each(function(e){c(t,e)}),p().each(function(e){e.showBars()})},l=function(e){return e.hasOwnProperty("x")&&e.hasOwnProperty("y")},f=function(e){var t=le.fromDom(e.target),n=function(){e.stopPropagation()},r=function(){e.preventDefault()},o=x(r,n);return{target:C(t),x:C(l(e)?e.x:null),y:C(l(e)?e.y:null),stop:n,prevent:r,kill:o,raw:C(e)}},s=function(e){return 0===e.button},d=function(e){s(e)&&Ff(e)&&n.mousedown(f(e))},m=function(e){var t;(t=e).buttons!==undefined&&0==(1&t.buttons)||!Ff(e)||n.mouseover(f(e))},g=function(e){s(e)&&Ff(e)&&n.mouseup(f(e))};h.on("mousedown",d),h.on("mouseover",m),h.on("mouseup",g),h.on("keyup",i),h.on("keydown",u),h.on("nodechange",function(){var e=h.selection,t=le.fromDom(e.getStart()),n=le.fromDom(e.getEnd());ur.sharedOne(Gt.table,[t,n]).fold(function(){w.clear(o)},y)}),b=R.some(v({mousedown:d,mouseover:m,mouseup:g,keyup:i,keydown:u}))}),{clear:w.clear,destroy:function(){b.each(function(e){})}}}var Hf=Ea.each,Uf=function(t){var n=[];function e(e){return function(){t.execCommand(e)}}Hf("inserttable tableprops deletetable | cell row column".split(" "),function(e){"|"===e?n.push({text:"-"}):n.push(t.menuItems[e])}),t.addButton("table",{type:"menubutton",title:"Table",menu:n}),t.addButton("tableprops",{title:"Table properties",onclick:e("mceTableProps"),icon:"table"}),t.addButton("tabledelete",{title:"Delete table",onclick:e("mceTableDelete")}),t.addButton("tablecellprops",{title:"Cell properties",onclick:e("mceTableCellProps")}),t.addButton("tablemergecells",{title:"Merge cells",onclick:e("mceTableMergeCells")}),t.addButton("tablesplitcells",{title:"Split cell",onclick:e("mceTableSplitCells")}),t.addButton("tableinsertrowbefore",{title:"Insert row before",onclick:e("mceTableInsertRowBefore")}),t.addButton("tableinsertrowafter",{title:"Insert row after",onclick:e("mceTableInsertRowAfter")}),t.addButton("tabledeleterow",{title:"Delete row",onclick:e("mceTableDeleteRow")}),t.addButton("tablerowprops",{title:"Row properties",onclick:e("mceTableRowProps")}),t.addButton("tablecutrow",{title:"Cut row",onclick:e("mceTableCutRow")}),t.addButton("tablecopyrow",{title:"Copy row",onclick:e("mceTableCopyRow")}),t.addButton("tablepasterowbefore",{title:"Paste row before",onclick:e("mceTablePasteRowBefore")}),t.addButton("tablepasterowafter",{title:"Paste row after",onclick:e("mceTablePasteRowAfter")}),t.addButton("tableinsertcolbefore",{title:"Insert column before",onclick:e("mceTableInsertColBefore")}),t.addButton("tableinsertcolafter",{title:"Insert column after",onclick:e("mceTableInsertColAfter")}),t.addButton("tabledeletecol",{title:"Delete column",onclick:e("mceTableDeleteCol")})},qf=function(t){var e,n=""===(e=t.getParam("table_toolbar",ma))||!1===e?[]:v(e)?e.split(/[ ,]/):w(e)?e:[];0<n.length&&t.addContextToolbar(function(e){return t.dom.is(e,"table")&&t.getBody().contains(e)},n.join(" "))},Vf=function(o,n){var r=R.none(),i=[],u=[],a=[],c=[],l=function(e){e.disabled(!0)},f=function(e){e.disabled(!1)},e=function(){var t=this;i.push(t),r.fold(function(){l(t)},function(e){f(t)})},t=function(){var t=this;u.push(t),r.fold(function(){l(t)},function(e){f(t)})};o.on("init",function(){o.on("nodechange",function(e){var t=R.from(o.dom.getParent(o.selection.getStart(),"th,td"));(r=t.bind(function(e){var t=le.fromDom(e);return Gt.table(t).map(function(e){return Ur.forMenu(n,e,t)})})).fold(function(){A(i,l),A(u,l),A(a,l),A(c,l)},function(t){A(i,f),A(u,f),A(a,function(e){e.disabled(t.mergable().isNone())}),A(c,function(e){e.disabled(t.unmergable().isNone())})})})});var s=function(e,t,n,r){var o,i,u,a,c,l=r.getEl().getElementsByTagName("table")[0],f=r.isRtl()||"tl-tr"===r.parent().rel;for(l.nextSibling.innerHTML=t+1+" x "+(n+1),f&&(t=9-t),i=0;i<10;i++)for(o=0;o<10;o++)a=l.rows[i].childNodes[o].firstChild,c=(f?t<=o:o<=t)&&i<=n,e.dom.toggleClass(a,"mce-active",c),c&&(u=a);return u.parentNode},d=!1===o.getParam("table_grid",!0,"boolean")?{text:"Table",icon:"table",context:"table",onclick:m("mceInsertTable")}:{text:"Table",icon:"table",context:"table",ariaHideMenu:!0,onclick:function(e){e.aria&&(this.parent().hideAll(),e.stopImmediatePropagation(),o.execCommand("mceInsertTable"))},onshow:function(){s(o,0,0,this.menu.items()[0])},onhide:function(){var e=this.menu.items()[0].getEl().getElementsByTagName("a");o.dom.removeClass(e,"mce-active"),o.dom.addClass(e[0],"mce-active")},menu:[{type:"container",html:function(){var e="";e='<table role="grid" class="mce-grid mce-grid-border" aria-readonly="true">';for(var t=0;t<10;t++){e+="<tr>";for(var n=0;n<10;n++)e+='<td role="gridcell" tabindex="-1"><a id="mcegrid'+(10*t+n)+'" href="#" data-mce-x="'+n+'" data-mce-y="'+t+'"></a></td>';e+="</tr>"}return e+="</table>",e+='<div class="mce-text-center" role="presentation">1 x 1</div>'}(),onPostRender:function(){this.lastX=this.lastY=0},onmousemove:function(e){var t,n,r=e.target;"A"===r.tagName.toUpperCase()&&(t=parseInt(r.getAttribute("data-mce-x"),10),n=parseInt(r.getAttribute("data-mce-y"),10),(this.isRtl()||"tl-tr"===this.parent().rel)&&(t=9-t),t===this.lastX&&n===this.lastY||(s(o,t,n,e.control),this.lastX=t,this.lastY=n))},onclick:function(e){var t=this;"A"===e.target.tagName.toUpperCase()&&(e.preventDefault(),e.stopPropagation(),t.parent().cancel(),o.undoManager.transact(function(){Ya(o,t.lastX+1,t.lastY+1)}),o.addVisual())}}]};function m(e){return function(){o.execCommand(e)}}var g={text:"Table properties",context:"table",onPostRender:e,onclick:m("mceTableProps")},h={text:"Delete table",context:"table",onPostRender:e,cmd:"mceTableDelete"},p={text:"Row",context:"table",menu:[{text:"Insert row before",onclick:m("mceTableInsertRowBefore"),onPostRender:t},{text:"Insert row after",onclick:m("mceTableInsertRowAfter"),onPostRender:t},{text:"Delete row",onclick:m("mceTableDeleteRow"),onPostRender:t},{text:"Row properties",onclick:m("mceTableRowProps"),onPostRender:t},{text:"-"},{text:"Cut row",onclick:m("mceTableCutRow"),onPostRender:t},{text:"Copy row",onclick:m("mceTableCopyRow"),onPostRender:t},{text:"Paste row before",onclick:m("mceTablePasteRowBefore"),onPostRender:t},{text:"Paste row after",onclick:m("mceTablePasteRowAfter"),onPostRender:t}]},v={text:"Column",context:"table",menu:[{text:"Insert column before",onclick:m("mceTableInsertColBefore"),onPostRender:t},{text:"Insert column after",onclick:m("mceTableInsertColAfter"),onPostRender:t},{text:"Delete column",onclick:m("mceTableDeleteCol"),onPostRender:t}]},b={separator:"before",text:"Cell",context:"table",menu:[{text:"Cell properties",onclick:m("mceTableCellProps"),onPostRender:t},{text:"Merge cells",onclick:m("mceTableMergeCells"),onPostRender:function(){var t=this;a.push(t),r.fold(function(){l(t)},function(e){t.disabled(e.mergable().isNone())})}},{text:"Split cell",onclick:m("mceTableSplitCells"),onPostRender:function(){var t=this;c.push(t),r.fold(function(){l(t)},function(e){t.disabled(e.unmergable().isNone())})}}]};o.addMenuItem("inserttable",d),o.addMenuItem("tableprops",g),o.addMenuItem("deletetable",h),o.addMenuItem("row",p),o.addMenuItem("column",v),o.addMenuItem("cell",b)},Gf=function(n,r){return{insertTable:function(e,t){return Ya(n,e,t)},setClipboardRows:function(e){return t=r,n=E(e,le.fromDom),void t.set(R.from(n));var t,n},getClipboardRows:function(){return r.get().fold(function(){},function(e){return E(e,function(e){return e.dom()})})}}};e.add("table",function(t){var n,r=xc(t),e=zf(t,r.lazyResize),o=ka(t,r.lazyWire),i=(n=t,{get:function(){var e=oa(n);return kr(e,Ir.selectedSelector()).fold(function(){return n.selection.getStart()===undefined?Mr.none():Mr.single(n.selection)},function(e){return Mr.multiple(e)})}}),u=Io(R.none());return Qa(t,o,e,i,u),qr(t,i,o,e),Vf(t,i),Uf(t),qf(t),t.on("PreInit",function(){t.serializer.addTempAttr(Ir.firstSelected()),t.serializer.addTempAttr(Ir.lastSelected())}),t.getParam("table_tab_navigation",!0,"boolean")&&t.on("keydown",function(e){Cl(e,t,o,r.lazyWire)}),t.on("remove",function(){r.destroy(),e.destroy()}),Gf(t,u)})}();

/***/ }),

/***/ "c055":
/***/ (function(module, exports) {

!function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(n){n.addCommand("InsertHorizontalRule",function(){n.execCommand("mceInsertContent",!1,"<hr />")})},o=function(n){n.addButton("hr",{icon:"hr",tooltip:"Horizontal line",cmd:"InsertHorizontalRule"}),n.addMenuItem("hr",{icon:"hr",text:"Horizontal line",cmd:"InsertHorizontalRule",context:"insert"})};n.add("hr",function(n){t(n),o(n)})}();

/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c637":
/***/ (function(module, exports) {

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=tinymce.util.Tools.resolve("tinymce.util.Tools"),n=[["cool","cry","embarassed","foot-in-mouth"],["frown","innocent","kiss","laughing"],["money-mouth","sealed","smile","surprised"],["tongue-out","undecided","wink","yell"]],i=function(i){var o;return o='<table role="list" class="mce-grid">',e.each(n,function(t){o+="<tr>",e.each(t,function(t){var e=i+"/img/smiley-"+t+".gif";o+='<td><a href="#" data-mce-url="'+e+'" data-mce-alt="'+t+'" tabindex="-1" role="option" aria-label="'+t+'"><img src="'+e+'" style="width: 18px; height: 18px" role="presentation" /></a></td>'}),o+="</tr>"}),o+="</table>"},o=function(a,t){var e=i(t);a.addButton("emoticons",{type:"panelbutton",panel:{role:"application",autohide:!0,html:e,onclick:function(t){var e,i,o,n=a.dom.getParent(t.target,"a");n&&(e=a,i=n.getAttribute("data-mce-url"),o=n.getAttribute("data-mce-alt"),e.insertContent(e.dom.createHTML("img",{src:i,alt:o})),this.hide())}},tooltip:"Emoticons"})};t.add("emoticons",function(t,e){o(t,e)})}();

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c6fc":
/***/ (function(module, exports) {

!function(){"use strict";var t,n,e,r,a,o=function(t){var n=t,e=function(){return n};return{get:e,set:function(t){n=t},clone:function(){return o(e())}}},i=tinymce.util.Tools.resolve("tinymce.PluginManager"),f=function(t){return function(){return t}},u=f(!1),s=f(!0),c=u,l=s,d=function(){return g},g=(r={fold:function(t,n){return t()},is:c,isSome:c,isNone:l,getOr:e=function(t){return t},getOrThunk:n=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:e,orThunk:n,map:d,ap:d,each:function(){},bind:d,flatten:d,exists:c,forall:l,filter:d,equals:t=function(t){return t.isNone()},equals_:t,toArray:function(){return[]},toString:f("none()")},Object.freeze&&Object.freeze(r),r),m=function(e){var t=function(){return e},n=function(){return a},r=function(t){return t(e)},a={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:l,isNone:c,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return m(t(e))},ap:function(t){return t.fold(d,function(t){return m(t(e))})},each:function(t){t(e)},bind:r,flatten:t,exists:r,forall:r,filter:function(t){return t(e)?a:g},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(c,function(t){return n(e,t)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return a},h={some:m,none:d,from:function(t){return null===t||t===undefined?g:m(t)}},p=(a="function",function(t){return function(t){if(null===t)return"null";var n=typeof t;return"object"===n&&Array.prototype.isPrototypeOf(t)?"array":"object"===n&&String.prototype.isPrototypeOf(t)?"string":n}(t)===a}),v=function(t,n){for(var e=[],r=0,a=t.length;r<a;r++){var o=t[r];n(o,r,t)&&e.push(o)}return e},O=Array.prototype.slice,y=(p(Array.from)&&Array.from,Object.hasOwnProperty),P=function(t,n){return y.call(t,n)},x=function(t){return P(t,"start")&&P(t,"end")},T=function(t){return!P(t,"end")&&!P(t,"replacement")},b=function(t){return P(t,"replacement")},k=function(t){return n=t,e=function(t,n){return t.start.length===n.start.length?0:t.start.length>n.start.length?-1:1},(r=O.call(n,0)).sort(e),r;var n,e,r},C=function(t){return{inlinePatterns:k(v(t,x)),blockPatterns:k(v(t,T)),replacementPatterns:v(t,b)}},D=function(n){return{setPatterns:function(t){n.set(C(t))},getPatterns:function(){return n.get().inlinePatterns.concat(n.get().blockPatterns,n.get().replacementPatterns)}}},S=[{start:"*",end:"*",format:"italic"},{start:"**",end:"**",format:"bold"},{start:"***",end:"***",format:["bold","italic"]},{start:"#",format:"h1"},{start:"##",format:"h2"},{start:"###",format:"h3"},{start:"####",format:"h4"},{start:"#####",format:"h5"},{start:"######",format:"h6"},{start:"1. ",cmd:"InsertOrderedList"},{start:"* ",cmd:"InsertUnorderedList"},{start:"- ",cmd:"InsertUnorderedList"}],A=function(t){var n,e,r=(n=t,e="textpattern_patterns",P(n,e)?h.some(n[e]):h.none()).getOr(S);return C(r)},N=tinymce.util.Tools.resolve("tinymce.util.Delay"),R=tinymce.util.Tools.resolve("tinymce.util.VK"),I=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),j=tinymce.util.Tools.resolve("tinymce.util.Tools"),w=function(t,n){for(var e=0;e<t.length;e++){var r=t[e];if(0===n.indexOf(r.start)&&(!r.end||n.lastIndexOf(r.end)===n.length-r.end.length))return r}},E=function(t,n,e){if(!1!==n.collapsed){var r=n.startContainer,a=r.data,o=!0===e?1:0;if(3===r.nodeType){var i=function(t,n,e,r){var a,o,i,f,u,s;for(o=0;o<t.length;o++)if((a=t[o]).end!==undefined&&(f=a,u=e,s=r,n.substr(u-f.end.length-s,f.end.length)===f.end)&&0<e-r-(i=a).end.length-i.start.length)return a}(t,a,n.startOffset,o);if(i!==undefined){var f=a.lastIndexOf(i.end,n.startOffset-o),u=a.lastIndexOf(i.start,f-i.end.length);if(f=a.indexOf(i.end,u+i.start.length),-1!==u){var s=document.createRange();s.setStart(r,u),s.setEnd(r,f+i.end.length);var c=w(t,s.toString());if(!(i===undefined||c!==i||r.data.length<=i.start.length+i.end.length))return{pattern:i,startOffset:u,endOffset:f}}}}}},q=function(t){return t&&3===t.nodeType},L=function(t,n,e){var r=t.dom.createRng();r.setStart(n,e),r.setEnd(n,e),t.selection.setRng(r)},M=function(n,t,e){var r=n.selection.getRng();return h.from(E(t,r,e)).map(function(t){return function(a,o,i,f){var u=j.isArray(i.pattern.format)?i.pattern.format:[i.pattern.format];if(0!==j.grep(u,function(t){var n=a.formatter.get(t);return n&&n[0].inline}).length)return a.undoManager.transact(function(){var t,n,e,r;t=o,n=i.pattern,e=i.endOffset,r=i.startOffset,(t=0<r?t.splitText(r):t).splitText(e-r+n.end.length),t.deleteData(0,n.start.length),t.deleteData(t.data.length-n.end.length,n.end.length),o=t,f&&a.selection.setCursorLocation(o.nextSibling,1),u.forEach(function(t){a.formatter.apply(t,{},o)})}),o}(n,r.startContainer,t,e)})},U=function(s,t,c){var n=s.selection.getRng(),l=n.startContainer;n.collapsed&&q(l)&&function(t,n,e){for(var r=0;r<t.length;r++){var a=e.lastIndexOf(t[r].start,n);if(-1!==a)return h.some({pattern:t[r],startOffset:a})}return h.none()}(t,n.startOffset,l.data).each(function(t){var n,e,r,a,o,i,f,u=c?h.some((n=l,r=(e=t).startOffset+e.pattern.start.length,a=n.data.slice(r,r+1),n.deleteData(r,1),a)):h.none();o=s,f=t,(i=l).deleteData(f.startOffset,f.pattern.start.length),o.insertContent(f.pattern.replacement),h.from(i.nextSibling).filter(q).each(function(t){t.insertData(0,i.data),o.dom.remove(i)}),u.each(function(t){return function(t,n){var e=t.selection.getRng(),r=e.startContainer;if(q(r)){var a=e.startOffset;r.insertData(a,n),L(t,r,a+n.length)}else{var o=t.dom.doc.createTextNode(n);e.insertNode(o),L(t,o,o.length)}}(s,t)})})},_=function(t,n,e){for(var r=0;r<t.length;r++)if(e(t[r],n))return!0},z=function(t,n){var e,r,a,o;e=t,r=n.replacementPatterns,U(e,r,!1),a=t,o=n.inlinePatterns,M(a,o,!1).each(function(t){L(a,t,t.data.length)}),function(t,n){var e,r,a,o,i,f,u,s,c,l,d;if(e=t.selection,r=t.dom,e.isCollapsed()&&(u=r.getParent(e.getStart(),"p"))){for(c=new I(u,u);i=c.next();)if(q(i)){o=i;break}if(o){if(!(s=w(n,o.data)))return;if(a=(l=e.getRng(!0)).startContainer,d=l.startOffset,o===a&&(d=Math.max(0,d-s.start.length)),j.trim(o.data).length===s.start.length)return;s.format&&(f=t.formatter.get(s.format))&&f[0].block&&(o.deleteData(0,s.start.length),t.formatter.apply(s.format,{},o),l.setStart(a,d),l.collapse(!0),e.setRng(l)),s.cmd&&t.undoManager.transact(function(){o.deleteData(0,s.start.length),t.execCommand(s.cmd)})}}}(t,n.blockPatterns)},K=function(t,n){var e,r,a,o;e=t,r=n.replacementPatterns,U(e,r,!0),a=t,o=n.inlinePatterns,M(a,o,!0).each(function(t){var n=t.data.slice(-1);if(/[\u00a0 ]/.test(n)){t.deleteData(t.data.length-1,1);var e=a.dom.doc.createTextNode(n);a.dom.insertAfter(e,t.parentNode),L(a,e,1)}})},V=function(t,n){return _(t,n,function(t,n){return t.charCodeAt(0)===n.charCode})},W=function(t,n){return _(t,n,function(t,n){return t===n.keyCode&&!1===R.modifierPressed(n)})},B=function(n,e){var r=[",",".",";",":","!","?"],a=[32];n.on("keydown",function(t){13!==t.keyCode||R.modifierPressed(t)||z(n,e.get())},!0),n.on("keyup",function(t){W(a,t)&&K(n,e.get())}),n.on("keypress",function(t){V(r,t)&&N.setEditorTimeout(n,function(){K(n,e.get())})})};i.add("textpattern",function(t){var n=o(A(t.settings));return B(t,n),D(n)})}();

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cc93":
/***/ (function(module, exports) {

!function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),a=tinymce.util.Tools.resolve("tinymce.util.Tools"),o=function(n){return n.getParam("save_enablewhendirty",!0)},c=function(n){return!!n.getParam("save_onsavecallback")},i=function(n){return!!n.getParam("save_oncancelcallback")},r=function(n,e){n.notificationManager.open({text:n.translate(e),type:"error"})},e=function(n){var e;if(e=t.DOM.getParent(n.id,"form"),!o(n)||n.isDirty()){if(n.save(),c(n))return n.execCallback("save_onsavecallback",n),void n.nodeChanged();e?(n.setDirty(!1),e.onsubmit&&!e.onsubmit()||("function"==typeof e.submit?e.submit():r(n,"Error: Form submit field collision.")),n.nodeChanged()):r(n,"Error: No form element found.")}},l=function(n){var e=a.trim(n.startContent);i(n)?n.execCallback("save_oncancelcallback",n):(n.setContent(e),n.undoManager.clear(),n.nodeChanged())},d=function(n){n.addCommand("mceSave",function(){e(n)}),n.addCommand("mceCancel",function(){l(n)})},s=function(t){return function(n){var e=n.control;t.on("nodeChange dirty",function(){e.disabled(o(t)&&!t.isDirty())})}},u=function(n){n.addButton("save",{icon:"save",text:"Save",cmd:"mceSave",disabled:!0,onPostRender:s(n)}),n.addButton("cancel",{text:"Cancel",icon:!1,cmd:"mceCancel",disabled:!0,onPostRender:s(n)}),n.addShortcut("Meta+S","","mceSave")};n.add("save",function(n){u(n),d(n)})}();

/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cf48":
/***/ (function(module, exports, __webpack_require__) {

// 4.9.2 (2018-12-17)

/***/ }),

/***/ "d0a1":
/***/ (function(module, exports) {

!function(){"use strict";var e,n,t,r,o,u=tinymce.util.Tools.resolve("tinymce.PluginManager"),T=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),i=tinymce.util.Tools.resolve("tinymce.Env"),E="[-'\\.\u2018\u2019\u2024\ufe52\uff07\uff0e]",c="[:\xb7\xb7\u05f4\u2027\ufe13\ufe55\uff1a]",a="[\xb1+*/,;;\u0589\u060c\u060d\u066c\u07f8\u2044\ufe10\ufe14\ufe50\ufe54\uff0c\uff1b]",f="[0-9\u0660-\u0669\u066b\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\ua620-\ua629\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\uaa50-\uaa59\uabf0-\uabf9]",l="\\r",s="\\n",A="[\x0B\f\x85\u2028\u2029]",N="[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f\u109a-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b6-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u192b\u1930-\u193b\u19b0-\u19c0\u19c8\u19c9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f\u1b00-\u1b04\u1b34-\u1b44\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1baa\u1be6-\u1bf3\u1c24-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe3-\uabea\uabec\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]",R="[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200e\u200f\u202a-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]",d="[\u3031-\u3035\u309b\u309c\u30a0-\u30fa\u30fc-\u30ff\u31f0-\u31ff\u32d0-\u32fe\u3300-\u3357\uff66-\uff9d]",g="[=_\u203f\u2040\u2054\ufe33\ufe34\ufe4d-\ufe4f\uff3f\u2200-\u22ff<>]",p="[!-#%-*,-\\/:;?@\\[-\\]_{}\xa1\xab\xb7\xbb\xbf;\xb7\u055a-\u055f\u0589\u058a\u05be\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1361-\u1368\u1400\u166d\u166e\u169b\u169c\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cd3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205e\u207d\u207e\u208d\u208e\u3008\u3009\u2768-\u2775\u27c5\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc\u29fd\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00-\u2e2e\u2e30\u2e31\u3001-\u3003\u3008-\u3011\u3014-\u301f\u3030\u303d\u30a0\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uabeb\ufd3e\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a\uff1b\uff1f\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65]",M={characterIndices:{ALETTER:0,MIDNUMLET:1,MIDLETTER:2,MIDNUM:3,NUMERIC:4,CR:5,LF:6,NEWLINE:7,EXTEND:8,FORMAT:9,KATAKANA:10,EXTENDNUMLET:11,AT:12,OTHER:13},SETS:[new RegExp("[A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f3\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bc0-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u24b6-\u24e9\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005\u303b\u303c\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790\ua791\ua7a0-\ua7a9\ua7fa-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]"),new RegExp(E),new RegExp(c),new RegExp(a),new RegExp(f),new RegExp(l),new RegExp(s),new RegExp(A),new RegExp(N),new RegExp(R),new RegExp(d),new RegExp(g),new RegExp("@")],EMPTY_STRING:"",PUNCTUATION:new RegExp("^"+p+"$"),WHITESPACE:/^\s+$/},I=function(e){return function(){return e}},L=I(!1),y=I(!0),m=function(){return h},h=(r={fold:function(e,n){return e()},is:L,isSome:L,isNone:y,getOr:t=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:t,orThunk:n,map:m,ap:m,each:function(){},bind:m,flatten:m,exists:L,forall:y,filter:m,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:I("none()")},Object.freeze&&Object.freeze(r),r),w=(o="function",function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"===n&&Array.prototype.isPrototypeOf(e)?"array":"object"===n&&String.prototype.isPrototypeOf(e)?"string":n}(e)===o}),U=(Array.prototype.slice,w(Array.from)&&Array.from,M.SETS),v=M.characterIndices.OTHER,x=function(e){var n,t,r=v,o=U.length;for(n=0;n<o;++n)if((t=U[n])&&t.test(e)){r=n;break}return r},D=function(e){var t,r,n=(t=x,r={},function(e){if(r[e])return r[e];var n=t(e);return r[e]=n});return function(e,n){for(var t=e.length,r=new Array(t),o=0;o<t;o++){var u=e[o];r[o]=n(u,o,e)}return r}(e.split(""),n)},C=M.characterIndices,O=function(e,n){var t,r,o=e[n],u=e[n+1];return!(n<0||n>e.length-1&&0!==n||o===C.ALETTER&&u===C.ALETTER||(r=e[n+2],o===C.ALETTER&&(u===C.MIDLETTER||u===C.MIDNUMLET||u===C.AT)&&r===C.ALETTER||(t=e[n-1],(o===C.MIDLETTER||o===C.MIDNUMLET||u===C.AT)&&u===C.ALETTER&&t===C.ALETTER||!(o!==C.NUMERIC&&o!==C.ALETTER||u!==C.NUMERIC&&u!==C.ALETTER)||(o===C.MIDNUM||o===C.MIDNUMLET)&&u===C.NUMERIC&&t===C.NUMERIC||o===C.NUMERIC&&(u===C.MIDNUM||u===C.MIDNUMLET)&&r===C.NUMERIC||o===C.EXTEND||o===C.FORMAT||t===C.EXTEND||t===C.FORMAT||u===C.EXTEND||u===C.FORMAT||o===C.CR&&u===C.LF||o!==C.NEWLINE&&o!==C.CR&&o!==C.LF&&u!==C.NEWLINE&&u!==C.CR&&u!==C.LF&&(o===C.KATAKANA&&u===C.KATAKANA||u===C.EXTENDNUMLET&&(o===C.ALETTER||o===C.NUMERIC||o===C.KATAKANA||o===C.EXTENDNUMLET)||o===C.EXTENDNUMLET&&(u===C.ALETTER||u===C.NUMERIC||u===C.KATAKANA)||o===C.AT))))},b=M.EMPTY_STRING,S=M.WHITESPACE,K=M.PUNCTUATION,P=function(e,n,t){var r=function(e,n){var t;for(t=n;t<e.length;++t){var r=e.charAt(t);if(S.test(r))break}return t}(n,t+1),o=n.substring(t+1,r);return"://"===o.substr(0,3)?{word:e+o,index:r}:{word:e,index:t}},F=function(e,n){return function(e,n){var t,r,o,u,i=0,E=D(e),T=E.length,c=[],a=[];for(n||(n={}),n.ignoreCase&&(e=e.toLowerCase()),r=n.includePunctuation,o=n.includeWhitespace;i<T;++i)if(t=e.charAt(i),c.push(t),O(E,i)){if((c=c.join(b))&&(o||!S.test(c))&&(r||!K.test(c)))if("http"===(u=c)||"https"===u){var f=P(c,e,i);a.push(f.word),i=f.index}else a.push(c);c=[]}return a}(e.replace(/\ufeff/g,""),n)},W=function(e,n){return i.ie?function(e,n){for(var t,r=n.getBlockElements(),o=n.getShortEndedElements(),u=n.getWhiteSpaceElements(),i="",E=new T(e,e);e=E.next();)3===e.nodeType?i+=e.data:(r[(t=e).nodeName]||o[t.nodeName]||u[t.nodeName])&&(i+=" ");return i}(e,n):e.innerText},X=function(e){return F((n=e,n.removed?"":W(n.getBody(),n.schema))).length;var n},k=function(e){return{getCount:function(){return X(e)}}},j=tinymce.util.Tools.resolve("tinymce.util.Delay"),_=tinymce.util.Tools.resolve("tinymce.util.I18n"),H=function(t){var r=function(e){return _.translate(["{0} words",X(e)])},o=function(){t.theme.panel.find("#wordcount").text(r(t))};t.on("init",function(){var e=t.theme.panel&&t.theme.panel.find("#statusbar")[0],n=j.debounce(o,300);e&&j.setEditorTimeout(t,function(){e.insert({type:"label",name:"wordcount",text:r(t),classes:"wordcount",disabled:t.settings.readonly},0),t.on("setcontent beforeaddundo undo redo keyup",n)},0)})};u.add("wordcount",function(e){return H(e),k(e)})}();

/***/ }),

/***/ "d195":
/***/ (function(module, exports) {

!function(){"use strict";var i=function(e){var n=e,t=function(){return n};return{get:t,set:function(e){n=e},clone:function(){return i(t())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(e){return{isFullscreen:function(){return null!==e.get()}}},n=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),m=function(e,n){e.fire("FullscreenStateChanged",{state:n})},g=n.DOM,r=function(e,n){var t,r,l,i,o,c,s=document.body,u=document.documentElement,d=n.get(),a=function(){var e,n,t,i;g.setStyle(l,"height",(t=window,i=document.body,i.offsetWidth&&(e=i.offsetWidth,n=i.offsetHeight),t.innerWidth&&t.innerHeight&&(e=t.innerWidth,n=t.innerHeight),{w:e,h:n}).h-(r.clientHeight-l.clientHeight))},h=function(){g.unbind(window,"resize",a)};if(t=(r=e.getContainer()).style,i=(l=e.getContentAreaContainer().firstChild).style,d)i.width=d.iframeWidth,i.height=d.iframeHeight,d.containerWidth&&(t.width=d.containerWidth),d.containerHeight&&(t.height=d.containerHeight),g.removeClass(s,"mce-fullscreen"),g.removeClass(u,"mce-fullscreen"),g.removeClass(r,"mce-fullscreen"),o=d.scrollPos,window.scrollTo(o.x,o.y),g.unbind(window,"resize",d.resizeHandler),e.off("remove",d.removeHandler),n.set(null),m(e,!1);else{var f={scrollPos:(c=g.getViewPort(),{x:c.x,y:c.y}),containerWidth:t.width,containerHeight:t.height,iframeWidth:i.width,iframeHeight:i.height,resizeHandler:a,removeHandler:h};i.width=i.height="100%",t.width=t.height="",g.addClass(s,"mce-fullscreen"),g.addClass(u,"mce-fullscreen"),g.addClass(r,"mce-fullscreen"),g.bind(window,"resize",a),e.on("remove",h),a(),n.set(f),m(e,!0)}},l=function(e,n){e.addCommand("mceFullScreen",function(){r(e,n)})},o=function(t){return function(e){var n=e.control;t.on("FullscreenStateChanged",function(e){n.active(e.state)})}},c=function(e){e.addMenuItem("fullscreen",{text:"Fullscreen",shortcut:"Ctrl+Shift+F",selectable:!0,cmd:"mceFullScreen",onPostRender:o(e),context:"view"}),e.addButton("fullscreen",{active:!1,tooltip:"Fullscreen",cmd:"mceFullScreen",onPostRender:o(e)})};e.add("fullscreen",function(e){var n=i(null);return e.settings.inline||(l(e,n),c(e),e.addShortcut("Ctrl+Shift+F","","mceFullScreen")),t(n)})}();

/***/ }),

/***/ "d340":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),c=tinymce.util.Tools.resolve("tinymce.EditorManager"),s=tinymce.util.Tools.resolve("tinymce.Env"),a=tinymce.util.Tools.resolve("tinymce.util.Delay"),y=tinymce.util.Tools.resolve("tinymce.util.Tools"),f=tinymce.util.Tools.resolve("tinymce.util.VK"),d=function(e){return e.getParam("tab_focus",e.getParam("tabfocus_elements",":prev,:next"))},m=t.DOM,n=function(e){e.keyCode!==f.TAB||e.ctrlKey||e.altKey||e.metaKey||e.preventDefault()},i=function(r){function e(n){var i,o,e,l;if(!(n.keyCode!==f.TAB||n.ctrlKey||n.altKey||n.metaKey||n.isDefaultPrevented())&&(1===(e=y.explode(d(r))).length&&(e[1]=e[0],e[0]=":prev"),o=n.shiftKey?":prev"===e[0]?u(-1):m.get(e[0]):":next"===e[1]?u(1):m.get(e[1]))){var t=c.get(o.id||o.name);o.id&&t?t.focus():a.setTimeout(function(){s.webkit||window.focus(),o.focus()},10),n.preventDefault()}function u(e){function t(t){return/INPUT|TEXTAREA|BUTTON/.test(t.tagName)&&c.get(n.id)&&-1!==t.tabIndex&&function e(t){return"BODY"===t.nodeName||"hidden"!==t.type&&"none"!==t.style.display&&"hidden"!==t.style.visibility&&e(t.parentNode)}(t)}if(o=m.select(":input:enabled,*[tabindex]:not(iframe)"),y.each(o,function(e,t){if(e.id===r.id)return i=t,!1}),0<e){for(l=i+1;l<o.length;l++)if(t(o[l]))return o[l]}else for(l=i-1;0<=l;l--)if(t(o[l]))return o[l];return null}}r.on("init",function(){r.inline&&m.setAttrib(r.getBody(),"tabIndex",null),r.on("keyup",n),s.gecko?r.on("keypress keydown",e):r.on("keydown",e)})};e.add("tabfocus",function(e){i(e)})}();

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d43b":
/***/ (function(module, exports) {

!function(){"use strict";var n=function(e){var t=e,a=function(){return t};return{get:a,set:function(e){t=e},clone:function(){return n(a())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),s=function(e){return e.settings.codesample_content_css},a=function(e){return e.settings.codesample_languages},o=function(e){return Math.min(i.DOM.getViewPort().w,e.getParam("codesample_dialog_width",800))},l=function(e){return Math.min(i.DOM.getViewPort().w,e.getParam("codesample_dialog_height",650))},t={},r=t,u=void 0!==t?t:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},c=function(){var c=/\blang(?:uage)?-(?!\*)(\w+)\b/i,S=u.Prism={util:{encode:function(e){return e instanceof o?new o(e.type,S.util.encode(e.content),e.alias):"Array"===S.util.type(e)?e.map(S.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){switch(S.util.type(e)){case"Object":var t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=S.util.clone(e[a]));return t;case"Array":return e.map&&e.map(function(e){return S.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=S.util.clone(S.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(a,e,t,n){var i=(n=n||S.languages)[a];if(2===arguments.length){for(var r in t=e)t.hasOwnProperty(r)&&(i[r]=t[r]);return i}var s={};for(var o in i)if(i.hasOwnProperty(o)){if(o===e)for(var r in t)t.hasOwnProperty(r)&&(s[r]=t[r]);s[o]=i[o]}return S.languages.DFS(S.languages,function(e,t){t===n[a]&&e!==a&&(this[e]=s)}),n[a]=s},DFS:function(e,t,a){for(var n in e)e.hasOwnProperty(n)&&(t.call(e,n,e[n],a||n),"Object"===S.util.type(e[n])?S.languages.DFS(e[n],t):"Array"===S.util.type(e[n])&&S.languages.DFS(e[n],t,n))}},plugins:{},highlightAll:function(e,t){for(var a=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),n=0,i=void 0;i=a[n++];)S.highlightElement(i,!0===e,t)},highlightElement:function(e,t,a){for(var n,i,r=e;r&&!c.test(r.className);)r=r.parentNode;r&&(n=(r.className.match(c)||[,""])[1],i=S.languages[n]),e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+n,r=e.parentNode,/pre/i.test(r.nodeName)&&(r.className=r.className.replace(c,"").replace(/\s+/g," ")+" language-"+n);var s=e.textContent,o={element:e,language:n,grammar:i,code:s};if(s&&i)if(S.hooks.run("before-highlight",o),t&&u.Worker){var l=new Worker(S.filename);l.onmessage=function(e){o.highlightedCode=e.data,S.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,a&&a.call(o.element),S.hooks.run("after-highlight",o),S.hooks.run("complete",o)},l.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else o.highlightedCode=S.highlight(o.code,o.grammar,o.language),S.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,a&&a.call(e),S.hooks.run("after-highlight",o),S.hooks.run("complete",o);else S.hooks.run("complete",o)},highlight:function(e,t,a){var n=S.tokenize(e,t);return o.stringify(S.util.encode(n),a)},tokenize:function(e,t,a){var n=S.Token,i=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}e:for(var s in t)if(t.hasOwnProperty(s)&&t[s]){var o=t[s];o="Array"===S.util.type(o)?o:[o];for(var l=0;l<o.length;++l){var c=o[l],u=c.inside,g=!!c.lookbehind,d=0,p=c.alias;c=c.pattern||c;for(var f=0;f<i.length;f++){var h=i[f];if(i.length>e.length)break e;if(!(h instanceof n)){c.lastIndex=0;var m=c.exec(h);if(m){g&&(d=m[1].length);var b=m.index-1+d,y=b+(m=m[0].slice(d)).length,v=h.slice(0,b+1),k=h.slice(y+1),w=[f,1];v&&w.push(v);var x=new n(s,u?S.tokenize(m,u):m,p);w.push(x),k&&w.push(k),Array.prototype.splice.apply(i,w)}}}}}return i},hooks:{all:{},add:function(e,t){var a=S.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=S.hooks.all[e];if(a&&a.length)for(var n=0,i=void 0;i=a[n++];)i(t)}}},o=S.Token=function(e,t,a){this.type=e,this.content=t,this.alias=a};if(o.stringify=function(t,a,e){if("string"==typeof t)return t;if("Array"===S.util.type(t))return t.map(function(e){return o.stringify(e,a,t)}).join("");var n={type:t.type,content:o.stringify(t.content,a,e),tag:"span",classes:["token",t.type],attributes:{},language:a,parent:e};if("comment"===n.type&&(n.attributes.spellcheck="true"),t.alias){var i="Array"===S.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(n.classes,i)}S.hooks.run("wrap",n);var r="";for(var s in n.attributes)r+=(r?" ":"")+s+'="'+(n.attributes[s]||"")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'" '+r+">"+n.content+"</"+n.tag+">"},!u.document)return u.addEventListener&&u.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,n=t.code,i=t.immediateClose;u.postMessage(S.highlight(n,S.languages[a],a)),i&&u.close()},!1),u.Prism}();void 0!==r&&(r.Prism=c),c.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/=.]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},c.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),c.languages.xml=c.languages.markup,c.languages.html=c.languages.markup,c.languages.mathml=c.languages.markup,c.languages.svg=c.languages.markup,c.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},c.languages.css.atrule.inside.rest=c.util.clone(c.languages.css),c.languages.markup&&(c.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:c.languages.markup.tag.inside},rest:c.languages.css},alias:"language-css"}}),c.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:c.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:c.languages.css}},alias:"language-css"}},c.languages.markup.tag)),c.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},c.languages.javascript=c.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),c.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),c.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:c.languages.javascript}},string:/[\s\S]+/}}}),c.languages.markup&&c.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:c.languages.markup.tag.inside},rest:c.languages.javascript},alias:"language-javascript"}}),c.languages.js=c.languages.javascript,c.languages.c=c.languages.extend("clike",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,operator:/\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i}),c.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,lookbehind:!0,alias:"property",inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:!0}}}}),delete c.languages.c["class-name"],delete c.languages.c["boolean"],c.languages.csharp=c.languages.extend("clike",{keyword:/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,string:[/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,/("|')(\\?.)*?\1/],number:/\b-?(0x[\da-f]+|\d*\.?\d+)\b/i}),c.languages.insertBefore("csharp","keyword",{preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0}}),c.languages.cpp=c.languages.extend("c",{keyword:/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,"boolean":/\b(true|false)\b/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/}),c.languages.insertBefore("cpp","keyword",{"class-name":{pattern:/(class\s+)[a-z0-9_]+/i,lookbehind:!0}}),c.languages.java=c.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}}),c.languages.php=c.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),c.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),c.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),c.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),c.languages.markup&&(c.hooks.add("before-highlight",function(t){"php"===t.language&&(t.tokenStack=[],t.backupCode=t.code,t.code=t.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(e){return t.tokenStack.push(e),"{{{PHP"+t.tokenStack.length+"}}}"}))}),c.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),c.hooks.add("after-highlight",function(e){if("php"===e.language){for(var t=0,a=void 0;a=e.tokenStack[t];t++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(t+1)+"}}}",c.highlight(a,e.grammar,"php").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}}),c.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),c.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:c.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),c.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:/"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(?:\\?.)*?\1/,"function":{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/},function(e){e.languages.ruby=e.languages.extend("clike",{comment:/#(?!\{[^\r\n]*?\}).*/,keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var t={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.util.clone(e.languages.ruby)}};e.languages.insertBefore("ruby","keyword",{regex:[{pattern:/%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,inside:{interpolation:t}},{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}],variable:/[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,symbol:/:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.insertBefore("ruby","number",{builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,inside:{interpolation:t}},{pattern:/("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,inside:{interpolation:t}}]}(c);var g={isCodeSample:function(e){return e&&"PRE"===e.nodeName&&-1!==e.className.indexOf("language-")},trimArg:function(a){return function(e,t){return a(t)}}},d=function(e){var t=e.selection.getNode();return g.isCodeSample(t)?t:null},p=d,f=function(t,a,n){t.undoManager.transact(function(){var e=d(t);n=i.DOM.encode(n),e?(t.dom.setAttrib(e,"class","language-"+a),e.innerHTML=n,c.highlightElement(e),t.selection.select(e)):(t.insertContent('<pre id="__new" class="language-'+a+'">'+n+"</pre>"),t.selection.select(t.$("#__new").removeAttr("id")[0]))})},h=function(e){var t=d(e);return t?t.textContent:""},m=function(e){var t=a(e);return t||[{text:"HTML/XML",value:"markup"},{text:"JavaScript",value:"javascript"},{text:"CSS",value:"css"},{text:"PHP",value:"php"},{text:"Ruby",value:"ruby"},{text:"Python",value:"python"},{text:"Java",value:"java"},{text:"C",value:"c"},{text:"C#",value:"csharp"},{text:"C++",value:"cpp"}]},b=function(e){var t,a=p(e);return a&&(t=a.className.match(/language-(\w+)/))?t[1]:""},y=function(t){var e=o(t),a=l(t),n=b(t),i=m(t),r=h(t);t.windowManager.open({title:"Insert/Edit code sample",minWidth:e,minHeight:a,layout:"flex",direction:"column",align:"stretch",body:[{type:"listbox",name:"language",label:"Language",maxWidth:200,value:n,values:i},{type:"textbox",name:"code",multiline:!0,spellcheck:!1,ariaLabel:"Code view",flex:1,style:"direction: ltr; text-align: left",classes:"monospace",value:r,autofocus:!0}],onSubmit:function(e){f(t,e.data.language,e.data.code)}})},v=function(t){t.addCommand("codesample",function(){var e=t.selection.getNode();t.selection.isCollapsed()||g.isCodeSample(e)?y(t):t.formatter.toggle("code")})},k=function(a){var i=a.$;a.on("PreProcess",function(e){i("pre[contenteditable=false]",e.node).filter(g.trimArg(g.isCodeSample)).each(function(e,t){var a=i(t),n=t.textContent;a.attr("class",i.trim(a.attr("class"))),a.removeAttr("contentEditable"),a.empty().append(i("<code></code>").each(function(){this.textContent=n}))})}),a.on("SetContent",function(){var e=i("pre").filter(g.trimArg(g.isCodeSample)).filter(function(e,t){return"false"!==t.contentEditable});e.length&&a.undoManager.transact(function(){e.each(function(e,t){i(t).find("br").each(function(e,t){t.parentNode.replaceChild(a.getDoc().createTextNode("\n"),t)}),t.contentEditable=!1,t.innerHTML=a.dom.encode(t.textContent),c.highlightElement(t),t.className=i.trim(t.className)})})})},w=function(e,t,a,n){var i,r=s(e);e.inline&&a.get()||!e.inline&&n.get()||(e.inline?a.set(!0):n.set(!0),!1!==r&&(i=e.dom.create("link",{rel:"stylesheet",href:r||t+"/css/prism.css"}),e.getDoc().getElementsByTagName("head")[0].appendChild(i)))},x=function(e){e.addButton("codesample",{cmd:"codesample",title:"Insert/Edit code sample"}),e.addMenuItem("codesample",{cmd:"codesample",text:"Code sample",icon:"codesample"})},S=n(!1);e.add("codesample",function(t,e){var a=n(!1);k(t),x(t),v(t),t.on("init",function(){w(t,e,S,a)}),t.on("dblclick",function(e){g.isCodeSample(e.target)&&y(t)})})}();

/***/ }),

/***/ "d5e0":
/***/ (function(module, exports) {

!function(){"use strict";var l=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return l(n())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),g=tinymce.util.Tools.resolve("tinymce.util.Tools"),t=tinymce.util.Tools.resolve("tinymce.html.DomParser"),f=tinymce.util.Tools.resolve("tinymce.html.Node"),m=tinymce.util.Tools.resolve("tinymce.html.Serializer"),h=function(e){return e.getParam("fullpage_hide_in_source_view")},r=function(e){return e.getParam("fullpage_default_xml_pi")},o=function(e){return e.getParam("fullpage_default_encoding")},a=function(e){return e.getParam("fullpage_default_font_family")},c=function(e){return e.getParam("fullpage_default_font_size")},s=function(e){return e.getParam("fullpage_default_text_color")},u=function(e){return e.getParam("fullpage_default_title")},d=function(e){return e.getParam("fullpage_default_doctype","<!DOCTYPE html>")},p=function(e){return t({validate:!1,root_name:"#document"}).parse(e)},y=p,v=function(e,t){var n,l,i=p(t),r={};function o(e,t){return e.attr(t)||""}return r.fontface=a(e),r.fontsize=c(e),7===(n=i.firstChild).type&&(r.xml_pi=!0,(l=/encoding="([^"]+)"/.exec(n.value))&&(r.docencoding=l[1])),(n=i.getAll("#doctype")[0])&&(r.doctype="<!DOCTYPE"+n.value+">"),(n=i.getAll("title")[0])&&n.firstChild&&(r.title=n.firstChild.value),g.each(i.getAll("meta"),function(e){var t,n=e.attr("name"),l=e.attr("http-equiv");n?r[n.toLowerCase()]=e.attr("content"):"Content-Type"===l&&(t=/charset\s*=\s*(.*)\s*/gi.exec(e.attr("content")))&&(r.docencoding=t[1])}),(n=i.getAll("html")[0])&&(r.langcode=o(n,"lang")||o(n,"xml:lang")),r.stylesheets=[],g.each(i.getAll("link"),function(e){"stylesheet"===e.attr("rel")&&r.stylesheets.push(e.attr("href"))}),(n=i.getAll("body")[0])&&(r.langdir=o(n,"dir"),r.style=o(n,"style"),r.visited_color=o(n,"vlink"),r.link_color=o(n,"link"),r.active_color=o(n,"alink")),r},_=function(e,r,t){var o,n,l,a,i,c=e.dom;function s(e,t,n){e.attr(t,n||undefined)}function u(e){n.firstChild?n.insert(e,n.firstChild):n.append(e)}o=p(t),(n=o.getAll("head")[0])||(a=o.getAll("html")[0],n=new f("head",1),a.firstChild?a.insert(n,a.firstChild,!0):a.append(n)),a=o.firstChild,r.xml_pi?(i='version="1.0"',r.docencoding&&(i+=' encoding="'+r.docencoding+'"'),7!==a.type&&(a=new f("xml",7),o.insert(a,o.firstChild,!0)),a.value=i):a&&7===a.type&&a.remove(),a=o.getAll("#doctype")[0],r.doctype?(a||(a=new f("#doctype",10),r.xml_pi?o.insert(a,o.firstChild):u(a)),a.value=r.doctype.substring(9,r.doctype.length-1)):a&&a.remove(),a=null,g.each(o.getAll("meta"),function(e){"Content-Type"===e.attr("http-equiv")&&(a=e)}),r.docencoding?(a||((a=new f("meta",1)).attr("http-equiv","Content-Type"),a.shortEnded=!0,u(a)),a.attr("content","text/html; charset="+r.docencoding)):a&&a.remove(),a=o.getAll("title")[0],r.title?(a?a.empty():u(a=new f("title",1)),a.append(new f("#text",3)).value=r.title):a&&a.remove(),g.each("keywords,description,author,copyright,robots".split(","),function(e){var t,n,l=o.getAll("meta"),i=r[e];for(t=0;t<l.length;t++)if((n=l[t]).attr("name")===e)return void(i?n.attr("content",i):n.remove());i&&((a=new f("meta",1)).attr("name",e),a.attr("content",i),a.shortEnded=!0,u(a))});var d={};return g.each(o.getAll("link"),function(e){"stylesheet"===e.attr("rel")&&(d[e.attr("href")]=e)}),g.each(r.stylesheets,function(e){d[e]||((a=new f("link",1)).attr({rel:"stylesheet",text:"text/css",href:e}),a.shortEnded=!0,u(a)),delete d[e]}),g.each(d,function(e){e.remove()}),(a=o.getAll("body")[0])&&(s(a,"dir",r.langdir),s(a,"style",r.style),s(a,"vlink",r.visited_color),s(a,"link",r.link_color),s(a,"alink",r.active_color),c.setAttribs(e.getBody(),{style:r.style,dir:r.dir,vLink:r.visited_color,link:r.link_color,aLink:r.active_color})),(a=o.getAll("html")[0])&&(s(a,"lang",r.langcode),s(a,"xml:lang",r.langcode)),n.firstChild||n.remove(),(l=m({validate:!1,indent:!0,apply_source_formatting:!0,indent_before:"head,html,body,meta,title,script,link,style",indent_after:"head,html,body,meta,title,script,link,style"}).serialize(o)).substring(0,l.indexOf("</body>"))},n=function(n,l){var i=v(n,l.get());n.windowManager.open({title:"Document properties",data:i,defaults:{type:"textbox",size:40},body:[{name:"title",label:"Title"},{name:"keywords",label:"Keywords"},{name:"description",label:"Description"},{name:"robots",label:"Robots"},{name:"author",label:"Author"},{name:"docencoding",label:"Encoding"}],onSubmit:function(e){var t=_(n,g.extend(i,e.data),l.get());l.set(t)}})},i=function(e,t){e.addCommand("mceFullPageProperties",function(){n(e,t)})},b=function(e,t){return g.each(e,function(e){t=t.replace(e,function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"})}),t},x=function(e){return e.replace(/<!--mce:protected ([\s\S]*?)-->/g,function(e,t){return unescape(t)})},k=g.each,C=function(e){return e.replace(/<\/?[A-Z]+/g,function(e){return e.toLowerCase()})},A=function(e){var t,n="",l="";if(r(e)){var i=o(e);n+='<?xml version="1.0" encoding="'+(i||"ISO-8859-1")+'" ?>\n'}return n+=d(e),n+="\n<html>\n<head>\n",(t=u(e))&&(n+="<title>"+t+"</title>\n"),(t=o(e))&&(n+='<meta http-equiv="Content-Type" content="text/html; charset='+t+'" />\n'),(t=a(e))&&(l+="font-family: "+t+";"),(t=c(e))&&(l+="font-size: "+t+";"),(t=s(e))&&(l+="color: "+t+";"),n+="</head>\n<body"+(l?' style="'+l+'"':"")+">\n"},w=function(r,o,a){r.on("BeforeSetContent",function(e){!function(e,t,n,l){var i,r,o,a,c,s="",u=e.dom;if(!(l.selection||(o=b(e.settings.protect,l.content),"raw"===l.format&&t.get()||l.source_view&&h(e)))){0!==o.length||l.source_view||(o=g.trim(t.get())+"\n"+g.trim(o)+"\n"+g.trim(n.get())),-1!==(i=(o=o.replace(/<(\/?)BODY/gi,"<$1body")).indexOf("<body"))?(i=o.indexOf(">",i),t.set(C(o.substring(0,i+1))),-1===(r=o.indexOf("</body",i))&&(r=o.length),l.content=g.trim(o.substring(i+1,r)),n.set(C(o.substring(r)))):(t.set(A(e)),n.set("\n</body>\n</html>")),a=y(t.get()),k(a.getAll("style"),function(e){e.firstChild&&(s+=e.firstChild.value)}),(c=a.getAll("body")[0])&&u.setAttribs(e.getBody(),{style:c.attr("style")||"",dir:c.attr("dir")||"",vLink:c.attr("vlink")||"",link:c.attr("link")||"",aLink:c.attr("alink")||""}),u.remove("fullpage_styles");var d=e.getDoc().getElementsByTagName("head")[0];s&&(u.add(d,"style",{id:"fullpage_styles"},s),(c=u.get("fullpage_styles")).styleSheet&&(c.styleSheet.cssText=s));var f={};g.each(d.getElementsByTagName("link"),function(e){"stylesheet"===e.rel&&e.getAttribute("data-mce-fullpage")&&(f[e.href]=e)}),g.each(a.getAll("link"),function(e){var t=e.attr("href");if(!t)return!0;f[t]||"stylesheet"!==e.attr("rel")||u.add(d,"link",{rel:"stylesheet",text:"text/css",href:t,"data-mce-fullpage":"1"}),delete f[t]}),g.each(f,function(e){e.parentNode.removeChild(e)})}}(r,o,a,e)}),r.on("GetContent",function(e){var t,n,l,i;t=r,n=o.get(),l=a.get(),(i=e).selection||i.source_view&&h(t)||(i.content=x(g.trim(n)+"\n"+g.trim(i.content)+"\n"+g.trim(l)))})},P=function(e){e.addButton("fullpage",{title:"Document properties",cmd:"mceFullPageProperties"}),e.addMenuItem("fullpage",{text:"Document properties",cmd:"mceFullPageProperties",context:"file"})};e.add("fullpage",function(e){var t=l(""),n=l("");i(e,t),P(e),w(e,t,n)})}();

/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "dcc7":
/***/ (function(module, exports) {

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(e,t){return e.fire("insertCustomChar",{chr:t})},l=function(e,t){var a=i(e,t).chr;e.execCommand("mceInsertContent",!1,a)},a=tinymce.util.Tools.resolve("tinymce.util.Tools"),r=function(e){return e.settings.charmap},n=function(e){return e.settings.charmap_append},o=a.isArray,c=function(e){return o(e)?[].concat((t=e,a.grep(t,function(e){return o(e)&&2===e.length}))):"function"==typeof e?e():[];var t},s=function(e){return function(e,t){var a=r(e);a&&(t=c(a));var i=n(e);return i?[].concat(t).concat(c(i)):t}(e,[["160","no-break space"],["173","soft hyphen"],["34","quotation mark"],["162","cent sign"],["8364","euro sign"],["163","pound sign"],["165","yen sign"],["169","copyright sign"],["174","registered sign"],["8482","trade mark sign"],["8240","per mille sign"],["181","micro sign"],["183","middle dot"],["8226","bullet"],["8230","three dot leader"],["8242","minutes / feet"],["8243","seconds / inches"],["167","section sign"],["182","paragraph sign"],["223","sharp s / ess-zed"],["8249","single left-pointing angle quotation mark"],["8250","single right-pointing angle quotation mark"],["171","left pointing guillemet"],["187","right pointing guillemet"],["8216","left single quotation mark"],["8217","right single quotation mark"],["8220","left double quotation mark"],["8221","right double quotation mark"],["8218","single low-9 quotation mark"],["8222","double low-9 quotation mark"],["60","less-than sign"],["62","greater-than sign"],["8804","less-than or equal to"],["8805","greater-than or equal to"],["8211","en dash"],["8212","em dash"],["175","macron"],["8254","overline"],["164","currency sign"],["166","broken bar"],["168","diaeresis"],["161","inverted exclamation mark"],["191","turned question mark"],["710","circumflex accent"],["732","small tilde"],["176","degree sign"],["8722","minus sign"],["177","plus-minus sign"],["247","division sign"],["8260","fraction slash"],["215","multiplication sign"],["185","superscript one"],["178","superscript two"],["179","superscript three"],["188","fraction one quarter"],["189","fraction one half"],["190","fraction three quarters"],["402","function / florin"],["8747","integral"],["8721","n-ary sumation"],["8734","infinity"],["8730","square root"],["8764","similar to"],["8773","approximately equal to"],["8776","almost equal to"],["8800","not equal to"],["8801","identical to"],["8712","element of"],["8713","not an element of"],["8715","contains as member"],["8719","n-ary product"],["8743","logical and"],["8744","logical or"],["172","not sign"],["8745","intersection"],["8746","union"],["8706","partial differential"],["8704","for all"],["8707","there exists"],["8709","diameter"],["8711","backward difference"],["8727","asterisk operator"],["8733","proportional to"],["8736","angle"],["180","acute accent"],["184","cedilla"],["170","feminine ordinal indicator"],["186","masculine ordinal indicator"],["8224","dagger"],["8225","double dagger"],["192","A - grave"],["193","A - acute"],["194","A - circumflex"],["195","A - tilde"],["196","A - diaeresis"],["197","A - ring above"],["256","A - macron"],["198","ligature AE"],["199","C - cedilla"],["200","E - grave"],["201","E - acute"],["202","E - circumflex"],["203","E - diaeresis"],["274","E - macron"],["204","I - grave"],["205","I - acute"],["206","I - circumflex"],["207","I - diaeresis"],["298","I - macron"],["208","ETH"],["209","N - tilde"],["210","O - grave"],["211","O - acute"],["212","O - circumflex"],["213","O - tilde"],["214","O - diaeresis"],["216","O - slash"],["332","O - macron"],["338","ligature OE"],["352","S - caron"],["217","U - grave"],["218","U - acute"],["219","U - circumflex"],["220","U - diaeresis"],["362","U - macron"],["221","Y - acute"],["376","Y - diaeresis"],["562","Y - macron"],["222","THORN"],["224","a - grave"],["225","a - acute"],["226","a - circumflex"],["227","a - tilde"],["228","a - diaeresis"],["229","a - ring above"],["257","a - macron"],["230","ligature ae"],["231","c - cedilla"],["232","e - grave"],["233","e - acute"],["234","e - circumflex"],["235","e - diaeresis"],["275","e - macron"],["236","i - grave"],["237","i - acute"],["238","i - circumflex"],["239","i - diaeresis"],["299","i - macron"],["240","eth"],["241","n - tilde"],["242","o - grave"],["243","o - acute"],["244","o - circumflex"],["245","o - tilde"],["246","o - diaeresis"],["248","o slash"],["333","o macron"],["339","ligature oe"],["353","s - caron"],["249","u - grave"],["250","u - acute"],["251","u - circumflex"],["252","u - diaeresis"],["363","u - macron"],["253","y - acute"],["254","thorn"],["255","y - diaeresis"],["563","y - macron"],["913","Alpha"],["914","Beta"],["915","Gamma"],["916","Delta"],["917","Epsilon"],["918","Zeta"],["919","Eta"],["920","Theta"],["921","Iota"],["922","Kappa"],["923","Lambda"],["924","Mu"],["925","Nu"],["926","Xi"],["927","Omicron"],["928","Pi"],["929","Rho"],["931","Sigma"],["932","Tau"],["933","Upsilon"],["934","Phi"],["935","Chi"],["936","Psi"],["937","Omega"],["945","alpha"],["946","beta"],["947","gamma"],["948","delta"],["949","epsilon"],["950","zeta"],["951","eta"],["952","theta"],["953","iota"],["954","kappa"],["955","lambda"],["956","mu"],["957","nu"],["958","xi"],["959","omicron"],["960","pi"],["961","rho"],["962","final sigma"],["963","sigma"],["964","tau"],["965","upsilon"],["966","phi"],["967","chi"],["968","psi"],["969","omega"],["8501","alef symbol"],["982","pi symbol"],["8476","real part symbol"],["978","upsilon - hook symbol"],["8472","Weierstrass p"],["8465","imaginary part"],["8592","leftwards arrow"],["8593","upwards arrow"],["8594","rightwards arrow"],["8595","downwards arrow"],["8596","left right arrow"],["8629","carriage return"],["8656","leftwards double arrow"],["8657","upwards double arrow"],["8658","rightwards double arrow"],["8659","downwards double arrow"],["8660","left right double arrow"],["8756","therefore"],["8834","subset of"],["8835","superset of"],["8836","not a subset of"],["8838","subset of or equal to"],["8839","superset of or equal to"],["8853","circled plus"],["8855","circled times"],["8869","perpendicular"],["8901","dot operator"],["8968","left ceiling"],["8969","right ceiling"],["8970","left floor"],["8971","right floor"],["9001","left-pointing angle bracket"],["9002","right-pointing angle bracket"],["9674","lozenge"],["9824","black spade suit"],["9827","black club suit"],["9829","black heart suit"],["9830","black diamond suit"],["8194","en space"],["8195","em space"],["8201","thin space"],["8204","zero width non-joiner"],["8205","zero width joiner"],["8206","left-to-right mark"],["8207","right-to-left mark"]])},t=function(t){return{getCharMap:function(){return s(t)},insertChar:function(e){l(t,e)}}},u=function(e){var t,a,i,r=Math.min(e.length,25),n=Math.ceil(e.length/r);for(t='<table role="presentation" cellspacing="0" class="mce-charmap"><tbody>',i=0;i<n;i++){for(t+="<tr>",a=0;a<r;a++){var o=i*r+a;if(o<e.length){var l=e[o],c=parseInt(l[0],10),s=l?String.fromCharCode(c):"&nbsp;";t+='<td title="'+l[1]+'"><div tabindex="-1" title="'+l[1]+'" role="button" data-chr="'+c+'">'+s+"</div></td>"}else t+="<td />"}t+="</tr>"}return t+="</tbody></table>"},d=function(e){for(;e;){if("TD"===e.nodeName)return e;e=e.parentNode}},m=function(n){var o,e={type:"container",html:u(s(n)),onclick:function(e){var t=e.target;if(/^(TD|DIV)$/.test(t.nodeName)){var a=d(t).firstChild;if(a&&a.hasAttribute("data-chr")){var i=a.getAttribute("data-chr"),r=parseInt(i,10);isNaN(r)||l(n,String.fromCharCode(r)),e.ctrlKey||o.close()}}},onmouseover:function(e){var t=d(e.target);t&&t.firstChild?(o.find("#preview").text(t.firstChild.firstChild.data),o.find("#previewTitle").text(t.title)):(o.find("#preview").text(" "),o.find("#previewTitle").text(" "))}};o=n.windowManager.open({title:"Special character",spacing:10,padding:10,items:[e,{type:"container",layout:"flex",direction:"column",align:"center",spacing:5,minWidth:160,minHeight:160,items:[{type:"label",name:"preview",text:" ",style:"font-size: 40px; text-align: center",border:1,minWidth:140,minHeight:80},{type:"spacer",minHeight:20},{type:"label",name:"previewTitle",text:" ",style:"white-space: pre-wrap;",border:1,minWidth:140}]}],buttons:[{text:"Close",onclick:function(){o.close()}}]})},g=function(e){e.addCommand("mceShowCharmap",function(){m(e)})},p=function(e){e.addButton("charmap",{icon:"charmap",tooltip:"Special character",cmd:"mceShowCharmap"}),e.addMenuItem("charmap",{icon:"charmap",text:"Special character",cmd:"mceShowCharmap",context:"insert"})};e.add("charmap",function(e){return g(e),p(e),t(e)})}();

/***/ }),

/***/ "defa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e544":
/***/ (function(module, exports) {

!function(){"use strict";var o=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return o(n())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(e,t){e.fire("VisualBlocks",{state:t})},s=function(e){return e.getParam("visualblocks_default_state",!1)},c=function(e){return e.settings.visualblocks_content_css},l=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),u=tinymce.util.Tools.resolve("tinymce.util.Tools"),a=l.DOM.uniqueId(),r=function(e,t){var n=u.toArray(e.getElementsByTagName("link"));if(0===u.grep(n,function(e){return e.id===a}).length){var o=l.DOM.create("link",{id:a,rel:"stylesheet",href:t});e.getElementsByTagName("head")[0].appendChild(o)}},m=function(e,t,n){var o=e.dom,s=c(e);r(e.getDoc(),s||t+"/css/visualblocks.css"),o.toggleClass(e.getBody(),"mce-visualblocks"),n.set(!n.get()),i(e,n.get())},f=function(e,t,n){e.addCommand("mceVisualBlocks",function(){m(e,t,n)})},d=function(t,e,n){t.on("PreviewFormats AfterPreviewFormats",function(e){n.get()&&t.dom.toggleClass(t.getBody(),"mce-visualblocks","afterpreviewformats"===e.type)}),t.on("init",function(){s(t)&&m(t,e,n)}),t.on("remove",function(){t.dom.removeClass(t.getBody(),"mce-visualblocks")})},n=function(n,o){return function(e){var t=e.control;t.active(o.get()),n.on("VisualBlocks",function(e){t.active(e.state)})}},v=function(e,t){e.addButton("visualblocks",{active:!1,title:"Show blocks",cmd:"mceVisualBlocks",onPostRender:n(e,t)}),e.addMenuItem("visualblocks",{text:"Show blocks",cmd:"mceVisualBlocks",onPostRender:n(e,t),selectable:!0,context:"view",prependToContext:!0})};e.add("visualblocks",function(e,t){var n=o(!1);f(e,t,n),v(e,n),d(e,t,n)})}();

/***/ }),

/***/ "f344":
/***/ (function(module, exports) {

!function(){"use strict";var n,e,t,r,o,u,i=function(n){var e=n,t=function(){return e};return{get:t,set:function(n){e=n},clone:function(){return i(t())}}},c=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(n){return{isEnabled:function(){return n.get()}}},f=function(n,e){return n.fire("VisualChars",{state:e})},l={"\xa0":"nbsp","\xad":"shy"},d=function(n,e){var t,r="";for(t in n)r+=t;return new RegExp("["+r+"]",e?"g":"")},s=function(n){var e,t="";for(e in n)t&&(t+=","),t+="span.mce-"+n[e];return t},m={charMap:l,regExp:d(l),regExpGlobal:d(l,!0),selector:s(l),charMapToRegExp:d,charMapToSelector:s},N=function(n){return function(){return n}},E=N(!1),g=N(!0),h=E,v=g,T=function(){return p},p=(r={fold:function(n,e){return n()},is:h,isSome:h,isNone:v,getOr:t=function(n){return n},getOrThunk:e=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:t,orThunk:e,map:T,ap:T,each:function(){},bind:T,flatten:T,exists:h,forall:v,filter:T,equals:n=function(n){return n.isNone()},equals_:n,toArray:function(){return[]},toString:N("none()")},Object.freeze&&Object.freeze(r),r),O=function(t){var n=function(){return t},e=function(){return o},r=function(n){return n(t)},o={fold:function(n,e){return e(t)},is:function(n){return t===n},isSome:v,isNone:h,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:e,orThunk:e,map:function(n){return O(n(t))},ap:function(n){return n.fold(T,function(n){return O(n(t))})},each:function(n){n(t)},bind:r,flatten:n,exists:r,forall:r,filter:function(n){return n(t)?o:p},equals:function(n){return n.is(t)},equals_:function(n,e){return n.fold(h,function(n){return e(t,n)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return o},y=function(n){return null===n||n===undefined?p:O(n)},D=(o="function",function(n){return function(n){if(null===n)return"null";var e=typeof n;return"object"===e&&Array.prototype.isPrototypeOf(n)?"array":"object"===e&&String.prototype.isPrototypeOf(n)?"string":e}(n)===o}),_=function(n,e){for(var t=0,r=n.length;t<r;t++)e(n[t],t,n)},C=(Array.prototype.slice,D(Array.from)&&Array.from,function(n){if(null===n||n===undefined)throw new Error("Node cannot be null or undefined");return{dom:N(n)}}),M={fromHtml:function(n,e){var t=(e||document).createElement("div");if(t.innerHTML=n,!t.hasChildNodes()||1<t.childNodes.length)throw console.error("HTML does not have a single root node",n),"HTML must have a single root node";return C(t.childNodes[0])},fromTag:function(n,e){var t=(e||document).createElement(n);return C(t)},fromText:function(n,e){var t=(e||document).createTextNode(n);return C(t)},fromDom:C,fromPoint:function(n,e,t){var r=n.dom();return y(r.elementFromPoint(e,t)).map(C)}},b=(Node.ATTRIBUTE_NODE,Node.CDATA_SECTION_NODE,Node.COMMENT_NODE,Node.DOCUMENT_NODE,Node.DOCUMENT_TYPE_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE,Node.TEXT_NODE),k=(Node.PROCESSING_INSTRUCTION_NODE,Node.ENTITY_REFERENCE_NODE,Node.ENTITY_NODE,Node.NOTATION_NODE,function(n){return n.dom().nodeValue}),S=(u=b,function(n){return n.dom().nodeType===u}),x=function(n){return'<span data-mce-bogus="1" class="mce-'+m.charMap[n]+'">'+n+"</span>"},A=function(n,e){var t=[],r=function(n,e){for(var t=n.length,r=new Array(t),o=0;o<t;o++){var u=n[o];r[o]=e(u,o,n)}return r}(n.dom().childNodes,M.fromDom);return _(r,function(n){e(n)&&(t=t.concat([n])),t=t.concat(A(n,e))}),t},w={isMatch:function(n){return S(n)&&k(n)!==undefined&&m.regExp.test(k(n))},filterDescendants:A,findParentElm:function(n,e){for(;n.parentNode;){if(n.parentNode===e)return n;n=n.parentNode}},replaceWithSpans:function(n){return n.replace(m.regExpGlobal,x)}},P=function(t,n){var r,o,e=w.filterDescendants(M.fromDom(n),w.isMatch);_(e,function(n){var e=w.replaceWithSpans(k(n));for(o=t.dom.create("div",null,e);r=o.lastChild;)t.dom.insertAfter(r,n.dom());t.dom.remove(n.dom())})},R=function(e,n){var t=e.dom.select(m.selector,n);_(t,function(n){e.dom.remove(n,1)})},I=P,B=R,U=function(n){var e=n.getBody(),t=n.selection.getBookmark(),r=w.findParentElm(n.selection.getNode(),e);r=r!==undefined?r:e,R(n,r),P(n,r),n.selection.moveToBookmark(t)},V=function(n,e){var t,r=n.getBody(),o=n.selection;e.set(!e.get()),f(n,e.get()),t=o.getBookmark(),!0===e.get()?I(n,r):B(n,r),o.moveToBookmark(t)},j=function(n,e){n.addCommand("mceVisualChars",function(){V(n,e)})},q=tinymce.util.Tools.resolve("tinymce.util.Delay"),G=function(e,t){var r=q.debounce(function(){U(e)},300);!1!==e.settings.forced_root_block&&e.on("keydown",function(n){!0===t.get()&&(13===n.keyCode?U(e):r())})},H=function(t){return function(n){var e=n.control;t.on("VisualChars",function(n){e.active(n.state)})}};c.add("visualchars",function(n){var e,t=i(!1);return j(n,t),(e=n).addButton("visualchars",{active:!1,title:"Show invisible characters",cmd:"mceVisualChars",onPostRender:H(e)}),e.addMenuItem("visualchars",{text:"Show invisible characters",cmd:"mceVisualChars",onPostRender:H(e),selectable:!0,context:"view",prependToContext:!0}),G(n,t),a(t)})}();

/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f8ab":
/***/ (function(module, exports) {

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=function(t){return t.getParam("noneditable_noneditable_class","mceNonEditable")},u=function(t){return t.getParam("noneditable_editable_class","mceEditable")},f=function(t){var n=t.getParam("noneditable_regexp",[]);return n&&n.constructor===RegExp?[n]:n},s=function(n){return function(t){return-1!==(" "+t.attr("class")+" ").indexOf(n)}},d=function(i,o,c){return function(t){var n=arguments,e=n[n.length-2],r=0<e?o.charAt(e-1):"";if('"'===r)return t;if(">"===r){var a=o.lastIndexOf("<",e);if(-1!==a&&-1!==o.substring(a,e).indexOf('contenteditable="false"'))return t}return'<span class="'+c+'" data-mce-content="'+i.dom.encode(n[0])+'">'+i.dom.encode("string"==typeof n[1]?n[1]:n[0])+"</span>"}},n=function(n){var t,e,r="contenteditable";t=" "+c.trim(u(n))+" ",e=" "+c.trim(l(n))+" ";var a=s(t),i=s(e),o=f(n);n.on("PreInit",function(){0<o.length&&n.on("BeforeSetContent",function(t){!function(t,n,e){var r=n.length,a=e.content;if("raw"!==e.format){for(;r--;)a=a.replace(n[r],d(t,a,l(t)));e.content=a}}(n,o,t)}),n.parser.addAttributeFilter("class",function(t){for(var n,e=t.length;e--;)n=t[e],a(n)?n.attr(r,"true"):i(n)&&n.attr(r,"false")}),n.serializer.addAttributeFilter(r,function(t){for(var n,e=t.length;e--;)n=t[e],(a(n)||i(n))&&(0<o.length&&n.attr("data-mce-content")?(n.name="#text",n.type=3,n.raw=!0,n.value=n.attr("data-mce-content")):n.attr(r,null))})})};t.add("noneditable",function(t){n(t)})}();

/***/ }),

/***/ "fac1":
/***/ (function(module, exports) {

!function(){"use strict";var a=function(t){var e=t,n=function(){return e};return{get:n,set:function(t){e=t},clone:function(){return a(n())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=tinymce.util.Tools.resolve("tinymce.util.LocalStorage"),o=tinymce.util.Tools.resolve("tinymce.util.Tools"),i=function(t,e){var n=t||e,r=/^(\d+)([ms]?)$/.exec(""+n);return(r[2]?{s:1e3,m:6e4}[r[2]]:1)*parseInt(n,10)},u=function(t){var e=t.getParam("autosave_prefix","tinymce-autosave-{path}{query}{hash}-{id}-");return e=(e=(e=(e=e.replace(/\{path\}/g,document.location.pathname)).replace(/\{query\}/g,document.location.search)).replace(/\{hash\}/g,document.location.hash)).replace(/\{id\}/g,t.id)},s=function(t,e){var n=t.settings.forced_root_block;return""===(e=o.trim(void 0===e?t.getBody().innerHTML:e))||new RegExp("^<"+n+"[^>]*>((\xa0|&nbsp;|[ \t]|<br[^>]*>)+?|)</"+n+">|<br>$","i").test(e)},c=function(t){var e=parseInt(r.getItem(u(t)+"time"),10)||0;return!((new Date).getTime()-e>i(t.settings.autosave_retention,"20m")&&(f(t,!1),1))},f=function(t,e){var n=u(t);r.removeItem(n+"draft"),r.removeItem(n+"time"),!1!==e&&t.fire("RemoveDraft")},l=function(t){var e=u(t);!s(t)&&t.isDirty()&&(r.setItem(e+"draft",t.getContent({format:"raw",no_events:!0})),r.setItem(e+"time",(new Date).getTime().toString()),t.fire("StoreDraft"))},m=function(t){var e=u(t);c(t)&&(t.setContent(r.getItem(e+"draft"),{format:"raw"}),t.fire("RestoreDraft"))},v=function(t,e){var n=i(t.settings.autosave_interval,"30s");e.get()||(setInterval(function(){t.removed||l(t)},n),e.set(!0))},d=function(t){t.undoManager.transact(function(){m(t),f(t)}),t.focus()};function g(r){for(var o=[],t=1;t<arguments.length;t++)o[t-1]=arguments[t];return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=o.concat(t);return r.apply(null,n)}}var y=tinymce.util.Tools.resolve("tinymce.EditorManager");y._beforeUnloadHandler=function(){var e;return o.each(y.get(),function(t){t.plugins.autosave&&t.plugins.autosave.storeDraft(),!e&&t.isDirty()&&t.getParam("autosave_ask_before_unload",!0)&&(e=t.translate("You have unsaved changes are you sure you want to navigate away?"))}),e};var p=function(n,r){return function(t){var e=t.control;e.disabled(!c(n)),n.on("StoreDraft RestoreDraft RemoveDraft",function(){e.disabled(!c(n))}),v(n,r)}};t.add("autosave",function(t){var e,n,r,o=a(!1);return window.onbeforeunload=y._beforeUnloadHandler,n=o,(e=t).addButton("restoredraft",{title:"Restore last draft",onclick:function(){d(e)},onPostRender:p(e,n)}),e.addMenuItem("restoredraft",{text:"Restore last draft",onclick:function(){d(e)},onPostRender:p(e,n),context:"file"}),t.on("init",function(){t.getParam("autosave_restore_when_empty",!1)&&t.dom.isEmpty(t.getBody())&&m(t)}),{hasDraft:g(c,r=t),storeDraft:g(l,r),restoreDraft:g(m,r),removeDraft:g(f,r),isEmpty:g(s,r)}})}();

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/_w-vue-tinymce-editor@0.1.4@w-vue-tinymce-editor/src/Index.vue?vue&type=template&id=93cc8f0c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("mt30 " + (_vm.loading ? 'loading' : ''))},[_c('div',{attrs:{"id":("ueditor" + _vm._uid),"name":"content","type":"text/plain"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/_w-vue-tinymce-editor@0.1.4@w-vue-tinymce-editor/src/Index.vue?vue&type=template&id=93cc8f0c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/tinymce.min.js
var tinymce_min = __webpack_require__("cf48");

// EXTERNAL MODULE: ./node_modules/_w-vue-tinymce-editor@0.1.4@w-vue-tinymce-editor/src/zh_CN.js
var zh_CN = __webpack_require__("29a5");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/themes/modern/theme.js
var theme = __webpack_require__("5001");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/advlist/plugin.min.js
var plugin_min = __webpack_require__("68e1");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/anchor/plugin.min.js
var anchor_plugin_min = __webpack_require__("7496");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/autolink/plugin.min.js
var autolink_plugin_min = __webpack_require__("66bf");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/autoresize/plugin.min.js
var autoresize_plugin_min = __webpack_require__("07bd");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/autosave/plugin.min.js
var autosave_plugin_min = __webpack_require__("fac1");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/bbcode/plugin.min.js
var bbcode_plugin_min = __webpack_require__("9ac0");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/charmap/plugin.min.js
var charmap_plugin_min = __webpack_require__("dcc7");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/code/plugin.min.js
var code_plugin_min = __webpack_require__("52c4");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/codesample/plugin.min.js
var codesample_plugin_min = __webpack_require__("d43b");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/colorpicker/plugin.min.js
var colorpicker_plugin_min = __webpack_require__("74ca");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/contextmenu/plugin.min.js
var contextmenu_plugin_min = __webpack_require__("3aa6");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/directionality/plugin.min.js
var directionality_plugin_min = __webpack_require__("055a");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/emoticons/plugin.min.js
var emoticons_plugin_min = __webpack_require__("c637");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/fullpage/plugin.min.js
var fullpage_plugin_min = __webpack_require__("d5e0");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/fullscreen/plugin.min.js
var fullscreen_plugin_min = __webpack_require__("d195");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/help/plugin.min.js
var help_plugin_min = __webpack_require__("07af");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/hr/plugin.min.js
var hr_plugin_min = __webpack_require__("c055");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/image/plugin.min.js
var image_plugin_min = __webpack_require__("33a1");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/imagetools/plugin.min.js
var imagetools_plugin_min = __webpack_require__("19bf");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/importcss/plugin.min.js
var importcss_plugin_min = __webpack_require__("09cd");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/insertdatetime/plugin.min.js
var insertdatetime_plugin_min = __webpack_require__("5373");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/legacyoutput/plugin.min.js
var legacyoutput_plugin_min = __webpack_require__("7a20");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/link/plugin.min.js
var link_plugin_min = __webpack_require__("0d6f");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/lists/plugin.min.js
var lists_plugin_min = __webpack_require__("1706");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/media/plugin.min.js
var media_plugin_min = __webpack_require__("09f9");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/nonbreaking/plugin.min.js
var nonbreaking_plugin_min = __webpack_require__("bba3");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/noneditable/plugin.min.js
var noneditable_plugin_min = __webpack_require__("f8ab");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/pagebreak/plugin.min.js
var pagebreak_plugin_min = __webpack_require__("8c15");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/paste/plugin.min.js
var paste_plugin_min = __webpack_require__("16bd");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/preview/plugin.min.js
var preview_plugin_min = __webpack_require__("837f");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/print/plugin.min.js
var print_plugin_min = __webpack_require__("85e6");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/save/plugin.min.js
var save_plugin_min = __webpack_require__("cc93");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/searchreplace/plugin.min.js
var searchreplace_plugin_min = __webpack_require__("8c57");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/spellchecker/plugin.min.js
var spellchecker_plugin_min = __webpack_require__("8102");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/tabfocus/plugin.min.js
var tabfocus_plugin_min = __webpack_require__("d340");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/table/plugin.min.js
var table_plugin_min = __webpack_require__("bf1c");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/template/plugin.min.js
var template_plugin_min = __webpack_require__("ac75");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/textcolor/plugin.min.js
var textcolor_plugin_min = __webpack_require__("07e2");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/textpattern/plugin.min.js
var textpattern_plugin_min = __webpack_require__("c6fc");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/toc/plugin.min.js
var toc_plugin_min = __webpack_require__("7297");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/visualblocks/plugin.min.js
var visualblocks_plugin_min = __webpack_require__("e544");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/visualchars/plugin.min.js
var visualchars_plugin_min = __webpack_require__("f344");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/wordcount/plugin.min.js
var wordcount_plugin_min = __webpack_require__("d0a1");

// CONCATENATED MODULE: ./node_modules/_w-vue-tinymce-editor@0.1.4@w-vue-tinymce-editor/src/plugins.js












































// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/skins/lightgray/content.min.css
var content_min = __webpack_require__("919f");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/skins/lightgray/skin.min.css
var skin_min = __webpack_require__("defa");

// EXTERNAL MODULE: ./node_modules/_tinymce@4.9.2@tinymce/plugins/codesample/css/prism.css
var prism = __webpack_require__("97eb");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/_w-vue-tinymce-editor@0.1.4@w-vue-tinymce-editor/src/Index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
// import tinymce from 'tinymce';


 // plugins

 // 加载样式




var PLUGINS = ['paste', 'link', 'media', 'preview', 'image', 'imagetools', 'fullpage', 'fullscreen', 'emoticons', 'advlist', 'anchor', 'autolink', 'colorpicker', 'contextmenu', 'directionality', 'hr', 'lists', 'table', 'insertdatetime', 'codesample', 'textcolor', 'searchreplace', 'pagebreak'];
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: '',
  data: function data() {
    return {
      tinyEditor: null,
      contentChangeCount: 0,
      loading: false
    };
  },
  props: {
    value: {
      default: ''
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  watch: {
    value: function value(newValue) {
      // 编辑器已初始化并且第一次进入
      this.tinyEditor && !this.contentChangeCount && this.setContent('watch');
      this.contentChangeCount++;
    }
  },
  methods: {
    /**
     * 初始化编辑器
     */
    initEditor: function initEditor() {
      var _this = this;

      tinymce.init(Object.assign({
        selector: "#ueditor".concat(this._uid),
        plugins: PLUGINS,
        toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | emoticons',
        importcss_append: true,
        height: 200,
        paste_data_images: true,
        // images_upload_url: `${BASE_URL}/upload`,
        media_live_embeds: true,
        // images_upload_handler: (blobInfo, success, failure) => {
        //     const formData = new FormData();
        //     formData.append('file', blobInfo.blob(), blobInfo.filename());
        //     uploadImageAPI(formData)
        //         .then(response => {
        //             const res = response.data
        //             if (res.code === 1000) {
        //                 success(res.data.url);
        //             } else {
        //                 failure(`Invalid JSON: ${res.msg}`);
        //             }
        //         });
        // },
        video_template_callback: function video_template_callback(data) {
          return "<iframe width=\"".concat(data.width, "\" height=\"").concat(data.height, "\" src=\"").concat(data.source1, "\" frameborder=\"1\" gesture=\"media\" allow=\"encrypted-media\" allowfullscreen></iframe>");
        },
        init_instance_callback: function init_instance_callback(editor) {
          editor.on('Change', function () {
            _this.$emit('input', _this.tinyEditor.getContent());
          });
        }
      }, this.options)).then(function (res) {
        _this.tinyEditor = tinymce.activeEditor;

        _this.setContent();
      });
    },

    /**
     * 设置内容
     */
    setContent: function setContent() {
      this.tinyEditor.setContent(this.value);
    }
  },
  mounted: function mounted() {
    this.initEditor();
  }
});
// CONCATENATED MODULE: ./node_modules/_w-vue-tinymce-editor@0.1.4@w-vue-tinymce-editor/src/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_w-vue-tinymce-editor@0.1.4@w-vue-tinymce-editor/src/Index.vue?vue&type=style&index=0&id=93cc8f0c&scoped=true&lang=css&
var Indexvue_type_style_index_0_id_93cc8f0c_scoped_true_lang_css_ = __webpack_require__("226a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/_w-vue-tinymce-editor@0.1.4@w-vue-tinymce-editor/src/Index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "93cc8f0c",
  null
  
)

component.options.__file = "Index.vue"
/* harmony default export */ var Index = (component.exports);
// CONCATENATED MODULE: ./node_modules/_w-vue-tinymce-editor@0.1.4@w-vue-tinymce-editor/src/index.js


Index.install = (Vue) => {
  Vue.component('VueTinymce', Index);
};

if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(Index);
}

/* harmony default export */ var src = (Index);
// CONCATENATED MODULE: ./src/moduleApp/index.js


console.log(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(src);

var TestApp = function TestApp(resolve) {
  return __webpack_require__.e(/* AMD require */ 2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("3aa4")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
};

var MainApp = function MainApp(resolve) {
  return __webpack_require__.e(/* AMD require */ 1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("9e4f")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
};

var routes = [{
  path: '/module-a/',
  component: MainApp
}, {
  path: '/module-a/test',
  component: TestApp
}];
window.appData = window.appData || {};
window.appData.router && window.appData.router.addRoutes(routes, {
  override: true
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=test-app.umd.js.map