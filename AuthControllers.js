const User = require("./models/User");
const bcrypt = required("bcrypt");
const jwt = required("jsonwebtoken");

//signup route

const signup = async(req,res)=>{
    const {email,password,name}= req.body;
    try{
        let user = await User.findOne({email});
        if(user){ 
            return res.status(400).json({success:false, message: "Please Login"});

        }
        const securePassword = await bcrypt.hash(password, 10);
        user =await User.create({
            name,
            email,
            password:securePassword,
        });

        await user.save();

        return res.status(201).json({ success: true, message: "Signup Successful"})

    }

    catch(error)
{
return res.status(500).json({ success : false, message: error.message})
}
};

// Login Route

const login = async (req,res) =>{
    const {email,password} = req.body;

    try{

        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false, message:"Please Sign Up"});
        };

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({success:false, message:"Invalid Credentials"}); 
        };

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{
            expiresIn: "1h"
        });

        res.cookie("token", token, {
            httpOnly : true,
            secure : true,
            sameSite: "none"
        }).json({success:true, message: "Login Successful"})
    }

    catch(error){
        return res.status(500).json({success:false, message:error.message})
    }
};


//Logout route

const logout = async (req,res)=> {
  try{
    res.clearCookie("token").json({ success:true, message:"Log Out"})

  }
  catch(error){
    return res.status(500).json({success:false, message:error.message})
  }
};

//get user route

const getuser = async (req,res)=>{

    try{
       let user = await User.findById(reqId).select("-password");

       if (!user){
        return res.status(400).json({success:false, message: " User Not Found"})
       }
    }
    catch(error){
        return res.status(500).json({success:false, message: error.message})
    }
}
