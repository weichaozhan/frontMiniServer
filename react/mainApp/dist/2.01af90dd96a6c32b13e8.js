(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{EdrR:function(e,t,n){},V6Aj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(n("l+Ma")),r=s(n("12lT")),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("HPZN"),n("ym9o");var u=s(n("rdAL")),i=s(n("T9cD")),c=n("o0/1"),d=n("uuwp");n("EdrR");var f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("FCME"));function s(e){return e&&e.__esModule?e:{default:e}}var p=r.default.Column,m=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e.clickAction=e.clickAction.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),l(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.dotest("test done")},3e3)}},{key:"componentWillUnmount",value:function(){}},{key:"clickAction",value:function(e){var t=JSON.parse(e.currentTarget.dataset.record);console.log(t)}},{key:"render",value:function(){var e=this;return u.default.createElement("div",{className:"wrapper--Test"},u.default.createElement(a.default,{style:{marginBottom:"30px"}},this.props.testRedux.subData),u.default.createElement(r.default,{scroll:{x:1e3,y:500},dataSource:[{key:111,id:1,name:"name",html:"html",address:"address",test:"test",value:"value",phone:"phone"}]},u.default.createElement(p,{title:"id",dataIndex:"id"}),u.default.createElement(p,{title:"key",dataIndex:"key"}),u.default.createElement(p,{title:"name",dataIndex:"name"}),u.default.createElement(p,{title:"html",dataIndex:"html"}),u.default.createElement(p,{title:"address",dataIndex:"address"}),u.default.createElement(p,{title:"test",dataIndex:"test"}),u.default.createElement(p,{title:"value",dataIndex:"value"}),u.default.createElement(p,{title:"phone",dataIndex:"phone",width:"200"}),u.default.createElement(p,{title:"operation",key:"operation",width:"100px",fixed:"right",render:function(t,n){return u.default.createElement("a",{href:"javascript:;",onClick:e.clickAction,"data-record":JSON.stringify(n)},"action")}})),u.default.createElement("div",{className:"ttt"},u.default.createElement("p",null,"Test Text"),u.default.createElement("span",null,"span text")))}}]),t}();m.defaultProps={name:"test"},m.propTypes={name:i.default.string};t.default=(0,d.connect)(function(e){return o({},e)},function(e){return{dotest:function(){return e(f.dotest.apply(f,arguments))}}})((0,c.withRouter)(m))}}]);