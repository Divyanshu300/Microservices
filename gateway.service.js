const express = require("express");
const proxy = require("express-http-proxy");//AGAR KISI URL KO KOI ACCESS KRNA CHAHEGA TO YE USKO REDIRECT KRR DETA HAI USKE SERVER PRR

const app = express();


app.use("/stress-test" , proxy("http://localhost:3002"));//AGAR KOI "/stress-test" WAALE ROUTE KO ACCESS KREGA TOH WOH REDIRECT HO JAYEGA TO {http://localhost:3002}
app.use("/" , proxy("http://localhost:3001"));//AGAR KOI "/" WAALE ROUTE KO ACCESS KREGA TOH WOH REDIRECT HO JAYEGA TO {http://localhost:3001}
                    //JAROORI NHI HAI KI EK HI MACHINE MEIN DONO CHALE THEN WE CAN USE PORT FORWARDING
                    //DOOSRE LAPTOP MEIN CHAA KRR USS PORT KO FORWARD KRRDO AND USKA URL YHAA PASTE KRR DO

app.listen(3000 , (req,res) => {
    console.log(`Server running at PORT : ${3000}`)
});