// 1，
const http = require('http');
const querystring = require('querystring');
// 2,
const server = http.createServer();
// 3,
server.on('request',(req,res) => {
    // 3-1创建新数组，一会放数据，post传参是分成好几个，然后最后再拼接起来
    let arr = [];
    // 3-2 req设定监听
    req.on('data',buffer => {
        arr.push(buffer);
    })
    req.on('end',() => {
        // 将数组中多个十六进制转成一个整体的十六进制
        let buffer = Buffer.concat(arr);
        // 将arr中十六进制转化为字符串
        let str = buffer.toString();
        // 将字符串转化为对象
        let obj = querystring.decode(str);
        console.log(obj);
    })


})
// 4,
server.listen(8080,() => {
    console.log('http://127.0.0.1:8080');
})


