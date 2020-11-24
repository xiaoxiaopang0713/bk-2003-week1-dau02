// 1,导入http模块
const http = require('http');
const url = require('url');

// 2，创建web实例
const server = http.createServer();

// 3,监听request请求
server.on('request' , (req,res) => {
    // 3-1 解析url中query
    let {query} = url.parse(req.url,true);
    console.log(query);
})

server.listen(8080,() => {
    console.log('http://127.0.0.1:8080?id=1&age=18');
})

