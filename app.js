import 'dotenv/config'
import express from "express"
import ConnectDB from './src/Config/db.js'
import cors from 'cors'
import userRoutes from './src/Routes/UserRoutes.js'
import bookRoutes from './src/Routes/productRoute.js'

const app = express()
const PORT=3000
app.use(express.json());
ConnectDB()
app.use(cors())




app.use('/api',userRoutes)

app.use('/api',bookRoutes)











app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})