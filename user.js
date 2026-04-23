import mongoose from 'mongoose'
import bcrypt, { genSalt } from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
const userSchema  = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true

    }

})
userSchema.pre("save",async function (){

    const salt = await genSalt(10)

    this.password = await bcrypt.hash(this.password,salt)
})

userSchema.methods.comparePassword = async function (password){

   try {
     return await bcrypt.compare(password, this.password)
   } catch (error) {
    console.log(error)
   }
}






const User = mongoose.model("User", userSchema)


export default User