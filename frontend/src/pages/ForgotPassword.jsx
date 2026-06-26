import axios from "axios"

import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
//import { serverUrl } from "..App/"
const serverUrl = "http://localhost:8000";

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const navigate= useNavigate();
  const [otp,setOtp]=useState("");
  const [newpassword,setnewPassword]=useState("")
const [confirmpassword,setConfirmPassword]=useState("")
const handleSendOtp=async()=>  {
  try{
    const result =await axios.post(`${serverUrl}/api/auth/send-otp`,{email},{withCredentials:true})
    console.log(result)
    setStep(2)
  }catch(error) {
  
  console.log("Backend Error:", error.response?.data || error.message)

  }
}
  const handleVerifyOtp=async()=>  {
  try{
    const result =await axios.post(`${serverUrl}/api/auth/verify-otp`,{email,otp},{withCredentials:true})
    console.log(result)
    setStep(3)
  }catch(error){
   console.log("OTP Verification Error:", error.response?.data || error.message)
    }
}
const handleResetPassword=async()=>  {
  if(newpassword !== confirmpassword){
    alert("Passwords do not match!")
    return ;
  }
  try{
    const result =await axios.post(`${serverUrl}/api/auth/reset-password`,{email,newpassword},{withCredentials:true})
    console.log(result)
    navigate("/signin")
  }catch(error){
   console.log("Reset Password Error:", error.response?.data || error.message)

  }
}

  return (
    <div className="flex w-full items-center justify-center min-h-screen p-4 bg-[#fff9f6]">
      <div className="bg-white border rounded-xl shadow-lg w-full max-w-md p-8">
        
        {/* Header Section */}
        <div className=" flex items-center gap-4 mb-6">
          <BiArrowBack size={28} className="text-[#ff4d2d] cursor-pointer" onClick={()=>navigate("/signin")}/>
          <h1 className="text-2xl font-bold text-[#ff4d2d]">Forgot Password</h1>
        </div>

        {/* Step 1: Email Input */}
        {step === 1 && (
          <div>
            <div className="mb-4">
              <label htmlFor="Email" className="block text-black-700 font-medium mb-1">
                Enter your email
              </label>
              <input 
                type="email" 
                id="Email"
                className="w-full border-2 border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:border-[#ff4d2d]" 
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
              />
            </div>
            
              <button className={'w-full py-2 rounded-lg font-semibold transition duration-200 mt-2 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer'} onClick={handleSendOtp}>
                Send Otp
              </button>
         
          </div>
        )}
        {step === 2 &&
         <div>
            <div className="mb-4">
              <label htmlFor="Email" className="block text-gray-700 font-medium mb-1">
                Enter your OTP
              </label>
              <input 
                type="text" 
                id="otp"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#ff4d2d]" 
                placeholder="Enter  OTP"
                onChange={(e) => setOtp(e.target.value)} 
                value={otp} 
              />
            </div>
            
              <button className={'w-full py-2 rounded-lg font-semibold transition duration-200 mt-2 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer'} onClick={handleVerifyOtp} >
                Varify 
              </button>
         
          </div>
        

            }
             {step === 3 &&
         <div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-1">
                Enter New Password
              </label>
              <input 
                type="password" 
                id="newPassword"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#ff4d2d]" 
                placeholder="Enter  NewPassword"
                onChange={(e) => setnewPassword(e.target.value)} 
                value={newpassword} 
              />
            </div>
              <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>
              <input 
                type="password" 
                id="confirmPassword"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#ff4d2d]" 
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)} 
                value={confirmpassword} 
              />
            </div>
            
              <button className={'w-full py-2 rounded-lg font-semibold transition duration-200 mt-2 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer'} onClick={handleResetPassword} >
                Reset Password 
              </button>
         
          </div>
        

            }

      </div>
    </div>
  )
}

export default ForgotPassword