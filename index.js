const express = require("express");
const morgan = require("morgan");


const app = express();
app.use(morgan("dev"))

//MONOLITH SERVER -> YHAA PRR SAARE SERVICES EK HI JAGAH PRR CHALTE HAI , YE SCALING MEIN SHI NHI REHTA

//MICROSERVICES -> ISME HRR SERVICE KO EK ALAG ALAG SERVER PRR HOST KRNA HOTA HAI ,
// (ALAG ALAG SERVICES CREATE KRR DENA) FIR IN SAARI SERVICES KO PARALLELLY EK SAATH CHALAA DETE HAI

app.get('/' , (req , res) => {
    for(let i = 0 ; i < 10000000000 ; i++) {

    }
    
    res.send('Hello world');
});

app.get('/stress-test' , (req , res) => {
    for(let i = 0 ; i < 10000000000 ; i++) {

    }

    res.send('Hello world');
});

app.listen(3000 , (req,res) => {
    console.log(`Server running at PORT : ${3000}`)
});