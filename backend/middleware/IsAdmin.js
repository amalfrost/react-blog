import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'

const isAdmin = async (req, res, next) => {
    try {
        const getToken = req.cookies.token
        if (!getToken) {
            return res.status(404).json({ success: false, message: 'unauthorized' })

        }
        console.log(getToken)
        const decodedToken = jwt.verify(getToken, process.env.JWT_SECRET)
        console.log('decoded', decodedToken)

        const User = await UserModel.findById(decodedToken.userId)
        if (!User) {
            return res.status(403).json({ success: false, message: 'User is not found' })

        }

        if (User.role != 'admin') {
            return res.status(403).json({ success: false, message: 'user is not admin' })

        }

        next()

    } catch (err) {
        console.log(err)
                        return res.status(500).json({success:false, message:'isr'})


    }
}

export { isAdmin }