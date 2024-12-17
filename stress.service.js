const express = require("express");
const morgan = require("morgan");

//ISME SAARE "/stress-test" WAALE CHALENGE

const app = express();
app.use(morgan("dev"))

app.get('/' , (req , res) => {
    for(let i = 0 ; i < 10000000000 ; i++) {

    }

    res.send('Hello world');
});

app.listen(3002 , (req,res) => {
    console.log(`Stress service running at PORT : ${3002}`)
});