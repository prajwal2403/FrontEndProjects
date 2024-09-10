const fs = require("fs");

//fs.writeFile("message1.txt", "Hello  from Shriya Khobragade", (err) => {
//    if (err) throw err;
//    console.log('The file has been saved!');
//});

var data = "Unable to open the file";
fs.readFile("./message1.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})