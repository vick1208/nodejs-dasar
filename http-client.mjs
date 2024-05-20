import https from 'https';

// memakai request catcher
const endpoint = "https://node-basic.requestcatcher.com/"

const request = https.request(endpoint,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Accept" : "application/json",
    }
},(response) =>{
    response.addListener("data",(data)=>{
        console.info(`Receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Eko",
    lastName: "Khannedy",
})

request.write(body);
request.end();