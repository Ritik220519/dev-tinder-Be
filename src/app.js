const express = require('express');
const app = express();



app.use("/hello" , (req , res)=>{
    res.send("hello , hello , hello")
});
app.use("/test" , (req , res)=>{
    res.send("hello test test test")
});
app.use("/namaste" , (req , res)=>{
    res.send("Namaste dosto")
});

app.listen(3000 , ()=>{
    console.log("server is successfully running on port 3000");
})