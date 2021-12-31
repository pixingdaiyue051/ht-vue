### 命令行
1. 检查版本 node -v
2. 运行单个脚本 node xx.js
3. 安装依赖包  npm install xx 简写 npm i xx  
    npm i 直接安装package.json这种全部依赖包
4. 删除包 npm uninstall xx 简写 npm un xx
5. 安装阿里镜像包  
    npm i cnpm -g --registry=https://registry.npm.taobao.org
6. npm i安装时安装的是最新的包 可以使用@指定具体的版本号  
    npm i moment@2.22.2
7. 初始化 npm init -y 在项目根目录下生成package.json
### 模块
1. 全局模板  
    1. 全局可访问的模板 不需要显式引用  
    2. process.env 全局环境  
    3. __dirname   当前访问路径
    4. __filename   当前访问文件路径
2. 系统模块  
    1. 使用require加载node提供的模板
    2. 使用require加载模块按照下面的顺序查找  
        参数中写明的路径  
        项目路径下node_modules目录  
        node安装目录下node_modules目录
    4. const path = require('path');
    5. const fs = require('fs');
    6. const http = require('http');
    7. const url = require('url');
    8. const querystring = require('querystring');
3. 自定义模板
    1. 自己编写js
    2. 每一个js文件都有一个内置的module对象 使各个js文件之间相互隔离和互相传递引用
    4. 使用require加载module时得到的就是module的exports对象 且永远以模块文件内的module.exports对象为准
4. 第三方模块(包)  
    1. 其他个人或团队编写通用模块
    2. 基于系统模块内置API编写的更高级的通用的API
    3. 版本号意义
        1. 第一位 大版本号 标识基础架构
        2. 第二位 功能版本号 标识增加了某些功能
        3. 第三位 bug修改版本号 标识某功能版本下的某bug修复了
        4. 版本号提升规则  
            前一位版本号增加了 当前版本号需要归0
### 项目目录
1. node_modules  
    存放当前项目依赖的包
2. package-lock.json   
    记录下载的包的名字 版本号 下载地址