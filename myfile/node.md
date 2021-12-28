### 命令行
1. 检查版本 node -v
2. 运行单个脚本 node xx.js
3. 安装依赖包  npm install xx 简写 npm i xx  
    npm i 直接安装package.json这种全部依赖包
4. 删除包 npm uninstall xx 简写 npm un xx
5. 安装阿里镜像包  
    npm install cnpm -g --registry=https://registry.npm.taobao.org
### 模块
1. 全局模板  
    1. 全局可访问的模板 不需要显式引用  
    2. process.env 全局环境  
    3. __dirname   当前访问路径
2. 系统模块  
    1. 使用require加载node提供的模板  
    2. 使用require加载模块按照下面的顺序查找  
        参数中写明的路径  
        项目路径下node_modules目录  
        node安装目录下node_modules目录
    4. let path = require('path');  
    5. let fs = require('fs');
    6. let http = require('http');
    7. let url = require('url');
    8. let querystring = require('querystring');
3. 自定义模板
    1. 