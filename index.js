const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port=9000;

const data = [{
    name:"akshay",
    age:23,
},
{
    name:"Ram",
    age:24,
},{
    name:"Bob",
    age:27,
},
{
    name:"Alice",
    age:19,
},
{
    name:"form server",
    age:100
}];

app.get('/', ( req, res)=>{
    res.send("<h1>Hi There...</h1>");
});

app.get('/about', ( req, res)=>{
    res.send('About us section...');
});

app.get('/user', ( req, res)=>{
    // res.send('List of users');
    res.json(data);
});

app.listen(port,()=>{
    console.log("running on port 9000")
} )
