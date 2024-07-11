import React, { useState } from 'react';
import { UserRound, Mail, Lock } from 'lucide-react';
import FImage from "../assets/Facebook.png";
import GImage from "../assets/Google.png";
import LImage from "../assets/LinkedIn.png";

const SignupSignin = () => {
    const[action, setAction] = useState("Sign In")
  return (
    <>
      <div className='flex flex-col m-auto mt-40 pb-8 bg-white w-[600px]'>
        <div className='flex flex-col items-center gap-2 w-full mt-8'>
            <div className='font-bold text-[#3c009d] text-[48px]'>{action}</div>{/*Title*/}
            {/*Underline*/}
            <div className='w-16 h-[6px] bg-[#3c009d] rounded-lg'></div>
        </div>

        <div className='flex flex-col flex-wrap mt-14 gap-6'>
          {action === "Sign In" ?<div></div>: <div className='flex items-center m-auto w-[480px] h-20 bg-[#eaeaea] rounded'>
                <UserRound className='mx-8 my-0'/>
                <input 
                    type="text" 
                    placeholder='Name'
                    className='h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] text-[19px]' 
                />
            </div>}{/*Ternary operator to hide username for Sign in process*/}
            
            <div className='flex items-center m-auto w-[480px] h-20 bg-[#eaeaea] rounded'>
                <Mail className='mx-8 my-0' />
                <input 
                    type="email" 
                    placeholder='Email'
                    className='h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] text-[19px]' 
                />
            </div>
            <div className='flex items-center m-auto w-[480px] h-20 bg-[#eaeaea] rounded'>
                <Lock className='mx-8 my-0' />
                <input 
                    type="password" 
                    placeholder='Password'
                    className='h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] text-[19px]' 
                />
            </div>

            {action === "Sign Up" ? <div></div> : <div className='flex justify-center gap-20 text-[#797979] text-lg'>
                <div className=''><input type="checkbox" className='w-4 h-4 gap-2' /> Remember me</div>
                <div className='flex'> Forgot Password? <span className='text-[#4c00b4] cursor-pointer'>Click Here !</span></div>
            </div> }{/*Ternary operator to hide forgot password from sign up process*/}
        </div>   
            <div className='flex flex-wrap gap-8 mx-auto my-8'>
                <div className={action === "Sign In" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign In")}}>Sign In</div>
            </div>

            <div className='flex justify-center items-center text-lg text-[#797979] '>Or login with</div>
            {/*Social Login*/}
            <div className='flex flex-wrap gap-10 m-auto mt-8'>
                <div className='social'>
                    <img src={GImage} alt="Google" className='w-12 h-12 mx-10 mt-0.5' />
                </div>
                <div className='social'>
                    <img src={FImage} alt="Facebook" className='w-10 h-10 mx-10 mt-2'  />
                </div>
                <div className='social'>
                    <img src={LImage} alt="Google" className='w-12 h-12 mx-10 mt-1.5'  />
                </div>
            </div>

            <div className='flex justify-center pl-4 mx-auto my-8 text-[#797979] gap-1'>
                I don't have an account? <span className='text-[#4c00b4] cursor-pointer'> Register</span>
            </div>
        
      </div>

    </>
  )
}

export default SignupSignin;
