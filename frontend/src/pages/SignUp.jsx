
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import {  LuEye } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth} from "../firebase"
import  axios from "axios"
import { FaHandPointRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";

function SignUp() {
  const primaryColor="#ff4d2d";
  // const hoverColor="#e64323";
  const bgColor="#fff9f6";
 // const borderColor="#ddd";
  const [showPassword ,setShowPassword]=useState(false)

  const [role, setRole] = useState("user");
  const navigate=useNavigate()
    const[fullName,setFullname]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[mobile,setMobile]=useState("")

    const dispatch = useDispatch();

     const serverUrl="http://localhost:8000";

          const handleSignUp=async()=>{
            try
            {
               const result=await axios.post(`${serverUrl}/api/auth/signup`,{
                fullName,
                email,
                password,
                mobile,
                role

               },{
                withCredentials:true
               })
              console.log(result.data);
              dispatch(setUser(result.data.user || result.data));
              navigate("/home");
              
              alert('SingUp is successfully')


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
        alert('SingUp is successfully')

}
        
    
  return (
    <div className='min-h-screen flex items-center justify-center p-4 ' style={{backgroundColor:bgColor}}>
        <div className={'bg-white rounded-xl border shadow-lg w-full max-w-md p-8 border-[${borderColor}]'} style={{
          border:'1px solid ${borderColor}'
            }}>
          <h1 className={'text-6xl font-bold mb-4 text-[primaryColor]'} style={{ color:primaryColor, fontWeight: 'bold', fontSize: '1.5rem'}}>Vingo</h1>
            <p className='text-gray-600 mb-8'>
              Create your account  to get starrted with delicios food delivers

            </p>
            {/* Full name*/}
            <div className='mb-4 '>
              <label htmlFor="fullName" className=' block text-gray -700 font font-medium mb-1'>Full Name </label>
              <input type="text" className='w-full border rounded-lg px-3 py-2 focus:outline-none' placeholder='Enter your fullname' style={{ border:'1px  solid ${borderColor}' }} 
              onChange={(e)=>setFullname(e.target.value)} value={fullName}/>

            </div>
            {/* Email*/}
            <div className='mb-4'>
              <label htmlFor="Email" className='block text-gray -700 font font-medium mb-1'>Enter your email </label>
              <input type="text" className='w-full border rounded-lg px-3 py-2 focus:outline-none' placeholder='Enter your email' style={{ border:'1px  solid ${borderColor}' }}
                onChange={(e)=>setEmail(e.target.value)} value={email} />

            </div>
          
            {/* Mobile Number*/}
            <div className='mb-4'>
              <label htmlFor="Mobile-Number" className='block text-gray -700 font font-medium mb-1'>Mobile Number </label>
              <input type="text" className='w-full border rounded-lg px-3 py-2 focus:outline-none' placeholder='Enter your mobile number' style={{ border:'1px  solid ${borderColor}' }} 
                onChange={(e)=>setMobile(e.target.value)} value={mobile}/>

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
            </div>
             {/*  role */}
             <div className='mb-4'>
              <label htmlFor="role" className='block text-gray -700 font font-medium mb-1'>Role</label>
              <div className='relative flex gap-2 items-center'>
               {["user","owner","deliveryBoy"].map((r)=>
              (
                <button 
                  className='flex-1 border rounded-lg px-3 py-2  text-center font-medium transition-colors-colors'
                  onClick={()=>setRole(r)}
                  style={
                    role === r 
                    ?
                    {backgroundColor:primaryColor, color:"white"}
                      :
                      {border:'1px solid ${primaryColor}', color:"#333"}
                  }
                >
                  {r}
                </button>
              ))}
            
              
              </div>
            </div>

              {/* Sign up button */}
              <button className={'w-full py-2 rounded-lg font-semibold transition duration-200 mt-2 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer'} onClick={handleSignUp}>
                Sign Up
              </button>
         
              {/* Google icon*/}
              <button
              className="w-full mt-4 flex items-center justify-center gap-3 rounded-lg px-4 py-2.5 border border-gray-500 bg-white text-gray-900 font-medium shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md cursor-pointer active:scale-[0.98]"                onClick={handleGoogleAuth}>
                <FcGoogle  size={20} />
                <span> Sign Up with Google</span>
              </button>
              <p className='text-center mt-6 cursor-pointer' onClick={()=>navigate("/signin")} >Already have an account ? 
                
                <span className='text-[#8974c1]'style={{ color:'#8974c1'}}> Sign In</span>

              </p>
               <p className='text-right mt-6 cursor-pointer flex justify-end' onClick={()=>navigate("/home")} >
                 <button className='text-[#8974c1] px-4 py-1.5 rounded-full border border-black flex items-center gap-1.5'style={{ color:'#8974c1 '}} > Skip <FaHandPointRight /> </button>
             </p>
        
        </div>
        
    </div>
  )
}

export default SignUp
