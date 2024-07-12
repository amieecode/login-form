import React, { useState } from 'react';
import { UserRound, Mail, Lock } from 'lucide-react';
import FImage from "../assets/Facebook.png";
import GImage from "../assets/Google.png";
import LImage from "../assets/LinkedIn.png";

const SignupSignin = () => {
    const[action, setAction] = useState("Sign In");
    return (
        <>
            <div className='flex flex-col m-auto my-28 pb-6 bg-white w-full max-w-lg px-4 md:px-8'>
                <div className='flex flex-col items-center gap-2 w-full mt-8'>
                    <div className='font-bold text-[#3c009d] text-3xl md:text-4xl'>{action}</div>
                    <div className='w-16 h-1.5 bg-[#3c009d] rounded-lg'></div>
                </div>

                <form className='flex flex-col mt-10 gap-6'>
                    {action === "Sign In" ? null : (
                        <div className='flex items-center m-auto w-full max-w-md h-14 bg-[#eaeaea] rounded px-3'>
                            <UserRound className='mr-3' />
                            <input 
                                type="text" 
                                placeholder='Name'
                                className='h-10 w-full bg-transparent border-none outline-none text-[#797979] text-base' 
                            />
                        </div>
                    )}
                    
                    <div className='flex items-center m-auto w-full max-w-md h-14 bg-[#eaeaea] rounded px-3'>
                        <Mail className='mr-3' />
                        <input 
                            type="email" 
                            placeholder='Email'
                            className='h-10 w-full bg-transparent border-none outline-none text-[#797979] text-base' 
                        />
                    </div>
                    <div className='flex items-center m-auto w-full max-w-md h-14 bg-[#eaeaea] rounded px-3'>
                        <Lock className='mr-3' />
                        <input 
                            type="password" 
                            placeholder='Password'
                            className='h-10 w-full bg-transparent border-none outline-none text-[#797979] text-base' 
                        />
                    </div>

                    {action === "Sign Up" ? null : (
                        <div className='flex justify-between items-center text-[#797979] text-sm mt-2'>
                            <div><input type="checkbox" className='mr-1' /> Remember me</div>
                            <div>Forgot Password? <span className='text-[#4c00b4] cursor-pointer'>Click Here!</span></div>
                        </div>
                    )}
                </form>

                <div className='flex flex-wrap gap-4 mx-auto mt-5'>
                    <button className={`submit ${action === "Sign In" ? "gray" : ""}`} onClick={() => setAction("Sign Up")}>Sign Up</button>
                    <button className={`submit ${action === "Sign Up" ? "gray" : ""}`} onClick={() => setAction("Sign In")}>Sign In</button>
                </div>

                {action === "Sign Up" ? null : (
                    <>
                        <div className='flex justify-center items-center text-sm text-[#797979] mt-6'>Or Sign Up with</div>
                        <div className='flex justify-center gap-4 mt-4'>
                            <div className='social'>
                                <img src={GImage} alt="Google" className='w-9 h-9 mx-7 mt-2' />
                            </div>
                            <div className='social'>
                                <img src={FImage} alt="Facebook" className='w-8 h-8 mx-8 mt-2' />
                            </div>
                            <div className='social'>
                                <img src={LImage} alt="LinkedIn" className='w-10 h-10 mx-7 mt-1' />
                            </div>
                        </div>
                    </>
                )}

                <div className='flex justify-center text-[#797979] my-5'>
                    {action === "Sign In" ? (
                        <div>I don't have an account? <span className='text-[#4c00b4] cursor-pointer'>Register</span></div>
                    ) : (
                        <div>I have an account! <span className='text-[#4c00b4] cursor-pointer'>Login</span></div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SignupSignin;
