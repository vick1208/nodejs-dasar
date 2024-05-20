import https from 'https';

const endpoint = "https://01hyax3xb120nf98s5gs7zk75n00-80700a4a0fb8b2700677.requestinspector.com"

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