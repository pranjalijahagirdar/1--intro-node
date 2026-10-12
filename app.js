const cl=console.log;

let fname = "John Doe";
cl(fname)

const add = require('./math');
let result = add(10,20);
console.log(result)

const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.send('Hello World !');
});
app.listen(3000,()=>{
    console.log('server is running');
})

