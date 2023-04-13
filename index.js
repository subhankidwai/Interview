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

const express = require("express");

const app = express();

const bcrypt = require("bcrypt");

// const saltRounds = 10;
const salt = await bcrypt.genSalt(10)

const password = "admin123";
const hashedpassword = await bcrypt.hash(password, salt);

const isMatch = await bcrypt.compare(password, hashedpassword)

// -------------Example: for hashing the password--------------------

// const express = require("express");
// const bcrypt = require("bcrypt");
// const app = express();

// const saltRounds = 10;

// app.post("/login", (req, res)=>{
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;

//     bcrypt.hash(password, saltRounds, (err, encryptpassword)=>{
//         if (err) {
//             res.sendStatus(401);
//         }
//         else {
//             res.send(encryptpassword)
//         }
//     })
// })

// app.listen(8080, ()=>{
//     console.log("Server is running")
// })

