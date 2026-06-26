
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import {   LuEye } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import  axios from "axios"
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth} from "../firebase"
import { FaHandPointRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
function SignIn() {
  const primaryColor="#ff4d2d";
   //const hoverColor="#e64323";
  const bgColor="#fff9f6";
 //const borderColor="#ddd";
  const [showPassword ,setShowPassword]=useState(false)

  
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    //const navigate = useNavigate();
const dispatch = useDispatch();
    const serverUrl="http://localhost:8000";

          const handleSignIn=async()=>{
            try
            {
               const result=await axios.post(`${serverUrl}/api/auth/signin`,{
            
                email,
                password,
               

               },{
                withCredentials:true
               })
                console.log("API Response =", JSON.stringify(result.data, null, 2));  
                dispatch(setUser(result.data.user || result.data));           
                navigate("/home");
        
                 

               alert('SingIn is successfully')

            }
             catch(error){
  console.log("Status:", error.response?.status);
  console.log("Data:", error.response?.data);
  console.log("Message:", error.response?.data?.message);
  
}

        }
        const handleGoogleAuth=async ()=>{
   const provider= new GoogleAuthProvider()
   const result=await signInWithPopup(auth,provider)
   console.log(result)
    dispatch(
    setUser({
      fullName: result.user.displayName,
      email: result.user.email,
      role: "user", 
    })
  );

    navigate("/home");
     alert('SingIn is successfully')
}
    
  return (
    <div className='min-h-screen  flex items-center  justify-center p-4 ' style={{backgroundColor:bgColor}}>
        <div className={'bg-white rounded-xl shadow-lg w-full max-w-md p-8  border border-[${borderColor}]'} style={{
          border:'1px solid ${borderColor}'
            }}>
          <h1 className={'text-6xl font-bold mb-4 text-[primaryColor]'} style={{ color:primaryColor, fontWeight: 'bold', fontSize: '1.5rem'}}>Vingo</h1>
            <p className='text-gray-600 mb-8'>
              SignIn  your account  to get starrted with delicios food delivers

            </p>
            
            {/* Email*/}
            <div className='mb-4'>
              <label htmlFor="Email" className='block text-gray -700 font font-medium mb-1'>Enter your email </label>
              <input type="text" className='w-full border rounded-lg px-3 py-2 focus:outline-none' placeholder='Enter your email' style={{ border:'1px  solid ${borderColor}' }}
                onChange={(e)=>setEmail(e.target.value)} value={email} />

            </div>
          
             {/* Password*/}
            <div className='mb-4'>
              <label htmlFor="Password" className='block text-gray -700 font font-medium mb-1'>Password </label>
              <div className='relative flex items-center'>
                {/* input */}
              <input type={showPassword ? "text" : "password"}
               className='w-full border rounded-lg px-3 py-2 focus:outline-none'
                placeholder='Enter your password' 
                style={{ border:'1px  solid ${borderColor}' }} 
                  onChange={(e)=>setPassword(e.target.value)} value={password}/>

                {/* eye icon */}
              <button 
              type="button"
               className='absolute right-3 cursor-pointer top-between text-gray-600'
               onClick={()=>setShowPassword(prev=>!prev)}>
                {showPassword?<LuEye />:<FaRegEyeSlash />}
              </button>
              
              </div>
              <div className='text-right mb-4 cursor-pointer text-[#ff4d2d]' onClick={()=>navigate("/forgot-password")}>
                Forgot password
              </div>
            </div>
             
           

              {/* Sign up button */}
              <button className={'w-full py-2 rounded-lg font-semibold transition duration-200 mt-2 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer'} onClick={handleSignIn}>
                
                Sign In
              </button>
         
              {/* Google icon*/}
              <button 
              className="w-full mt-4 flex items-center justify-center gap-3 rounded-lg px-4 py-2.5 border border-gray-500 bg-white text-gray-900 font-medium shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md cursor-pointer active:scale-[0.98]"              
              onClick={handleGoogleAuth}>
                <FcGoogle  size={20} />
                <span> Sign In with Google</span>
              </button>
              <p className='text-center mt-6 cursor-pointer' onClick={()=>navigate("/signup")} >Wellcome to create a new account !
                
                <span className='text-[#8974c1]'style={{ color:'#8974c1'}}> Sign Up</span>

              </p>
              <p className='text-right mt-6 cursor-pointer flex justify-end' onClick={()=>navigate("/home")} >
                 <button className='text-[#8974c1] px-4 py-1.5 rounded-full border border-black flex items-center gap-1.5'style={{ color:'#8974c1 '}} > Skip <FaHandPointRight /> </button>
             </p>
        
        </div>
        
    </div>
  )
}

export default SignIn
