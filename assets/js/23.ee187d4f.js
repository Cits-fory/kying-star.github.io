(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{371:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"vue脚手架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue脚手架"}},[e._v("#")]),e._v(" Vue脚手架")]),e._v(" "),a("h4",{attrs:{id:"环境安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境安装"}},[e._v("#")]),e._v(" 环境安装")]),e._v(" "),a("blockquote",[a("p",[e._v("① 使用npm（需要安装node环境）全局安装webpack，打开命令行工具输入："),a("code",[e._v("npm install webpack -g")]),e._v("或者（"),a("code",[e._v("npm install -g webpack")]),e._v("），安装完成之后输入 "),a("code",[e._v("webpack -v")]),e._v("，如下图，如果出现相应的版本号，则说明安装成功。")])]),e._v(" "),a("p",[e._v("注意：webpack 4.X 开始，需要安装 webpack-cli 依赖 ,所以使用这条命令  npm install webpack webpack-cli -g")]),e._v(" "),a("blockquote",[a("p",[e._v("② 全局安装vue-cli，在cmd中输入命令:"),a("code",[e._v("npm i vue-cli -g")])])]),e._v(" "),a("p",[e._v("安装完成之后输入 vue -V（注意这里是大写的“V”），如下图，如果出现相应的版本号，则说明安装成功")]),e._v(" "),a("h4",{attrs:{id:"构建脚手架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建脚手架"}},[e._v("#")]),e._v(" 构建脚手架")]),e._v(" "),a("blockquote",[a("p",[e._v("① 我首先在D盘新建一个文件夹（dxl_vue）作为项目存放地，然后使用命令行cd进入到项目目录输入：")])]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("npm vue init webpack yourproject"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//你自定义的项目名称")]),e._v("\n")])])]),a("p",[e._v("yourproject是自定义的项目名称，命令执行之后，会在当前目录生成一个以该名称命名的项目文件夹。")]),e._v(" "),a("blockquote",[a("p",[e._v("输入命令后，会跳出几个选项让你回答：")])]),e._v(" "),a("ul",[a("li",[e._v("Project name (baoge)： -----项目名称，直接回车，按照括号中默认名字（注意这里的名字不能有大写字母，如果有会报错Sorry, name can no longer contain capital letters），阮一峰老师博客"),a("a",{attrs:{href:"https://link.jianshu.com/?t=http://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("为什么文件名要小写"),a("OutboundLink")],1),e._v(" ，可以参考一下。")]),e._v(" "),a("li",[e._v("Project description (A Vue.js project)： ----项目描述，也可直接点击回车，使用默认名字")]),e._v(" "),a("li",[e._v("Author ()： ----作者，输入你的大名\n接下来会让用户选择：")]),e._v(" "),a("li",[e._v("Runtime + Compiler: recommended for most users 运行加编译，既然已经说了推荐，就选它了\nRuntime-only: about 6KB lighter min+gzip, but templates (or any Vue-specificHTML) are ONLY allowed in .vue files - render functions are required elsewhere  仅运行时，已经有推荐了就选择第一个了")]),e._v(" "),a("li",[e._v("Install vue-router? (Y/n) 是否安装vue-router，这是官方的路由，大多数情况下都使用，这里就输入“y”后回车即可。")]),e._v(" "),a("li",[e._v("Use ESLint to lint your code? (Y/n) 是否使用ESLint管理代码，ESLint是个代码风格管理工具，是用来统一代码风格的，一般项目中都会使用。\n接下来也是选择题Pick an ESLint preset (Use arrow keys) 选择一个ESLint预设，编写vue项目时的代码风格，直接y回车")]),e._v(" "),a("li",[e._v("Setup unit tests with Karma + Mocha? (Y/n) 是否安装单元测试，我选择安装y回车")]),e._v(" "),a("li",[e._v("Setup e2e tests with Nightwatch(Y/n)? 是否安装e2e测试 ，我选择安装y回车")])]),e._v(" "),a("p",[e._v("回答完毕后就开始构建项目了。")]),e._v(" "),a("blockquote",[a("p",[e._v("② 配置完成后，可以看到目录下多出了一个项目文件 yourproject，然后cd进入这个文件夹：\n安装依赖："),a("code",[e._v("npm install")])])]),e._v(" "),a("h3",{attrs:{id:"完事了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完事了"}},[e._v("#")]),e._v(" 完事了")]),e._v(" "),a("p",[e._v("运行输入"),a("code",[e._v("npm run dev")])]),e._v(" "),a("h4",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("vue init webpack yourproject\n")])])]),a("p",[e._v("一路回车到底")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("cd yourproject\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("npm install\n")])])]),a("p",[e._v("搞定")])])}),[],!1,null,null,null);t.default=s.exports}}]);