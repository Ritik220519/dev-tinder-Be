const express = require("express");
const app = express();
const {adminAuth, userAuth} = require("./middleware/authentication");


app.use("/admin" , adminAuth);
app.use("/user" , userAuth);

app.get("/admin/getAllData" , (req,res)=>{

    // const token = "xyzvbnm";
    // const isAdminAuthorization = token === "xyzvbnm"
    // if(!isAdminAuthorization){
    //     res.status(401).send("unauthorized")
    // }else{
      
        res.send("all data sent")
    // }
    

});
app.get("/admin/deleteData" , (req,res) =>{
    // const token = "xyzvbnm";
    // const isAdminAuthorization = token === "xyzvbnm"
    // if(!isAdminAuthorization){
    //     res.status(401).send("unauthorized")
    // }else{
    res.send("data deleted")
    // }
})
app.get("/user/getData" , (req,res) =>{

    res.send("getting data")
   
})

app.listen(7777, () => {
  console.log("server is successfully running on port 7777");
});
