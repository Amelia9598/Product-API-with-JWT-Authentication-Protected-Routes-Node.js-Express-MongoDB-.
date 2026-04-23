import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import {getBooks} from '../Controller/productController.js';



const Router= express.Router()

Router.get('/books',authMiddleware,getBooks)




export default Router