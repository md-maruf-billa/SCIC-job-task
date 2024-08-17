import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-[60vh]'>
            <div className="w-full max-w-md bg-white shadow-lg p-8 space-y-3 rounded-xl ">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block ">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border " />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block ">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border " />
                        <div className="flex justify-end text-xs ">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className='flex w-full justify-center items-center bg-[#00b207] hover:bg-[#1443155d] rounded-full py-2 text-white'>
                         Login
                    </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 "></div>
                    <p className="px-3 text-sm ">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 "></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FcGoogle className='text-3xl'/>
                    </button>
                    
                </div>
                <p className="text-xs text-center sm:px-6 ">Don't have an account?
                    <Link to={"/register"} className="underline ">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;