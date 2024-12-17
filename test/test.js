const autocannon = require("autocannon");

const url = ["http://localhost:3000" , "http://localhost:3000/stress-test"];
const duration = 30;

url.forEach(url => {
    const instance = autocannon({
        url,
        duration,
    },(err , result) => {
        if(err) {
            console.log("Error" , err);
        }
        else {
            console.log(`URL: ${url}`);
            console.log("No. of requests: " , result.requests.total);
            console.log("Duration (Seconds): " , result.duration);
        }
    });
    
    autocannon.track(instance , {renderResultsTable : false });
})