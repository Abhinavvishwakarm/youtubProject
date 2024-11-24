import { User } from '../models/user.model.js';
import { ApiErrors } from '../utils/ApiError.js';
import { asynchandler} from '../utils/aysnhandler.js'
import { ApiResponse } from '../utils/ApiResponse.js';

const genrateAcessAndRefressToken = async (userId) =>{
  try {
    const user = await User.findById(userId);
    const accessToken = user.genrateAcessToken();
    const refressToken = user.refreshAcessToken();

    user.refressToken = refressToken;
    await  user.save({validateBeforeSave: false })
    return { accessToken, refressToken }; 
  } catch (error) {
    throw new ApiErrors(500, 'something went to wrong while genrating access and refress token')
  }
}
const registerUser = asynchandler( async (req, res) =>{
    // get users details from frontend //
    //validation - not empty //
    // chek if user alredy exisct by using username and  email //
    //chek for image, chaeck for avatar //
    // upload them tp on cloudiaonary //
    // create user object - create entry in db //
    // remove password or refress toen from response //
    // check for users creations //
const  { funllName , email , userName , password} = req.body;

if([funllName , email , userName , password].some((filed)=>{
    filed?.trim() === ""
})
) {
 throw new ApiErrors(400, 'All filed are required '); 
}
 const exsitinguser  =  User.findOne({
    or:[{userName},{email}]
})
if(exsitinguser) {
    throw new ApiErrors(400, ' user alredy exist');
}

const avtarLocationpath = req.files?.avatar[0]?.path;
const coverImageLocationpath = req.files?.covwrImage[0]?.path;
if(!avtarLocationpath) {
    throw new ApiErrors(400, ' avatar file is require ');
}

const avatar = await uploadOnCloudnairy(avtarLocationpath);
const coverImage = await uploadOnCloudnairy(coverImageLocationpath);
if(!avatar) {
  throw new ApiErrors(400, ' avatar file is require ');
}

User.create({
        funllName,
        avatar:avatar.url,
        coverImage: coverImage?.url || '',
        email,
        password,
        userName: userName.toLowerCase(),
    })
  const createUser = await User.findById(user._id).select("-password -refressTokan");
  if(!createUser) {
    throw new ApiErrors(500, 'something went to wrong while creating  registering the  user ');
  }
  return res.status(201).json(
    new ApiResponse(200, createUser, ' user registered successfully')
  )
  })
const loginUser = asynchandler( async(req, res) =>{
 /* 
    req-body//
    userName or Email
    Find tha  User 
    password Check
    access and  refress Token
    send cookies
 */

  const { email, userName, password } = req.body

  if(!userName || !email ){
    throw new ApiErrors(400, 'userName or Password is required');
  }

  const user = await User.findOne({
    $or: [{userName}, {email}]
  })
  if(!user) {
    throw new ApiErrors(400, 'user dones not exist')
  }
  
  const isPasswordValid = await user.isPasswordCorrect(password);
  if(!isPasswordValid) {
    throw new ApiErrors(1, 'invalid user crediential ')
  }

 const { accessToken, refressToken} =  await genrateAcessAndRefressToken(user._id);
 const logginedUser = User.findById(user._id).select("-password -refressToken")

 const options = {
  httpOnly: true,
  secure: true,
 }

 return res
 .status*(200)
 .cookie("accessToken", accessToken, options)
 .cookie("refressToken", refressToken, options)
 .json(
  new ApiResponse(
    200,
    {
      user: logginedUser, accessToken, refressToken
    }
  )
 )

})
export { 
  registerUser,
  loginUser,
};