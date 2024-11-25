 
 const express =require('express')

 const cors= require('cors')

 require('dotenv').config()

  const connectDB =require('./config/db.js')

  const router= require('./routes/index.js')

  const cookieParser = require('cookie-parser')
   const FRONTEND_URL="https://rbac-5oerkn1wg-rakesh-kushwahas-projects.vercel.app"
 const app = express()
 app.use(cors({
    origin:FRONTEND_URL,
    credentials:true,
 }))
 app.use(express.json())
 app.use('/api',router)
 app.use(cookieParser());

 const PORT = 8080 || process.env.PORT

 connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('listening on port')
     })
 })

 