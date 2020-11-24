// 1,
const express = require('express');
// 2,
const app = express();
// 3,
app.get( '/' , (req,res) => {
    res.send('hello world');
} )

app.get( '/html5' , (req,res) => {
    res.send('2003');
} )

app.post( '/post' , (req,res) => {
    res.send('post');
} )

// 4,
app.listen(8080,() => {
    console.log('http://127.0.0.1:8080');
})