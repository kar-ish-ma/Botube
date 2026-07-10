import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
const registerUser =asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"ok"
    })
    //get user details from frontend
    //validation-not empty 
    //check if user already exists: username,email
    //check if files exists avatar images
    //upload them to cloudinary ,avatar
    // create user object - create entry in db 
    //remove password and refresh token foeld response
    //check for user creation
    //return res 
    // const{fullName,email,username, password}=req.body
    // console.log("email",email)

})

export {registerUser};