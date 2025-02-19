const adminAuth = (req,res , next) =>{
    const token = "xyzvbnm";
    const isAdminAuthorized = token === "xyzvbnm";
    if(! isAdminAuthorized){
        res.status(401).send("unauthorized")
    }else{
        next();
    }
}

const userAuth = (req,res , next) =>{
    const token = "xyzvbnm";
    const isAdminAuthorized = token === "xyzvbnm";
    if(! isAdminAuthorized){
        res.status(401).send("unauthorized")
    }else{
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth,
}