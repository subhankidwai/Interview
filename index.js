// Create web server using http--
// const http = require("http")
// const app = http.createServer((req, res)=>{
//     res.write("Hello");
//     res.end();
// }).listen(3000,()=>{
//     console.log("Server running at port 3000");
// })

// -----------------Example using Express of get and post method----------------

// const express = require("express")

// const app = express();

// app.get("/", (req, res)=>{
//     res.send("Server running using express")
// })

// app.post("/signup", (req, res)=>{
//     res.send("sign-up page")
// })

// app.listen(8080, ()=>{
//     console.log("port is running");
// })

// -------------Routing using framework and middleware----------------------------

// const express = require("express");
// const app = express()

// const middleware1 = (req, res, next) => {
//     console.log("m1 is running");
//     next();
// }

// const middleware2 = (req, res, next) => {
//     console.log("m2 is running");
//     next()
// }

// app.use(middleware1)
// app.use(middleware2)

// app.get('/',(req, res)=>{
//     res.send("Welcome Page")
// })

// app.post('/login', middleware1, (req, res)=>{
//     res.send("This is the login page")
// })

// app.post('/signup', middleware2, (req, res)=>{
//     res.send("This is the signup page")
// })

// app.listen(4000,()=>{
//     console.log("port is running");
// })

// --------------------------CORS--------------------------

// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors({
//     origin:"*"
// }))

// app.get("/data", (req, res) => {
//     res.json([{
//         id:1,
//         "name":"akarsh gupta",
//         "email":"ak@gmail.com"
//     },

//     {
//         id:2,
//         "name":"Shubham Kumar",
//         "email":"sk@gmail.com"
//     }
//     ])
// }).listen(8080)

// ------------------------------bcrypt-----------------------------

// const express = require("express");

// const app = express();

// const bcrypt = require("bcrypt");

// // const saltRounds = 10;
// const salt = await bcrypt.genSalt(10)

// const password = "admin123";
// const hashedpassword = await bcrypt.hash(password, salt);

// const isMatch = await bcrypt.compare(password, hashedpassword)

// -------------Example: for hashing the password--------------------

// const express = require("express");
// const bcrypt = require("bcrypt");
// const app = express();

// app.use(express.json())

// app.post("/login", async(req, res)=>{
//     const {email, password} = req.body;
     
//         const hashedpassword = await bcrypt.hash(password, 10);
//         res.status(200).send({email, hashedpassword})
// })

// app.listen(8080, ()=>{
//     console.log("Server is running")
// })


// ---------------------Sign up and Login API----------------------

// const express = require("express")
// const bcrypt = require("bcrypt");
// const app = express();

// app.use(express.json())
// const arr=[];
// app.post("/signup", async(req, res)=>{
//   const details = req.body;
//   const hashpassword = await bcrypt.hash(details.password, 10)
//   const obj={
//     email:details.email,
//     password:hashpassword
//   }
//   arr.push(obj)
//   res.send(arr)
// })

// app.post("/login", async(req,res)=>{
//   const userdetails = req.body;
//   // console.log(hashpassword)
//   arr.forEach(async(data)=>{
//     const hashpassword = await bcrypt.compare(userdetails.password, data.password)
//     if (!hashpassword){
//       res.send("user not valid")
//     }
//     else {
//       res.send("user valid")
//     }
//   })
//   // res.send("done")
// })

// app.listen(3010,()=>{
//   console.log("server is running");
// })

// ---------------------login API--------------------


const ex = require("express")
const jwt = require("jsonwebtoken")
const app = ex()
const secretkey = "akaka"

app.post("/logins", (req, res) => {
    const user = [
        {
          id: 1,
        username: "akarsh",
        email: "ak@gmail.com"
        },

        {
          id:2,
          username:"dfxghb",
          email:"dghbhzdgh"
        },

    ]
    jwt.sign({ user }, secretkey, { expiresIn: "300s" }, (err, token) => {
        res.json({
            token
        })
    })
})
app.post("/profile", verifytoken, (req, res) => {
    let verify = jwt.verify(req.token, secretkey)
    if (!verify){
      res.send("token not valid")
    }
    else {
      res.send(verify)
    }
    console.log("profile")
})

function verifytoken(req, res, next) {
    const berare = req.headers["authorization"];
    if (typeof berare !== undefined) {
        const token = berare.split(" ")[1]
        req.token = token;
        next();
    } else {
        res.send({
            result: "token is not valid"
        })
    }
}
app.listen(8080, () => {
    console.log(" server is running")
})

// ###########################################################################################################


// const express = require("express")
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// const app = express()
// app.use(express.json())
// const saltround = 10;
// const secretkey = "Prepbytes"

// const arr = [];

// const middleware = (req, res, next)=>{
//   const token = req.headers["authorization"];
//   if (typeof token!==undefined){
//     const tokens = token.split(" ")[1]
//     jwt.verify(tokens, secretkey, (err, authdata)=>{
//       if(err){
//         res.send(err)
//       }
//       res.send({
//         authdata
//       })
//     })
//   }
//   next();
// }

// app.post("/register", async(req,res)=>{
//   const userdetails = req.body;
//   arr.find(async(items)=>{
//     if (items.email==userdetails.email){
//       res.send("user already exists")
//     }
//     const hashpassword = await bcrypt.hash(userdetails.password, saltround)
    
//     let obj = {
//       email:userdetails.email,
//       password:hashpassword
//     }
//     arr.push(obj)
//     res.send("User Registered Successfully!!")
//   })
// })

// app.post("/login", async(req, res)=>{
//   const userdetails = req.body;
//   const useremail = req.body.email;
//   arr.find(async(items)=>{
//     if(items.email==userdetails.email){
//       const validate = await bcrypt.compare(items.password, userdetails.password)
//       if(!validate){
//         res.send("user password is wrong")
//       }
//       // res.send("user login successfully!!")
//       jwt.sign({useremail}, secretkey, (err, token)=>{
//         if (err) {
//           res.send(err)
//         }
//         res.send({token:token})
//       })
//     }
//     return res.send("email is not valid")
//   })
// })

// app.get("/authorizedapi", middleware, (req, res)=>{
//   res.send("some data")
// })

// app.listen(8080,()=>{
//   console.log("Server is running");
// })


// -------------------------Regular Class----------------

// const express = require("express")
// const app = express()

// app.use(express.json())

// const userData = [];

// app.post("/signup", (req, res) => {
//   const userInfo = req.body;
//   if (userInfo.email==null ||
//       userInfo.password==null)
//       {
//         res.send("please fill all inputs") 
//         return;
//       }
//   console.log(userInfo)
//   userData.push(userInfo)
//   res.send("register successfully")
   
// })

// app.post("/login", (req, res) => {
//   const loginInfo = req.body;
//   let userFound = false;
//   for (const userInfo of userData) {
//     if (userInfo.email === loginInfo.email &&
//       userInfo.password === loginInfo.password
//       ) {
//         userFound = true;
//         break;
//       }
//   }

//   if (userFound) {
//     res.send("logged in successfully")
//   }
//   else {
//     res.send("wrong email or password")
//   }
// })

// app.listen(8080)