require("dotenv").config();
// const { promise } = require("bcrypt/promises");
const jwt = require("jsonwebtoken")

const verifyToken = (token)=>{
    return new Promise((resolve,reject) => {
        jwt.verify(token, process.env.secretkey, (err,decoded) => {
            if(err) return reject(err)
    
            return resolve(decoded)
        });
    })
}

const authenticate = async (req,res,next)=>{
    console.log("trial auth");
    var tokendetails = req.headers["x-access-token"];
    console.log(req.headers["x-access-token"]);
    if(!tokendetails)
    return res.status(400).send({message : "Authorization token not found or incorrect"})

    if(!tokendetails.startsWith("Bearer "))
    return res.status(400).send({message : "Authorization token not found or incorrectttt"})

    const token = tokendetails.trim().split(" ")[1];

    let decoded

    try{
        decoded = await verifyToken(token)
    }
    catch(err){
        console.log(err)
        return res.status(400).send({message : "Authorization token not found or incorrectttttt"})
    }

    console.log("decoded");
    console.log(decoded);
    req.userId = decoded.user._id
    req.mail = decoded.user.email

    return next();

}

module.exports =authenticate;