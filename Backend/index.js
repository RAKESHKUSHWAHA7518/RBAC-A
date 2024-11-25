 
 const express =require('express')

 const cors= require('cors')

 require('dotenv').config()

  const connectDB =require('./config/db.js')

  const router= require('./routes/index.js')

  const cookieParser = require('cookie-parser')
   const FRONTEND_URL="http://localhost:3000"
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

 