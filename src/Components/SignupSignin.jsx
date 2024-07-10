import React, { useState } from 'react';
import { UserRound, Mail, Lock } from 'lucide-react';

const SignupSignin = () => {
    const[action, setAction] = useState("Sign In")
  return (
    <>
      <div className='flex flex-col m-auto mt-52 pb-8 bg-white w-[600px]'>
        <div className='flex flex-col items-center gap-2 w-full mt-8'>
            <div className='font-bold text-[#3c009d] text-[48px]'>{action}</div>
            {/*Underline*/}
            <div className='w-16 h-[6px] bg-[#3c009d] rounded-lg'></div>
        </div>

        <div className='flex flex-col mt-14 gap-6'>
            <div className='flex items-center m-auto w-[480px] h-20 bg-[#eaeaea] rounded'>
                <UserRound className='mx-8 my-0'/>
                <input 
                    type="text" 
                    placeholder='Name'
                    className='h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] text-[19px]' 
                />
            </div>
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
            <div className='pl-16 mt-7 text-[#797979] text-lg'>
                Lost PassWord ? <span className='text-[#4c00b4] cursor-pointer'>Click Here !</span>
            </div>
            <div className='flex gap-8 mx-auto my-16'>
                <div className={action === "Sign In" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "Submit"} onClick={()=>{setAction("Sign In")}}>Sign In</div>
            </div>
        </div>
      </div>

    </>
  )
}

export default SignupSignin;
