// 1,导入
const http = require('http');
const fs = require('fs');
const path = require('path');
// 2,创建web实例对象
const server = http.createServer();
// 3,监听request请求
server.on('request' , (req,res) => {
    // 3-1获取浏览器地址栏地址
    let pathname = req.url;
    console.log(pathname);
    // 3-2 判断，如果是根目录/  ，也就是index.html  ,如果不是，就照常写获取到的地址
    pathname = pathname === '/' ? '/index.html' : pathname;
    // 3-3，解决浏览器中会出现一个小图标问题，浏览器中会默认有一个，
    // 找不到图标执行的代码
    if( pathname !== '/favicon.ico' ){
        // 3-4 定义一个变量，存储路径拼接
        let filename = path.join(__dirname,'public',pathname);
        fs.readFile(filename,(err,data) => {
        if(err){
            res.statusCode = 500;
            res.end('server internal error');
        }else{
            res.end(data);
        }
    })
    }
    // 读取文件
    

})
// 4,启动
server.listen(8080,() => {
    console.log('http://127.0.0.1:8080');
})