import  mongoose  from "mongoose";

const user = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please enter a username'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'please enter a password'],
    },
    isVerfied: {
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiration: Date,
    verifyToken: String,
    verifyTokenExpiration: Date,
    
})

export default mongoose.model('User', user);


