import fs from "fs"

const writer = fs.createWriteStream("target.log")

writer.write("Edwin\n");
writer.write("Seto\n");
writer.write("Setiawan");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data",(data)=>{
    console.log(data.toString());
});