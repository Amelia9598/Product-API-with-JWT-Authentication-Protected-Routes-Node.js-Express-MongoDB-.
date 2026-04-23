import { login, register } from "../Controller/UserController.js";
import express from 'express'

const Zubair = express.Router()


Zubair.post('/register',register)
Zubair.post('/login',login)



export default Zubair