import mongoose, {Schema} from "mongoose";
import { Jwt } from "jsonwebtoken";
import bcrypt from 'bcrypt'
const userSchema =  new Schema(
    {
        userName: {
            type: String,
            require: true,
            unique: true,
            lowercase:true,
            trim: true,
            index: true,
        },
         email: {
            type: String,
            require: true,
            unique: true,
            lowercase:true,
            trim: true,
            index: true,
        },
         fullName: {
            type: String,
            require: true,
            trim: true,
            index: true,
        },
        avatar: {
            type: String,
            require: true,
        },
        coverImage: {
            type: String,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            require : [true, 'password is require'],
        }, 
        refreshToken: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
    )






userSchema.pre("save",async function(next){
    if(!this.isModifield("password")) return next()
 this.password = bcrypt.hash(this.password, 10);
 next()
})
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.genrateAcessToken = async function(password){
    Jwt.sign(
        {
            _id : this._id,
            email: this.email,
            fullName: this.fullName,
            userName: this.userName,
            
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}
userSchema.methods.refreshAcessToken = async function(password){
       Jwt.sign(
        {
            _id : this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}

export const User = mongoose.model('User' ,userSchema)