import User from '../Model/user.js'
import jwt from 'jsonwebtoken'


export const register = (req, res) => {
    try {
        const { name, email, password } = req.body

        const newUser = new User({
            name,
            email,
            password
        });

        newUser.save()
        res.send({
            message: "user created successfully",
            user: newUser
        })
    } catch (error) {
        res.send("error aa gaya zubair bhai", error)
    }

}


export const login = async (req, res) => {
    try {

        console.log("hgdsgf")
        const { email, password } = req.body;

        console.log(email)


        const user = await User.findOne({ email })

        console.log("bla bla")

        if (!user) {
            return res.send("user not found")
        }


        console.log("user found")

        const isMatch = await user.comparePassword(password)

        console.log(isMatch)

        if (!isMatch) {
            return res.send("invalid credentials")
        }

        const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email
        },
            process.env.JWT_SEC,
            { expiresIn: "1d" })

        console.log(token)


        res.send({
            message: "login successful",
            token: token
        })







    } catch (error) {
        res.send("error aa agay zubair bhai bal bla", error)
    }
}
