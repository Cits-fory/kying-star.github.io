(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{598:function(t,s,a){"use strict";a.r(s);var n=a(5),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript入门"}},[t._v("#")]),t._v(" Typescript入门")]),t._v(" "),a("h4",{attrs:{id:"javascript-的超集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-的超集"}},[t._v("#")]),t._v(" "),a("strong",[t._v("JavaScript 的超集")])]),t._v(" "),a("p",[t._v("​\t\tTypescript是javascript的超集，ts对js的语法进行了加强和拓展，引入了静态和类等概念。这使ts在中大规模的项目中有极大的优势。")]),t._v(" "),a("h4",{attrs:{id:"开始使用ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始使用ts"}},[t._v("#")]),t._v(" "),a("strong",[t._v("开始使用ts")])]),t._v(" "),a("h5",{attrs:{id:"安装-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-typescript"}},[t._v("#")]),t._v(" 安装 TypeScript")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install -g typescript\n")])])]),a("h5",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),a("blockquote",[a("p",[t._v("在新建的项目目录下新建src文件夹，在文件夹下新增index.ts")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("│\n└─src\n        index.ts\n")])])]),a("h5",{attrs:{id:"npm将目录初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm将目录初始化"}},[t._v("#")]),t._v(" npm将目录初始化")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm init\n")])])]),a("h5",{attrs:{id:"初始化ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化ts"}},[t._v("#")]),t._v(" 初始化TS")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tsc --init\n")])])]),a("p",[t._v("上面的操作做完之后你会发现项目目录变成了这个样子")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("│  package.json\n│  tsconfig.json\n│\n└─src\n        index.ts\n")])])]),a("p",[t._v("其中"),a("strong",[t._v("tsconfig.json")]),t._v("就是ts最重要的配置文件")]),t._v(" "),a("p",[t._v("这里贴上一个常用配置")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定 ECMAScript 目标版本: 'ES5'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commonjs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moduleResolution"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选择模块解析策略")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"experimentalDecorators"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用实验性的ES装饰器")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowSyntheticDefaultImports"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许从没有设置默认导出的模块中默认导入。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sourceMap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 ts 文件编译成 js 文件的时候，同时生成对应的 map 文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用所有严格类型检查选项")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在表达式和声明上有隐含的 any类型时报错")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alwaysStrict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以严格模式检查模块，并在每个文件里加入 'use strict'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"declaration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成相应的.d.ts文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"removeComments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除编译后的所有的注释")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noImplicitReturns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不是函数的所有返回路径都有返回值时报错")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"importHelpers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从 tslib 导入辅助工具函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定要包含在编译中的库文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typeRoots"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules/@types"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rootDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("                                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要编译的ts文件一个*表示文件匹配**表示忽略文件的深度问题")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/**/*.ts"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exclude"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.test.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h5",{attrs:{id:"添加npm命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加npm命令"}},[t._v("#")]),t._v(" 添加npm命令")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tsc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build:w"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tsc -w"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听文件，有变动即编译")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[t._v("#")]),t._v(" hello world")]),t._v(" "),a("p",[t._v("在index.ts中添加")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayhi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayhi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//hello world")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayhi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//sayhi({name:'lqx'}) 类型“{ name: string; }”的参数不能赋给类型“string | number”的参数。")]),t._v("\n\n")])])]),a("p",[t._v("使用编译命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm run build\nor\ntsc\n")])])]),a("p",[t._v("将ts编译成js，即可")])])}),[],!1,null,null,null);s.default=r.exports}}]);