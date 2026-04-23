import bookData from '../data/data.js';

export const getBooks = (req,res)=>{
    res.json(bookData)
}