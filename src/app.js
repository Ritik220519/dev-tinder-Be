const express = require('express');
const app = express();

app.get("/user", (req , res)=>{
    res.send({name: "Ritik" , lastName : "srivastava"})
})
app.post("/user", (req , res)=>{
    // saving data to the database
    res.send("Data has been saved")
})
app.delete("/user", (req , res)=>{
    
    res.send("Data deleted successfully")
})
app.use("/hello" , (req , res)=>{
    res.send("hello , hello , hello")
});
app.use("/test" , (req , res)=>{
    res.send("hello test test test")
});
app.use("/namaste" , (req , res)=>{
    res.send("Namaste dosto")
});
// app.use("/" , (req , res)=>{
//     res.send("hello from the server side")
// });

app.listen(3000 , ()=>{
    console.log("server is successfully running on port 3000");
})