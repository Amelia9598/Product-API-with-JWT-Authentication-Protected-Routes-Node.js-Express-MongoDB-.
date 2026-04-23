import jwt from 'jsonwebtoken'


const isLoggedIn = (req, res, next) => {
    
    try {
        if (req.headers.authorization.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1]
        const UserData = jwt.verify(token, process.env.JWT_SEC)
        req.user = UserData


        next();



    }else{
        res.send('You are not authenticated')
    }

    } catch (error) {
        res.send('Invalid token',error)
    }


}


export default isLoggedIn
